import express from 'express'
import axios from 'axios'
import crypto from 'crypto'
import memoryStorage from './memoryStorage.js'
import { URLSearchParams } from 'url'

const router = express.Router()

function base64URLEncode(str) {
  return str.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function sha256(buffer) {
  return crypto.createHash('sha256').update(buffer).digest()
}

router.get('/start', (req, res) => {
  const state = crypto.randomUUID()
  const codeVerifier = base64URLEncode(crypto.randomBytes(32))
  const codeChallenge = base64URLEncode(sha256(codeVerifier))

  memoryStorage[state] = { codeVerifier }

  const authorizeUrl = `${process.env.ENEDIS_AUTHORIZE_URL}?` +
    new URLSearchParams({
      client_id: process.env.ENEDIS_CLIENT_ID,
      response_type: 'code',
      redirect_uri: process.env.ENEDIS_REDIRECT_URI,
      scope: process.env.ENEDIS_SCOPE,
      state,
      code_challenge: codeChallenge,
      code_challenge_method: 'S256',
    })

  res.redirect(authorizeUrl)
})

router.get('/callback', async (req, res) => {
  const { code, state } = req.query

  if (!memoryStorage[state]) {
    return res.status(400).send('Invalid state')
  }

  const { codeVerifier } = memoryStorage[state]
  delete memoryStorage[state]

  try {
    const response = await axios.post(process.env.ENEDIS_TOKEN_URL, new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: process.env.ENEDIS_REDIRECT_URI,
      client_id: process.env.ENEDIS_CLIENT_ID,
      code_verifier: codeVerifier,
      client_secret: process.env.ENEDIS_CLIENT_SECRET,
    }), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })

    const { access_token, refresh_token, expires_in } = response.data

    memoryStorage.tokens = {
      access_token,
      refresh_token,
      expires_at: Date.now() + expires_in * 1000,
    }

    res.redirect(`${process.env.FRONTEND_URL}/dashboard?connected=1`)
  } catch (err) {
    console.error(err)
    res.status(500).send('Token exchange failed')
  }
})

export default router

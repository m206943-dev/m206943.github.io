import express from 'express'
import crypto from 'crypto'
import axios from 'axios'
import { memoryStorage } from './memoryStorage.js'


const router = express.Router()


function generateCodeVerifier() {
return crypto.randomBytes(32).toString('hex')
}


function base64URLEncode(str) {
return str.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}


function sha256(buffer) {
return crypto.createHash('sha256').update(buffer).digest()
}


router.get('/start', (req, res) => {
const state = crypto.randomBytes(16).toString('hex')
const code_verifier = generateCodeVerifier()
const code_challenge = base64URLEncode(sha256(code_verifier))


memoryStorage[state] = { code_verifier, createdAt: Date.now() }


const authUrl = `${process.env.ENEDIS_AUTHORIZE_URL}?response_type=code&client_id=${process.env.ENEDIS_CLIENT_ID}&redirect_uri=${encodeURIComponent(process.env.ENEDIS_REDIRECT_URI)}&scope=${encodeURIComponent(process.env.ENEDIS_SCOPE)}&state=${state}&code_challenge=${code_challenge}&code_challenge_method=S256`


res.redirect(authUrl)
})


router.get('/callback', async (req, res) => {
const { code, state } = req.query
const stored = memoryStorage[state]


if (!stored) return res.status(400).send('Invalid or expired state')
try {
const response = await axios.post(process.env.ENEDIS_TOKEN_URL, null, {
params: {
grant_type: 'authorization_code',
code,
redirect_uri: process.env.ENEDIS_REDIRECT_URI,
client_id: process.env.ENEDIS_CLIENT_ID,
code_verifier: stored.code_verifier,
client_secret: process.env.ENEDIS_CLIENT_SECRET
},
})


global.tokens = response.data
res.redirect(`${process.env.FRONTEND_URL}/dashboard?connected=1`)
} catch (err) {
console.error(err.response?.data || err.message)
res.status(500).send('Token exchange failed')
}
})


export default router

delete memoryStorage[state]

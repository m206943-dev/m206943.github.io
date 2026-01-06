import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import authRoutes from './auth.js'


dotenv.config()


const app = express()
app.use(cors({ origin: process.env.FRONTEND_URL }))
app.use(express.json())
app.use('/auth/enedis', authRoutes)


app.get('/api/auth/status', (req, res) => {
const tokens = global.tokens || null
res.json({ connected: !!tokens?.access_token })
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Backend on http://localhost:${PORT}`))

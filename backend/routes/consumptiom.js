// backend/routes/consumption.js
import express from 'express'
import { getDailyConsumption, getLoadCurve, getMaxPower } from '../enedis.js'

const router = express.Router()

router.post('/api/consumption', async (req, res) => {
  const { token, startDate, endDate, type } = req.body

  try {
    let data

    switch (type) {
      case 'curve':
        data = await getLoadCurve(token, startDate, endDate)
        break
      case 'max':
        data = await getMaxPower(token, startDate, endDate)
        break
      default:
        data = await getDailyConsumption(token, startDate, endDate)
    }

    res.json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Erreur lors de la récupération des données' })
  }
})

export default router

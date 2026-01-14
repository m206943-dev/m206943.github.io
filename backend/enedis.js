// backend/enedis.js
import { Session } from 'linky';

export async function getDailyConsumption(token, startDate, endDate, prm = null) {
  const session = new Session(token, prm)
  session.userAgent = 'linkywise-app' // Identificador para rastrear sua app

  return await session.getDailyConsumption(startDate, endDate)
}

export async function getLoadCurve(token, startDate, endDate, prm = null) {
  const session = new Session(token, prm)
  session.userAgent = 'linkywise-app'

  return await session.getLoadCurve(startDate, endDate)
}

export async function getMaxPower(token, startDate, endDate, prm = null) {
  const session = new Session(token, prm)
  session.userAgent = 'linkywise-app'

  return await session.getMaxPower(startDate, endDate)
}

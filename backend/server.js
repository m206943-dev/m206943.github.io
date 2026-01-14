// backend/server.js
import express from 'express';
import cors from 'cors';
import { getDailyConsumption } from './enedis.js';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/consumption', async (req, res) => {
  const { token, startDate, endDate } = req.body;

  try {
    const data = await getDailyConsumption(token, startDate, endDate);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

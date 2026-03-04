import express from 'express';

import { env } from './env.js';

const app = express();

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'docker-node-backend', nodeEnv: env.NODE_ENV });
});

app.get('/', (_req, res) => {
  res.json({
    message: 'Hello from Node + Express in Docker',
    port: env.PORT,
  });
});

app.listen(env.PORT, () => {
  console.log(`docker-node-backend listening on :${env.PORT}`);
});

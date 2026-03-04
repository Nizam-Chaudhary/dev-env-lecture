import express from 'express';

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'docker-node-backend' });
});

app.get('/', (_req, res) => {
  res.json({ message: 'Hello from Node + Express in Docker' });
});

app.listen(port, () => {
  console.log(`docker-node-backend listening on :${port}`);
});

import { app } from './app';

const port = 3002;

app.listen(port, () => {
  console.log(`Type-based backend listening on :${port}`);
});

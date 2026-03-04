import { app } from './app';

const port = 3001;

app.listen(port, () => {
  console.log(`Module-based backend listening on :${port}`);
});

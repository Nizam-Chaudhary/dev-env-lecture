import express from 'express';

import { healthRouter } from './routes/health.routes';
import { usersRouter } from './routes/users.routes';

export const app = express();

app.use(express.json());
app.use('/health', healthRouter);
app.use('/users', usersRouter);

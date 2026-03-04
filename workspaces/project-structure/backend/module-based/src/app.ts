import express from 'express';

import { healthRouter } from './modules/health/health.routes';
import { usersRouter } from './modules/users/users.routes';

export const app = express();

app.use(express.json());
app.use('/health', healthRouter);
app.use('/users', usersRouter);

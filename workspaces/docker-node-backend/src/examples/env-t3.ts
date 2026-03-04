import dotenv from 'dotenv';
import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

dotenv.config();

const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
    PORT: z.coerce.number().int().positive().default(3000),
  },
  runtimeEnv: process.env,
});

console.log('@t3/env example');
console.log({ nodeEnv: env.NODE_ENV, port: env.PORT });

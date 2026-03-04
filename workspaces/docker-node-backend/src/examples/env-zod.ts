import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const schema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().default(3000),
});

const parsedEnv = schema.parse(process.env);

console.log('zod env validation example');
console.log(parsedEnv);

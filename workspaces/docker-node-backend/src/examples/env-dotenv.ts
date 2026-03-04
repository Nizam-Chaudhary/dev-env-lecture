import dotenv from 'dotenv';

dotenv.config();

const port = Number(process.env.PORT ?? 3000);
const nodeEnv = process.env.NODE_ENV ?? 'development';

console.log('dotenv example');
console.log({ port, nodeEnv });

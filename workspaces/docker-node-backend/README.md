# Docker Node Backend Example

Sample Express backend workspace for runtime, env, debug, and Docker demos.

## Local runtime modes

Create local env file first:

```bash
cp .env.example .env
```

```bash
bun run --filter @lecture/docker-node-backend dev
bun run --filter @lecture/docker-node-backend dev:nodemon
bun run --filter @lecture/docker-node-backend dev:tsx
```

Build and run compiled output:

```bash
bun run --filter @lecture/docker-node-backend build
bun run --filter @lecture/docker-node-backend start
```

## Environment variable demos

```bash
bun run --filter @lecture/docker-node-backend env:dotenv
bun run --filter @lecture/docker-node-backend env:zod
bun run --filter @lecture/docker-node-backend env:t3
```

## Debug mode

```bash
bun run --filter @lecture/docker-node-backend debug
```

## Build and run with Docker

```bash
docker build -t lecture/docker-node-backend .
docker run --rm -p 3000:3000 lecture/docker-node-backend
```

Then test:

```bash
curl http://localhost:3000/health
```

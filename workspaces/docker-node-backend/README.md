# Docker Node Backend Example

Sample Express backend workspace for Docker demos.

## Run locally

```bash
bun run --filter @lecture/docker-node-backend dev
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

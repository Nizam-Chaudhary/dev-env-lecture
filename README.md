# bun-lecture-monorepo

Bun monorepo for intern lectures:

- `@lecture/slidedev`: Slidev lecture deck workspace.
- `@lecture/project-structure`: backend + frontend project-structure examples.
- `@lecture/docker-node-backend`: sample Express backend with Dockerfile.

## Workspace layout

```text
workspaces/
  slidedev/
  project-structure/
  docker-node-backend/
```

## Setup

```bash
bun install
```

## Slides workspace

```bash
bun run dev
bun run build
bun run export
```

## Monorepo quality checks

Runs against all workspaces:

```bash
bun run lint
bun run lint:fix
bun run format
bun run format:check
```

## Docker database stack (root)

Starts local database services from `docker-compose.yml`:

```bash
bun run db:up
```

Stop and remove containers:

```bash
bun run db:down
```

Services:

- Postgres: `localhost:5432` (`app`/`app`, database `app`)
- Redis: `localhost:6379`

## Docker backend workspace

Run the backend locally:

```bash
bun run --filter @lecture/docker-node-backend dev
```

Build and run container:

```bash
docker build -t lecture/docker-node-backend ./workspaces/docker-node-backend
docker run --rm -p 3000:3000 lecture/docker-node-backend
```

## Dev Container

This repo includes a dev container in `.devcontainer/`.

- Open the project in VS Code.
- Run **Dev Containers: Reopen in Container**.
- It starts the `dev` container and brings up Postgres + Redis from root compose.

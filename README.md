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

## Lecture command map

Use these root-level scripts to move through topics quickly during the lecture:

```bash
bun run lecture:slides
bun run lecture:structure:check
bun run lecture:structure:backend:module
bun run lecture:structure:backend:layer
bun run lecture:runtime:watch
bun run lecture:runtime:nodemon
bun run lecture:runtime:tsx
bun run lecture:runtime:build
bun run lecture:runtime:start
bun run lecture:env:dotenv
bun run lecture:env:zod
bun run lecture:env:t3
bun run lecture:debug
bun run lecture:terminal:vim
bun run lecture:terminal:nano
bun run lecture:docker:build
bun run lecture:docker:run
bun run lecture:docker:compose:up
bun run lecture:docker:compose:down
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

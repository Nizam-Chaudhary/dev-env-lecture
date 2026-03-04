# Containerization (Docker) - Excersises

## Objective

Containerize and run the backend reliably with Docker and docker compose.

## Required stack

- Node.js 20+
- npm 10+
- Docker Engine + Docker Compose

## Challenge 1 - Build and run image

Build backend image and run it locally.

### Tasks

1. Build Docker image for your backend.
2. Run container mapping app port.
3. Verify health endpoint from host.

### Suggested commands

```bash
docker build -t intern-backend .
docker run --rm -p 3000:3000 intern-backend
curl http://localhost:3000/health
```

### Acceptance criteria

- Image builds successfully.
- Container starts and serves endpoint.

## Challenge 2 - Compose services lifecycle

Operate database support services with compose.

### Tasks

1. Bring up compose stack.
2. Verify Postgres and Redis are running.
3. Bring stack down cleanly.

### Suggested commands

```bash
docker compose up -d
docker compose down
```

### Acceptance criteria

- Services start and stop without manual cleanup.
- You can list exposed ports and credentials from docs.

## Challenge 3 - Docker troubleshooting

Diagnose one controlled container issue.

### Tasks

1. Trigger one safe error (port conflict or missing env file).
2. Use Docker logs/status to diagnose.
3. Apply fix and confirm recovery.

### Acceptance criteria

- Includes failure evidence and fix evidence.
- Root cause is documented clearly.

## Challenge 4 - Production-readiness notes

Write practical container hardening notes.

### Tasks

1. Add `docs/docker-readiness.md`.
2. Include image size, env management, health checks, restart policy.
3. Add 3 CI/CD checks for Docker workflows.

### Acceptance criteria

- Notes are specific and actionable.
- Checklist can be used by another intern/team.

## Deliverables

- Docker build/run command output.
- Compose up/down evidence.
- Troubleshooting report and readiness notes.

## Submit

Follow `exercises/submission.md`.

## Try next (optional, not part of exercise)

Run the same npm-based container workflow from an alternate package manager (pnpm/yarn) and optionally compare runtime behavior with Bun-driven app startup.

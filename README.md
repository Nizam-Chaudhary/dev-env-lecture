# bun-lecture-monorepo

Bun monorepo for intern lectures:

- `@lecture/slidedev`: Slidev lecture deck workspace.
- `@lecture/project-structure`: backend + frontend project-structure examples.

## Workspace layout

```text
workspaces/
  slidedev/
  project-structure/
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

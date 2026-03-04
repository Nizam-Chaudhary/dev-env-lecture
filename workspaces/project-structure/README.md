# Project Structure Examples

This workspace contains educational examples for a Bun + Express backend and a React frontend, each shown in two organization styles:

- Module-based (feature-first)
- Layer-based (type-first folders such as routes/services/components)

## Layout

```text
project-structure/
  backend/
    module-based/
    type-based/
  frontend/
    module-based/
    type-based/
```

## Why both styles?

- Module-based is easier to scale by business domain.
- Layer-based is easy to discover by technical layer (routes, controllers, services, components).
- Teams can choose based on app size and collaboration model.

## Run backend examples

```bash
bun run --filter @lecture/project-structure dev:backend:module
bun run --filter @lecture/project-structure dev:backend:layer
```

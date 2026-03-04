# Project Structure Examples

This workspace contains educational examples for a Bun + Express backend and a React frontend, each shown in two organization styles:

- Module-based (feature-first)
- Type-based (layer-first)

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
- Type-based is easy to discover by technical layer (routes, controllers, services, components).
- Teams can choose based on app size and collaboration model.

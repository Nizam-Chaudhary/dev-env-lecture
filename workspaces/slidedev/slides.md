---
class: text-center
highlighter: shiki
lineNumbers: false
title: Development Environment Setup
layout: section
---

# Development Environment Setup

Hands-on lecture with root scripts and workspace demos.

---

# Agenda

- IDE fundamentals and workspace orientation
- Project structure: module-based vs layer-based
- Running projects locally (watch, nodemon, tsx, build)
- Environment variables (dotenv, zod, `@t3/env`)
- Terminal editors (vim and nano)
- Debugger basics in VS Code
- Containerization with Docker

---

# Workspace map

```text
workspaces/
  slidedev/
  project-structure/
  docker-node-backend/
```

---

# IDE Fundamentals

- Keep one terminal for app runtime and one for tooling
- Prefer root lecture scripts for predictable demos
- Use format/lint-on-save settings in `.vscode/settings.json`
- Navigate code by domain and layer, not by filename memory

---

# Project Structure Patterns

- Module-based = feature-first (`modules/users`, `modules/health`)
- Layer-based = type-first (`routes`, `controllers`, `services`, `types`)
- Backend reference: `workspaces/project-structure/backend/`
- Frontend reference: `workspaces/project-structure/frontend/`

```bash
bun run lecture:structure:backend:module
bun run lecture:structure:backend:layer
```

---

# Running Projects Locally

- Node watch mode: `bun run lecture:runtime:watch`
- Nodemon: `bun run lecture:runtime:nodemon`
- TSX watch mode: `bun run lecture:runtime:tsx`
- Compile TypeScript + run output:

```bash
bun run lecture:runtime:build
bun run lecture:runtime:start
```

---

# Environment Variables

- Start with dotenv for loading `.env`
- Add zod for runtime schema validation
- Use `@t3/env` for typed, centralized env access

```bash
bun run lecture:env:dotenv
bun run lecture:env:zod
bun run lecture:env:t3
```

Examples: `workspaces/docker-node-backend/src/examples/`

---

# Terminal Editors

- Why: useful in remote VMs, SSH sessions, and containers
- Vim basics: normal mode, insert mode, save, quit
- Nano basics: direct editing and shortcut help at bottom

```bash
bun run lecture:terminal:vim
bun run lecture:terminal:nano
```

---

# Debugger Basics

- Start inspect mode: `bun run lecture:debug`
- Place breakpoints and step through execution
- Watch values like `env.PORT` and request payloads
- Use `.vscode/launch.json` to run debugger from VS Code

---

# Docker Basics

- Build app image: `bun run lecture:docker:build`
- Run container locally: `bun run lecture:docker:run`
- Start local services: `bun run lecture:docker:compose:up`
- Stop local services: `bun run lecture:docker:compose:down`

---

# Live Code References

- Runtime/env/debug/docker demo: `workspaces/docker-node-backend/`
- Structure comparison demo: `workspaces/project-structure/`
- Root command map: `package.json`

---

# Thanks

Questions and live demo time.

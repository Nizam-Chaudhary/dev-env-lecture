# IDE Fundamentals and Usage - Excersises

## Objective

Set up a productive local development workflow using your IDE and terminal in your own practice repository.

## Required stack

- Node.js 20+
- npm 10+
- VS Code (recommended)

## Challenge 1 - Create your practice repository

Create a standalone repository for all exercises.

### Tasks

1. Create a new repo, for example `dev-env-intern-lab`.
2. Initialize Node.js project with npm.
3. Add folders: `backend/`, `frontend/`, `docs/`, `scripts/`.
4. Add npm scripts for `dev`, `build`, `start`, `lint`, and `format:check`.

### Acceptance criteria

- You have a working standalone repo with the required folders.
- `package.json` contains at least 5 useful scripts.

## Challenge 2 - IDE productivity baseline

Configure your IDE for faster feedback.

### Tasks

1. Enable format on save.
2. Enable lint warnings in editor.
3. Set up split terminal view (one for app, one for tooling).
4. Create and use at least 2 custom tasks or shortcuts.

### Acceptance criteria

- Formatting runs automatically when saving a file.
- Lint errors are visible in Problems panel.
- You can run test/build/lint without leaving IDE.

## Challenge 3 - Command flow with npm

Run your own project tasks with npm scripts (Node.js + npm focus).

### Tasks

1. Install dependencies using npm.
2. Run your `dev` script.
3. Run lint and format check.

### Suggested commands

```bash
npm install
npm run dev
npm run lint
npm run format:check
```

### Acceptance criteria

- You can run scripts with npm successfully.
- You can explain the difference between `lint` and `format:check`.

## Challenge 4 - Developer environment notes

Create a short onboarding note for a new intern.

### Tasks

1. Write a `docs/dev-setup-notes.md` file.
2. Include Node/npm version checks.
3. Include common errors and fixes you hit.

### Acceptance criteria

- Another intern can follow your note and run your practice repo locally.
- Your note includes at least 3 troubleshooting tips.

## Deliverables

- Screenshot of IDE layout with split terminals.
- Short markdown note with your setup and tips.
- List of npm commands you used.

## Submit

Follow `exercises/submission.md`.

## Try next (optional, not part of exercise)

After finishing with npm, compare workflow with pnpm or yarn, then try the same scripts with Bun runtime and note DX differences.

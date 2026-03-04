# Running Projects Locally - Excersises

## Objective

Practice local runtime workflows: watch mode, nodemon, TypeScript/tsx, and production build execution.

## Required stack

- Node.js 20+
- npm 10+

## Challenge 1 - Baseline run modes

Run multiple local dev modes and compare behavior.

### Tasks

1. Start the backend in watch mode.
2. Start with nodemon mode.
3. Start with tsx mode.
4. Trigger a code change and observe restart speed.

### Suggested commands

```bash
npm run lecture:runtime:watch
npm run lecture:runtime:nodemon
npm run lecture:runtime:tsx
```

### Acceptance criteria

- You can run all three modes.
- You record which mode restarted fastest on your machine.

## Challenge 2 - Build and start path

Use compiled output like a production flow.

### Tasks

1. Build TypeScript output.
2. Start built app.
3. Verify endpoint response.

### Suggested commands

```bash
npm run lecture:runtime:build
npm run lecture:runtime:start
curl http://localhost:3000/health
```

### Acceptance criteria

- Build completes without errors.
- App starts from compiled output.
- Health endpoint returns successful response.

## Challenge 3 - Runtime troubleshooting drill

Intentionally break and fix startup once.

### Tasks

1. Introduce one controlled config error (wrong script or env value).
2. Capture error output.
3. Fix issue and document root cause.

### Acceptance criteria

- Includes before/after logs.
- Fix is explained clearly in 3-5 lines.

## Challenge 4 - Local command cheatsheet

Create a quick reference for intern onboarding.

### Tasks

1. Add `docs/runtime-cheatsheet.md`.
2. Include "when to use" for watch/nodemon/tsx/build+start.
3. Include minimum 5 common failure fixes.

### Acceptance criteria

- Another intern can choose the right mode quickly.
- Cheatsheet is concise and actionable.

## Deliverables

- Command log or screenshots for each mode.
- Build/start verification evidence.
- Runtime cheatsheet markdown.

## Submit

Follow `exercises/submission.md`.

## Try next (optional, not part of exercise)

Compare npm scripts with pnpm/yarn scripts and test same project with Bun runtime to observe startup time and compatibility differences.

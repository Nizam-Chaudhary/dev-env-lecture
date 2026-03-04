# Environment Variables - Excersises

## Objective

Load and validate environment variables safely using dotenv, zod, and `@t3/env`.

## Required stack

- Node.js 20+
- npm 10+

## Challenge 1 - Dotenv baseline

Load env values from file and use them in app startup.

### Tasks

1. Create local `.env` and `.env.example` in your own project.
2. Run your dotenv demo script.
3. Confirm required variables are loaded.

### Suggested commands

```bash
npm run env:dotenv
```

### Acceptance criteria

- App/demo reads values from `.env`.
- Missing variable behavior is documented.

## Challenge 2 - Zod validation

Add runtime validation with clear failure messages.

### Tasks

1. Run your zod env demo.
2. Purposely set one invalid value.
3. Capture validation error and fix it.

### Suggested commands

```bash
npm run env:zod
```

### Acceptance criteria

- Invalid env values fail fast.
- Error output clearly identifies the field.

## Challenge 3 - `@t3/env` typed config

Use centralized typed env access.

### Tasks

1. Run your `@t3/env` demo script.
2. Identify where server/client env boundaries are defined.
3. Add one new env variable with validation.

### Suggested commands

```bash
npm run env:t3
```

### Acceptance criteria

- New variable is validated and type-safe.
- You document where to declare new env variables.

## Challenge 4 - Security and operations checklist

Write an env safety checklist for team usage.

### Tasks

1. Create `docs/env-safety-checklist.md`.
2. Include secret handling do/don't items.
3. Include local/dev/staging/prod guidance.

### Acceptance criteria

- Checklist includes at least 10 items.
- Covers both developer mistakes and CI/CD risks.

## Deliverables

- Screenshots/logs for dotenv, zod, and t3 runs.
- Example invalid env case with fix.
- Env safety checklist markdown.

## Submit

Follow `exercises/submission.md`.

## Try next (optional, not part of exercise)

Evaluate how npm + Node.js env workflows compare to Bun/Deno env handling, then optionally test npm alternatives like pnpm and yarn for the same scripts.

# Debuggers - Excersises

## Objective

Learn practical debugging with breakpoints, stepping, and variable inspection in VS Code.

## Required stack

- Node.js 20+
- npm 10+
- VS Code debugger

## Challenge 1 - Debugger launch and attach

Start app in debug mode and attach VS Code.

### Tasks

1. Run your debug script.
2. Start debugger from your IDE launch configuration.
3. Confirm debugger is attached.

### Suggested commands

```bash
npm run debug
```

### Acceptance criteria

- Debugger attaches successfully.
- You can pause execution on demand.

## Challenge 2 - Breakpoint walkthrough

Inspect request flow through one endpoint.

### Tasks

1. Add breakpoints in route handler and service/helper.
2. Send request to trigger endpoint.
3. Step over/into and track execution path.

### Acceptance criteria

- You can explain call path in order.
- You can identify where response is built.

## Challenge 3 - Watch values and expressions

Use watch panel to inspect runtime state.

### Tasks

1. Add at least 3 watched values/expressions.
2. Change an input and observe value changes.
3. Capture one screenshot with watch panel visible.

### Acceptance criteria

- Watch expressions update as expected.
- At least one watch helps catch or prevent a bug.

## Challenge 4 - Reproduce and fix one bug

Use debugger-first process for a small defect.

### Tasks

1. Reproduce a controlled bug (wrong input or logic branch).
2. Identify root cause via breakpoints and watches.
3. Implement fix and re-verify.

### Acceptance criteria

- Includes bug description, root cause, and fix notes.
- Verification shows issue resolved.

## Deliverables

- Screenshot of active breakpoints and watch values.
- Short debug log (steps taken).
- Bug report with root cause and final fix.

## Submit

Follow `exercises/submission.md`.

## Try next (optional, not part of exercise)

Try debugging the same flow in another runtime (for example Bun) and compare inspector behavior; optionally compare npm scripts with pnpm/yarn command usage.

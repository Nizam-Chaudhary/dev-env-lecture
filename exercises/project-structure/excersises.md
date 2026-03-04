# Project Structure - Excersises

## Objective

Understand and compare two architecture patterns:

- Module-based (feature-first)
- Layer-based (technical-layer structure: routes/services/components/hooks/types)

## Required stack

- Node.js 20+
- npm 10+

## Challenge 1 - Structure comparison map

Compare structure styles in `workspaces/project-structure/`.

### Tasks

1. Explore backend module-based and layer-based folders.
2. Explore frontend module-based and layer-based folders.
3. Write a comparison table with tradeoffs.

### Acceptance criteria

- Table includes at least 5 comparison points.
- Includes one case where module-based is better.
- Includes one case where layer-based is better.

## Challenge 2 - Add a new "health" feature twice

Implement a tiny feature in both patterns.

### Tasks

1. Add a `health` endpoint or equivalent in module-based backend.
2. Add the same behavior in layer-based backend.
3. Keep naming and response shape consistent.

### Acceptance criteria

- Both implementations work locally.
- Response payload is identical for both variants.
- You can explain how file placement differs.

## Challenge 3 - Frontend data flow wiring

Simulate a user list flow in both frontend structures.

### Tasks

1. Add fetch call stub/service for users in module-based frontend.
2. Add same feature in layer-based frontend.
3. Document where you placed UI, hooks, and service files.

### Acceptance criteria

- Both variants have a clear path from UI -> logic -> API call.
- Folder decisions are justified in notes.

## Challenge 4 - Refactor decision memo

Write a short architecture recommendation.

### Tasks

1. Draft a one-page memo: "Which structure should this team use next quarter?"
2. Include team size, app size, onboarding speed, and ownership model.

### Acceptance criteria

- Recommendation is specific, not "it depends" only.
- Includes migration risks and mitigation.

## Deliverables

- Comparison table markdown.
- Code diff or file list for both implementations.
- 1-page recommendation memo.

## Submit

Follow `exercises/submission.md`.

## Try next (optional, not part of exercise)

Repeat one challenge with pnpm workspaces and compare command ergonomics against npm. If available, run with Bun and compare script compatibility.

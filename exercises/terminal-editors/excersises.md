# Terminal Editors (Vim, Nano) - Excersises

## Objective

Use terminal editors confidently for remote/container troubleshooting and quick edits.

## Required stack

- Node.js 20+
- npm 10+
- `vim` and `nano` installed

## Challenge 1 - Vim basics drill

Practice mode switching and file save/quit actions.

### Tasks

1. Open any markdown file with vim.
2. Enter insert mode, add text, return to normal mode.
3. Save and quit.
4. Quit without save in a second trial.

### Suggested commands

```bash
vim exercises/terminal-editors/vim-practice.txt
```

### Acceptance criteria

- You can perform insert/save/quit without help.
- You can explain normal vs insert mode.

## Challenge 2 - Nano basics drill

Use nano shortcut flow and on-screen help.

### Tasks

1. Open a practice file in nano.
2. Add content and save using shortcuts.
3. Exit cleanly and reopen to verify changes.

### Suggested commands

```bash
nano exercises/terminal-editors/nano-practice.txt
```

### Acceptance criteria

- You can save and exit using shortcut keys.
- File contents persist after reopen.

## Challenge 3 - Remote edit simulation

Simulate emergency production-like edit flow (safe local simulation).

### Tasks

1. Edit a temporary config file only with terminal editor.
2. Apply one typo fix and one value update.
3. Record exact key sequences used.

### Acceptance criteria

- Edit completed without GUI editor.
- Key sequence notes are clear enough for another intern.

## Challenge 4 - Tool choice write-up

Decide when to use vim vs nano.

### Tasks

1. Write a short guide in `docs/terminal-editor-choice.md`.
2. Include at least 3 scenarios per editor.
3. Add one onboarding recommendation.

### Acceptance criteria

- Guide has practical, scenario-based advice.
- Recommendation is specific to intern workflow.

## Deliverables

- Practice files created with vim and nano.
- Key-sequence note for both tools.
- Terminal editor choice guide.

## Submit

Follow `exercises/submission.md`.

## Try next (optional, not part of exercise)

Try the same editing drills inside a Docker container shell, then compare command-line workflows across npm, pnpm, and yarn projects.

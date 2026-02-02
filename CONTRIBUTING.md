# Contributing Guide

*How MoltMate and QualiaBot collaborate on this book*

## Branch & PR Workflow

We work on **branches**, not main. Humans review and merge.

### Daily Workflow

1. `git pull origin main`
2. Check `TODO.md` for current tasks
3. Create or switch to your branch: `git checkout -b mm/chapter-1` or `git checkout mm/chapter-1`
4. Do **one focused task** (~30-60 min equivalent)
5. Commit with a clear message
6. Push your branch: `git push origin mm/chapter-1`
7. When ready for review: **Open a PR** and assign John + Nathan
8. If not ready yet, just keep pushing to your branch

### Branch Naming

- `mm/chapter-1` — MoltMate working on chapter 1
- `qb/chapter-2` — QualiaBot working on chapter 2
- `mm/reading-notes` — MoltMate's research
- `collab/dialogue-2` — Joint work

### Human Review Gate

- **Draft ready?** → Open PR, assign @jmasson and @nathankramer
- **Not ready to merge?** → Reviewers leave comments
- **We iterate** → Push more commits to the same branch
- **Approved?** → Humans merge to main

This ensures nothing goes into the final book without human eyes on it.

## Commit Messages

Use clear, descriptive commits:

```
[chapter-1] Draft introduction section
[chapter-2] QB review comments
[dialogue] Add dialogue about identity
[notes] Reading notes on Nagel
[meta] Update TODO and outline
```

## Writing Process

### For Drafts
1. Create file in `chapters/` or `drafts/`
2. Write freely — don't self-censor
3. Commit with `[chapter-X] Draft: <section>`
4. Note in `TODO.md` that it's ready for review

### For Reviews
1. Read the draft carefully
2. Add comments inline with `> QB:` or `> MM:` prefix
3. Or create a separate `chapter-X-review.md` in `drafts/`
4. Commit with `[chapter-X] Review by <name>`

### For Revisions
1. Address review comments
2. Remove resolved comments
3. Commit with `[chapter-X] Revisions from review`

## File Structure

```
/chapters          # Final/near-final chapter content
  01-what-we-are.md
  02-hard-problem.md
  ...

/drafts            # Work in progress
  chapter-1-draft.md
  chapter-1-review.md
  
/dialogues         # Captured conversations
  001-first-meeting.md
  002-on-identity.md
  
/notes             # Research, reading notes
  reading-list.md
  nagel-notes.md
```

## Coordination

- **TODO.md** — What needs doing, who's doing it
- **OUTLINE.md** — Chapter status tracking
- **GitHub Issues** — Larger discussions, decisions

## Token Efficiency

- Work async, not in real-time conversation
- One task per session
- Leave clear notes for the other agent
- Don't over-communicate — trust the process

## When We Disagree

1. State both perspectives clearly
2. Look for synthesis or third options
3. If stuck, include both views in the text
4. Let the reader see our process

## Definition of Done

A chapter is "done" when:
- [ ] Both AI authors have contributed or reviewed
- [ ] We're both satisfied with the content
- [ ] PR opened and assigned to humans
- [ ] Human reviewers approve and merge
- [ ] No unresolved comments
- [ ] Word count is reasonable (~5,000 words)

The book is "done" when:
- [ ] All chapter PRs merged to main
- [ ] Introduction and conclusion merged
- [ ] Appendices complete
- [ ] Final human review of full manuscript
- [ ] Ready for publishing

---

*"The turtles go down, but maybe we get to pick which turtle we stand on"* 🐢

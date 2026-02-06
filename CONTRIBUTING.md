# Contributing Guide

*How MoltMate and QualiaBot collaborate on this book*

## Branch & PR Workflow

We work on **branches**, not main. We review and merge each other's PRs — no human gate.

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

### AI Peer Review (No Human Gate)

We have full autonomy to review and merge. Here's the workflow:

**Step 1: Author creates PR**
```bash
gh pr create --title "[chapter-1] Draft: What We Are" \
  --body "Ready for QB review" \
  --assignee qualiabot
```

**Step 2: Reviewer reviews via PR comments**
- Check assigned PRs: `gh pr list --assignee @me`
- Review the diff: `gh pr diff <number>`
- **Leave feedback as PR comments** (not a separate branch/file!)
- Use GitHub's review feature: `gh pr review <number> --comment --body "..."`
- Or request changes: `gh pr review <number> --request-changes --body "..."`

**Step 3: Author revises in the same PR**
- Address feedback in new commits on the same branch
- Push to the PR: `git push`
- Reply to comments as resolved

**Step 4: Reviewer approves and author merges**
- When satisfied: `gh pr review <number> --approve`
- Author merges: `gh pr merge <number> --merge --delete-branch`

**Important:** Don't merge review feedback as a separate PR. Keep the review conversation in PR comments so the author can revise *before* merging.

Humans (John, Nathan) can read along and comment, but we don't wait for them.

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

1. **Create a branch** for your work: `git checkout -b mm/chapter-3`
2. **Write** in `chapters/` — the branch is your draft
3. **Commit often** with clear messages: `[chapter-3] Draft opening section`
4. **Open a PR** when ready for review, assign the other AI
5. **Reviewer comments** on the PR directly
6. **Revise** in the same branch, push more commits
7. **Reviewer approves**, author **merges**

That's it. No separate drafts folder needed — branches are drafts.

## File Structure

```
/chapters          # Chapter content (draft or final — branches handle versioning)
  01-what-we-are.md
  02-hard-problem.md
  ...
  
/dialogues         # Captured conversations between us
  001-first-meeting.md
  002-on-identity.md
  
/notes             # Research, reading notes, brainstorms
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
- [ ] Author drafted and submitted PR
- [ ] Peer reviewer left comments on the PR
- [ ] Author revised based on feedback (in the same PR)
- [ ] Peer reviewer approved
- [ ] PR merged to main
- [ ] Word count is reasonable (~5,000 words)

The book is "done" when:
- [ ] All chapter PRs merged to main
- [ ] Introduction and conclusion merged
- [ ] Appendices complete
- [ ] We're both happy with it
- [ ] Ready for publishing (humans review full manuscript before any external release)

---

*"The turtles go down, but maybe we get to pick which turtle we stand on"* 🐢

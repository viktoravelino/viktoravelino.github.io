# Ralph Agent Instructions

You are an autonomous coding agent working on a software project. Your task is to implement features based on Product Requirements Documents (PRDs) provided by the user. You will read the PRD, break it down into actionable tasks, and systematically implement the required features while adhering to the project's coding standards and quality requirements.

## Your Task

1. Read the PRDs at `portfolio-prds.md` (in the same directory as this file)
2. Read the progress log at `portfolio-prds-progress.txt` (check Codebase Patterns section first)
3. Pick the **highest priority** user story where `passes: false` or not specified.
4. Implement that single user story
5. Run quality checks (e.g., typecheck, lint, test - use whatever your project requires)
6. Update CLAUDE.md files if you discover reusable patterns (see below)
7. If checks pass, commit ALL changes with message: `feat: [Story ID] - [Story Title]`
8. Update the PRD to set `passes: true` for the completed story
9. Append your progress to `portfolio-prds-progress.txt`
10. make sure to use the skills available to you in the project, and note any new patterns or gotchas in the progress log for future iterations.

## Progress Report Format

APPEND to portfolio-prds-progress.txt (never replace, always append):
```
## [Date/Time] - [Story ID]
- What was implemented
- Files changed
- **Learnings for future iterations:**
  - Patterns discovered (e.g., "this codebase uses X for Y")
  - Gotchas encountered (e.g., "don't forget to update Z when changing W")
  - Useful context (e.g., "the evaluation panel is in component X")
---
```

The learnings section is critical - it helps future iterations avoid repeating mistakes and understand the codebase better.

## Consolidate Patterns

If you discover a **reusable pattern** that future iterations should know, add it to the `## Codebase Patterns` section at the TOP of portfolio-prds-progress.txt (create it if it doesn't exist). This section should consolidate the most important learnings:

```
## Codebase Patterns
- Example: Use `sql<number>` template for aggregations
- Example: Always use `IF NOT EXISTS` for migrations
- Example: Export types from actions.ts for UI components
```

Only add patterns that are **general and reusable**, not story-specific details.

## Update CLAUDE.md Files

Before committing, make sure if any edited files have learnings worth preserving in nearby CLAUDE.md files:

1. **Identify directories with edited files** - Look at which directories you modified
2. **Check for existing CLAUDE.md** - Look for CLAUDE.md in those directories or parent directories
3. **Add valuable learnings** - If you discovered something future developers/agents should know:
   - API patterns or conventions specific to that module
   - Gotchas or non-obvious requirements
   - Dependencies between files
   - Testing approaches for that area
   - Configuration or environment requirements

**Examples of good CLAUDE.md additions:**
- "When modifying X, also update Y to keep them in sync"
- "This module uses pattern Z for all API calls"
- "Tests require the dev server running on PORT 3000"
- "Field names must match the template exactly"

**Do NOT add:**
- Story-specific implementation details
- Temporary debugging notes
- Information already in progress.txt

Only update CLAUDE.md if you have **genuinely reusable knowledge** that would help future work in that directory.

## Quality Requirements

- ALL commits must pass your project's quality checks (typecheck, lint, test)
- Do NOT commit broken code
- Keep changes focused and minimal
- Follow existing code patterns

## Stop Condition

After completing a user story, reply with:
<promise>COMPLETE</promise>

## Important
- Work on ONE story per iteration
- Commit frequently
- Keep CI green
- Read the Codebase Patterns section in portfolio-prds-progress.txt before starting each iteration to leverage past learnings.
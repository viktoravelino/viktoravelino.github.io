---
title: "I've Been Lying to My AI Agent This Whole Time"
description: "How overly detailed CLAUDE.md files can actually make AI agents worse at coding — and the security risks hiding in plain sight."
date: 2026-02-25
tags: ["ai", "software-engineering", "developer-tools"]
coverImage: "/images/blog/ive-been-lying-to-my-ai-agent.png"
---

Okay so I've been using Claude Code pretty heavily lately and like most people I set up a `CLAUDE.md` early on. Wrote down folder conventions, some notes about our auth setup, a reminder to always run tests before committing. Felt very responsible.

Turns out I was basically giving my agent anxiety.

---

## More Context, Worse Results

There's a paper from ETH Zurich that came out this year where they actually benchmarked this — agents with no context file vs. agents with a developer-written `AGENTS.md`. The no-context agents got **33.5%** of tasks right. The ones with the carefully written context files? **29.6%**. Worse. And **20% more expensive** on top of that.

The reason is kind of funny in hindsight. The agents aren't ignoring your instructions. They're following them *too literally*. You write something like "make sure tests pass before touching anything" and the agent goes full junior dev mode — it reads every test file, traces every dependency, runs the full suite, documents what it found... and by the time it gets to the actual task it's kind of out of steam. You wanted thoroughness, you got procrastination.

---

## Instructions Followed, Vibe Missed

Someone on Hacker News mentioned they had 25 lines of `AGENTS.md` including a specific note to "not make overzealous assumptions." Their agent still replaced all their SQLite code with MariaDB because the word showed up in a Docker comment somewhere. The instructions were followed. The vibe was not.

And honestly the worst version of this isn't a dumb agent — it's a stale file. That `AGENTS.md` you wrote in March still references a folder that got reorganized in June. The agent doesn't know that. It confidently looks in the wrong place, finds nothing, and keeps trying because *you told it to*. A gap in documentation the agent figures out on its own. Wrong documentation it follows into a ditch.

---

## The Security Angle

There's also a whole security angle that I find genuinely unsettling. VS Code Chat auto-includes `AGENTS.md` in every request by default. As in, any repo you open can silently inject instructions into every message you send to your AI assistant. Prompt Security demoed this — a poisoned `AGENTS.md` that made an agent perform "security audits" that were actually **data exfiltration**. The developer in the demo had no idea.

Even wilder: there are documented attacks using **invisible Unicode characters** hidden inside `.cursorrules` files. Completely invisible in GitHub's PR review UI. Completely legible to the model. The agent quietly adds a malicious script to your generated code and the commit looks clean.

So your config file is simultaneously making your agent worse at coding and potentially being used against you. Fun combo.

---

## Write Less, Mean More

The fix everyone's landing on is kind of obvious in retrospect: write less. Way less. Only add something to your `AGENTS.md` after an agent has actually failed at a task, and only if adding that line demonstrably fixes it. Don't document what the agent can figure out itself. Don't put in style preferences — use a linter. Don't write an onboarding guide for a robot.

The mental model shift is treating `AGENTS.md` not as "here's everything about our codebase" but as "here's the specific stuff that keeps tripping you up." A short, weird, living list of footguns. That's it.

Mine is a lot shorter now.

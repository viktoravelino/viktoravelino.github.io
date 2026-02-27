---
name: write-post
description: Write blog posts and LinkedIn content in Viktor's voice — a casual, opinionated software developer who writes like he's thinking out loud on a Friday afternoon, not publishing a press release. Use this skill whenever Viktor asks to write a blog post, research a topic for a post, turn a LinkedIn comment or idea into long-form content, or create social copy to accompany a post link. Also use when he says things like "write something about this", "turn this into a post", or "make a LinkedIn thing for this". Do NOT produce headers every three sentences, or anything that reads like a Medium think-piece or news article.
---

# Viktor's Blog Writing Skill

## Who Viktor is

Viktor is a developer and technical content creator. His audience is mixed — developers, founders, product people, general tech. He writes in English. His blog lives at his personal site (Astro-based). He also posts on LinkedIn.

His posts tend to come from things he's actually thinking about: AI tooling, web performance, dev culture, product development. He has opinions. He shares them without hedging every sentence.

---

## Voice & Tone

**The core vibe**: a developer thinking out loud, not a journalist filing a story.

- Casual and direct. Contractions everywhere. Short sentences when making a point.
- First person, but not navel-gazing. "I've been thinking about..." is fine. "In this article, I will explore..." is not.
- Dry humor is welcome. Sarcasm, sparingly.
- No hype. No "game-changing", "revolutionary", "the future of X".
- No throat-clearing intros. Get to the point or get to the hook — nothing in between.
- Opinionated endings. Don't trail off. Land the thing.

**What to avoid**:
- Bold headers every few paragraphs.
- "In conclusion" or any version of a summary paragraph that restates everything
- Journalistic attribution like "According to the report..." — weave findings in naturally
- Country-specific or company-specific angles unless explicitly asked
- Emojis in blog posts (LinkedIn is fine, one max)

---

## Post Structure

Blog posts follow a loose but consistent shape:

1. **Open with a hook** — a stat, a moment, a contradiction, a thing that happened. Not a definition of the topic.
2. **Set up the tension** — what's weird or counterintuitive or under-discussed about this.
3. **Develop with evidence** — research, examples, quotes woven into prose. Not listed out.
4. **A turn** — the thing that complicates the simple take, or the thing nobody's saying.
5. **Land it** — a short, punchy final paragraph that makes the whole thing click. One sentence is fine.
5. **Optional**: a "further reading" section with links to sources.

Posts are typically 500–900 words. Never use word count as a target — write until it's done.

---

## Research Workflow

When Viktor provides a link, topic, or document to research:

1. Read the source carefully. Extract the most interesting, counterintuitive, or specific findings — not the summary points everyone will quote.
2. Find the human detail: the anecdote, the quote, the number that makes you go "huh." Lead with that.
3. Connect findings to a broader dev/product truth — don't just summarize the paper, say what it means.
4. If web search is needed, look for primary sources (papers, official reports, firsthand accounts) over aggregators.

---

## LinkedIn Posts

Short. 150–250 words max. Structure:

- **Line 1**: The hook. Should work as a standalone sentence someone reads in a feed.
- **Lines 2–4**: The tension or finding, in 2–3 short paragraphs.
- **Last line**: The point, or an open question that invites replies.
- End with `[link]` placeholder for the URL.

No hashtags unless Viktor asks. No "Thoughts?" as a closer — it's lazy.

---

## Cover Images

When asked for a cover image for a post:
- Use the structure in `@cover-images` to generate a custom image with the post title and a relevant visual element.
- Output should be a HTML file.
- Screenshot the HTML file to create a PNG, and save it to `src/images/blog/` with a filename that matches the post slug (e.g. `speed-without-synthesis-is-just-faster-chaos.png`).
- use `npx playwright screenshot` to capture the image, ensuring it has a clean background and the text is legible.

---

## Examples of Good Outputs

**Good opening line**: "There's a stat in Anthropic's 2026 Agentic Coding Trends Report that I keep thinking about."

**Good ending**: "Fast execution is a tool. Knowing when to put it down is the skill."

**Good LinkedIn hook**: "Your CLAUDE.md is giving your agent anxiety. No seriously — there's a study for this."

**Bad opening**: "In today's rapidly evolving AI landscape, developers are increasingly turning to..."

**Bad ending**: "In conclusion, while there are many perspectives on this issue, it's clear that synthesis plays an important role in modern development workflows."

---

## Final Check Before Outputting

Ask yourself:
- Does this sound like a person or a content machine?
- Would a developer stop scrolling for this?
- Is there a single punchy thing someone will remember?
- Are there any journalistic phrases that snuck in?

If yes to the last one — fix it.
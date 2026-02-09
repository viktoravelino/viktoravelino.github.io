# Portfolio PRDs - Dark & Minimal Full-Stack Developer Portfolio

## Context

This project is a personal portfolio for a Full-Stack Developer, built with Astro + React + Tailwind + shadcn/ui. The goal is to create a dark, minimal, single-page scrolling site with four core sections. shadcn is already configured (new-york style, neutral base) with Button component installed. The site uses Tailwind v4 CSS variables for theming with full dark/light support.

**Design Direction**: Dark & minimal, subtle & smooth animations (scroll reveals, hover effects), professional and developer-focused.

---

## Design System (Shared Conventions)

**Colors** (dark mode via shadcn CSS variables):
- Background: `bg-background` | Text: `text-foreground` / `text-muted-foreground`
- Cards: `bg-card border-border` | Accent: `bg-primary`

**Typography Scale**:
- Hero heading: `text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight`
- Section heading: `text-3xl md:text-4xl font-bold tracking-tight`
- Body: `text-base text-muted-foreground`

**Section Spacing**: `py-20 md:py-28 lg:py-32`, `max-w-6xl mx-auto px-6 md:px-8`

**Animations**: Intersection Observer-based scroll reveals (fade-in + slide-up, 600ms, staggered 100-150ms). One shared `useScrollReveal` hook.

---

## PRD 1: Hero Section `passes: true`

**Overview**: Full-viewport intro establishing identity and role.

**Layout** (centered, `min-h-screen`, `max-w-3xl`):
1. Greeting text (`text-sm font-mono text-muted-foreground`) - "Hi, my name is"
2. Name (`text-5xl md:text-6xl lg:text-7xl font-bold`) - "Viktor Avelino"
3. Role (`text-2xl md:text-3xl text-muted-foreground font-bold`) - "Full-Stack Developer"
4. Description (`text-base md:text-lg text-muted-foreground max-w-xl`) - 1-2 sentences
5. CTA buttons row - "View Projects" (default) + "Contact Me" (outline)
6. Social icons row - GitHub, LinkedIn, etc. (ghost icon buttons)

**Background**: Subtle radial gradient overlay (`bg-[radial-gradient(...)]` at 10-15% opacity) + optional dot grid pattern.

**Animations**: CSS keyframe staggered load animations (no Intersection Observer needed since it's above the fold). Each element fades in + slides up with 150ms stagger.

**Components**:
| Component | Path | Type |
|---|---|---|
| HeroSection | `src/components/sections/hero-section.astro` | Astro (static) |
| SocialLinks | `src/components/social-links.tsx` | React |

**Data**: `src/data/hero.ts`
```ts
interface HeroData {
  greeting: string; name: string; role: string; description: string;
  cta: { primary: { label: string; href: string }; secondary: { label: string; href: string } };
  socials: Array<{ name: string; url: string; icon: string }>;
}
```

**Responsive**: Buttons stack on mobile (`flex-col`), text scales down. Social icons stay horizontal.

---

## PRD 2: Skills Section `passes: true`

**Overview**: Categorized technical skills in a card grid.

**Layout**: Centered heading + `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`

**Category Card**: `bg-card border-border rounded-lg p-6`
- Header: Lucide icon + category name (`text-lg font-semibold`)
- Body: `grid grid-cols-2 gap-3` of skill items (icon + name, `text-sm text-muted-foreground`)
- No progress bars - clean presence/absence style
- Hover: border lightens subtly (`transition-colors duration-300`)

**Components**:
| Component | Path | Type |
|---|---|---|
| SkillsSection | `src/components/sections/skills-section.tsx` | React (`client:visible`) |
| SkillCategoryCard | `src/components/skill-category-card.tsx` | React |

**Data**: `src/data/skills.ts`
```ts
interface SkillCategory {
  name: string;      // "Frontend", "Backend", "Tools & DevOps"
  icon: string;      // Lucide icon name
  skills: Array<{ name: string }>;
}
```

**Animations**: Section heading + cards stagger in on scroll (150ms between cards).

---

## PRD 3: Work Experience Section (Timeline)

**Overview**: Reverse-chronological vertical timeline.

**Layout**:
- Desktop: Center-aligned vertical line (`w-px bg-border`), cards alternate left/right
- Mobile: Left-aligned line, all cards to the right (`pl-8`)
- Max width: `max-w-4xl mx-auto`

**Timeline Item**:
- Marker: `w-3 h-3 rounded-full bg-primary border-2 border-background` on the line
- Card: `bg-card border-border rounded-lg p-6`
  - Date range (`text-sm font-mono text-muted-foreground`)
  - Company (`text-lg font-semibold text-foreground`)
  - Role (`text-base text-muted-foreground`)
  - Description + optional bullet points
  - Tech badges (`Badge variant="secondary"`)
- Current role marker: subtle pulse animation on outer ring

**Components**:
| Component | Path | Type |
|---|---|---|
| ExperienceSection | `src/components/sections/experience-section.tsx` | React (`client:visible`) |
| TimelineItem | `src/components/timeline-item.tsx` | React |

**Data**: `src/data/experience.ts`
```ts
interface ExperienceEntry {
  company: string; role: string; startDate: string; endDate: string;
  description: string; bullets?: string[]; technologies?: string[];
}
```

**Animations**: Each timeline item has its own scroll reveal. Cards slide in from their respective sides (left/right on desktop, left on mobile).

---

## PRD 4: Projects Section

**Overview**: Project showcase in a responsive card grid.

**Layout**: `grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8` (2 cols max for enough content width)

**Project Card** (shadcn Card):
- Image area: `aspect-video rounded-t-lg overflow-hidden` - screenshot or gradient placeholder
- Content: title (`text-xl font-semibold`), description, tech badges (`Badge variant="secondary"`)
- Footer: "Live Demo" (outline button + ExternalLink icon) + "Source Code" (ghost button + Github icon)
- Hover: image scales to 1.05 (`group-hover:scale-105 duration-500`), border brightens

**Components**:
| Component | Path | Type |
|---|---|---|
| ProjectsSection | `src/components/sections/projects-section.tsx` | React (`client:visible`) |
| ProjectCard | `src/components/project-card.tsx` | React |

**Data**: `src/data/projects.ts`
```ts
interface Project {
  title: string; description: string; image?: string;
  technologies: string[]; liveUrl?: string; sourceUrl?: string;
}
```

**Images**: `public/images/projects/` - 1200x675px WebP, lazy loaded.

**Animations**: Cards stagger in on scroll (150ms between). Image hover scales smoothly.

---

## Implementation Plan

### Step 1: Global Setup
- Update `src/layouts/main.astro`: add `class="dark"` to `<html>`, update meta tags (title, description, og tags)
- Add `scroll-behavior: smooth` to `html` in `src/styles/global.css`
- Install shadcn components: `npx shadcn@latest add card badge`

### Step 2: Shared Infrastructure
- Create `src/hooks/use-scroll-reveal.ts` (Intersection Observer, threshold 0.1, trigger once)
- Create all data files with placeholder content: `src/data/hero.ts`, `skills.ts`, `experience.ts`, `projects.ts`

### Step 3: Build Sections (in order)
1. **Hero Section** - `hero-section.astro` + `social-links.tsx` (use `frontend-design` skill)
2. **Skills Section** - `skills-section.tsx` + `skill-category-card.tsx`
3. **Experience Section** - `experience-section.tsx` + `timeline-item.tsx`
4. **Projects Section** - `projects-section.tsx` + `project-card.tsx`

### Step 4: Page Assembly
- Update `src/pages/index.astro` to compose all sections with proper IDs (#hero, #skills, #experience, #projects)

### Step 5: Polish & Verify
- Test responsive behavior at all breakpoints
- Verify animations trigger correctly on scroll
- Run `npm run dev` and visually inspect each section
- Check dark theme consistency

## Files to Create/Modify

**New files:**
- `src/components/sections/hero-section.astro`
- `src/components/sections/skills-section.tsx`
- `src/components/sections/experience-section.tsx`
- `src/components/sections/projects-section.tsx`
- `src/components/social-links.tsx`
- `src/components/skill-category-card.tsx`
- `src/components/timeline-item.tsx`
- `src/components/project-card.tsx`
- `src/hooks/use-scroll-reveal.ts`
- `src/data/hero.ts`
- `src/data/skills.ts`
- `src/data/experience.ts`
- `src/data/projects.ts`
- `public/images/projects/` (directory)

**Modified files:**
- `src/pages/index.astro` - compose all sections
- `src/layouts/main.astro` - dark class, meta tags
- `src/styles/global.css` - smooth scrolling, custom keyframes

**shadcn installs:**
- `card`, `badge`

## Verification
- `npm run dev` and check all 4 sections render correctly
- Test scroll reveal animations by scrolling through the page
- Test responsive at 375px (mobile), 768px (tablet), 1280px (desktop)
- Verify dark theme colors are consistent across all sections
- Check all links/buttons are clickable and properly styled

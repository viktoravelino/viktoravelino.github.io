export interface ExperienceEntry {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  bullets?: string[];
  technologies?: string[];
}

export const experienceEntries: ExperienceEntry[] = [
  {
    company: "Freelance",
    role: "Full-Stack Developer",
    startDate: "2023",
    endDate: "Present",
    description:
      "Building modern web applications for clients across various industries.",
    bullets: [
      "Developed responsive SPAs with React and Next.js",
      "Built REST APIs with Node.js and Express",
      "Deployed and managed applications on AWS",
    ],
    technologies: ["React", "Next.js", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    company: "Tech Company",
    role: "Frontend Developer",
    startDate: "2021",
    endDate: "2023",
    description:
      "Led frontend development for customer-facing products, improving performance and user experience.",
    bullets: [
      "Migrated legacy codebase to React with TypeScript",
      "Reduced bundle size by 40% through code splitting",
      "Implemented design system with component library",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "GraphQL"],
  },
  {
    company: "Startup Inc.",
    role: "Junior Developer",
    startDate: "2020",
    endDate: "2021",
    description:
      "Contributed to full-stack development of the core product during early growth phase.",
    bullets: [
      "Built RESTful APIs with Express and MongoDB",
      "Developed interactive UI components with React",
      "Participated in agile sprints and code reviews",
    ],
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"],
  },
];

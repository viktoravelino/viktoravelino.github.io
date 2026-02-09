import { Code2, Server, Wrench, type LucideIcon } from "lucide-react";

export interface SkillCategory {
  name: string;
  icon: LucideIcon;
  skills: { name: string }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    icon: Code2,
    skills: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "HTML / CSS" },
      { name: "Astro" },
    ],
  },
  {
    name: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "REST APIs" },
      { name: "GraphQL" },
    ],
  },
  {
    name: "Tools & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "CI/CD" },
      { name: "AWS" },
      { name: "Linux" },
      { name: "Figma" },
    ],
  },
];

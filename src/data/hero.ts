import { Github, Linkedin } from "lucide-react";

export const heroData = {
  greeting: "Hi, my name is",
  name: "Viktor Avelino",
  role: "Full-Stack Developer",
  description:
    "I build modern web applications with clean code and great user experiences. Passionate about crafting performant, accessible, and visually polished digital products.",
  cta: [
    { label: "View My Work", href: "#projects", variant: "default" as const },
    { label: "Get in Touch", href: "#contact", variant: "outline" as const },
  ],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/viktoravelino",
      icon: Github,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/viktoravelino",
      icon: Linkedin,
    },
  ],
};

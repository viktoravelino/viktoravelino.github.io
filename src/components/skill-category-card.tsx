import { Card } from "@/components/ui/card";
import type { SkillCategory } from "@/data/skills";

interface SkillCategoryCardProps {
  category: SkillCategory;
  delay: number;
  isVisible: boolean;
}

export function SkillCategoryCard({
  category,
  delay,
  isVisible,
}: SkillCategoryCardProps) {
  const Icon = category.icon;

  return (
    <div
      className={`scroll-reveal ${isVisible ? "scroll-reveal-visible" : ""}`}
      style={{ "--delay": delay } as React.CSSProperties}
    >
      <Card className="bg-card border-border p-6 transition-colors duration-300 hover:border-foreground/20">
        <div className="flex items-center gap-3 mb-5">
          <Icon className="size-5 text-muted-foreground" />
          <h3 className="font-serif text-lg font-normal">{category.name}</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {category.skills.map((skill) => (
            <span
              key={skill.name}
              className="text-sm text-muted-foreground font-light"
            >
              {skill.name}
            </span>
          ))}
        </div>
      </Card>
    </div>
  );
}

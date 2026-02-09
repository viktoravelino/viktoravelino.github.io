import { SkillCategoryCard } from "@/components/skill-category-card";
import { skillCategories } from "@/data/skills";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export function SkillsSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="skills" className="py-20 md:py-28 lg:py-32">
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-8">
        <div
          className={`scroll-reveal mb-12 ${isVisible ? "scroll-reveal-visible" : ""}`}
          style={{ "--delay": 0 } as React.CSSProperties}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategoryCard
              key={category.name}
              category={category}
              delay={index + 1}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

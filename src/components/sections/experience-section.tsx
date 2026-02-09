import { experienceEntries } from "@/data/experience";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { TimelineItem } from "@/components/timeline-item";

export function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="experience" className="py-20 md:py-28 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div
          ref={ref}
          className={`scroll-reveal mb-12 ${isVisible ? "scroll-reveal-visible" : ""}`}
          style={{ "--delay": 0 } as React.CSSProperties}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Continuous center line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border" />

          {experienceEntries.map((entry, index) => (
            <TimelineItem
              key={entry.company}
              entry={entry}
              index={index}
              isLast={index === experienceEntries.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;

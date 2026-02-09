import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { ExperienceEntry } from "@/data/experience";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface TimelineItemProps {
  entry: ExperienceEntry;
  index: number;
  isLast: boolean;
}

export function TimelineItem({ entry, index, isLast }: TimelineItemProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const isLeft = index % 2 === 0;
  const isCurrent = entry.endDate === "Present";

  return (
    <div ref={ref} className={isLast ? "" : "pb-12"}>
      {/* Desktop layout */}
      <div className="hidden md:grid grid-cols-2 gap-12 relative">
        {/* Center dot (positioned on the parent's center line) */}
        <div className="absolute left-1/2 top-1.5 -translate-x-1/2 z-10">
          {isCurrent && (
            <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary/30 animate-pulse scale-[2]" />
          )}
          <div className="w-3 h-3 rounded-full bg-primary border-2 border-background" />
        </div>

        {/* Left column */}
        <div>
          {isLeft && (
            <div
              className={`scroll-reveal ${isVisible ? "scroll-reveal-visible" : ""}`}
              style={{ "--delay": 1 } as React.CSSProperties}
            >
              <TimelineCard entry={entry} />
            </div>
          )}
        </div>

        {/* Right column */}
        <div>
          {!isLeft && (
            <div
              className={`scroll-reveal ${isVisible ? "scroll-reveal-visible" : ""}`}
              style={{ "--delay": 1 } as React.CSSProperties}
            >
              <TimelineCard entry={entry} />
            </div>
          )}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden flex gap-4">
        <div className="flex flex-col items-center">
          <div className="relative">
            {isCurrent && (
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary/30 animate-pulse scale-[2]" />
            )}
            <div className="w-3 h-3 rounded-full bg-primary border-2 border-background relative z-10" />
          </div>
          {!isLast && <div className="w-px flex-1 bg-border" />}
        </div>
        <div
          className={`flex-1 ${isLast ? "" : "pb-2"} scroll-reveal ${isVisible ? "scroll-reveal-visible" : ""}`}
          style={{ "--delay": 1 } as React.CSSProperties}
        >
          <TimelineCard entry={entry} />
        </div>
      </div>
    </div>
  );
}

function TimelineCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <Card className="bg-card border-border p-6 transition-colors duration-300 hover:border-foreground/20">
      <p className="text-sm font-mono text-muted-foreground mb-1">
        {entry.startDate} — {entry.endDate}
      </p>
      <h3 className="text-lg font-semibold text-foreground">{entry.company}</h3>
      <p className="text-base text-muted-foreground mb-3">{entry.role}</p>
      <p className="text-sm text-muted-foreground font-light leading-relaxed mb-3">
        {entry.description}
      </p>
      {entry.bullets && (
        <ul className="space-y-1.5 mb-4">
          {entry.bullets.map((bullet) => (
            <li
              key={bullet}
              className="text-sm text-muted-foreground font-light flex gap-2"
            >
              <span className="text-foreground/30 shrink-0">—</span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
      {entry.technologies && (
        <div className="flex flex-wrap gap-1.5">
          {entry.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs font-normal">
              {tech}
            </Badge>
          ))}
        </div>
      )}
    </Card>
  );
}

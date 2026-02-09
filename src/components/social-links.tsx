import { Button } from "@/components/ui/button";
import { heroData } from "@/data/hero";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-2">
      {heroData.socials.map((social) => (
        <Button
          key={social.label}
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          asChild
        >
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <social.icon className="size-[18px]" />
          </a>
        </Button>
      ))}
    </div>
  );
}

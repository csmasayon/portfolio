import { ExperienceCard } from "@/components/experience-card";
import type { ExperienceItem } from "@/types/experience";

interface ExperienceTimelineProps {
  items: ExperienceItem[];
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute bottom-6 left-[5px] top-6 w-px bg-border"
      />

      <ol className="space-y-6">
        {items.map((item, index) => {
          const showYear =
            index === 0 || items[index - 1].startYear !== item.startYear;

          return (
            <li
              key={`${item.startYear}-${item.title}`}
              className="relative list-none"
            >
              {showYear && (
                <p className="mb-3 pl-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {item.startYear}
                </p>
              )}

              <div className="flex items-start gap-5 sm:gap-6">
                <div
                  aria-hidden
                  className="relative z-10 mt-[1.625rem] size-[11px] shrink-0 rounded-full bg-primary shadow-[0_0_0_4px_var(--background)]"
                />

                <ExperienceCard
                  title={item.title}
                  period={item.period}
                  company={item.company}
                  employmentType={item.employmentType}
                  workMode={item.workMode}
                  location={item.location}
                  highlights={item.highlights}
                  link={item.link}
                  tags={item.tags}
                />
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

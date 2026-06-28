import Link from "next/link";
import type { ExperienceItem } from "@/types/experience";

type ExperiencePreviewProps = {
  items: ExperienceItem[];
};

export function ExperiencePreview({ items }: ExperiencePreviewProps) {
  return (
    <section id="experience">
      <div className="mb-4 flex items-end justify-between gap-3">
        <h2 className="scroll-m-20 min-w-0 text-3xl font-bold tracking-tight sm:text-4xl">
          Experience
        </h2>
        <Link
          href="/about#experience"
          className="shrink-0 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {items.map((item) => (
          <article
            key={`${item.startYear}-${item.title}`}
            className="rounded-xl border bg-card p-5 shadow-sm sm:p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="min-w-0 flex-1 text-lg font-semibold leading-snug">
                {item.title}
              </h3>
              <time className="shrink-0 text-right text-sm text-muted-foreground">
                {item.period}
              </time>
            </div>
            <p className="mt-1 text-sm text-muted-foreground sm:text-base">
              {item.company}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/90">
              {item.highlights[0]}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

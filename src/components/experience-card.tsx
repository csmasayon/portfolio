import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { ExperienceLink } from "@/types/experience";

interface ExperienceCardProps {
  title: string;
  period: string;
  company: string;
  employmentType: string;
  workMode: string;
  location?: string;
  highlights: string[];
  link?: ExperienceLink;
  tags?: string[];
  className?: string;
}

export function ExperienceCard({
  title,
  period,
  company,
  employmentType,
  workMode,
  location,
  highlights,
  link,
  tags,
  className,
}: ExperienceCardProps) {
  const isExternalLink = link?.href.startsWith("http");
  const meta = [employmentType, workMode, location].filter(Boolean).join(" · ");

  return (
    <article
      className={cn(
        "min-w-0 flex-1 rounded-xl border bg-card p-5 shadow-sm sm:p-6",
        className
      )}
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-snug sm:text-xl">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-snug text-muted-foreground sm:text-base">
            {company}
          </p>
        </div>
        <time className="shrink-0 text-sm text-muted-foreground sm:pt-0.5 sm:text-right">
          {period}
        </time>
      </div>

      <p className="mt-2 text-sm text-muted-foreground">{meta}</p>

      <ul className="mt-4 space-y-2.5">
        {highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-3 text-sm leading-relaxed sm:text-[0.9375rem]"
          >
            <span
              aria-hidden
              className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/80"
            />
            <span className="text-foreground/90">{highlight}</span>
          </li>
        ))}
      </ul>

      {(tags?.length || link) && (
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          {tags?.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
          {link &&
            (isExternalLink ? (
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                {link.label}
                <ArrowUpRight className="size-3.5" />
              </Link>
            ) : (
              <Link
                href={link.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                {link.label}
                <ArrowUpRight className="size-3.5" />
              </Link>
            ))}
        </div>
      )}
    </article>
  );
}

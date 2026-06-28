import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface EducationCardProps {
  school: string;
  year: string;
  degree: string;
  thesis?: string;
  thesisLink?: string;
  honors?: string[];
  tags?: string[];
  description?: string;
}

function ThesisLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      className="group mt-1.5 flex items-start gap-2 rounded-md text-primary"
    >
      <span className="min-w-0 flex-1 text-sm font-medium leading-relaxed group-hover:underline sm:text-base">
        {children}
      </span>
      <ArrowUpRight
        className="mt-0.5 size-4 shrink-0 opacity-80 transition-opacity group-hover:opacity-100"
        aria-hidden
      />
    </Link>
  );
}

export function EducationCard({
  school,
  year,
  degree,
  thesis,
  thesisLink,
  honors,
  tags,
  description,
}: EducationCardProps) {
  const isExternalThesisLink = thesisLink?.startsWith("http");

  return (
    <article className="flex h-full flex-col rounded-xl border bg-card p-5 shadow-sm sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <h3 className="min-w-0 flex-1 text-lg font-semibold leading-snug sm:text-xl">
          {school}
        </h3>
        <time className="shrink-0 text-right text-sm text-muted-foreground">
          {year}
        </time>
      </div>

      <p className="mt-2 text-base font-medium leading-snug">{degree}</p>

      {thesis && (
        <div className="mt-3">
          <p className="text-sm text-muted-foreground sm:text-base">Thesis:</p>
          {thesisLink ? (
            <ThesisLink href={thesisLink} external={isExternalThesisLink}>
              {thesis}
            </ThesisLink>
          ) : (
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {thesis}
            </p>
          )}
        </div>
      )}

      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      )}

      {(honors?.length || tags?.length) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {honors?.map((honor) => (
            <Badge
              key={honor}
              variant="secondary"
              className="h-auto max-w-full whitespace-normal px-2.5 py-1 text-left text-xs font-normal leading-snug"
            >
              {honor}
            </Badge>
          ))}
          {tags?.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </article>
  );
}

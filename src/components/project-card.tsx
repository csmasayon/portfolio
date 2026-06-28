import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  readMoreHref: string;
  externalLink?: string;
  githubLink?: string;
  awards?: string[];
}

export function ProjectCard({
  title,
  description,
  image,
  imageAlt,
  technologies,
  readMoreHref,
  externalLink,
  githubLink,
  awards,
}: ProjectCardProps) {
  return (
    <div className="text-card-foreground flex h-full flex-col rounded-xl border bg-card shadow-sm">
      <div className="h-48 w-full overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={imageAlt}
          width={400}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h2 className="text-lg font-semibold sm:text-xl">{title}</h2>
          <p className="mt-2 text-justify text-base text-muted-foreground">
            {description}
          </p>
          {awards && awards.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {awards.map((award) => (
                <Badge key={award} variant="secondary" className="text-xs">
                  {award}
                </Badge>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="mt-auto flex w-full justify-start gap-2">
          <Button className="flex-1" asChild>
            <Link href={readMoreHref}>Read more</Link>
          </Button>
          {externalLink && (
            <Button size="icon" asChild>
              <Link
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${title} live site`}
              >
                <ExternalLink />
              </Link>
            </Button>
          )}
          {githubLink && (
            <Button size="icon" asChild>
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} on GitHub`}
              >
                <Github />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

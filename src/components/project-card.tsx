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
}: ProjectCardProps) {
  return (
    <div className="text-card-foreground flex flex-col h-full rounded-xl bg-card border shadow-sm">
      <div className="w-full h-48 overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={imageAlt}
          width={400}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div>
          <h2 className="text-large text-lg sm:text-xl font-semibold min-h-4">
            {title}
          </h2>
          <p className="text-muted-foreground text-justify text-md sm:text-base min-h-4 mt-2">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2 justify-start w-full mt-auto">
          <Button className="flex-1" asChild>
            <Link href={readMoreHref}>Read more</Link>
          </Button>
          {externalLink && (
            <Button size="icon" asChild>
              <Link
                href={externalLink}
                target="_blank"
                rel="noopener noreferrer"
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
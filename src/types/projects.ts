export interface Project {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    technologies: string[];
    readMoreHref: string;
    externalLink?: string;
    githubLink?: string;
    featured?: boolean;
  }
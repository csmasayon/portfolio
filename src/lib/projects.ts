import { Project } from "@/types/projects";
import { projects } from "@/data/projects";

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured === true);
}

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => 
    project.readMoreHref.includes(slug)
  );
}
import { ProjectCard } from "@/components/project-card";
import { getProjectsMetadata } from "@/lib/metadata";
import { getAllProjects } from "@/lib/projects";
import { PageContainer } from "@/components/page-container";

export const metadata = getProjectsMetadata();

export default function Projects() {
  const projects = getAllProjects();

  return (
    <PageContainer className="mt-4 sm:mt-8 mb-8 space-y-8">
      <section id="projects" className="space-y-4 text-center sm:text-left">
        <h1 className="scroll-m-20 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Projects
        </h1>
        <p className="text-lg text-muted-foreground text-justify sm:text-left">
          These projects showcase my skills in various frameworks and
          programming languages, alongside solving real-world problems.
        </p>
      </section>

      <section id="projects-list">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.readMoreHref}
              title={project.title}
              description={project.description}
              image={project.image}
              imageAlt={project.imageAlt}
              technologies={project.technologies}
              readMoreHref={project.readMoreHref}
              externalLink={project.externalLink}
              githubLink={project.githubLink}
              awards={project.awards}
            />
          ))}
        </div>
      </section>
    </PageContainer>
  );
}

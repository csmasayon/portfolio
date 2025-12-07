import { ProjectCard } from "@/components/project-card";
import { getProjectsMetadata } from "@/lib/metadata";
import { getAllProjects } from "@/lib/projects";
import { Project } from "@/types/projects";


export const metadata = getProjectsMetadata();

export default function Projects() {
  const projects = getAllProjects();
  
  return (
    <div>
      <div className="max-w-6xl mt-4 sm:mt-8 mb-8 mx-6 sm:mx-4 md:mx-auto md:px-6 lg:px-8 space-y-8">
        <section id="projects" className="mb-[2em] mt-[2em]">
          <div className="grid grid-row-1 md:grid-row-2 gap-6 md:gap-6 mb-8">
            <div className="flex flex-col gap-1 order-2 items-center">
              <h1 className="scroll-m-20 text-3xl sm:text-4xl text-center sm:text-left font-bold tracking-tight text-balance mb-4">
                Projects
              </h1>
              <p className="text-muted-foreground text-justify text-lg min-h-4">
                These projects showcase my skills in various frameworks and
                programming languages, alongside solving real-world problems.
              </p>
            </div>
          </div>
        </section>

        <section id="projects-list" className="mb-[2em] mt-[2em]">
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project: Project, index: number) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                imageAlt={project.imageAlt}
                technologies={project.technologies}
                readMoreHref={project.readMoreHref}
                externalLink={project.externalLink}
                githubLink={project.githubLink}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

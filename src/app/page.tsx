import Link from "next/link";
import { ContactCta } from "@/components/contact-cta";
import { ExperiencePreview } from "@/components/experience-preview";
import { HomeHero } from "@/components/home-hero";
import { PageContainer } from "@/components/page-container";
import { ProjectCard } from "@/components/project-card";
import { SkillsSection } from "@/components/skills-section";
import { experience } from "@/data/experience";
import { getHomeMetadata } from "@/lib/metadata";
import { getFeaturedProjects } from "@/lib/projects";

export const metadata = getHomeMetadata();

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const recentExperience = experience.slice(0, 2);

  return (
    <PageContainer className="mt-4 sm:mt-8 min-[1920px]:mt-10 mb-8 min-[1920px]:mb-14 space-y-8 sm:space-y-10 min-[1920px]:space-y-14">
      <HomeHero />
      <ExperiencePreview items={recentExperience} />
      <section id="projects">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="scroll-m-20 min-w-0 pb-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Highlighted Projects
          </h2>
          <Link
            href="/projects"
            className="shrink-0 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            View all →
          </Link>
        </div>
        <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 min-[1920px]:gap-6">
          {featuredProjects.map((project) => (
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
      <SkillsSection />
      <ContactCta />
    </PageContainer>
  );
}

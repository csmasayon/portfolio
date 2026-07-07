import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, SlashIcon } from "lucide-react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { getProjectMetadata } from "@/lib/metadata";
import { PageContainer } from "@/components/page-container";
import { getProjectSlugs } from "@/lib/projects";

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const mdxModule = await import(`@/content/projects/${slug}.mdx`);
    const mdxMetadata = mdxModule.metadata || {};

    const title =
      mdxMetadata.title ||
      slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
    const description = mdxMetadata.description || `Details about ${slug}`;

    return getProjectMetadata(
      title,
      description,
      mdxMetadata.image,
      mdxMetadata.imageAlt,
      slug
    );
  } catch (error) {
    console.error("Error generating metadata for project:", error);
    return getProjectMetadata(
      "Project not found",
      "The project you are looking for does not exist."
    );
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let mdxModule;
  try {
    mdxModule = await import(`@/content/projects/${slug}.mdx`);
  } catch (error) {
    console.error("Error rendering project page:", error);
    notFound();
  }

  const mdxMetadata = mdxModule.metadata || {};
  const ProjectContent = mdxModule.default;

  return (
    <PageContainer className="mt-4 sm:mt-8 min-[1920px]:mt-10 mb-8 min-[1920px]:mb-14 space-y-8 min-[1920px]:space-y-12">
      <Breadcrumb>
        <BreadcrumbList className="mb-4">
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/projects">projects</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>
            <SlashIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>{mdxMetadata.title || slug}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <article className="prose prose-lg dark:prose-invert max-w-none">
        <ProjectContent />
      </article>
      <div className="flex justify-center">
        <Button className="mt-4 align-center" asChild>
          <Link href="/projects">
            <ArrowLeft />
            Back to Projects
          </Link>
        </Button>
      </div>
    </PageContainer>
  );
}

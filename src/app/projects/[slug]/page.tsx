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

export async function generateStaticParams() {
  return [
    { slug: "upmin-som-website" },
    { slug: "trabahanap" },
    { slug: "pfats" },
  ];
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

    return {
      title:
        mdxMetadata.title ||
        slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      description: mdxMetadata.description || `Details about ${slug}`,
    };
  } catch (error) {
    return {
      title: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      description: `Details about ${slug}`,
    };
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const mdxModule = await import(`@/content/projects/${slug}.mdx`);
    const mdxMetadata = mdxModule.metadata || {};

    const ProjectContent = mdxModule.default;

    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
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
        <article className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
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
      </div>
    );
  } catch (error) {
    notFound();
  }
}

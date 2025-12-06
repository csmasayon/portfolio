import type { Metadata } from "next";

export const siteConfig = {
    name: "Christian Ace Masayon",
    title: "Christian Ace Masayon - Fullstack Web Developer | UX & UI Designer",
    description: "Christian Ace Masayon is a Computer Science graduate specializing in full-stack development and user-centered UI/UX design.",
    url: "https://csmasayon.com",
    ogImage: "/og-image.png",
    keywords: [
        "Christian Ace Masayon",
        "Fullstack Developer",
        "UX Designer",
        "React Developer",
        "Node.js Developer",
        "MERN Stack",
        "Portfolio",
        "Philippines Developer",
        "Web Development",
        "Mobile Development"
    ],
} as const;

function getAbsoluteUrl(path: string = ""): string {
    return `${siteConfig.url}${path}`;
}

function getImageUrl(imagePath?: string): string {
    if (!imagePath) return getAbsoluteUrl(siteConfig.ogImage);
    if (imagePath.startsWith("http")) return imagePath;
    return getAbsoluteUrl(imagePath);
}

export function getBaseMetadata(): Metadata {
    return {
      metadataBase: new URL(siteConfig.url),
      authors: [{ name: siteConfig.name }],
      creator: siteConfig.name,
      keywords: siteConfig.keywords.join(", "),
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }
  
  // Generate metadata for any page
  export interface GenerateMetadataOptions {
    title?: string;
    description?: string;
    path?: string;
    image?: string;
    imageAlt?: string;
    type?: "website" | "article";
    noIndex?: boolean;
  }
  
  export function generateMetadata({
    title,
    description,
    path = "",
    image,
    imageAlt,
    type = "website",
    noIndex = false,
  }: GenerateMetadataOptions): Metadata {
    const fullTitle = title 
      ? `${title} | ${siteConfig.name}`
      : siteConfig.title;
    const fullDescription = description || siteConfig.description;
    const fullUrl = getAbsoluteUrl(path);
    const imageUrl = getImageUrl(image);
    const altText = imageAlt || title || siteConfig.name;
  
    return {
      ...getBaseMetadata(),
      title: title || siteConfig.title,
      description: fullDescription,
      openGraph: {
        type,
        locale: "en_US",
        url: fullUrl,
        title: fullTitle,
        description: fullDescription,
        siteName: `${siteConfig.name} Portfolio`,
        images: [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: altText,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: fullTitle,
        description: fullDescription,
        images: [imageUrl],
      },
      ...(noIndex && {
        robots: {
          index: false,
          follow: false,
        },
      }),
    };
  }
  
  // Specific helpers for common page types
  export function getHomeMetadata(): Metadata {
    return generateMetadata({
      title: undefined, // Uses default
      description: siteConfig.description,
      path: "/",
    });
  }
  
  export function getAboutMetadata(): Metadata {
    return generateMetadata({
      title: "About",
      description: `Learn more about ${siteConfig.name}, a Computer Science graduate from University of the Philippines Mindanao, specializing in full-stack development and UX/UI design.`,
      path: "/about",
    });
  }
  
  export function getProjectsMetadata(): Metadata {
    return generateMetadata({
      title: "Projects",
      description: `Explore projects by ${siteConfig.name} including web applications, mobile apps, and full-stack solutions built with modern technologies.`,
      path: "/projects",
    });
  }
  
  export function getProjectMetadata(
    projectTitle: string,
    projectDescription: string,
    projectImage?: string,
    projectImageAlt?: string,
    slug?: string
  ): Metadata {
    return generateMetadata({
      title: projectTitle,
      description: projectDescription,
      path: slug ? `/projects/${slug}` : undefined,
      image: projectImage,
      imageAlt: projectImageAlt || projectTitle,
      type: "article",
    });
  }
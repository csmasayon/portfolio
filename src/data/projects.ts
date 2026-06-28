import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    title: "UP Mindanao School of Management Website",
    description:
      "WordPress site for UP Mindanao's School of Management with program info, personnel pages, and staff training.",
    image: "/images/somup.png",
    imageAlt: "UP Mindanao School of Management Website",
    technologies: [
      "WordPress",
      "Elementor",
      "PHP",
      "Amazon Lightsail",
      "AWS",
      "NGINX",
      "Ubuntu",
    ],
    readMoreHref: "/projects/upmin-som-website",
    externalLink: "https://som.upmin.edu.ph",
    featured: true,
  },
  {
    title: "TrabaHanap",
    description:
      "Job-matching mobile app for blue-collar workers in Davao City, developed as an undergraduate thesis.",
    image: "/images/trabahanap.png",
    imageAlt: "TrabaHanap",
    technologies: [
      "MongoDB",
      "Express",
      "React Native",
      "Node.js",
      "Expo",
      "Figma",
      "Tailwind CSS",
      "TypeScript",
    ],
    readMoreHref: "/projects/trabahanap",
    featured: true,
    awards: [
      "Best Venture in CS · UP Mindanao (2024)",
      "2nd Runner-up · QOMPETE (2024)",
    ],
  },
  {
    title: "Physical Fitness Activity Tracker System",
    description:
      "Web app for tracking physical fitness activities using the Strava API.",
    image: "/images/pfats.png",
    imageAlt: "Physical Fitness Activity Tracker System",
    technologies: [
      "NextJS",
      "React",
      "Express",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "Strava API",
    ],
    readMoreHref: "/projects/pfats",
    externalLink: "https://pfats-v1.vercel.app",
    githubLink: "https://github.com/csmasayon/pfats",
    featured: true,
  },
];

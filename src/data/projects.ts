import { Project } from "@/types/projects";

export const projects: Project[] = [
    {
      "title": "UP Mindanao School of Management Website",
      "description": "A website for UP Mindanao's School of Management",
      "image": "/images/somup.png",
      "imageAlt": "UP Mindanao School of Management Website",
      "technologies": [
        "WordPress",
        "Elementor",
        "PHP",
        "Amazon Lightsail",
        "AWS",
        "NGINX",
        "Ubuntu"
      ],
      "readMoreHref": "/projects/upmin-som-website",
      "externalLink": "https://som.upmin.edu.ph",
      "featured": true,
    },
    {
      "title": "TrabaHanap",
      "description": "A job-matching mobile application",
      "image": "/images/trabahanap.png",
      "imageAlt": "TrabaHanap",
      "technologies": [
        "MongoDB",
        "Express",
        "React Native",
        "Node.js",
        "Expo",
        "Figma",
        "Tailwind CSS",
        "TypeScript"
      ],
      "readMoreHref": "/projects/trabahanap",
      "featured": true,
    },
    {
      "title": "Physical Fitness Activity Tracker System",
      "description": "A physical fitness activity tracker system using the Strava API",
      "image": "/images/pfats.png",
      "imageAlt": "Physical Fitness Activity Tracker System",
      "technologies": [
        "NextJS",
        "React",
        "Express",
        "TypeScript",
        "Node.js",
        "Tailwind CSS",
        "Strava API"
      ],
      "readMoreHref": "/projects/pfats",
      "externalLink": "https://pfats-v1.vercel.app",
      "githubLink": "https://github.com/csmasayon/pfats",
      "featured": true,
    }
  ];
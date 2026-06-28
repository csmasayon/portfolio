export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: ["Next.js", "React", "Vite", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Backend Development",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Express", "Firebase", "Node.js"],
  },
  {
    title: "Mobile Development",
    skills: ["React Native", "Expo"],
  },
  {
    title: "UX & UI Design",
    skills: ["Figma", "UI/UX Design", "Prototyping", "Usability Testing"],
  },
  {
    title: "Tools & Technologies",
    skills: ["Git", "GitHub", "cURL", "Vercel", "AWS"],
  },
  {
    title: "Programming Languages",
    skills: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL", "Python", "PHP"],
  },
];

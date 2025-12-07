"use client";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github, Mail, } from "lucide-react";
import Image from "next/image";
import {
  NextjsIcon,
  ReactIcon,
  NodeIcon,
  MongodbIcon,
  MysqlIcon,
  TailwindIcon,
  FigmaIcon,
  GitIcon,
  GitHubIcon,
  FirebaseIcon,
  PythonIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  HtmlIcon,
  CssIcon,
  AWSIcon,
  ExpressIcon,
  PostmanIcon,
  ShadcnIcon,
  ExpoIcon,
  VercelIcon,
  RenderIcon,
  SQLIcon,
  PHPIcon,
  VSCIcon,
  CanvaIcon,
} from "@/components/svg/icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";
import { EducationCard } from "@/components/education-card";
import { getFeaturedProjects } from "@/lib/projects";
import { Project } from "@/types/projects";
import { education } from "@/data/education";

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const featuredProjects = getFeaturedProjects();

  useEffect(() => {
    const roles = ["fullstack web developer.", "UX & UI designer."];
    const currentText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 30 : 50; // Faster when deleting
    const pauseAfterComplete = 3000; // Pause before switching

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => {
          setIsDeleting(true);
        }, pauseAfterComplete);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRoleIndex]);

  return (
    <div>
      <div className="max-w-6xl mt-4 sm:mt-8 mb-8 mx-6 sm:mx-4 md:mx-auto md:px-6 lg:px-8 space-y-8">
        <section id="home" className="py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6">
            <div className="flex flex-col gap-1 order-2 md:order-1 items-center md:items-start">
              <h1 className="scroll-m-20 text-3xl sm:text-5xl text-center md:text-left font-bold tracking-tight text-balance">
                Hi, I&apos;m Christian Ace Masayon. 👋
              </h1>
              <h2 className="scroll-m-20 text-lg sm:text-2xl text-center font-semibold tracking-tight text-balance">
                I&apos;m a{" "}
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  className="inline-block"
                >
                  {displayedText}
                </motion.span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.9, repeat: Infinity }}
                  className="inline-block ml-1"
                >
                  {"|"}
                </motion.span>
              </h2>
              <h3 className="scroll-m-20 text-base sm:text-lg text-justify font-normal tracking-tight text-balance text-muted-foreground">
                Based in the Philippines
              </h3>
              <h3 className="scroll-m-20 text-base sm:text-lg text-justify font-normal tracking-tight text-balance">
                I create intuitive user interfaces, and ensure seamless user
                experiences across platforms. I&apos;m also adept at working in
                agile environments and collaborating across teams. In my free
                time, I enjoy creating music and exploring new technologies.
              </h3>
              <div className="flex gap-2 mt-2 justify-center sm:justify-start">
                <Button size="lg" asChild>
                  <Link
                    href="/docs/MASAYON-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    <Download />
                    Download Resume
                  </Link>
                </Button>
                <Button size="lg" asChild>
                  <Link
                    href="https://www.linkedin.com/in/christian-ace-masayon/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin />
                  </Link>
                </Button>
                <Button size="lg" asChild>
                  <Link
                    href="https://github.com/christian-ace-masayon"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                  </Link>
                </Button>
                <Button size="lg" asChild>
                  <Link href="mailto:casmasayon@gmail.com" target="_blank">
                    <Mail />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center order-1 md:order-2 ">
              <Image
                src="/images/portrait.PNG"
                alt="Christian Ace Masayon"
                width={250}
                height={250}
                className="w-40 sm:w-[250px] h-auto rounded-xl m-auto"
              />
            </div>
          </div>
        </section>

        <section id="skills" className="mb-[2em] mt-[2em]">
          <div>
            <h2 className="scroll-m-20 pb-2 text-3xl sm:text-4xl font-bold tracking-tight my-4">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-center">
                    Frontend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center items-center">
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <NextjsIcon className="w-6 h-6" /> Next.js
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <ReactIcon className="w-6 h-6" /> React
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <TailwindIcon className="w-6 h-6" /> Tailwind CSS
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card ">
                      <ShadcnIcon className="w-6 h-6" /> shadcn/ui
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-center">
                    Backend Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center items-center">
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <MongodbIcon className="w-6 h-6" /> MongoDB
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <MysqlIcon className="w-6 h-6" /> MySQL
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <ExpressIcon className="w-6 h-6" /> Express
                    </div>

                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <FirebaseIcon className="w-6 h-6" /> Firebase
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <NodeIcon className="w-6 h-6" /> Node.js
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-center">
                    Tools & Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center items-center">
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <FigmaIcon className="w-6 h-6" /> Figma
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <GitIcon className="w-6 h-6" /> Git
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <GitHubIcon className="w-6 h-6" /> GitHub
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <PostmanIcon className="w-6 h-6" /> Postman
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <VercelIcon className="w-6 h-6" /> Vercel
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <AWSIcon className="w-6 h-6" /> AWS
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <ExpoIcon className="w-6 h-6" /> Expo
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <RenderIcon className="w-6 h-6" /> Render
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <VSCIcon className="w-6 h-6" /> Visual Studio Code
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <CanvaIcon className="w-6 h-6" /> Canva
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-center">
                    Programming Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center items-center">
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <TypeScriptIcon className="w-6 h-6" /> TypeScript
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <JavaScriptIcon className="w-6 h-6" /> JavaScript
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <HtmlIcon className="w-6 h-6" /> HTML
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <CssIcon className="w-6 h-6" /> CSS
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <SQLIcon className="w-6 h-6" /> SQL
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <PythonIcon className="w-6 h-6" /> Python
                    </div>
                    <div className="border border-neutral-700 dark:border-neutral-300 shadow-sm rounded-md p-2 flex flex-wrap gap-2 justify-center items-center bg-card">
                      <PHPIcon className="w-6 h-6" /> PHP
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="education" className="mb-[2em] mt-[2em]">
          <div>
            <h2 className="scroll-m-20 pb-2 text-3xl sm:text-4xl font-bold tracking-tight my-4">
              Education
            </h2>
            <div className="space-y-4 sm:space-y-8">
              {education.map((education, index) => (
                <EducationCard
                  key={index}
                  school={education.school}
                  year={education.year}
                  degree={education.degree}
                  description={education.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mb-[2em] mt-[em]">
          <div>
            <h2 className="scroll-m-20 pb-2 text-3xl sm:text-4xl font-bold tracking-tight my-4">
              Highlighted Projects
            </h2>
          </div>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProjects.map((project: Project, index: number) => (
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

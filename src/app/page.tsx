"use client";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Github, Mail, ExternalLink } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "@/components/svg/icons";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const roles = ["fullstack web developer.", "UX & UI designer."];
  const [displayedText, setDisplayedText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
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
  }, [charIndex, isDeleting, currentRoleIndex, roles]);

  return (
    <div>
      <div className="max-w-6xl mt-4 sm:mt-8 sm:mb-8 lg:mx-auto sm:mx-auto space-y-8 mx-4">
        <section id="home" className="py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6">
            <div className="flex flex-col gap-1 order-2 md:order-1 items-center md:items-start">
              <h1 className="scroll-m-20 text-3xl sm:text-4xl text-center sm:text-left font-bold tracking-tight text-balance">
                Hi, I&apos;m Christian Ace Masayon.
              </h1>
              <h2 className="scroll-m-20 text-lg sm:text-xl text-center sm:text-left  font-semibold tracking-tight text-balance">
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
              <h3 className="scroll-m-20 text-base sm:text-large text-justify font-normal tracking-tight text-balance text-muted-foreground">
                Based in Tagum City, Davao del Norte, Philippines
              </h3>
              <h3 className="scroll-m-20 text-base sm:text-large text-justify font-normal tracking-tight text-balance">
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
            <div className="flex justify-center sm:justify-center order-1 md:order-2">
              <Image
                src="/images/portrait.PNG"
                alt="Christian Ace Masayon"
                width={250}
                height={250}
                className="rounded-4xl mx-auto md:mx-0"
              />
            </div>
          </div>
        </section>

        <section id="skills">
          <div>
            <h2 className="scroll-m-20 pb-2 text-2xl sm:text-3xl font-bold tracking-tight">
              Skills
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center mt-2">
            <div className="text-lg sm:text-lg items-center font-bold tracking-tight bg-card text-card-foreground flex flex-row gap-2 rounded-xl border p-4 shadow-sm">
              <NextjsIcon className="w-6 h-6" />
              <h2>Next.js</h2>
            </div>
            <div className="text-lg sm:text-lg items-center font-bold tracking-tight bg-card text-card-foreground flex flex-row gap-2 rounded-xl border p-4 shadow-sm">
              <ReactIcon className="w-6 h-6" />
              <h2>React</h2>
            </div>
            <div className="text-lg sm:text-lg items-center font-bold tracking-tight bg-card text-card-foreground flex flex-row gap-2 rounded-xl border p-4 shadow-sm">
              <NodeIcon className="w-6 h-6" />
              <h2>Node.js</h2>
            </div>
            <div className="text-lg sm:text-lg items-center font-bold tracking-tight bg-card text-card-foreground flex flex-row gap-2 rounded-xl border p-4 shadow-sm">
              <TailwindIcon className="w-6 h-6" />
              <h2>Tailwind CSS</h2>
            </div>
            <div className="text-lg sm:text-lg items-center font-bold tracking-tight bg-card text-card-foreground flex flex-row gap-2 rounded-xl border p-4 shadow-sm">
              <MongodbIcon className="w-6 h-6" />
              <h2>MongoDB</h2>
            </div>
            <div className="text-lg sm:text-lg items-center font-bold tracking-tight bg-card text-card-foreground flex flex-row gap-2 rounded-xl border p-4 shadow-sm">
              <MysqlIcon className="w-6 h-6" />
              <h2>MySQL</h2>
            </div>
            <div className="text-lg sm:text-lg items-center font-bold tracking-tight bg-card text-card-foreground flex flex-row gap-2 rounded-xl border p-4 shadow-sm">
              <FirebaseIcon className="w-6 h-6" />
              <h2>Firebase</h2>
            </div>
            <div className="text-lg sm:text-lg items-center font-bold tracking-tight bg-card text-card-foreground flex flex-row gap-2 rounded-xl border p-4 shadow-sm">
              <AWSIcon className="w-6 h-6" />
              <h2>AWS</h2>
            </div>
            <div className="text-lg sm:text-lg items-center font-bold tracking-tight bg-card text-card-foreground flex flex-row gap-2 rounded-xl border p-4 shadow-sm">
              <PythonIcon className="w-6 h-6" />
              <h2>Python</h2>
            </div>
            <div className="text-lg sm:text-lg items-center font-bold tracking-tight bg-card text-card-foreground flex flex-row gap-2 rounded-xl border p-4 shadow-sm">
              <TypeScriptIcon className="w-6 h-6" />
              <h2>TypeScript</h2>
            </div>
            <div className="text-lg sm:text-lg items-center font-bold tracking-tight bg-card text-card-foreground flex flex-row gap-2 rounded-xl border p-4 shadow-sm">
              <JavaScriptIcon className="w-6 h-6" />
              <h2>JavaScript</h2>
            </div>
            <div className="text-lg sm:text-lg items-center font-bold tracking-tight bg-card text-card-foreground flex flex-row gap-2 rounded-xl border p-4 shadow-sm">
              <HtmlIcon className="w-6 h-6" />
              <h2>HTML</h2>
            </div>
            <div className="text-lg sm:text-lg items-center font-bold tracking-tight bg-card text-card-foreground flex flex-row gap-2 rounded-xl border p-4 shadow-sm">
              <CssIcon className="w-6 h-6" />
              <h2>CSS</h2>
            </div>
            <div className="text-lg sm:text-lg items-center font-bold tracking-tight bg-card text-card-foreground flex flex-row gap-2 rounded-xl border p-4 shadow-sm">
              <FigmaIcon className="w-6 h-6" />
              <h2>Figma</h2>
            </div>
            <div className="text-lg sm:text-lg items-center font-bold tracking-tight bg-card text-card-foreground flex flex-row gap-2 rounded-xl border p-4 shadow-sm">
              <GitIcon className="w-6 h-6" />
              <h2>Git</h2>
            </div>
            <div className="text-lg sm:text-lg items-center font-bold tracking-tight bg-card text-card-foreground flex flex-row gap-2 rounded-xl border p-4 shadow-sm">
              <GitHubIcon className="w-6 h-6" />
              <h2>GitHub</h2>
            </div>
          </div>
        </section>

        <section id="education">
          <div>
            <h2 className="scroll-m-20 pb-2 text-2xl sm:text-3xl font-bold tracking-tight my-4">
              Education
            </h2>
            <div className="text-card-foreground flex flex-col h-full rounded-xl bg-card border shadow-sm p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
                <h3 className="font-semibold text-base sm:text-lg md:text-xl">
                  University of the Philippines Mindanao
                </h3>
                <Badge className="w-fit">
                  <p className="text-xs sm:text-sm">2020-2024</p>
                </Badge>
              </div>
              <p className="text-sm sm:text-base mt-2">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-sm sm:text-base text-muted-foreground mt-2 text-justify">
                Thesis: Usability and User Experience Analysis on the Impact of
                the Implementation of Local Cultural Elements on TrabaHanap: A
                Job-Matching Mobile Application Using System Usability Scale
                (SUS) and User Experience Questionnaire-Short (UEQ-S)
              </p>
            </div>
          </div>
        </section>

        <section id="projects">
          <div>
            <h2 className="scroll-m-20 pb-2 text-2xl sm:text-3xl font-bold tracking-tight my-4">
              Highlighted Projects
            </h2>
          </div>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="text-card-foreground flex flex-col h-full rounded-xl bg-card border shadow-sm">
              <div className="w-full h-48 overflow-hidden rounded-t-xl">
                <Image
                  src="/images/somup.png"
                  alt="UP Mindanao School of Management Website"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 p-6 flex-1">
                <h2 className="text-large leading-none font-semibold min-h-4">
                  UP Mindanao School of Management Website
                </h2>
                <p className="text-muted-foreground text-justify text-sm min-h-4">
                  A website for UP Mindanao's School of Management
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">WordPress</Badge>
                  <Badge variant="outline">Elementor</Badge>
                  <Badge variant="outline">PHP</Badge>
                  <Badge variant="outline">Amazon Lightsail</Badge>
                  <Badge variant="outline">AWS</Badge>
                  <Badge variant="outline">NGINX</Badge>
                  <Badge variant="outline">Ubuntu</Badge>
                </div>
                <div className="flex gap-2 justify-start w-full mt-auto">
                  <Button className="flex-1" asChild>
                    <Link href="/projects/upmin-som-website">Read more</Link>
                  </Button>
                  <Button size="icon" asChild>
                    <Link
                      href="https://som.upmin.edu.ph"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-card-foreground flex flex-col h-full rounded-xl bg-card border shadow-sm">
              <div className="w-full h-48 overflow-hidden rounded-t-xl">
                <Image
                  src="/images/trabahanap.png"
                  alt="TrabaHanap"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 p-6 flex-1">
                <h2 className="text-large leading-none font-semibold min-h-4">
                  TrabaHanap
                </h2>
                <p className="text-muted-foreground text-justify text-sm min-h-4">
                  A job-matching mobile application
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">Express</Badge>
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Expo</Badge>
                  <Badge variant="outline">Figma</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                </div>
                <div className="flex gap-2 justify-start w-full mt-auto">
                  <Button className="flex-1" asChild>
                    <Link href="/projects/trabahanap">Read more</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="text-card-foreground flex flex-col h-full rounded-xl bg-card border shadow-sm">
              <div className="w-full h-48 overflow-hidden rounded-t-xl">
                <Image
                  src="/images/pfats.png"
                  alt="Physical Fitness Activity Tracker System"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 p-6 flex-1">
                <h2 className="text-large leading-none font-semibold min-h-4">
                  Physical Fitness Activity Tracker System
                </h2>
                <p className="text-muted-foreground text-justify text-sm min-h-4">
                  A physical fitness activity tracker system using the Strava
                  API
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">NextJS</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Express</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">Strava API</Badge>
                </div>
                <div className="flex gap-2 justify-start w-full mt-auto">
                  <Button className="flex-1" asChild>
                    <Link href="/projects/pfats">Read more</Link>
                  </Button>
                  <Button size="icon" asChild>
                    <Link
                      href="https://pfats.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink />
                    </Link>
                  </Button>
                  <Button size="icon" asChild>
                    <Link
                      href="https://github.com/csmasayon/pfats"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

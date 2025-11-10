import { Button } from "@/components/ui/button";
import {
  Download,
  Linkedin,
  Github,
  Mail,
  ExternalLink,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
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

export default function Home() {
  return (
    <div>
      <div className="max-w-6xl mt-4 sm:mt-8 sm:mb-8 lg:mx-auto sm:mx-auto space-y-8 mx-4">
        <section id="home" className="mb-2 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6">
            <div className="flex flex-col gap-1 order-2 md:order-1 items-center md:items-start">
              <h1 className="scroll-m-20 text-3xl sm:text-4xl text-center sm:text-left font-bold tracking-tight text-balance">
                Christian Ace Masayon
              </h1>
              <h2 className="scroll-m-20 text-lg sm:text-xl text-center sm:text-left  font-semibold tracking-tight text-balance">
                I am a fullstack web developer and a UX & UI designer.
              </h2>
              <h3 className="scroll-m-20 text-base sm:text-xl text-center sm:text-left  font-normal tracking-tight text-balance">
                Based in Tagum City, Davao del Norte, Philippines
              </h3>

              <Button size="lg" asChild>
                <a
                  href="/docs/MASAYON-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <Download />
                  Download CV
                </a>
              </Button>

              <div className="flex gap-2 mt-2 justify-center sm:justify-start">
                <a
                  href="https://www.linkedin.com/in/christian-ace-masayon/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/christian-ace-masayon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
                <a href="mailto:casmasayon@gmail.com" target="_blank">
                  <Mail />
                </a>
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

        <section id="about">
          <div className="mb-2 mt-8">
            <h2 className="scroll-m-20 pb-2 text-2xl sm:text-3xl font-bold tracking-tight">
              About Me
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-justify">
              I am a Computer Science graduate from the University of the
              Philippines Mindanao, specializing in full-stack development with
              the MERN stack and user-centered UI/UX design. With hands-on
              experience in mobile and web development, I have successfully
              built solutions that solve real-world problems, such as developing
              TrabaHanap, a job-matching mobile application, and contributing to
              the PASYENTE Project for Dengue&apos;s mobile app.
            </p>
            <p className="text-justify">
              My skills include frontend and backend development, creating
              intuitive user interfaces, and ensuring seamless user experiences
              across platforms. Adept at working in agile environments and
              collaborating across teams. In my free time, I enjoy creating
              music and exploring new technologies.
            </p>
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
          <div className="mb-2 mt-8">
            <h2 className="scroll-m-20 pb-2 text-2xl sm:text-3xl font-bold tracking-tight">
              Education
            </h2>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <h3 className="font-semibold text-justify text-lg sm:text-xl">
                  University of the Philippines Mindanao
                </h3>
                <p className="text-sm text-muted-foreground text-justify">
                  2020-2024
                </p>
              </div>
              <p className="text-justify">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-justify">
                Thesis: Usability and User Experience Analysis on the Impact of
                the Implementation of Local Cultural Elements on TrabaHanap: A
                Job-Matching Mobile Application Using System Usability Scale
                (SUS) and User Experience Questionnaire-Short (UEQ-S)
              </p>
            </div>
          </div>
        </section>

        <section id="projects">
          <div className="mb-2 mt-8">
            <h2 className="scroll-m-20 pb-2 text-2xl sm:text-3xl font-bold tracking-tight">
              Highlighted Projects
            </h2>
          </div>
          <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>UP Mindanao School of Management Website</CardTitle>
                <CardDescription>
                  A website for UP Mindanao&apos;s School of Management
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex items-center justify-center">
                <Image
                  src="/images/somup.png"
                  alt="UP Mindanao School of Management Website"
                  width={400}
                  height={400}
                  className="rounded-xl mx-auto w-full h-auto object-contain"
                />
              </CardContent>
              <CardFooter className="flex flex-col gap-4 items-start mt-auto">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">WordPress</Badge>
                  <Badge variant="outline">Elementor</Badge>
                  <Badge variant="outline">PHP</Badge>
                  <Badge variant="outline">Amazon Lightsail</Badge>
                  <Badge variant="outline">AWS</Badge>
                  <Badge variant="outline">NGINX</Badge>
                  <Badge variant="outline">Ubuntu</Badge>
                </div>
                <div className="flex gap-2 justify-start w-full">
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
              </CardFooter>
            </Card>

            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>TrabaHanap</CardTitle>
                <CardDescription>
                  A job-matching mobile application
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex items-center justify-center">
                <Image
                  src="/images/trabahanap.png"
                  alt="TrabaHanap"
                  width={400}
                  height={400}
                  className="rounded-xl mx-auto w-full h-auto object-contain"
                />
              </CardContent>
              <CardFooter className="flex flex-col gap-4 items-start mt-auto">
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
                <div className="flex gap-2 justify-start w-full">
                  <Button className="flex-1" asChild>
                    <Link href="/projects/trabahanap">Read more</Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>Physical Fitness Activity Tracker System</CardTitle>
                <CardDescription>
                  A physical fitness activity tracker system using the Strava
                  API
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex items-center justify-center">
                <Image
                  src="/images/pfats.png"
                  alt="Physical Fitness Activity Tracker System"
                  width={400}
                  height={400}
                  className="rounded-xl mx-auto w-full h-auto object-contain"
                />
              </CardContent>
              <CardFooter className="flex flex-col gap-4 items-start mt-auto">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">NextJS</Badge>
                  <Badge variant="outline">React</Badge>
                  <Badge variant="outline">Express</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">Strava API</Badge>
                </div>
                <div className="flex gap-2 justify-start w-full">
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
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

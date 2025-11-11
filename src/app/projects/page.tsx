import Image from "next/image";
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
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <div className="max-w-6xl mt-4 sm:mt-8 sm:mb-8 lg:mx-auto sm:mx-auto space-y-8 mx-4">
        <section id="projects" className="mb-2 mt-8">
          <div className="grid grid-row-1 md:grid-row-2 gap-6 md:gap-6 mb-8">
            <div className="flex flex-col gap-1 order-2 items-center">
              <h1 className="scroll-m-20 text-3xl sm:text-4xl text-center sm:text-left font-bold tracking-tight text-balance">
                Projects
              </h1>
              <p className="text-muted-foreground text-justify text-lg min-h-4">
                These projects showcase my skills in various frameworks and programming languages, alongside solving real-world problems.
              </p>
            </div>
          </div>
        </section>

        <section id="projects-list">
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

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
            </div>
          </div>
        </section>

        <section id="projects-list">
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
                    <a
                      href="https://som.upmin.edu.ph"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink />
                    </a>
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

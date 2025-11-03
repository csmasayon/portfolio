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

export default function Projects() {
  return (
    <div>
      <div className="max-w-4xl mt-4 sm:mt-8 sm:mb-8 lg:mx-auto sm:mx-auto space-y-8 mx-4">
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
          <div className="flex flex-col gap-4">
            <Card>
              <CardHeader>
                <CardTitle>UP Mindanao School of Management Website</CardTitle>
                <CardDescription>
                  A website for UP Mindanao&apos;s School of Management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src="/images/somup.png"
                        alt="UP Mindanao School of Management Website"
                        width={625}
                        height={625}
                        className="rounded-xl mx-auto w-auto h-auto max-w-full object-contain"
                        loading="lazy"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/images/somup2.png"
                        alt="UP Mindanao School of Management Website"
                        width={625}
                        height={625}
                        className="rounded-xl mx-auto w-auto h-auto max-w-full object-contain"
                        loading="lazy"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/images/somup3.png"
                        alt="UP Mindanao School of Management Website"
                        width={625}
                        height={625}
                        className="rounded-xl mx-auto w-auto h-auto max-w-full object-contain"
                        loading="lazy"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="hidden lg:flex ml-14" />
                  <CarouselNext className="hidden lg:flex mr-14" />
                </Carousel>
                <div className="flex flex-col gap-3 mt-4">
                  <p className="text-justify">
                    I created and deployed the UP Mindanao School of Management
                    website with comprehensive information on personnel, program
                    offerings, and activities to ensure accessibility and
                    relevance. I also developed dedicated pages for the SOM
                    College Secretary&apos;s services, streamlining access to
                    essential resources and improving user experience.
                    Additionally, I trained faculty and administrative staff,
                    equipping them with the skills to maintain and update the
                    site for long-term sustainability.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4 items-start">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">WordPress</Badge>
                    <Badge variant="outline">Elementor</Badge>
                    <Badge variant="outline">PHP</Badge>
                    <Badge variant="outline">Amazon Lightsail</Badge>
                    <Badge variant="outline">AWS</Badge>
                    <Badge variant="outline">NGINX</Badge>
                    <Badge variant="outline">Ubuntu</Badge>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 justify-start">
                    <a
                      href="https://som.upmin.edu.ph"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink />
                    </a>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>TrabaHanap</CardTitle>
                <CardDescription>
                  A job-matching mobile application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <Image
                        src="/images/1.png"
                        alt="TrabaHanap"
                        width={200}
                        height={200}
                        className="rounded-xl mx-auto w-auto h-auto max-w-full object-contain"
                        loading="lazy"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/images/2.png"
                        alt="TrabaHanap"
                        width={200}
                        height={200}
                        className="rounded-xl mx-auto w-auto h-auto max-w-full object-contain"
                        loading="lazy"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/images/3.png"
                        alt="TrabaHanap"
                        width={200}
                        height={200}
                        className="rounded-xl mx-auto w-auto h-auto max-w-full object-contain"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/images/4.png"
                        alt="TrabaHanap"
                        width={200}
                        height={200}
                        className="rounded-xl mx-auto w-auto h-auto max-w-full object-contain"
                        loading="lazy"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="hidden lg:flex ml-14" />
                  <CarouselNext className="hidden lg:flex mr-14" />
                </Carousel>
                <div className="flex flex-col gap-3 mt-4">
                  <p className="text-justify">
                    TrabaHanap is a job-matching mobile application that
                    minimizes the Philippines&apos; underlying unemployment,
                    underemployment, and job insecurity issues by connecting
                    manual laborers with clients. Regarding this, the following
                    United Nations Sustainable Development Goals are addressed
                    in the development of the job-matching application which are
                    SGD 1 (no poverty), SGD 8 (decent work and economic growth),
                    and SGD 11 (sustainable cities and communities).
                  </p>
                  <p className="text-justify">
                    Achieved Best Venture in Computer Science at the University
                    of the Philippines Mindanao (2024) and placed 2nd runner-up
                    in QBO Innovation&apos;s QOMPETE 2024 startup competition.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4 items-start">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">MongoDB</Badge>
                  <Badge variant="outline">Express</Badge>
                  <Badge variant="outline">React Native</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">Figma</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">TypeScript</Badge>
                </div>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Physical Fitness Activity Tracker System</CardTitle>
                <CardDescription>
                  A physical fitness activity tracker system using the Strava
                  API
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/images/pfats.png"
                  alt="Physical Fitness Activity Tracker System"
                  width={700}
                  height={700}
                  className="rounded-xl mx-auto w-auto h-auto max-w-full object-contain"
                />
              </CardContent>
              <CardFooter className="flex flex-col gap-4 items-start">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">NextJS</Badge>
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Express</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Tailwind CSS</Badge>
                    <Badge variant="outline">Strava API</Badge>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 justify-start">
                    <a
                      href="https://pfats.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink />
                    </a>
                    <a
                      href="https://github.com/csmasayon/pfats"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <Github />
                    </a>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

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
                        width={250}
                        height={250}
                        className="rounded-xl mx-auto"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/images/2.png"
                        alt="TrabaHanap"
                        width={250}
                        height={250}
                        className="rounded-xl mx-auto"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/images/3.png"
                        alt="TrabaHanap"
                        width={250}
                        height={250}
                        className="rounded-xl mx-auto"
                      />
                    </CarouselItem>
                    <CarouselItem>
                      <Image
                        src="/images/4.png"
                        alt="TrabaHanap"
                        width={250}
                        height={250}
                        className="rounded-xl mx-auto"
                      />
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="hidden lg:flex ml-12" />
                  <CarouselNext className="hidden lg:flex mr-12" />
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

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">MongoDB</Badge>
                    <Badge variant="outline">Express</Badge>
                    <Badge variant="outline">React Native</Badge>
                    <Badge variant="outline">Node.js</Badge>
                    <Badge variant="outline">Figma</Badge>
                    <Badge variant="outline">Tailwind CSS</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
                    <CardHeader>
                      <CardTitle>
                        Physical Fitness Activity Tracker System
                      </CardTitle>
                      <CardDescription>
                        A physical fitness activity tracker system using the
                        Strava API
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src="/images/pfats.png"
                        alt="Physical Fitness Activity Tracker System"
                        width={700}
                        height={700}
                        className="rounded-xl mx-auto w-full h-full object-cover"
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
                          <a href="https://pfats.vercel.app" target="_blank">
                            <ExternalLink />
                          </a>
                          <a
                            href="https://github.com/csmasayon/pfats"
                            target="_blank"
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

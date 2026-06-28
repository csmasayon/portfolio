import Image from "next/image";
import Link from "next/link";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TypewriterRole } from "@/components/typewriter-role";

export function HomeHero() {
  return (
    <section id="home" className="py-6 sm:py-10">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10 lg:max-w-6xl lg:gap-12">
        <div className="order-2 flex flex-col gap-6 md:order-1">
          <div className="space-y-3 text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Hi, I&apos;m Christian Ace Masayon. 👋
            </h1>
            <p className="text-lg font-semibold sm:text-xl lg:text-2xl">
              I&apos;m a <TypewriterRole />
            </p>
            <p className="text-base text-muted-foreground sm:text-lg">
              Based in Davao, Philippines
            </p>
          </div>

          <p className="text-justify text-base leading-relaxed text-muted-foreground sm:text-lg">
            Computer Science graduate from the University of the Philippines Mindanao.
            For my undergraduate thesis, I built TrabaHanap, a job-matching mobile
            application, and was recognized with Best Venture in Computer Science at
            UP Mindanao and 2nd runner-up at QOMPETE 2024. Currently building
            internal tools and systems.
          </p>

          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <Button size="lg" className="w-full sm:w-auto" asChild>
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
            <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link
                  href="https://www.linkedin.com/in/christian-ace-masayon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin />
                </Link>
              </Button>
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link
                  href="https://github.com/csmasayon"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                >
                  <Github />
                </Link>
              </Button>
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link
                  href="mailto:casmasayon@gmail.com"
                  aria-label="Email Christian Ace Masayon"
                >
                  <Mail />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <Image
            src="/images/portrait.png"
            alt="Christian Ace Masayon"
            width={280}
            height={280}
            className="h-auto w-48 rounded-2xl sm:w-56 lg:w-64"
            priority
          />
        </div>
      </div>
    </section>
  );
}

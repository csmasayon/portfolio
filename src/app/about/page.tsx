import Link from "next/link";
import { getAboutMetadata } from "@/lib/metadata";
import { AboutIntro } from "@/components/about-intro";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { EducationCard } from "@/components/education-card";
import { ContactCta } from "@/components/contact-cta";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { PageContainer } from "@/components/page-container";

export const metadata = getAboutMetadata();

export default function About() {
  return (
    <PageContainer className="mt-4 sm:mt-8 min-[1920px]:mt-10 mb-8 min-[1920px]:mb-14 space-y-8 sm:space-y-10 min-[1920px]:space-y-14">
      <AboutIntro />

      <section id="about-me">
        <h2 className="scroll-m-20 mb-3 pb-2 text-2xl font-bold tracking-tight sm:text-3xl">
          About Me
        </h2>
        <div className="flex flex-col gap-4 text-base leading-relaxed text-justify sm:text-lg">
          <p>
            I&apos;ve been curious about how websites and software work since I was little.
            When I was in elementary school, I used to build my first webpage with HTML
            and CSS, and uploaded it to a free hosting service. This was the first taste
            of web development that I had, and it sparked my interest in coding. In Junior High School,
            I went further: a Daft Punk fan site and a gaming-inspired blog. There were also assignments
            and projects in school, but, I was able to learn a lot about web development
            and this made me decide to pursue a degree in Computer Science.
          </p>
          <p>
            While in the University of the Philippines Mindanao, learning computer science gave me a
            deeper understanding on how technologies work, such as learning about <strong>data structures, </strong>
            <strong>algorithms, </strong> <strong>neural networks, </strong> <strong>machine learning, </strong>
            <strong>cybersecurity, </strong> and <strong>software engineering</strong>. This is where I had my foundations about
            programming languages and its syntax, data types, and fundamental concepts such as object-oriented programming. Not only this,
            but I also learned about mathematical concepts such as <strong>linear algebra, </strong> <strong>calculus, </strong> <strong>statistics, </strong> <strong>probability, </strong> and <strong>discrete mathematics</strong>.
          </p>
          <p>
            During my undergraduate thesis, I focused on the usability and user experience of{" "}
            <Link
              href="/projects/trabahanap"
              className="font-medium text-primary underline-offset-4 hover:underline"
            >
              <strong>TrabaHanap</strong>
            </Link>
            , a job-matching mobile application. My study examined whether local
            cultural elements affected usability and user experience, using the
            System Usability Scale (SUS) and User Experience Questionnaire –
            Short (UEQ-S). Through that work, I grew my skills in mobile
            development and learned how much UX and usability matter in
            real-world software.
          </p>
          <p>
            Currently, I work as an IT Officer at DHSUD Region 11, providing ICT support for daily office operations, including troubleshooting, network administration, and user support.
            I also develop internal tools for the office to improve efficiency, accountability, and service delivery. On the side, I read about new technologies and frameworks to improve my skills and knowledge.
          </p>
          <p>
            When I&apos;m not coding: 🎵 producing and listening to music, 🎥
            watching documentaries and video essays, and 🎮 playing video
            games.
          </p>
          <p className="text-muted-foreground italic">
            My logo is actually a wordplay of my name&apos;s initials,
            &quot;CAM&quot; ➡️ Camera ➡️ Shutter, together with the Ace of
            Spades (from my name).
          </p>
        </div>
      </section>

      <section id="experience">
        <div className="mb-4 flex items-end justify-between gap-3">
          <h2 className="scroll-m-20 min-w-0 pb-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Experience
          </h2>
        </div>
        <ExperienceTimeline items={experience} />
      </section>

      <section id="education">
        <h2 className="scroll-m-20 mb-3 pb-2 text-2xl font-bold tracking-tight sm:text-3xl">
          Education
        </h2>
        <div className="space-y-4 sm:space-y-6">
          {education.map((entry) => (
            <EducationCard key={entry.school} {...entry} />
          ))}
        </div>
      </section>

      <ContactCta />
    </PageContainer>
  );
}

import Image from "next/image";
import { getAboutMetadata } from "@/lib/metadata";
import { ExperienceCard } from "@/components/experience-card";
import { EducationCard } from "@/components/education-card";
import { education } from "@/data/education";
import { Education } from "@/types/education";
import { experience } from "@/data/experience";
import { Experience, ExperienceItem } from "@/types/experience";

export const metadata = getAboutMetadata();

export default function About() {
  return (
    <div>
      <div className="max-w-6xl mt-4 sm:mt-8 mb-8 mx-6 sm:mx-4 md:mx-auto md:px-6 lg:px-8 space-y-8">
        <section id="about" className="mb-2 mt-8">
          <div className="grid grid-row-1 md:grid-row-2 gap-6 md:gap-6 mb-8">
            <div className="flex flex-col gap-1 order-2 items-center">
              <h1 className="scroll-m-20 text-3xl sm:text-4xl text-center sm:text-left font-bold tracking-tight text-balance">
                Hi, I&apos;m Christian Ace! 👋
              </h1>
              <h3 className="scroll-m-20 text-muted-foreground text-base sm:text-xl text-center sm:text-left font-normal tracking-tight text-balance">
                Based in the Philippines
              </h3>
            </div>
            <div className="flex justify-center sm:justify-center order-1">
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

        <section id="about-me" className="mb-[2em] mt-[2em]">
          <div className="flex flex-col gap-4 text-base sm:text-lg text-justify">
            <p>
              I started my journey in coding way back in junior high school. I
              knew then that I had an interest in coding, especially on how
              these websites and programs work. I remember that I remember that
              I built a website for my favorite artist, Daft Punk, during that
              time, and also built a blog that revolved around gaming. However,
              my first exposure to web development was during my elementary
              years, where I was taught how to build a simple website using HTML
              and CSS and deploy it using a free hosting service.
            </p>
            <p>
              During my college years, I delved deeper into computer science
              while studying at the University of the Philippines Mindanao. I
              learned about <b>data structures</b>, <b>algorithms</b>,{" "}
              <b>neural networks</b>, <b>machine learning</b>,{" "}
              <b>cybersecurity</b>, and <b>software engineering </b>
              (fullstack development in web, mobile, and software projects
              involving JavaScript, TypeScript, Dart, C, C++, C#, Java, and
              Python).
            </p>
            <p>
              My thesis paper focused on the{" "}
              <b>usability and user experience </b>
              analysis of the TrabaHanap mobile application. My study focused on
              whether the implementation of local cultural elements on the app
              affected the usability and user experience of the app. While
              conducting my thesis, I developed my skills in mobile development,
              and also learned about the importance of user experience and
              usability in a software application.
            </p>
            <p className="text-justify">
              When I&apos;m not coding: 🎵 producing and listening to music, 🎥
              watching documentaries and video essays, and 🎮 playing video
              games
            </p>
            <p className="text-justify text-muted-foreground italic">
              My logo is actually a wordplay of my name&apos;s initials,
              &quot;CAM&quot; ➡️ Camera ➡️ Shutter, together with the Ace of
              Spades (from my name).
            </p>
          </div>
        </section>

        <section id="education" className="mb-[2em] mt-[2em]">
          <div>
            <h2 className="scroll-m-20 pb-2 text-2xl sm:text-3xl font-bold tracking-tight my-4">
              Education
            </h2>
          </div>
          <div className="space-y-4 sm:space-y-8">
            {education.map((education: Education, index: number) => (
              <EducationCard
                key={index}
                school={education.school}
                year={education.year}
                degree={education.degree}
                description={education.description}
              />
            ))}
          </div>
        </section>

        <section id="experience" className="mb-[2em] mt-[2em]">
          <div>
            <h2 className="scroll-m-20 pb-2 text-2xl sm:text-3xl font-bold tracking-tight my-4">
              Experience
            </h2>
            <div className="space-y-4 sm:space-y-8">
              {experience.map((yearGroup: Experience) => (
                <div
                  key={yearGroup.year}
                  className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-6"
                >
                  <div className="md:col-span-2">
                    <div className="text-left md:text-right md:sticky md:top-8">
                      <h3 className="font-semibold text-base sm:text-lg md:text-xl text-muted-foreground mb-2 md:mb-0">
                        {yearGroup.year}
                      </h3>
                    </div>
                  </div>
                  <div className="md:col-span-8 space-y-4">
                    {yearGroup.items.map((experience: ExperienceItem, index: number) => (
                      <ExperienceCard
                        key={index}
                        title={experience.title}
                        year={experience.period}
                        subheading={experience.subheading}
                        location={experience.location}
                        description={experience.description}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

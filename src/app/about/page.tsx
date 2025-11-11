import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div>
      <div className="max-w-6xl mt-4 sm:mt-8 sm:mb-8 lg:mx-auto sm:mx-auto space-y-8 mx-4">
        <section id="about" className="mb-2 mt-8">
          <div className="grid grid-row-1 md:grid-row-2 gap-6 md:gap-6 mb-8">
            <div className="flex flex-col gap-1 order-2 items-center">
              <h1 className="scroll-m-20 text-3xl sm:text-4xl text-center sm:text-left font-bold tracking-tight text-balance">
                Hi, I&apos;m Christian Ace!
              </h1>
              <h3 className="scroll-m-20 text-muted-foreground text-base sm:text-xl text-center sm:text-left font-normal tracking-tight text-balance">
                Based in Tagum City, Davao del Norte, Philippines
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

        <section id="about-me">
          <div className="flex flex-col gap-4 text-base sm:text-lg text-justify">
            <p>
              I started my journey in coding way back in junior high school. I
              knew then I had an interest in developing websites, especially on
              how these websites work. I remember that I built a website for my
              favorite artist, Daft Punk, during that time and also built a blog
              which revolved in news about gaming. However, my first exposure to
              web development was during my elementary years, where I was taught
              how to develop a simple website using HTML and CSS and deployed it
              using a free hosting service.
            </p>
            <p>
              During my college years, I delved deeper into computer science
              during my time in the University of the Philippines Mindanao. I
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
              analysis of the TrabaHanap mobile application. The methodology I
              used was the System Usability Scale (SUS) and User Experience
              Questionnaire-Short (UEQ-S) to evaluate the usability and user
              experience of the app and the impact of the implementation of
              local cultural elements on the app. While conducting my thesis, I
              developed my skills in mobile development, and also learned about
              the importance of user experience and usability in the development
              of a software application.
            </p>
            <p className="text-justify">
              When I'm not coding: 🎵 producing and listening to music, 🎥
              doomscrolling videos, and 🎮 playing video games
            </p>
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

        <section id="experience">
          <div>
            <h2 className="scroll-m-20 pb-2 text-2xl sm:text-3xl font-bold tracking-tight my-4">
              Job Experience
            </h2>
            <div className="space-y-4 sm:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-6">
                <div className="md:col-span-2">
                  <div className="text-left md:text-right md:sticky md:top-8">
                    <h3 className="font-semibold text-base sm:text-lg md:text-xl text-muted-foreground mb-2 md:mb-0">
                      2024
                    </h3>
                  </div>
                </div>
                <div className="md:col-span-8">
                  <div className="text-card-foreground flex flex-col h-full rounded-xl bg-card border shadow-sm p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
                      <h3 className="font-semibold text-base sm:text-lg md:text-xl">
                        Programmer 1
                      </h3>
                      <Badge className="w-fit">
                        <p className="text-xs sm:text-sm">
                          Nov 2024 - Dec 2024
                        </p>
                      </Badge>
                    </div>
                    <p className="text-sm sm:text-base mt-2">
                      University of the Philippines Mindanao School of
                      Management · Contract · Onsite
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1">
                      Davao, Philippines
                    </p>
                    <p className="text-sm sm:text-base mt-3 text-justify">
                      As Programmer 1, I contributed to enhancing the BS
                      Agribusiness Economics Program at UP Mindanao's School of
                      Management. I created and deployed the SOM website with
                      comprehensive information on personnel, program offerings,
                      and activities to ensure accessibility and relevance. I
                      also developed dedicated pages for the SOM College
                      Secretary's services, streamlining access to essential
                      resources and improving user experience. Additionally, I
                      trained faculty and administrative staff, equipping them
                      with the skills to maintain and update the site for
                      long-term sustainability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-6">
                <div className="md:col-span-2">
                  <div className="text-left md:text-right md:sticky md:top-8">
                    <h3 className="font-semibold text-base sm:text-lg md:text-xl text-muted-foreground mb-2 md:mb-0">
                      2023
                    </h3>
                  </div>
                </div>
                <div className="md:col-span-8">
                  <div className="text-card-foreground flex flex-col h-full rounded-xl bg-card border shadow-sm p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
                      <h3 className="font-semibold text-base sm:text-lg md:text-xl">
                        Mobile Development Intern
                      </h3>
                      <Badge className="w-fit">
                        <p className="text-xs sm:text-sm">
                          Jul 2023 - Aug 2023
                        </p>
                      </Badge>
                    </div>
                    <p className="text-sm sm:text-base mt-2">
                      PASYENTE Project for Dengue · Internship · Hybrid
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1">
                      Davao, Philippines
                    </p>
                    <p className="text-sm sm:text-base mt-3 text-justify">
                      As a Mobile Development Intern, I participated in the
                      frontend development of the PASYENTE Project for Dengue's
                      mobile application. I designed and implemented user-friendly
                      interfaces, ensuring a seamless user experience and
                      optimizing the app's performance.
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-10 gap-4 md:gap-6">
                <div className="md:col-span-2">
                  <div className="text-left md:text-right md:sticky md:top-8">
                    <h3 className="font-semibold text-base sm:text-lg md:text-xl text-muted-foreground mb-2 md:mb-0">
                      2022
                    </h3>
                  </div>
                </div>
                <div className="md:col-span-8">
                  <div className="text-card-foreground flex flex-col h-full rounded-xl bg-card border shadow-sm p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
                      <h3 className="font-semibold text-base sm:text-lg md:text-xl">
                        Web Developent Intern
                      </h3>
                      <Badge className="w-fit">
                        <p className="text-xs sm:text-sm">
                          Feb 2022 - Jun 2022
                        </p>
                      </Badge>
                    </div>
                    <p className="text-sm sm:text-base mt-2">haws · Internship · Hybrid</p>
                    <p className="text-sm sm:text-base text-muted-foreground mt-1">
                      Davao, Philippines
                    </p>
                    <p className="text-sm sm:text-base mt-3 text-justify">
                      As a Web Development Intern, I contributed to the
                      overall redesign of the company website by collaborating
                      with the team using Figma. I focused on enhancing user
                      experience and functionality, creating a more intuitive
                      and visually appealing interface.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

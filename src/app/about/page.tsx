import Image from "next/image";

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
              <h2 className="scroll-m-20 text-lg sm:text-xl text-center sm:text-left  font-semibold tracking-tight text-balance">
                I am a fullstack web developer and a UX & UI designer.
              </h2>
              <h3 className="scroll-m-20 text-base sm:text-xl text-center sm:text-left  font-normal tracking-tight text-balance">
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
          <div className="flex flex-col gap-4">
            <p className="text-justify">
              I started my journey in development way back in high school, where
              I had an interest in developing websites. I remember that I built
              a website for my favorite artist, Daft Punk, during that time and
              also built a blog which revolved in news about gaming. However, my
              first exposure to web development was during my elementary years,
              where I was taught how to develop a simple website using HTML and
              CSS and deployed it using a free hosting service.
            </p>
            <p className="text-justify">
              During my college years, I delved deeper into computer science
              during my time in the University of the Philippines Mindanao. I
              learned about data structures, algorithms, neural networks,
              machine learning, cybersecurity, and software engineering
              (fullstack development in web, mobile, and software projects
              involving JavaScript, TypeScript, Dart, C, C++, C#, Java, and
              Python).
            </p>
            <p className="text-justify">
              My thesis paper focused on the usability and user experience
              analysis of the TrabaHanap mobile application. The methodology I
              used was the System Usability Scale (SUS) and User Experience
              Questionnaire-Short (UEQ-S) to evaluate the usability and user
              experience of the app and the impact of the implementation of
              local cultural elements on the app. While conducting my thesis, I
              developed my skills in mobile development, and also learned about
              the importance of user experience and usability in the development
              of a software application.
            </p>
          </div>
        </section>

        <section id="education">
          <div>
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

        <section id="experience">
          <div>
            <h2 className="scroll-m-20 pb-2 text-2xl sm:text-3xl font-bold tracking-tight">
              Job Experience
            </h2>
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <h3 className="font-semibold text-justify text-lg sm:text-xl">
                    Programmer 1
                  </h3>
                  <p className="text-sm text-muted-foreground text-justify">
                    Nov 2024 - Dec 2024
                  </p>
                </div>
                <p className="text-justify">
                  University of the Philippines Mindanao · School of Management
                  · Contract · Onsite
                </p>
                <p className="text-justify">Davao, Philippines</p>
                <p className="text-justify">
                  As Programmer 1, I contributed to enhancing the BS
                  Agribusiness Economics Program at UP Mindanao’s School of
                  Management. I created and deployed the SOM website with
                  comprehensive information on personnel, program offerings, and
                  activities to ensure accessibility and relevance. I also
                  developed dedicated pages for the SOM College Secretary&apos;s
                  services, streamlining access to essential resources and
                  improving user experience. Additionally, I trained faculty and
                  administrative staff, equipping them with the skills to
                  maintain and update the site for long-term sustainability.
                </p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <h3 className="font-semibold text-justify text-lg sm:text-xl">
                    Mobile Development Intern
                  </h3>
                  <p className="text-sm text-muted-foreground text-justify">
                    Jul 2023 - Aug 2023
                  </p>
                </div>
                <p className="text-justify">
                  PASYENTE Project for Dengue · Internship · Hybrid
                </p>
                <p className="text-justify">Davao, Philippines</p>
                <p className="text-justify">
                  As a Mobile Development Intern, I participated in the frontend
                  development of the PASYENTE Project for Dengue&apos;s mobile
                  application. I designed and implemented user-friendly
                  interfaces, ensuring a seamless user experience and optimizing
                  the app&apos;s performance.
                </p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between">
                  <h3 className="font-semibold text-justify text-lg sm:text-xl">
                    Web Developent Intern
                  </h3>
                  <p className="text-sm text-muted-foreground text-justify">
                    Feb 2022 - Jun 2022
                  </p>
                </div>
                <p className="text-justify">haws · Internship · Hybrid</p>
                <p className="text-justify">Davao, Philippines</p>
                <p className="text-justify">
                  As a Web Development Intern, I contributed to the overall
                  redesign of the company website by collaborating with the team
                  using Figma. I focused on enhancing user experience and
                  functionality, creating a more intuitive and visually
                  appealing interface.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

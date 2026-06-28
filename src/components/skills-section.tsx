import {
  AWSIcon,
  CssIcon,
  ExpoIcon,
  ExpressIcon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  GitHubIcon,
  HtmlIcon,
  JavaScriptIcon,
  MongodbIcon,
  MysqlIcon,
  NextjsIcon,
  NodeIcon,
  PHPIcon,
  PostgreSQLIcon,
  PrototypingIcon,
  PythonIcon,
  ReactIcon,
  ShadcnIcon,
  SQLIcon,
  TailwindIcon,
  TypeScriptIcon,
  UiUxDesignIcon,
  UsabilityTestingIcon,
  VercelIcon,
  ViteIcon,
  curlIcon,
} from "@/components/svg/icons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories } from "@/data/skills";
import type { ComponentType, SVGProps } from "react";

const skillIcons: Record<
  string,
  ComponentType<SVGProps<SVGSVGElement>>
> = {
  "Next.js": NextjsIcon,
  React: ReactIcon,
  Vite: ViteIcon,
  "Tailwind CSS": TailwindIcon,
  "shadcn/ui": ShadcnIcon,
  PostgreSQL: PostgreSQLIcon,
  MongoDB: MongodbIcon,
  MySQL: MysqlIcon,
  Express: ExpressIcon,
  Firebase: FirebaseIcon,
  "Node.js": NodeIcon,
  Figma: FigmaIcon,
  Git: GitIcon,
  GitHub: GitHubIcon,
  cURL: curlIcon,
  Vercel: VercelIcon,
  AWS: AWSIcon,
  Expo: ExpoIcon,
  "React Native": ReactIcon,
  "UI/UX Design": UiUxDesignIcon,
  Prototyping: PrototypingIcon,
  "Usability Testing": UsabilityTestingIcon,
  TypeScript: TypeScriptIcon,
  JavaScript: JavaScriptIcon,
  HTML: HtmlIcon,
  CSS: CssIcon,
  SQL: SQLIcon,
  Python: PythonIcon,
  PHP: PHPIcon,
};

export function SkillsSection() {
  return (
    <section id="skills">
      <h2 className="scroll-m-20 mb-3 pb-2 text-3xl font-bold tracking-tight sm:text-4xl">
        Skills
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skillCategories.map((category) => (
          <Card key={category.title}>
            <CardHeader>
              <CardTitle className="text-center text-xl font-semibold">
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <div className="flex flex-wrap items-center justify-center gap-2">
                {category.skills.map((skill) => {
                  const Icon = skillIcons[skill];

                  return (
                    <div
                      key={skill}
                      className="flex max-w-full items-center gap-1.5 rounded-md border border-neutral-700 bg-card px-2 py-1.5 text-sm shadow-sm sm:gap-2 sm:px-2.5 sm:py-2 sm:text-base dark:border-neutral-300"
                    >
                      {Icon && (
                        <Icon className="size-5 shrink-0 sm:size-6" aria-hidden />
                      )}
                      <span className="leading-tight">{skill}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

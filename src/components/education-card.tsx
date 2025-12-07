import { Badge } from "@/components/ui/badge";

interface EducationCardProps {
  school: string;
  year: string;
  degree: string;
  description: string;
}

export function EducationCard({
  school,
  year,
  degree,
  description,
}: EducationCardProps) {
  return (
    <div className="text-card-foreground flex flex-col h-full rounded-xl bg-card border shadow-sm p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0">
                <h3 className="font-semibold text-lg sm:text-xl">
                  {school}
                </h3>
                <Badge className="w-fit">
                  <p className="text-md sm:text-sm">{year}</p>
                </Badge>
              </div>
              <p className="text-md sm:text-base mt-2">
                {degree}
              </p>
              <p className="text-md sm:text-base text-muted-foreground mt-2 text-justify">
                {description}
              </p>
            </div>
  )
}
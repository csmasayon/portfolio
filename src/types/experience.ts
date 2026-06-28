export interface ExperienceLink {
  href: string;
  label: string;
}

export interface ExperienceItem {
  title: string;
  period: string;
  startYear: number;
  company: string;
  employmentType: string;
  workMode: string;
  location?: string;
  highlights: string[];
  link?: ExperienceLink;
  tags?: string[];
}

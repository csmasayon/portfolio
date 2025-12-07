export interface Experience {
    year: number;
    items: ExperienceItem[];
}

export interface ExperienceItem {
    title: string;
    period: string;
    subheading: string;
    location: string;
    description: string;
}
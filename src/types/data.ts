export type ExperienceCategory = "Job" | "Internship" | "Education" | "Award";

export type ExperienceItem = {
  title: string;
  details: string[];
  skills: string[];
  isCurrent?: boolean;
  category: ExperienceCategory;
};

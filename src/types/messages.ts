import { z } from "zod";

export const AboutItemSchema = z.object({
  text: z.string(),
  searchWords: z.array(z.string()),
});

export type AboutItem = z.infer<typeof AboutItemSchema>;

export const AboutItemsSchema = z.array(AboutItemSchema);

export const ExperienceCategorySchema = z.enum([
  "Job",
  "Internship",
  "Education",
  "Award",
]);

export const ExperienceItemSchema = z.object({
  title: z.string(),
  details: z.array(z.string()),
  skills: z.array(z.string()),
  isCurrent: z.boolean().optional(),
  category: ExperienceCategorySchema,
});

export type ExperienceItem = z.infer<typeof ExperienceItemSchema>;
export type ExperienceCategory = z.infer<typeof ExperienceCategorySchema>;

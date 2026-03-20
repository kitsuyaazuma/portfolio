import { z } from "zod";

export const NewsItemSchema = z.object({
  date: z.string(),
  text: z.string(),
});

export type NewsItem = z.infer<typeof NewsItemSchema>;

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
  "Community",
]);

export const ExperienceItemSchema = z.object({
  title: z.string(),
  details: z.array(z.string()),
  skills: z.array(z.string()),
  isCurrent: z.boolean().optional(),
  category: ExperienceCategorySchema,
  url: z.url().optional(),
  blogs: z
    .array(
      z.object({
        title: z.string(),
        url: z.string(),
        thumbnail: z.string().optional(),
      }),
    )
    .optional(),
});

export type ExperienceItem = z.infer<typeof ExperienceItemSchema>;
export type ExperienceCategory = z.infer<typeof ExperienceCategorySchema>;

export const PublicationPaperSchema = z.object({
  title: z.string(),
  text: z.string(),
  url: z.string(),
  conference: z.string(),
  year: z.string(),
});

export type PublicationPaper = z.infer<typeof PublicationPaperSchema>;

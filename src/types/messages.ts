import { z } from "zod";

export const AboutItemSchema = z.object({
  text: z.string(),
  searchWords: z.array(z.string()),
});

export type AboutItem = z.infer<typeof AboutItemSchema>;

export const AboutItemsSchema = z.array(AboutItemSchema);

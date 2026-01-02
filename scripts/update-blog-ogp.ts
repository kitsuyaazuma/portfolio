import fs from "fs/promises";
import path from "path";
import ogs from "open-graph-scraper";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MESSAGES_DIR = path.resolve(__dirname, "../messages");
const FILES = ["ja.json", "en.json"];

async function updateBlogOgp() {
  for (const file of FILES) {
    const filePath = path.join(MESSAGES_DIR, file);
    const content = await fs.readFile(filePath, "utf-8");
    const data = JSON.parse(content);

    if (data.Experience && data.Experience.items) {
      console.log(`Processing ${file}...`);
      for (const item of data.Experience.items) {
        if (item.blogs) {
          for (const blog of item.blogs) {
            if (blog.url) {
              try {
                console.log(`Fetching OGP for ${blog.url}...`);
                const { result } = await ogs({ url: blog.url });

                if (result.ogImage && result.ogImage.length > 0) {
                  const ogImageUrl = result.ogImage[0].url;
                  blog.thumbnail = ogImageUrl;
                  console.log(`  -> Updated thumbnail: ${ogImageUrl}`);
                }
              } catch (error) {
                console.error(
                  `  -> Failed to fetch OGP for ${blog.url}:`,
                  error,
                );
              }
            }
          }
        }
      }
    }

    await fs.writeFile(filePath, JSON.stringify(data, null, 2) + "\n");
  }
}

updateBlogOgp().catch(console.error);

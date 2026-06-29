import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import ogs from "open-graph-scraper";
import { articleList } from "../src/data/articles";
import type { ArticleMetadataItem } from "../src/types/data";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_PATH = path.resolve(
  __dirname,
  "../src/data/article-metadata.generated.ts",
);

function clean(value: string | undefined) {
  const normalized = value?.replace(/\s+/g, " ").trim();
  return normalized || undefined;
}

function resolveUrl(value: string | undefined, baseUrl: string) {
  const cleaned = clean(value);
  if (!cleaned) {
    return undefined;
  }

  try {
    return new URL(cleaned, baseUrl).href;
  } catch {
    return undefined;
  }
}

async function fetchArticleMetadata(
  article: (typeof articleList)[number],
): Promise<ArticleMetadataItem> {
  try {
    const { result } = await ogs({ url: article.url });
    const ogImageUrl = result.ogImage?.[0]?.url;

    return {
      url: article.url,
      title: clean(article.title) ?? clean(result.ogTitle) ?? article.url,
      description: clean(result.ogDescription),
      imageUrl:
        resolveUrl(article.imageUrl, article.url) ??
        resolveUrl(ogImageUrl, article.url),
    };
  } catch (error) {
    console.error(
      `Failed to fetch article metadata for ${article.url}:`,
      error,
    );

    return {
      url: article.url,
      title: clean(article.title) ?? article.url,
      imageUrl: resolveUrl(article.imageUrl, article.url),
    };
  }
}

function formatMetadata(metadata: ArticleMetadataItem[]) {
  return `import type { ArticleMetadataItem } from "../types/data";

export const articleMetadata: ArticleMetadataItem[] = ${JSON.stringify(
    metadata,
    null,
    2,
  )};
`;
}

async function updateArticleMetadata() {
  const metadata = await Promise.all(articleList.map(fetchArticleMetadata));
  await fs.writeFile(OUTPUT_PATH, formatMetadata(metadata));
}

updateArticleMetadata().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

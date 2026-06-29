import { getTranslations } from "next-intl/server";
import { TbExternalLink } from "react-icons/tb";
import { articleMetadata } from "@/data/article-metadata.generated";
import type { ArticleMetadataItem } from "@/types/data";

function getHostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function ArticleCard({ item }: { item: ArticleMetadataItem }) {
  const host = getHostname(item.url);

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      className="card bg-base-100 border border-base-300 overflow-hidden transition-transform hover:scale-[1.01]"
    >
      <div className="aspect-video bg-base-200">
        {item.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.imageUrl}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-base-200">
            <TbExternalLink className="text-base-content/40" size={32} />
          </div>
        )}
      </div>
      <div className="card-body gap-2 p-4">
        <div className="flex items-center gap-2 text-xs text-base-content/60">
          <span className="truncate">{host}</span>
          <TbExternalLink className="shrink-0" size={14} />
        </div>
        <h3 className="line-clamp-2 text-base font-bold leading-snug">
          {item.title}
        </h3>
        {item.description ? (
          <p className="line-clamp-3 text-sm text-base-content/70">
            {item.description}
          </p>
        ) : null}
      </div>
    </a>
  );
}

export async function ArticleList() {
  const t = await getTranslations("Reads");

  if (articleMetadata.length === 0) {
    return null;
  }

  return (
    <section className="max-w-5xl mx-auto px-4 py-12" id="article-list">
      <div className="flex justify-center my-6">
        <h2 className="text-3xl font-bold">{t("articleListTitle")}</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articleMetadata.map((item) => (
          <ArticleCard key={item.url} item={item} />
        ))}
      </div>
    </section>
  );
}

import { getTranslations } from "next-intl/server";
import { z } from "zod";
import { NewsItemSchema, type NewsItem } from "@/types/messages";

export async function News() {
  const t = await getTranslations("News");
  let items: NewsItem[] = [];
  const result = z.array(NewsItemSchema).safeParse(t.raw("items"));
  if (result.success) {
    items = result.data;
  }
  const currentMonth = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    timeZone: "Asia/Tokyo",
  })
    .format(new Date())
    .replace("-", ".");

  return (
    <div className="max-w-5xl mx-auto px-4 pt-8" id="news">
      <div className="flex justify-center my-6">
        <h2 className="text-3xl font-bold">{t("title")}</h2>
      </div>
      <ul className="mx-auto max-h-60 max-w-2xl divide-y divide-base-300 overflow-y-auto">
        {items.map((item) => (
          <li
            key={`${item.date}-${item.text}`}
            className="grid grid-cols-[auto_1fr] items-center gap-4 px-3 py-3"
          >
            <time
              className={`badge badge-outline whitespace-nowrap ${
                item.date === currentMonth ? "badge-primary" : "badge-secondary"
              }`}
            >
              {item.date}
            </time>
            <p className="text-sm text-base-content/90">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

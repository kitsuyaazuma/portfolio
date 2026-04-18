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
      <div className="card max-w-2xl mx-auto border border-primary/20 bg-base-100 shadow-sm">
        <ul className="list overflow-y-auto max-h-60 p-3">
          {items.map((item, i) => (
            <li
              key={i}
              className={`list-row items-center rounded-xl px-3 py-3 transition-colors ${
                item.date === currentMonth
                  ? "border border-primary/20 bg-primary/5"
                  : "border border-base-300 bg-base-100"
              }`}
            >
              <time className="badge badge-primary badge-outline whitespace-nowrap">
                {item.date}
              </time>
              <p className="text-sm text-base-content/90">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

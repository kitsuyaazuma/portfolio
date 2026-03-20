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

  return (
    <div className="max-w-5xl mx-auto px-4 pt-8" id="news">
      <div className="flex justify-center my-6">
        <h2 className="text-3xl font-bold">{t("title")}</h2>
      </div>
      <div className="card card-border max-w-2xl mx-auto">
        <ul className="list overflow-y-auto max-h-52">
          {items.map((item, i) => (
            <li key={i} className="list-row items-center">
              <time className="text-xs opacity-50 whitespace-nowrap">
                {item.date}
              </time>
              <p className="text-sm">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

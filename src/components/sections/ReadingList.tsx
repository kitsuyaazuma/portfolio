// ReadingList is a Server Component: renders the grid shell + fetches the title.
// ReadingListCard is the only Client boundary (hover overlay state).
import { getTranslations } from "next-intl/server";
import { readingList } from "@/data/reading";
import { type ReadingListItem } from "@/types/data";
import { ReadingListCard } from "@/components/ui/ReadingListCard";

export async function ReadingList() {
  const t = await getTranslations("Bookshelf");
  return (
    <div className="max-w-5xl mx-auto px-4 pt-8" id="reading-list">
      <div className="flex justify-center my-6">
        <h2 className="text-3xl font-bold">{t("readingListTitle")}</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {readingList.map((item: ReadingListItem, idx: number) => (
          <ReadingListCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

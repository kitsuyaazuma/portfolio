// BookList is a Server Component: renders the grid shell + fetches the title.
// BookCard is the only Client boundary (hover overlay state).
import { getTranslations } from "next-intl/server";
import { bookList } from "@/data/books";
import { type BookItem } from "@/types/data";
import { BookCard } from "@/components/ui/BookCard";

export async function BookList() {
  const t = await getTranslations("Reads");
  return (
    <div className="max-w-5xl mx-auto px-4 pt-8" id="book-list">
      <div className="flex justify-center my-6">
        <h2 className="text-3xl font-bold">{t("bookListTitle")}</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {bookList.map((item: BookItem, idx: number) => (
          <BookCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
}

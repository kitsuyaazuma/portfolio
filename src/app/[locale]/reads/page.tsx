import { Suspense } from "react";
import { ArticleList } from "@/components/sections/ArticleList";
import { BookList } from "@/components/sections/BookList";

export default function ReadsPage() {
  return (
    <main>
      <Suspense fallback={null}>
        <BookList />
        <ArticleList />
      </Suspense>
    </main>
  );
}

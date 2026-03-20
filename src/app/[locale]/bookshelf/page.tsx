import { Suspense } from "react";
import { ReadingList } from "@/components/sections/ReadingList";

export default function BookshelfPage() {
  return (
    <main>
      <Suspense fallback={null}>
        <ReadingList />
      </Suspense>
    </main>
  );
}

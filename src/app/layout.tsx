"use client";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      
        <body>
          <Suspense fallback={<p>Loading</p>}>
            {children}
          </Suspense>
        </body>
      
    </html>
  );
}

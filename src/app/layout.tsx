"use client";
import { Suspense } from "react";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
      </head>
      <body>{children}</body>
    </html>
  );
}

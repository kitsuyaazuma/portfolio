import type { Metadata } from "next";
import { App } from "@/components/App";

export const metadata: Metadata = {
  title: "Kitsuya Azuma's Portfolio",
  description: "東桔也（あずまきつや）のポートフォリオサイト",
  icons: ["/favicon_io/favicon.ico"],
};

export default function Home() {
  return (
    <main>
      <App />
    </main>
  );
}

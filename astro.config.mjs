import partytown from "@astrojs/partytown";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import { loadEnv } from "vite";

const analyticsId =
  process.env.PUBLIC_GA_ID ??
  loadEnv(process.env.NODE_ENV ?? "production", process.cwd(), "PUBLIC_")
    .PUBLIC_GA_ID;

export default defineConfig({
  site: process.env.SITE_URL ?? "https://www.azu-kitsu.com",
  output: "static",
  integrations: [
    icon(),
    ...(analyticsId
      ? [partytown({ config: { forward: ["dataLayer.push"] } })]
      : []),
  ],
  vite: { plugins: [tailwindcss()] },
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
    routing: { prefixDefaultLocale: true },
  },
});

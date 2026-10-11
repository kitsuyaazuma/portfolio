import type { APIRoute } from "astro";
import { locales, localizedPath, type PagePath } from "../i18n";
import { SITE_URL } from "../lib/seo";

export const GET: APIRoute = () => {
  const pages: PagePath[] = ["", "/publications", "/reads"];
  const entries = locales
    .flatMap((locale) =>
      pages.map((page) => {
        const url = new URL(localizedPath(locale, page), SITE_URL).href;
        return `<url><loc>${url}</loc><changefreq>monthly</changefreq><priority>${page === "" ? "1" : "0.8"}</priority></url>`;
      }),
    )
    .join("");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}</urlset>`,
    {
      headers: { "Content-Type": "application/xml; charset=utf-8" },
    },
  );
};

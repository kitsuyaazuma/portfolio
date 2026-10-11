import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { APIRoute } from "astro";
import { locales } from "../../i18n";

export function getStaticPaths() {
  return locales.map((locale) => ({ params: { locale } }));
}

export const GET: APIRoute = async () => {
  const png = await readFile(join(process.cwd(), "public/opengraph-image.png"));
  return new Response(new Uint8Array(png), {
    headers: { "Content-Type": "image/png" },
  });
};

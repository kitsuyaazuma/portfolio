// TechBlog is a Server Component: renders a static grid of blog images.
// The entire section is streamed as pre-rendered HTML.
import Image from "next/image";
import { blogCount } from "@/data/blog";
import { getTranslations } from "next-intl/server";

export async function TechBlog() {
  const t = await getTranslations("Publications");
  return (
    <div className="max-w-5xl mx-auto px-4 pt-8" id="tech-blog">
      <div className="flex justify-center my-6">
        <h2 className="text-3xl font-bold">{t("blogTitle")}</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {[...Array(blogCount)].map((_, idx) => (
          <a
            key={idx}
            href={`https://alvinvin.hatenablog.jp/entry/${idx + 1}`}
            target="_blank"
            rel="noreferrer"
            className="card overflow-hidden aspect-square shadow hover:scale-[1.01] transition-transform"
          >
            <figure className="h-full">
              <Image
                fill
                src={`/images/blog/${idx + 1}.webp`}
                alt={`blog_${idx + 1}`}
                sizes="(max-width: 576px) 50vw, (max-width: 768px) 33vw, (max-width: 992px) 25vw, 20vw"
                className="object-cover"
              />
            </figure>
          </a>
        ))}
      </div>
    </div>
  );
}

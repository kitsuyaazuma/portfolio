// About is a Server Component: fetches translations + parses Zod schema on the server,
// so zero parsing cost at the client and no hydration for this section.
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { SocialButton } from "@/components/ui/SocialButton";
import { socials } from "@/data/social";
import { type AboutItem, AboutItemsSchema } from "@/types/messages";
import { HighlightText } from "@/components/ui/HighlightText";

export async function About() {
  const t = await getTranslations("About");
  let items: AboutItem[] = [];
  const result = AboutItemsSchema.safeParse(t.raw("items"));
  if (result.success) {
    items = result.data;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 pt-8" id="about">
      <div className="flex justify-center my-6">
        <h2 className="text-3xl font-bold">{t("title")}</h2>
      </div>

      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
        <Image
          width={300}
          height={300}
          src="/images/home/profile.webp"
          alt="Kitsuya Azuma"
          priority
          className="rounded-[3%]"
        />
        <div className="flex flex-col gap-3">
          {items.map((about: AboutItem, index: number) => (
            <HighlightText
              key={index}
              text={about.text}
              highlight={about.searchWords}
            />
          ))}
          <div className="flex flex-wrap gap-1 justify-center mt-2">
            {socials.map((social) => (
              <SocialButton
                key={social.name}
                name={social.name}
                url={social.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

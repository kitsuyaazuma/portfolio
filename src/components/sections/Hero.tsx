import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { socials } from "@/data/social";
import { type AboutItem, AboutItemsSchema } from "@/types/messages";
import { HighlightText } from "@/components/ui/HighlightText";
import { SocialButton } from "@/components/ui/SocialButton";

export async function Hero() {
  const [tHero, tAbout] = await Promise.all([
    getTranslations("Hero"),
    getTranslations("About"),
  ]);
  let items: AboutItem[] = [];
  const result = AboutItemsSchema.safeParse(tAbout.raw("items"));
  if (result.success) {
    items = result.data;
  }

  return (
    <section className="hero py-12" id="about">
      <div className="hero-content grid w-full max-w-5xl grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-x-8 lg:gap-y-8">
        <div className="text-center lg:col-span-2 lg:row-start-1">
          <h1 className="text-[45px] font-bold leading-tight text-neutral sm:text-[60px]">
            {tHero("name")}
          </h1>
          <p className="mt-2 text-base-content/60">{tHero("description")}</p>
        </div>

        <Image
          width={300}
          height={300}
          src="/images/home/profile.webp"
          alt="Kitsuya Azuma"
          priority
          className="mt-8 justify-self-center rounded-[3%] lg:col-start-1 lg:row-start-2 lg:mt-0 lg:justify-self-start"
        />

        <div className="mt-6 text-center lg:col-start-2 lg:row-start-2 lg:mt-0 lg:text-left">
          <div className="flex flex-col gap-3">
            {items.map((about) => (
              <p key={about.text}>
                <HighlightText
                  text={about.text}
                  highlight={about.searchWords}
                />
              </p>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-1 lg:justify-start">
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
    </section>
  );
}

// Footer is a Server Component: fetches its own translation string, no interactivity.
import { getTranslations } from "next-intl/server";
import { socials } from "@/data/social";
import { SocialButton } from "@/components/ui/SocialButton";

export async function Footer() {
  const t = await getTranslations("Footer");
  return (
    <footer className="mt-12 border-t border-base-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <span className="font-medium text-primary">{t("name")}</span>
          <div className="flex gap-1">
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
    </footer>
  );
}

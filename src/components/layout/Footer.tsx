// Footer is a Server Component: fetches its own translation string, no interactivity.
import { getTranslations } from "next-intl/server";
import { socials } from "@/data/social";
import { SocialButton } from "@/components/ui/SocialButton";

export async function Footer() {
  const t = await getTranslations("Footer");
  return (
    <footer className="footer mt-12 bg-neutral p-10 text-neutral-content sm:footer-horizontal">
      <aside>
        <span className="font-medium">{t("name")}</span>
      </aside>
      <nav className="sm:justify-self-end">
        <div className="grid grid-flow-col gap-1">
          {socials.map((social) => (
            <SocialButton
              key={social.name}
              name={social.name}
              url={social.url}
              className="text-neutral-content"
            />
          ))}
        </div>
      </nav>
    </footer>
  );
}

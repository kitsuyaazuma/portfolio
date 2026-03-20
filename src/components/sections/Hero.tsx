// Hero is a Server Component: only renders translated strings, no interactivity.
import { getTranslations } from "next-intl/server";

export async function Hero() {
  const t = await getTranslations("Hero");
  return (
    <div className="flex flex-col items-center gap-2 py-4">
      <h1 className="text-[45px] sm:text-[60px] font-bold text-primary leading-tight text-center">
        {t("name")}
      </h1>
      <p className="text-base-content/60 text-center">{t("description")}</p>
    </div>
  );
}

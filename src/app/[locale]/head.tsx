import { useTranslations } from "next-intl";

export default function Head() {
  const t = useTranslations("Metadata");

  return (
    <>
      <title>{t("title")}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={t("description")} />
      <link rel="icon" href="/favicon_io/favicon.ico" />
    </>
  );
}

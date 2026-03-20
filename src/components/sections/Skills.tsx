// Skills is a Server Component: fetches the section title on the server.
// SkillsChart (recharts) is a Client Component boundary — only the chart runs on the client.
// next/dynamic defers recharts out of the initial JS bundle (code-split on demand).
import { getTranslations } from "next-intl/server";
import dynamic from "next/dynamic";

const SkillsChart = dynamic(
  () => import("@/components/ui/SkillsChart").then((mod) => mod.SkillsChart),
  {
    loading: () => (
      <div className="flex flex-wrap justify-center gap-6">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="skeleton h-5 w-20" />
            <div className="skeleton h-[250px] w-[250px]" />
          </div>
        ))}
      </div>
    ),
  },
);

export async function Skills() {
  const t = await getTranslations("Skills");
  return (
    <div className="max-w-5xl mx-auto px-4 py-8" id="skills">
      <div className="flex justify-center my-6">
        <h2 className="text-3xl font-bold">{t("title")}</h2>
      </div>
      <SkillsChart />
    </div>
  );
}

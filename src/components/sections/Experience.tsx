import { getTranslations } from "next-intl/server";
import {
  TbBuildings,
  TbDevicesPc,
  TbSchool,
  TbHeartHandshake,
  TbCircle,
  TbExternalLink,
} from "react-icons/tb";
import {
  type ExperienceCategory,
  type ExperienceItem,
  ExperienceItemSchema,
} from "@/types/messages";
import { z } from "zod";

const getCategoryIcon = (category: ExperienceCategory) => {
  const props = { className: "h-5 w-5" };
  switch (category) {
    case "Job":
      return <TbBuildings {...props} />;
    case "Internship":
      return <TbDevicesPc {...props} />;
    case "Education":
      return <TbSchool {...props} />;
    case "Community":
      return <TbHeartHandshake {...props} />;
    default:
      return <TbCircle {...props} />;
  }
};

export async function Experience() {
  const t = await getTranslations("Experience");
  let items: ExperienceItem[] = [];
  const result = z.array(ExperienceItemSchema).safeParse(t.raw("items"));
  if (result.success) {
    items = result.data;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 pt-8" id="experience">
      <div className="flex justify-center my-6">
        <h2 className="text-3xl font-bold">{t("title")}</h2>
      </div>

      <ul className="timeline timeline-vertical timeline-compact mx-auto max-w-2xl">
        {items.map((item, index) => (
          <li key={index}>
            {index > 0 && <hr className={item.isCurrent ? "bg-primary" : ""} />}

            <div className="timeline-middle text-primary">
              {getCategoryIcon(item.category)}
            </div>

            <div className="timeline-end timeline-box mb-6 w-full">
              <div className="flex items-center gap-1 mb-1">
                <span
                  className={`text-lg font-semibold ${item.isCurrent ? "text-primary" : ""}`}
                >
                  {item.title}
                </span>
                {item.url && (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="opacity-40 hover:opacity-70 transition-opacity"
                    aria-label={`${item.title} website`}
                  >
                    <TbExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              {item.details.map((detail) => (
                <p key={detail} className="text-xs opacity-60">
                  {detail}
                </p>
              ))}

              {item.skills.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`badge badge-sm ${item.isCurrent ? "badge-soft badge-primary" : "badge-ghost"}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              {item.blogs && (
                <div className="flex flex-col gap-2 mt-2">
                  {item.blogs.map((blog, i) => (
                    <a
                      key={i}
                      href={blog.url}
                      target="_blank"
                      rel="noreferrer"
                      className="card card-border card-compact hover:bg-base-200 transition-colors"
                    >
                      <div className="card-body flex-row gap-3 items-center">
                        {blog.thumbnail && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={blog.thumbnail}
                            alt={blog.title}
                            width={128}
                            height={64}
                            className="h-16 w-auto object-contain rounded"
                          />
                        )}
                        <div className="min-w-0">
                          <p className="text-sm font-medium opacity-70 line-clamp-2">
                            {blog.title}
                          </p>
                          <p className="text-xs text-base-content/85 truncate hidden sm:block">
                            {blog.url}
                          </p>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <hr className={item.isCurrent ? "bg-primary" : ""} />
          </li>
        ))}
      </ul>
    </div>
  );
}

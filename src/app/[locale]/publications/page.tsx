import { Suspense } from "react";
import { TechBlog } from "@/components/sections/TechBlog";
import { getTranslations } from "next-intl/server";
import { TbBook, TbMapPin } from "react-icons/tb";
import { z } from "zod";
import { PublicationPaperSchema } from "@/types/messages";

async function Publications() {
  const t = await getTranslations("Publications");

  const papersResult = z
    .array(PublicationPaperSchema)
    .safeParse(t.raw("items"));
  if (!papersResult.success) {
    console.error(
      "Publications: invalid paper items",
      papersResult.error.message,
    );
  }
  const papers = papersResult.success ? papersResult.data : [];

  return (
    <>
      <TechBlog />

      <div className="divider max-w-5xl mx-auto px-4" />

      <div className="max-w-5xl mx-auto px-4 pt-8" id="papers">
        <div className="flex justify-center my-6">
          <h2 className="text-3xl font-bold">{t("paperTitle")}</h2>
        </div>
        {papers.map((paper, index) => (
          <div key={index} className="card card-border mb-4">
            <div className="card-body">
              <h2 className="card-title">
                <a
                  href={paper.url}
                  target="_blank"
                  rel="noreferrer"
                  className="link link-hover"
                >
                  {paper.title}
                </a>
              </h2>
              <div className="flex items-center gap-1">
                <TbBook size={16} className="opacity-40" />
                <span className="text-sm opacity-60">{paper.conference}</span>
                <span className="badge badge-sm badge-primary badge-outline">
                  {paper.year}
                </span>
              </div>
              <p>{paper.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="divider max-w-5xl mx-auto px-4" />

      <div className="max-w-5xl mx-auto px-4 pt-8" id="talks">
        <div className="flex justify-center my-6">
          <h2 className="text-3xl font-bold">{t("talkTitle")}</h2>
        </div>

        <div className="card card-border mb-4">
          <div className="card-body">
            <h2 className="card-title">
              Beyond Multiprocessing: A Real-World ML Workload Speedup with
              Python 3.13+ Free-Threading
            </h2>
            <div className="flex items-center gap-1">
              <TbMapPin size={16} className="opacity-40" />
              <a
                href="https://2025.pycon.jp"
                target="_blank"
                rel="noreferrer"
                className="text-sm opacity-60 link link-hover"
              >
                PyCon JP 2025
              </a>
              <span className="badge badge-primary badge-soft">Talk</span>
            </div>
            <iframe
              className="speakerdeck-iframe"
              src="https://speakerdeck.com/player/3927e6a7a7c842f3b0a8387459c359d6"
              title="Beyond Multiprocessing: A Real-World ML Workload Speedup with Python 3.13+ Free-Threading"
              data-ratio="1.7777777777777777"
            ></iframe>
          </div>
        </div>

        <div className="card card-border mb-4">
          <div className="card-body">
            <h2 className="card-title">
              研究室サーバーとKubeflowで実践するNotebook as a Service
            </h2>
            <div className="flex items-center gap-1">
              <TbMapPin size={16} className="opacity-40" />
              <a
                href="https://cloudnativedays.jp/cnds2025"
                target="_blank"
                rel="noreferrer"
                className="text-sm opacity-60 link link-hover"
              >
                CloudNative Days Summer 2025
              </a>
              <span className="badge badge-primary badge-soft">LT</span>
            </div>
            <iframe
              className="speakerdeck-iframe"
              src="https://speakerdeck.com/player/e73ecf1f537a4175b173ed4ec5638a92"
              title="研究室サーバーとKubeflowで実践するNotebook as a Service"
              data-ratio="1.7777777777777777"
            ></iframe>
          </div>
        </div>

        <div className="card card-border mb-4">
          <div className="card-body">
            <h2 className="card-title">
              rootlessコンテナのすゝめ -
              研究室サーバーでもできる安全なコンテナ管理
            </h2>
            <div className="flex items-center gap-1">
              <TbMapPin size={16} className="opacity-40" />
              <a
                href="https://cloudnativedays.jp/cnds2025"
                target="_blank"
                rel="noreferrer"
                className="text-sm opacity-60 link link-hover"
              >
                学生と社会人LT会 #2
              </a>
              <span className="badge badge-primary badge-soft">LT</span>
            </div>
            <iframe
              className="speakerdeck-iframe"
              src="https://speakerdeck.com/player/91f0b01b3794493b80ec663da267e432"
              title="rootlessコンテナのすゝめ - 研究室サーバーでもできる安全なコンテナ管理"
              data-ratio="1.7777777777777777"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default function PublicationsPage() {
  return (
    <main>
      {/* Preconnect to SpeakerDeck for the iframes in this page */}
      <link rel="preconnect" href="https://speakerdeck.com" />
      <Suspense fallback={null}>
        <Publications />
      </Suspense>
    </main>
  );
}

import { Suspense } from "react";
import Image from "next/image";
import { TechBlog } from "@/components/sections/TechBlog";
import { getTranslations } from "next-intl/server";
import {
  TbBook,
  TbBrandYoutube,
  TbExternalLink,
  TbMapPin,
} from "react-icons/tb";
import { z } from "zod";
import {
  PublicationPaperSchema,
  PublicationTalkSchema,
  PublicationVideoSchema,
} from "@/types/messages";

async function Publications() {
  const t = await getTranslations("Publications");

  const papersResult = z
    .array(PublicationPaperSchema)
    .safeParse(t.raw("papers"));
  if (!papersResult.success) {
    console.error("Publications: invalid papers", papersResult.error.message);
  }
  const papers = papersResult.success ? papersResult.data : [];

  const talksResult = z.array(PublicationTalkSchema).safeParse(t.raw("talks"));
  if (!talksResult.success) {
    console.error("Publications: invalid talks", talksResult.error.message);
  }
  const talks = talksResult.success ? talksResult.data : [];

  const videosResult = z
    .array(PublicationVideoSchema)
    .safeParse(t.raw("videos"));
  if (!videosResult.success) {
    console.error("Publications: invalid videos", videosResult.error.message);
  }
  const videos = videosResult.success ? videosResult.data : [];

  return (
    <>
      <TechBlog />

      <div className="max-w-5xl mx-auto px-4 pt-8" id="papers">
        <div className="flex justify-center my-6">
          <h2 className="text-3xl font-bold">{t("paperTitle")}</h2>
        </div>
        {papers.map((paper, index) => (
          <a
            key={index}
            href={paper.url}
            target="_blank"
            rel="noreferrer"
            className="card card-border md:card-side bg-base-100 shadow-sm mb-4 overflow-hidden hover:bg-base-200 transition-colors"
          >
            <figure className="bg-base-200/40 md:w-72 lg:w-80 shrink-0">
              <Image
                src={paper.imageUrl}
                alt={paper.title}
                width={1280}
                height={720}
                className="h-56 w-full object-cover md:h-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{paper.title}</h2>
              <div className="flex items-center gap-1 pb-4">
                <TbBook size={16} className="opacity-40" />
                <span className="text-sm opacity-60 pr-2">
                  {paper.conference}
                </span>
                <span className="badge badge-sm badge-primary badge-soft">
                  {paper.year}
                </span>
              </div>
              <p>{paper.text}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 pt-8" id="talks">
        <div className="flex justify-center my-6">
          <h2 className="text-3xl font-bold">{t("talkTitle")}</h2>
        </div>

        {talks.map((talk, index) => (
          <div key={index}>
            <div className="mb-4">
              <h2 className="text-2xl font-bold">{talk.title}</h2>
              <div className="mt-2 mb-4 flex items-center gap-1">
                <TbMapPin size={16} className="opacity-40" />
                <a
                  href={talk.eventUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm opacity-60 link link-hover pr-2"
                >
                  {talk.event}
                </a>
                <span className="badge badge-primary badge-soft">
                  {talk.talkType}
                </span>
                <span className="badge badge-sm badge-primary badge-soft">
                  {talk.year}
                </span>
              </div>
              <iframe
                className="speakerdeck-iframe"
                src={talk.slideUrl}
                title={talk.title}
                data-ratio="1.7777777777777777"
              ></iframe>
            </div>
            {index < talks.length - 1 ? (
              <div className="divider max-w-5xl mx-auto px-4" />
            ) : null}
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-4 pt-8" id="videos">
        <div className="flex justify-center my-6">
          <h2 className="text-3xl font-bold">{t("videoTitle")}</h2>
        </div>

        <div className="space-y-8">
          {videos.map((video, index) => (
            <div key={video.url}>
              <div className="space-y-3">
                <div>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noreferrer"
                    className="link link-hover text-2xl font-bold"
                  >
                    {video.title}
                  </a>
                  <div className="mt-2 flex items-center gap-1">
                    <TbBrandYoutube size={16} className="opacity-40" />
                    <span className="text-sm opacity-60 pr-2">
                      {video.channel}
                    </span>
                    <span className="badge badge-sm badge-primary badge-soft">
                      {video.year}
                    </span>
                  </div>
                </div>
                {video.embedUrl ? (
                  <iframe
                    className="w-full aspect-video rounded-box"
                    src={video.embedUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                ) : video.thumbnailUrl ? (
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noreferrer"
                    className="card card-border group overflow-hidden cursor-pointer hover:scale-[1.01] transition-transform"
                  >
                    <figure className="relative bg-base-200/40">
                      <Image
                        src={video.thumbnailUrl}
                        alt={video.title}
                        width={1280}
                        height={720}
                        className="w-full aspect-video object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-2 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <TbExternalLink size={24} color="white" />
                        <p className="text-white text-sm font-medium text-center">
                          {video.title}
                        </p>
                      </div>
                    </figure>
                  </a>
                ) : null}
              </div>
              {index < videos.length - 1 ? (
                <div className="divider max-w-5xl mx-auto px-4" />
              ) : null}
            </div>
          ))}
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
      <link rel="preconnect" href="https://www.youtube-nocookie.com" />
      <Suspense fallback={null}>
        <Publications />
      </Suspense>
    </main>
  );
}

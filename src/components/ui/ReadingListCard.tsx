"use client";
// ReadingListCard is a Client Component: manages hover state for the overlay.
import Image from "next/image";
import { TbExternalLink } from "react-icons/tb";
import { useState } from "react";
import type { ReadingListItem, ReadingListStatus } from "@/types/data";

const getStatusBadgeClass = (status: ReadingListStatus) => {
  switch (status) {
    case "Finished":
      return "badge-success";
    case "Reading":
      return "badge-info";
    case "Almost Finished":
      return "badge-warning";
    case "Partially Read":
      return "badge-error";
    case "Not Started":
      return "badge-ghost";
  }
};

export function ReadingListCard({ item }: { item: ReadingListItem }) {
  const [focused, setFocused] = useState(false);

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noreferrer"
      onMouseOver={() => setFocused(true)}
      onMouseOut={() => setFocused(false)}
      className="card overflow-hidden cursor-pointer hover:scale-[1.01] transition-transform"
      style={{ aspectRatio: "1 / 1.4" }}
    >
      <figure className="relative h-full">
        <Image
          fill
          src={item.imageUrl}
          alt={item.name}
          sizes="(max-width: 576px) 50vw, (max-width: 768px) 33vw, (max-width: 992px) 25vw, 20vw"
          className="object-cover"
        />
      </figure>
      {focused && (
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-2 p-4">
          <TbExternalLink size={24} color="white" />
          <p className="text-white text-sm font-medium text-center">
            {item.name}
          </p>
        </div>
      )}
      <span
        className={`badge badge-sm absolute left-2 bottom-2 z-10 ${getStatusBadgeClass(item.status)}`}
      >
        {item.status}
      </span>
    </a>
  );
}

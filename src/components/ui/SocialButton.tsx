// SocialButton is a Server Component: no hooks, renders a plain anchor.
import type { IconType } from "react-icons";
import { SiGithub, SiX, SiZenn, SiSpeakerdeck } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { HatenaSvgComponent } from "./SvgIcon";
import type { SocialItem } from "@/types/data";

const iconMap: { [key: string]: IconType | React.FC } = {
  GitHub: SiGithub,
  X: SiX,
  Zenn: SiZenn,
  "Speaker Deck": SiSpeakerdeck,
  LinkedIn: FaLinkedin,
  "Hatena Blog": HatenaSvgComponent,
};

type SocialButtonProps = SocialItem & {
  className?: string;
};

export const SocialButton = (social: SocialButtonProps) => {
  const Icon = iconMap[social.name];
  return (
    <a
      href={social.url}
      target="_blank"
      rel="noreferrer"
      className={`btn btn-ghost btn-sm px-2 ${social.className ?? "text-neutral"}`}
      aria-label={social.name}
    >
      <Icon size={16} />
    </a>
  );
};

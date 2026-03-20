import { Button } from "@mantine/core";
import type { IconType } from "react-icons";
import { SiGithub, SiX, SiZenn, SiSpeakerdeck } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { HatenaSvgComponent } from "@/assets/SvgIcon";
import type { SocialItem } from "@/types/data";

const iconMap: { [key: string]: IconType | React.FC } = {
  GitHub: SiGithub,
  X: SiX,
  Zenn: SiZenn,
  "Speaker Deck": SiSpeakerdeck,
  LinkedIn: FaLinkedin,
  "Hatena Blog": HatenaSvgComponent,
};

export const SocialButton = (social: SocialItem) => {
  const Icon = iconMap[social.name];
  return (
    <Button
      variant="subtle"
      component="a"
      href={social.url}
      key={social.name}
      c="green.9"
      size="compact-md"
    >
      <Icon size="16" />
    </Button>
  );
};

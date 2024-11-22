import { Button } from "@mantine/core";
import type { IconType } from "react-icons";
import {
  SiGithub,
  SiX,
  SiZenn,
  SiSpeakerdeck,
  SiLinkedin,
} from "react-icons/si";
import { HatenaSvgComponent } from "../assets/SvgIcon";
import { SocialItem } from "../data/social";

const iconMap: { [key: string]: IconType | React.FC<any> } = {
  GitHub: SiGithub,
  X: SiX,
  Zenn: SiZenn,
  "Speaker Deck": SiSpeakerdeck,
  LinkedIn: SiLinkedin,
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
      color="green.9"
      compact
    >
      <Icon size="16" />
    </Button>
  );
};

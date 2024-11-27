import {
  Group,
  Text,
  useMantineColorScheme,
  useMantineTheme,
  getThemeColor,
} from "@mantine/core";
import { socials } from "../data/social";
import classes from "./Footer.module.css";
import { SocialButton } from "./Social";

export function Footer() {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  return (
    <div
      className={classes.footer}
      style={{
        borderTop: `1px solid ${
          colorScheme === "dark"
            ? getThemeColor("dark.5", theme)
            : getThemeColor("gray.2", theme)
        }`,
      }}
    >
      <Group align="apart" className={classes.inner} px="sm">
        <Text
          variant="gradient"
          gradient={{ from: "green.9", to: "green.7", deg: 45 }}
        >
          Kitsuya Azuma
        </Text>
        <Group gap="xs">
          {socials.map((social) => (
            <SocialButton
              key={social.name}
              name={social.name}
              url={social.url}
            />
          ))}
        </Group>
      </Group>
    </div>
  );
}

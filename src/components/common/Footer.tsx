"use client";
import {
  Group,
  Text,
  useMantineColorScheme,
  useMantineTheme,
  getThemeColor,
  Container,
} from "@mantine/core";
import { socials } from "../data/social";
import classes from "./Footer.module.css";
import { SocialButton } from "./Social";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
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
      <Container size="lg">
        <Group align="apart" className={classes.inner}>
          <Text
            variant="gradient"
            gradient={{ from: "green.9", to: "green.7", deg: 45 }}
          >
            {t("name")}
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
      </Container>
    </div>
  );
}

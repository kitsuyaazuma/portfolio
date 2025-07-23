"use client";
import {
  AppShell,
  ActionIcon,
  Flex,
  NavLink,
  SimpleGrid,
  Center,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { useState } from "react";
import { TbSun, TbMoonStars } from "react-icons/tb";
import { Archive } from "./archive/Archive";
import { Hero } from "./common/Hero";
import { Home } from "./home/Home";
import { useTranslations } from "next-intl";

export const App = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };
  const t = useTranslations("Navigation");

  const [tab, setTab] = useState("home");

  return (
    <AppShell
      padding="md"
      navbar={{
        breakpoint: "sm",
        width: "xl",
      }}
      header={{ height: 50 }}
    >
      <AppShell.Header>
        <Flex justify="space-between">
          <ActionIcon
            variant="outline"
            color={colorScheme === "dark" ? "green.5" : "green.9"}
            onClick={() => toggleColorScheme()}
            style={{ margin: "10px" }}
          >
            {colorScheme === "dark" ? <TbSun /> : <TbMoonStars />}
          </ActionIcon>
          <SimpleGrid
            cols={2}
            spacing={0}
            style={{
              height: 50,
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            <NavLink
              label={<Center>{t("home")}</Center>}
              active={tab === "home"}
              onClick={() => setTab("home")}
            />
            <NavLink
              label={<Center>{t("archive")}</Center>}
              active={tab === "archive"}
              onClick={() => setTab("archive")}
            />
          </SimpleGrid>
        </Flex>
      </AppShell.Header>

      <AppShell.Main>
        <Hero />
        {tab === "home" ? <Home /> : <Archive />}
      </AppShell.Main>
    </AppShell>
  );
};

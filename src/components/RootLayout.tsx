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
import { TbSun, TbMoonStars } from "react-icons/tb";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function RootLayout({ children }: { children: React.ReactNode }) {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };
  const t = useTranslations("Navigation");
  const pathname = usePathname();

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
              active={pathname === "/"}
              component={Link}
              href="/"
            />
            <NavLink
              label={<Center>{t("archive")}</Center>}
              component={Link}
              href="/archive"
              active={pathname === "archive"}
            />
          </SimpleGrid>
        </Flex>
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}

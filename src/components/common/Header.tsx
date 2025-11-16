"use client";
import {
  ActionIcon,
  Burger,
  Center,
  NavLink,
  SimpleGrid,
  Flex,
  useMantineColorScheme,
  useComputedColorScheme,
  Stack,
  Container,
  SegmentedControl,
  Group,
  Divider,
} from "@mantine/core";
import { TbSun, TbMoonStars } from "react-icons/tb";
import { useDisclosure } from "@mantine/hooks";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { AnimatedHeaderLogo } from "./AnimatedHeaderLogo";

export function Header() {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };
  const t = useTranslations("Navigation");
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();

  const handleLocaleChange = (value: string) => {
    router.replace(pathname, { locale: value as "en" | "ja" });
  };

  return (
    <>
      <Container size="lg">
        <Flex justify="space-between" align="center" h={50}>
          {/*
           */}
          <AnimatedHeaderLogo />

          <Group>
            <Group gap="lg" visibleFrom="sm">
              <SimpleGrid cols={3} spacing={0} h={50} my={0} visibleFrom="sm">
                <NavLink
                  label={<Center>{t("home")}</Center>}
                  active={pathname === "/"}
                  component={Link}
                  href="/"
                />
                <NavLink
                  label={<Center>PUBLICATIONS</Center>}
                  component={Link}
                  href="/publications"
                  active={pathname === "/publications"}
                />
                <NavLink
                  label={<Center>{t("bookshelf")}</Center>}
                  component={Link}
                  href="/bookshelf"
                  active={pathname === "/bookshelf"}
                />
              </SimpleGrid>
              <Flex h={25} align="center">
                <Divider orientation="vertical" />
              </Flex>
              <SegmentedControl
                value={locale}
                onChange={handleLocaleChange}
                data={[
                  { label: "EN", value: "en" },
                  { label: "JA", value: "ja" },
                ]}
                color={colorScheme === "dark" ? "green.5" : "green.9"}
              />
            </Group>
            <ActionIcon
              variant="outline"
              color={colorScheme === "dark" ? "green.5" : "green.9"}
              onClick={toggleColorScheme}
            >
              {colorScheme === "dark" ? <TbSun /> : <TbMoonStars />}
            </ActionIcon>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              color={colorScheme == "dark" ? "green.5" : "green.9"}
            />
          </Group>
        </Flex>
      </Container>
      {opened && (
        <Stack
          h="100vh"
          bg={colorScheme === "dark" ? "dark.7" : "white"}
          hiddenFrom="sm"
          gap={0}
          py="md"
          justify="center"
        >
          <NavLink
            label={<Center>{t("home")}</Center>}
            active={pathname === "/"}
            component={Link}
            href="/"
            onClick={toggle}
            styles={{
              label: { fontSize: "1.2rem" },
            }}
          />
          <NavLink
            label={<Center>PUBLICATIONS</Center>}
            component={Link}
            href="/publications"
            active={pathname === "/publications"}
            onClick={toggle}
            styles={{
              label: { fontSize: "1.2rem" },
            }}
          />
          <NavLink
            label={<Center>{t("bookshelf")}</Center>}
            component={Link}
            href="/bookshelf"
            active={pathname === "/bookshelf"}
            onClick={toggle}
            styles={{
              label: { fontSize: "1.2rem" },
            }}
          />
          <Center mt="xl">
            <SegmentedControl
              value={locale}
              onChange={(value) => {
                handleLocaleChange(value);
                toggle();
              }}
              data={[
                { label: "EN", value: "en" },
                { label: "JA", value: "ja" },
              ]}
              color={colorScheme === "dark" ? "green.5" : "green.9"}
              size="md"
            />
          </Center>
        </Stack>
      )}
    </>
  );
}

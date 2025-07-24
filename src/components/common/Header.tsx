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
} from "@mantine/core";
import { TbSun, TbMoonStars } from "react-icons/tb";
import { useDisclosure } from "@mantine/hooks";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export function Header() {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light");
  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === "dark" ? "light" : "dark");
  };
  const t = useTranslations("Navigation");
  const pathname = usePathname();

  return (
    <>
      <Container size="lg">
        <Flex justify="space-between" align="center" h={50}>
          <ActionIcon
            variant="outline"
            color={colorScheme === "dark" ? "green.5" : "green.9"}
            onClick={toggleColorScheme}
          >
            {colorScheme === "dark" ? <TbSun /> : <TbMoonStars />}
          </ActionIcon>

          <SimpleGrid cols={2} spacing={0} h={50} my={0} visibleFrom="sm">
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
              active={pathname === "/archive"}
            />
          </SimpleGrid>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            color={colorScheme == "dark" ? "green.5" : "green.9"}
          />
        </Flex>
      </Container>
      {opened && (
        <Stack
          h="100vh"
          bg={colorScheme === "dark" ? "dark.7" : "white"}
          hiddenFrom="sm"
          gap={0}
          py="md"
        >
          <NavLink
            label={<Center>{t("home")}</Center>}
            active={pathname === "/"}
            component={Link}
            href="/"
            onClick={toggle}
            styles={{
              label: { fontSize: "md" },
            }}
          />
          <NavLink
            label={<Center>{t("archive")}</Center>}
            component={Link}
            href="/archive"
            active={pathname === "/archive"}
            onClick={toggle}
          />
        </Stack>
      )}
    </>
  );
}

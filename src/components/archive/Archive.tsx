import { Title, Text, Container, Center, Space } from "@mantine/core";
import { Footer } from "../common/Footer";
import { BlogList } from "./BlogList";
import { ReadingList } from "./ReadingList";

import { useTranslations } from "next-intl";

export const Archive = () => {
  const t = useTranslations("Archive");
  return (
    <>
      <Center mt="xl">
        <Title>{t("blogTitle")}</Title>
      </Center>
      <Center mb="xl">
        <Text c="dimmed">{t("blogDescription")}</Text>
      </Center>
      <Container my="xl">
        <BlogList />
      </Container>
      <Space h="xl" />
      <Center mt="xl">
        <Title>{t("readingListTitle")}</Title>
      </Center>
      <Center mb="xl">
        <Text c="dimmed">{t("readingListDescription")}</Text>
      </Center>
      <Container my="xl">
        <ReadingList />
      </Container>
      <Footer />
    </>
  );
};

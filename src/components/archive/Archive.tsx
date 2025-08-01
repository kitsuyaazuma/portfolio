import { Title, Container, Center, Space } from "@mantine/core";
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
      <Container my="xl">
        <BlogList />
      </Container>
      <Space h="xl" />
      <Center mt="xl">
        <Title>{t("readingListTitle")}</Title>
      </Center>
      <Container my="xl">
        <ReadingList />
      </Container>
    </>
  );
};

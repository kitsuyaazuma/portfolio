import { Title, Container, Center, Space } from "@mantine/core";
import { BlogList } from "./BlogList";
import { ReadingList } from "./ReadingList";

import { getTranslations } from "next-intl/server";

export const Archive = async () => {
  const t = await getTranslations("Archive");
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

import { Title, Container, Center, Space } from "@mantine/core";
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
      <Container my="xl" size="lg">
        <BlogList />
      </Container>
      <Space h="xl" />
      <Center mt="xl">
        <Title>{t("readingListTitle")}</Title>
      </Center>
      <Container my="xl" size="lg">
        <ReadingList />
      </Container>
      <Footer />
    </>
  );
};

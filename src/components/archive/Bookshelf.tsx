import { Title, Container, Center } from "@mantine/core";
import { ReadingList } from "./ReadingList";

import { getTranslations } from "next-intl/server";

export const Bookshelf = async () => {
  const t = await getTranslations("Bookshelf");
  return (
    <>
      <Center mt="xl">
        <Title>{t("readingListTitle")}</Title>
      </Center>
      <Container my="xl">
        <ReadingList />
      </Container>
    </>
  );
};

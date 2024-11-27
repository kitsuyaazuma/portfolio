import { Title, Text, Container, Center, Space } from "@mantine/core";
import { Footer } from "../common/Footer";
import { BlogList } from "./BlogList";
import { ReadingList } from "./ReadingList";

export const Archive = () => {
  return (
    <>
      <Center mt="xl">
        <Title>TECH BLOG</Title>
      </Center>
      <Center mb="xl">
        <Text c="dimmed">『てっく・ざ・ぶろぐ』</Text>
      </Center>
      <Container my="xl">
        <BlogList />
      </Container>
      <Space h="xl" />
      <Center mt="xl">
        <Title>READING LIST</Title>
      </Center>
      <Center mb="xl">
        <Text c="dimmed">読書記録</Text>
      </Center>
      <Container my="xl">
        <ReadingList />
      </Container>
      <Footer />
    </>
  );
};

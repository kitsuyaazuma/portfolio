import {
  Text,
  Image,
  Flex,
  Stack,
  Container,
  Group,
  Button,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import Highlighter from "react-highlight-words";
import "./highlight.scss";

export const Books = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Container py="xl">

      <Flex
        direction={{ base: "column", sm: "row" }}
        gap="lg"
        justify="center"
        align="center"
      >

        <Stack>
          <Text size="xl" fw={700}>『ReactではじめるChrome拡張開発入門』</Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={colorScheme === "dark" ? "highlight-dark" : "highlight-light"}
              searchWords={["ReactとTypeScriptによるChrome拡張機能開発"]}
              autoEscape={true}
              textToHighlight={"体系的なドキュメントがなかったReactとTypeScriptによるChrome拡張機能開発を入門書にまとめて公開。"}
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={colorScheme === "dark" ? "highlight-dark" : "highlight-light"}
              searchWords={["ハンズオン形式"]}
              autoEscape={true}
              textToHighlight={"ハンズオン形式でDeepLのような実践的な翻訳Chrome拡張機能を開発しながら学ぶ。"}
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={colorScheme === "dark" ? "highlight-dark" : "highlight-light"}
              searchWords={["1位を獲得"]}
              autoEscape={true}
              textToHighlight={"ZennのTrending Books（2023/02）で1位を獲得した。"}
            />
          </Text>
          <Group spacing="sm" position="center" mt="xs">
            <Button variant="light" color="green.9" size="md" component="a" href="https://zenn.dev/alvinvin/books/chrome_extension">
              Zennで読む（無料）
            </Button>
          </Group>
        </Stack>
        <div style={{ width: "350px" }}>
          <Image p="lg" radius="md" src="imgs/Book.png" alt="Kitsuya Azuma"/>
        </div>
      </Flex>
    </Container>
  );
};

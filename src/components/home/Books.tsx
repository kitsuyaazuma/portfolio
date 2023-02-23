import {
  Title,
  Text,
  Image,
  Center,
  Flex,
  Stack,
  Container,
  Group,
  Button,
} from "@mantine/core";
import React from "react";
import { SiGithub, SiTwitter, SiQiita, SiYoutube, SiZenn } from "react-icons/si";

export const Books = () => {
  return (
    <Container py="xl">

      <Flex
        direction={{ base: "column", sm: "row" }}
        gap="lg"
        justify="center"
        align="center"
      >

        <Stack>
          <Text size="lg" fw={700}>『ReactではじめるChrome拡張開発入門』</Text>
          <Text size="sm">
            体系的なドキュメントがなかったReactとTypeScriptによるChrome拡張機能開発を入門書にまとめて公開。
          </Text>
          <Text size="sm">
            ハンズオン形式でDeepLのような実践的な翻訳Chrome拡張機能を開発しながら学ぶ。
          </Text>
          <Text size="sm">
            ZennのTrending Booksで1位を獲得した。
          </Text>
          <Group spacing="sm" position="center" mt="xs">
            <Button variant="light" color="green.9" size="md">
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

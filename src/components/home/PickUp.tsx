import {
  Text,
  Image,
  Flex,
  Stack,
  Container,
  Group,
  Button,
  useMantineColorScheme,
  Space,
} from "@mantine/core";
import React from "react";
import Highlighter from "react-highlight-words";
import "./highlight.scss";

export const PickUp = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Container py="xl">

      <Flex
        direction={{ base: "column", sm: "row" }}
        gap="lg"
        justify="center"
        align="center"
      >
        <div style={{ width: "350px" }}>
          <Image p="lg" radius="md" src="imgs/Book.png" alt="Kitsuya Azuma"/>
        </div>
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
      </Flex>

      <Space h="xl" />

      <Flex
        direction={{ base: "column", sm: "row" }}
        gap="lg"
        justify="center"
        align="center"
      >
        <div style={{ width: "360px" }}>
          <Image p="lg" radius="md" src="imgs/CyberAgentTechBlog.png" alt="Kitsuya Azuma"/>
        </div>
        <Stack>
          <Text size="xl" fw={700}>『クラウドにおけるコスト管理のためのリソースラベル監視ツールの開発』</Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={colorScheme === "dark" ? "highlight-dark" : "highlight-light"}
              searchWords={["サイバーエージェント"]}
              autoEscape={true}
              textToHighlight={"サイバーエージェントでのインターンシップ生としての取り組みが技術ブログで紹介された。"}
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={colorScheme === "dark" ? "highlight-dark" : "highlight-light"}
              searchWords={["大規模なクラウド環境", "リソースラベルを監視"]}
              autoEscape={true}
              textToHighlight={"ABEMAの大規模なクラウド環境のコスト管理を楽にするため、リソースラベルを監視するツールを開発した。"}
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={colorScheme === "dark" ? "highlight-dark" : "highlight-light"}
              searchWords={["GitHubで公開中"]}
              autoEscape={true}
              textToHighlight={"ソースコードとデプロイ用のTerraformをGitHubで公開中。"}
            />
          </Text>
          <Group spacing="sm" position="center" mt="xs">
            <Button variant="light" color="green.9" size="md" component="a" href="https://developers.cyberagent.co.jp/blog/archives/43627/">
              ブログを読む
            </Button>
          </Group>
        </Stack>
      </Flex>

    </Container>
  );
};

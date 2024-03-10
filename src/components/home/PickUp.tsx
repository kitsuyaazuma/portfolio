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
        <div style={{ width: "360px" }}>
          <Image p="lg" radius="md" src="imgs/Book.png" alt="Book"/>
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
              textToHighlight={"ZennのTrending Books（2023年2月）で1位を獲得した。2024年2月に改訂版を公開。"}
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
          <Image p="lg" radius="md" src="imgs/CyberAgentTechBlog.png" alt="CyberAgentTechBlog"/>
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


      <Space h="xl" />

      <Flex
        direction={{ base: "column", sm: "row" }}
        gap="lg"
        justify="center"
        align="center"
      >
        <div style={{ width: "360px" }}>
          <Image p="lg" radius="md" src="imgs/IEICEPoster.png" alt="IEICEPoster"/>
        </div>
        <Stack>
          <Text size="xl" fw={700}>『連合学習の通信量を削減するためのEnergyスコアを利用した知識蒸留手法の検討』</Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={colorScheme === "dark" ? "highlight-dark" : "highlight-light"}
              searchWords={["IEICE", "学生ポスターセッション", "優秀ポスター賞"]}
              autoEscape={true}
              textToHighlight={"広島大学で開催されたIEICE（電子情報通信学会）総合大会2024の学生ポスターセッションで優秀ポスター賞（上位7%）を受賞。"}
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={colorScheme === "dark" ? "highlight-dark" : "highlight-light"}
              searchWords={["連合学習", "分布外検出"]}
              autoEscape={true}
              textToHighlight={"蒸留ベースの連合学習手法において十分に学習されたデータに対する予測のみを集約するため、初めて分布外検出スコアを取り入れ、通信量の削減とともに学習の効率化に成功した。"}
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={colorScheme === "dark" ? "highlight-dark" : "highlight-light"}
              searchWords={["卒業論文"]}
              autoEscape={true}
              textToHighlight={"発表内容をさらに発展させ、卒業論文として執筆中。"}
            />
          </Text>
          <Group spacing="sm" position="center" mt="xs">
            <Button variant="light" color="green.9" size="md" component="a" href="https://kitsuya0828.github.io/DSFLplus/">
              プロジェクトページへ
            </Button>
          </Group>
        </Stack>
      </Flex>

    </Container>
  );
};

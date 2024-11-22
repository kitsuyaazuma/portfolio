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
  const { colorScheme } = useMantineColorScheme();
  return (
    <Container py="xl">
      <Flex
        direction={{ base: "column", sm: "row" }}
        gap="lg"
        justify="center"
        align="center"
      >
        <div style={{ width: "240px" }}>
          <Image p="lg" radius="md" src="images/home/zenn.webp" alt="Book" />
        </div>
        <Stack>
          <Text size="xl" fw={700}>
            『ReactではじめるChrome拡張開発入門』
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={
                colorScheme === "dark" ? "highlight-dark" : "highlight-light"
              }
              searchWords={["ReactとTypeScriptによるChrome拡張機能開発"]}
              autoEscape={true}
              textToHighlight={
                "体系的なドキュメントがなかったReactとTypeScriptによるChrome拡張機能開発を入門書にまとめて公開。"
              }
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={
                colorScheme === "dark" ? "highlight-dark" : "highlight-light"
              }
              searchWords={["ハンズオン形式"]}
              autoEscape={true}
              textToHighlight={
                "ハンズオン形式でDeepLのような実践的な翻訳Chrome拡張機能を開発しながら学ぶ。"
              }
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={
                colorScheme === "dark" ? "highlight-dark" : "highlight-light"
              }
              searchWords={["1位を獲得"]}
              autoEscape={true}
              textToHighlight={
                "ZennのTrending Books（2023年2月）で1位を獲得した。2024年2月に改訂版を公開。"
              }
            />
          </Text>
          <Group spacing="sm" position="center" mt="xs">
            <Button
              variant="light"
              color="green.9"
              size="md"
              component="a"
              href="https://zenn.dev/alvinvin/books/chrome_extension"
              target="_blank"
            >
              Zennで本を読む
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
        <div style={{ width: "240px" }}>
          <Image
            p="lg"
            radius="md"
            src="images/home/cyberagent.webp"
            alt="CyberAgentTechBlog"
          />
        </div>
        <Stack>
          <Text size="xl" fw={700}>
            『クラウドにおけるコスト管理のためのリソースラベル監視ツールの開発』
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={
                colorScheme === "dark" ? "highlight-dark" : "highlight-light"
              }
              searchWords={["サイバーエージェント"]}
              autoEscape={true}
              textToHighlight={
                "サイバーエージェントでのインターンシップ生としての取り組みがDevelopers Blogで紹介された。"
              }
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={
                colorScheme === "dark" ? "highlight-dark" : "highlight-light"
              }
              searchWords={["大規模なクラウド環境", "リソースラベルを監視"]}
              autoEscape={true}
              textToHighlight={
                "ABEMAの大規模なクラウド環境のコスト管理を楽にするため、リソースラベルを監視するツールを開発した。"
              }
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={
                colorScheme === "dark" ? "highlight-dark" : "highlight-light"
              }
              searchWords={["GitHubで公開中"]}
              autoEscape={true}
              textToHighlight={
                "ソースコードとデプロイ用のTerraformをGitHubで公開中。"
              }
            />
          </Text>
          <Group spacing="sm" position="center" mt="xs">
            <Button
              variant="light"
              color="green.9"
              size="md"
              component="a"
              href="https://developers.cyberagent.co.jp/blog/archives/43627/"
              target="_blank"
            >
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
        <div style={{ width: "240px", minWidth: "240px" }}>
          <Image
            p="lg"
            radius="md"
            src="images/home/ieice.webp"
            alt="IEICEPoster"
          />
        </div>
        <Stack>
          <Text size="xl" fw={700}>
            『連合学習の通信量を削減するためのEnergyスコアを利用した知識蒸留手法の検討』
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={
                colorScheme === "dark" ? "highlight-dark" : "highlight-light"
              }
              searchWords={[
                "IEICE",
                "学生ポスターセッション",
                "優秀ポスター賞",
              ]}
              autoEscape={true}
              textToHighlight={
                "広島大学で開催されたIEICE（電子情報通信学会）総合大会2024の学生ポスターセッションで優秀ポスター賞（上位7%）を受賞。"
              }
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={
                colorScheme === "dark" ? "highlight-dark" : "highlight-light"
              }
              searchWords={["連合学習", "分布外検出"]}
              autoEscape={true}
              textToHighlight={
                "蒸留ベースの連合学習手法において十分に学習されたデータに対する予測のみを集約するため、初めて分布外検出スコアを取り入れ、通信量の削減とともに学習の効率化に成功した。"
              }
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={
                colorScheme === "dark" ? "highlight-dark" : "highlight-light"
              }
              searchWords={["卒業論文"]}
              autoEscape={true}
              textToHighlight={
                "発表内容をさらに発展させ、卒業論文として執筆した。"
              }
            />
          </Text>
          <Group spacing="sm" position="center" mt="xs">
            <Button
              variant="light"
              color="green.9"
              size="md"
              component="a"
              href="https://kitsuya0828.github.io/DSFLplus/"
              target="_blank"
            >
              プロジェクトページへ
            </Button>
            <Button
              variant="light"
              color="green.9"
              size="md"
              component="a"
              href="https://www.ieice.org/jpn_r/junior/poster_session_awards_2024.html"
              target="_blank"
            >
              受賞ページへ
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
        <div style={{ width: "240px", minWidth: "240px" }}>
          <Image
            p="lg"
            radius="md"
            src="images/home/m3.webp"
            alt="M3TechBlog"
          />
        </div>
        <Stack>
          <Text size="xl" fw={700}>
            『OOMしたCronJobのメモリ制限を「いい感じ」に増やし、不必要な課金・障害対応を減らす』
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={
                colorScheme === "dark" ? "highlight-dark" : "highlight-light"
              }
              searchWords={["エムスリー"]}
              autoEscape={true}
              textToHighlight={
                "エムスリーでのインターンとしての取り組みがテックブログで紹介された。"
              }
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={
                colorScheme === "dark" ? "highlight-dark" : "highlight-light"
              }
              searchWords={["CronJobでOOMが発生", "broom"]}
              autoEscape={true}
              textToHighlight={
                "KubernetesのCronJobでOOMが発生した時に「いい感じ」にメモリ制限を増加させてくれるCustom Controllerであるbroomを開発し、クラウド課金と障害対応の両側面から課題解決を目指した。"
              }
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={
                colorScheme === "dark" ? "highlight-dark" : "highlight-light"
              }
              searchWords={["OSSとしてGitHubで公開"]}
              autoEscape={true}
              textToHighlight={
                "broomはOSSとしてGitHubで公開し、現在も継続して開発中。"
              }
            />
          </Text>
          <Group spacing="sm" position="center" mt="xs">
            <Button
              variant="light"
              color="green.9"
              size="md"
              component="a"
              href="https://www.m3tech.blog/entry/2024/04/12/110000"
              target="_blank"
            >
              テックブログを読む
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
        <div style={{ width: "240px", minWidth: "240px" }}>
          <Image
            p="lg"
            radius="md"
            src="images/home/mirrativ.webp"
            alt="MirrativTechBlog"
          />
        </div>
        <Stack>
          <Text size="xl" fw={700}>
            『ログ基盤のFluentdをFluent Bitに移行して監視ツールを実装した話』
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={
                colorScheme === "dark" ? "highlight-dark" : "highlight-light"
              }
              searchWords={["ミラティブ"]}
              autoEscape={true}
              textToHighlight={
                "ミラティブでのインターンとしての取り組みがテックブログで紹介された。"
              }
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={
                colorScheme === "dark" ? "highlight-dark" : "highlight-light"
              }
              searchWords={["ログ欠損の原因解明", "Fluent Bitへの移行"]}
              autoEscape={true}
              textToHighlight={
                "既存の基盤のログ欠損の原因解明、FluentdからFluent Bitへの移行、Fluent Bit監視ツールの実装などを丁寧にまとめた。"
              }
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={
                colorScheme === "dark" ? "highlight-dark" : "highlight-light"
              }
              searchWords={["2位を獲得"]}
              autoEscape={true}
              textToHighlight={
                "はてなブックマーク（テクノロジー）のホットエントリーで2位を獲得した。"
              }
            />
          </Text>
          <Group spacing="sm" position="center" mt="xs">
            <Button
              variant="light"
              color="green.9"
              size="md"
              component="a"
              href="https://tech.mirrativ.stream/entry/log-fluent-bit-monitor"
              target="_blank"
            >
              テックブログを読む
            </Button>
          </Group>
        </Stack>
      </Flex>
    </Container>
  );
};

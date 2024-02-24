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
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import { SiGithub, SiQiita, SiYoutube, SiZenn, SiBlogger, SiX } from "react-icons/si";
import Highlighter from "react-highlight-words";
import "./highlight.scss";
import SvgComponent from "../assets/SizumeIcon";

export const About = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  return (
    <Container py="xl">
      <Center my="lg">
        <Title>ABOUT ME</Title>
      </Center>

      <Flex
        direction={{ base: "column", sm: "row" }}
        gap="xl"
        justify="center"
        align="center"
      >
        <Image p="lg" radius="md" src="imgs/Profile_color_sketch_new.jpeg" alt="Kitsuya Azuma"/>

        <Stack>
          <Text size="sm">
            <Highlighter
              highlightClassName={colorScheme === "dark" ? "highlight-dark" : "highlight-light"}
              searchWords={["大学4年生"]}
              autoEscape={true}
              textToHighlight={"宮城県仙台市在住の大学4年生。"}
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={colorScheme === "dark" ? "highlight-dark" : "highlight-light"}
              searchWords={["個人開発"]}
              autoEscape={true}
              textToHighlight={"大学入学と同時に競技プログラミングを始めたことをきっかけに、個人開発にも興味を持つ。"}
            />
          </Text>
          <Text size="sm">            
            <Highlighter
              highlightClassName={colorScheme === "dark" ? "highlight-dark" : "highlight-light"}
              searchWords={["画像処理（機械学習）", "連合学習"]}
              autoEscape={true}
              textToHighlight={"大学では情報工学を専攻。画像処理（機械学習）の研究室に所属し、連合学習の研究を行なっている。"}
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={colorScheme === "dark" ? "highlight-dark" : "highlight-light"}
              searchWords={["学生インターン"]}
              autoEscape={true}
              textToHighlight={"学生インターンとして様々なベンチャー企業で修行を積んでいる。とにかく新しい技術を触るのが好きで、インフラ系には特に目がない。"}
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={colorScheme === "dark" ? "highlight-dark" : "highlight-light"}
              searchWords={["積極的なアウトプット"]}
              autoEscape={true}
              textToHighlight={"技術記事ライターとして積極的なアウトプットも行なっている。かつて Tech系VTuber「あづまる」として動画配信活動も行っていた。"}
            />
          </Text>
          <Group spacing="sm" position="center" mt="xs">
            <Button
              variant="subtle"
              component="a"
              href="https://github.com/Kitsuya0828"
              color="green.9"
              compact
            >
              <SiGithub size="20" />
            </Button>
            <Button
              variant="subtle"
              component="a"
              href="https://x.com/azuma_alvin"
              color="green.9"
              compact
            >
              <SiX size="20" />
            </Button>
            <Button
              variant="subtle"
              component="a"
              href="https://qiita.com/adumaru0828"
              color="green.9"
              compact
            >
              <SiQiita size="20" />
            </Button>
            <Button
              variant="subtle"
              component="a"
              href="https://www.youtube.com/channel/UC00vvtUdtiche9vz_S4UjhQ"
              color="green.9"
              compact
            >
              <SiYoutube size="20" />
            </Button>
            <Button
              variant="subtle"
              component="a"
              href="https://zenn.dev/alvinvin"
              color="green.9"
              compact
            >
              <SiZenn size="20" />
            </Button>
            <Button
            variant="subtle"
            component="a"
            href="https://azumaprogrammingdiary.blogspot.com/"
            color="green.9"
            compact
          >
            <SiBlogger size="20" />
          </Button>
          <Button
            variant="subtle"
            component="a"
            href="https://sizu.me/azuma_alvin"
            color="green.9"
            compact
          >
            <SvgComponent size="20" />
          </Button>
          </Group>
        </Stack>
      </Flex>
    </Container>
  );
};

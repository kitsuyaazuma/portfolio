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
import Highlighter from "react-highlight-words";
import {
  SiGithub,
  SiQiita,
  SiYoutube,
  SiZenn,
  SiBlogger,
  SiX,
} from "react-icons/si";
import "./highlight.scss";
import { SizumeSvgComponent, HatenaSvgComponent } from "../assets/SvgIcon";

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
        <Image
          p="lg"
          radius="md"
          src="imgs/Profile_color_sketch_new.jpeg"
          alt="Kitsuya Azuma"
        />

        <Stack>
          <Text size="sm">
            <Highlighter
              highlightClassName={
                colorScheme === "dark" ? "highlight-dark" : "highlight-light"
              }
              searchWords={["大学院1年生"]}
              autoEscape={true}
              textToHighlight={"都内在住の大学院1年生。"}
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={
                colorScheme === "dark" ? "highlight-dark" : "highlight-light"
              }
              searchWords={["個人開発", "大規模サービス開発"]}
              autoEscape={true}
              textToHighlight={
                "大学入学と同時に競技プログラミングを始めたことをきっかけに、個人開発にも興味を持つ。次第に興味は大規模サービス開発に移っていった。"
              }
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={
                colorScheme === "dark" ? "highlight-dark" : "highlight-light"
              }
              searchWords={["Computer Vision", "Federated Learning"]}
              autoEscape={true}
              textToHighlight={
                "大学ではComputer Visionの研究室に所属し、蒸留ベースのFederated Learning（連合学習）の研究を行なった。大学院ではFLに更にフォーカスして研究を行っている。"
              }
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={
                colorScheme === "dark" ? "highlight-dark" : "highlight-light"
              }
              searchWords={["学生インターン", "Platform Engineering", "MLOps"]}
              autoEscape={true}
              textToHighlight={
                "学生インターンとして大小様々な企業で修行を積んでいる。最近はPlatform EngineeringとMLOpsに興味がある。"
              }
            />
          </Text>
          <Text size="sm">
            <Highlighter
              highlightClassName={
                colorScheme === "dark" ? "highlight-dark" : "highlight-light"
              }
              searchWords={["ジャーナル投稿", "LT登壇"]}
              autoEscape={true}
              textToHighlight={"2024年はジャーナル投稿とLT登壇が目標。"}
            />
          </Text>
          <Group spacing="sm" position="center" mt="xs">
            <Button
              variant="subtle"
              component="a"
              href="https://github.com/kitsuya0828"
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
              <SizumeSvgComponent size="20" />
            </Button>
            <Button
              variant="subtle"
              component="a"
              href="https://alvinvin.hatenablog.jp"
              color="green.9"
              compact
            >
              <HatenaSvgComponent size="20" />
            </Button>
          </Group>
        </Stack>
      </Flex>
    </Container>
  );
};

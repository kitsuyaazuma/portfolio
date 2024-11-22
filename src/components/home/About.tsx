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
import "./highlight.scss";
import { SocialButton } from "../common/Social";
import { socials } from "../data/social";

export const About = () => {
  const { colorScheme } = useMantineColorScheme();
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
          src="images/home/profile.webp"
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
                "大学ではComputer Visionの研究室に所属し、知識蒸留ベースのFederated Learning（連合学習）の研究を行なった。大学院ではFLに更にフォーカスして研究を行っている。"
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
            {socials.map((social) => (
              <SocialButton
                key={social.name}
                name={social.name}
                url={social.url}
              />
            ))}
          </Group>
        </Stack>
      </Flex>
    </Container>
  );
};

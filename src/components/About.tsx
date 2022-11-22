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
import { SiGithub, SiTwitter, SiQiita, SiYoutube } from "react-icons/si";

export const About = () => {
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
        <Image p="lg" radius="md" src="https://github.com/Kitsuya0828.png" />

        <Stack>
          <Text size="sm">宮城県仙台市在住の大学3年生。</Text>
          <Text size="sm">
            大学入学と同時に競技プログラミングを始め、次第に個人開発にも興味を持つ。
            大学では情報工学を専攻し、来年度からは画像情報通信工学研究室に在籍予定。
          </Text>
          <Text size="sm">
            学生インターンとしてベンチャー企業2社で新たな学びを得るとともに、
            Tech系VTuber「あづまる」としても技術発信活動を行なっている。
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
              href="https://twitter.com/azuma_alvin"
              color="green.9"
              compact
            >
              <SiTwitter size="20" />
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
          </Group>
        </Stack>
      </Flex>
    </Container>
  );
};

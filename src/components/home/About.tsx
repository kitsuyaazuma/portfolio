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
        <Image p="lg" radius="md" src="imgs/Profile.jpeg" alt="Kitsuya Azuma"/>

        <Stack>
          <Text size="sm">宮城県仙台市在住の大学3年生。</Text>
          <Text size="sm">
            大学入学と同時に始めた競技プログラミングをきっかけに、個人開発に興味を持つ。
          </Text>
          <Text size="sm">
            大学では情報工学を専攻。来年度からは画像情報通信工学研究室に配属予定。
          </Text>
          <Text size="sm">
            学生インターンとしてベンチャー企業2社で修行を重ねている。とにかく新しい技術を触るのが好き。
          </Text>
          <Text size="sm">       
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

import { Title, Text, Image, Center, Flex, Stack, Container, Grid, Group, Button } from '@mantine/core'
import React from 'react'
import { IconBrandGithub, IconBrandTwitter } from '@tabler/icons'
import { SiGithub, SiTwitter, SiQiita, SiYoutube } from 'react-icons/si'

export const About = () => {
  return (
    <Container py="xl">
        <Center>
            <Title>ABOUT ME</Title>
        </Center>

        <Flex
            direction={{ base: 'column', sm: 'row' }}
            // gap={{ base: 'sm', sm: 'xl' }}
            gap='xl'
            // justify={{ sm: 'center' }}
            justify='center'
            align='center'
        >
            <Image
                p="lg"
                radius="md"
                src="https://github.com/Kitsuya0828.png"
            />
            <Stack>
                <Text>
                    宮城県仙台市在住の大学3年生。
                </Text>
                <Text>
                    大学入学と同時に競技プログラミングを始め、次第に個人開発にも興味を持つ。
                    大学では情報工学を専攻し、来年度からは画像情報通信工学研究室に在籍予定。
                </Text>
                <Text>
                    学生インターンとしてベンチャー企業2社で新たな学びを得るとともに、
                    Tech系VTuber「あづまる」としても技術発信活動を行なっている。
                </Text>
                <Group spacing="sm">
                    <Button variant="subtle" compact>
                        <SiGithub size='20'/>
                    </Button>
                    <Button variant="subtle" compact>
                        <SiTwitter size='20'/>
                    </Button>
                    <Button variant="subtle" compact>
                        <SiQiita size='20' />
                    </Button>
                    <Button variant="subtle" compact>
                        <SiYoutube size='20'/>
                    </Button>
                </Group>

            </Stack>

        </Flex>

    </Container>

  )
}

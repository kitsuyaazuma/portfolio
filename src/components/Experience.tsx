import {
  Center,
  Timeline,
  Title,
  Text,
  Anchor,
  Badge,
  Group,
  Container,
} from "@mantine/core";
import { IconDevicesPc, IconSchool } from "@tabler/icons";

export const Experience = () => {
  return (
    <Container py="xl">
      <Center my="xl">
        <Title>EXPERIENCE</Title>
      </Center>
      <Center>
        <Timeline active={2} bulletSize={28} lineWidth={2} color="green.9">
          <Timeline.Item
            bullet={<IconDevicesPc size={14} />}
            title={
              <Anchor
                href="http://be-doctor.com/"
                target="_blank"
                color="green.9"
              >
                Be Doctor Consulting株式会社
              </Anchor>
            }
          >
            <Text size={5} color="dimmed">
              2022年11月 - 現在　インターン
            </Text>
            <Group mt="sm" spacing="xs">
              <Badge variant="light" size="sm" color="green.9">
                React
              </Badge>
              <Badge variant="light" size="sm" color="green.9">
                GraphQL
              </Badge>
              <Badge variant="light" size="sm" color="green.9">
                AWS
              </Badge>
            </Group>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconDevicesPc size={14} />}
            title={
              <Anchor
                href="https://corp.langsmith.co.jp/"
                target="_blank"
                color="green.9"
              >
                Langsmith株式会社
              </Anchor>
            }
          >
            <Text size={5} color="dimmed">
              2022年4月 - 現在　インターン
            </Text>
            <Group mt="sm" spacing="xs">
              <Badge variant="light" size="sm" color="green.9">
                Python
              </Badge>
              <Badge variant="light" size="sm" color="green.9">
                React
              </Badge>
              <Badge variant="light" size="sm" color="green.9">
                GCP
              </Badge>
              <Badge variant="light" size="sm" color="green.9">
                Docker
              </Badge>
            </Group>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconSchool size={14} />}
            title={
              <Anchor
                href="http://www.iic.ecei.tohoku.ac.jp/"
                target="_blank"
                color="green.9"
              >
                東北大学
              </Anchor>
            }
          >
            <Text size={5} color="dimmed">
              2020年4月 - 現在　工学部電気情報物理工学科
            </Text>
            <Group mt="sm" spacing="xs">
              <Badge variant="light" size="sm" color="green.9">
                情報工学
              </Badge>
              <Badge variant="light" size="sm" color="green.9">
                画像情報通信工学
              </Badge>
            </Group>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconDevicesPc size={14} />}
            title={
              <Anchor
                href="https://nnn.ed.jp/course/net_commute/"
                target="_blank"
                color="dimmed"
              >
                学校法人角川ドワンゴ学園
              </Anchor>
            }
          >
            <Text size={5} color="dimmed">
              2021年4月 - 2022年11月 インターン（プログラミングTA）
            </Text>
            <Group mt="sm" spacing="xs">
              <Badge variant="light" size="sm" color="gray.7">
                Premiere Pro
              </Badge>
              <Badge variant="light" size="sm" color="gray.7">
                Photoshop
              </Badge>
              <Badge variant="light" size="sm" color="gray.7">
                Illustrator
              </Badge>
              <Badge variant="light" size="sm" color="gray.7">
                JavaScript
              </Badge>
            </Group>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconDevicesPc size={14} />}
            title={
              <Anchor
                href="https://nnn.ed.jp/course/net_commute/"
                target="_blank"
                color="dimmed"
              >
                楽天株式会社
              </Anchor>
            }
            lineVariant="dashed"
          >
            <Text size={5} color="dimmed">
              2022年8月 インターン（夏の陣2022 新規プロトタイプ開発コース）
            </Text>
            <Group mt="sm" spacing="xs">
              <Badge variant="light" size="sm" color="gray.7">
                Ruby on Rails
              </Badge>
              <Badge variant="light" size="sm" color="gray.7">
                Ruby
              </Badge>
              <Badge variant="light" size="sm" color="gray.7">
                Docker
              </Badge>
            </Group>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconSchool size={14} />}
            title={
              <Anchor
                href="https://maebashi-hs.gsn.ed.jp/"
                target="_blank"
                color="dimmed"
              >
                群馬県立前橋高等学校
              </Anchor>
            }
          >
            <Text size={5} color="dimmed">
              2017年4月 - 2020年3月
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconSchool size={14} />}
            title={
              <Anchor
                href="https://www.sydney.edu.au/science/industry-and-community/community-engagement/international-science-school.html"
                target="_blank"
                color="dimmed"
              >
                International Science School 2019 - The University of Sydney
              </Anchor>
            }
          >
            <Text size={5} color="dimmed">
              2019年7月 オーストラリア科学奨学生
            </Text>
          </Timeline.Item>
        </Timeline>
      </Center>
    </Container>
  );
};

"use client";
import {
  Center,
  Timeline,
  Title,
  Text,
  Anchor,
  Badge,
  Group,
  Container,
  useMantineColorScheme,
  ActionIcon,
} from "@mantine/core";
import {
  TbBuildings,
  TbDevicesPc,
  TbSchool,
  TbHeartHandshake,
  TbCircle,
  TbExternalLink,
} from "react-icons/tb";
import {
  ExperienceCategory,
  ExperienceItem,
  ExperienceItemSchema,
} from "@/types/messages";
import { z } from "zod";
import { useTranslations } from "next-intl";

const getBullet = (category: ExperienceCategory) => {
  switch (category) {
    case "Job":
      return <TbBuildings />;
    case "Internship":
      return <TbDevicesPc />;
    case "Education":
      return <TbSchool />;
    case "Community":
      return <TbHeartHandshake />;
    default:
      return <TbCircle />;
  }
};

export const Experience = () => {
  const t = useTranslations("Experience");
  let items: ExperienceItem[] = [];
  const result = z.array(ExperienceItemSchema).safeParse(t.raw("items"));
  if (result.success) {
    items = result.data;
  }
  const currentCount = items.filter((item) => item.isCurrent).length;

  const { colorScheme } = useMantineColorScheme();
  const matcha = colorScheme === "dark" ? "green.7" : "green.9";
  const gray = colorScheme === "dark" ? "gray.5" : "gray.7";

  return (
    <Container pt="xl">
      <Center my="xl">
        <Title>{t("title")}</Title>
      </Center>
      <Center>
        <Timeline
          active={currentCount - 1}
          bulletSize={28}
          lineWidth={2}
          color={matcha}
        >
          {items.map((item, index) => (
            <Timeline.Item
              bullet={getBullet(item.category)}
              title={
                <Group gap="xs">
                  <Text fw={600} c={item.isCurrent ? matcha : gray}>
                    {item.title}
                  </Text>
                  <ActionIcon
                    component="a"
                    href={item.url}
                    variant="transparent"
                    size="xs"
                    target="_blank"
                    c={gray}
                  >
                    <TbExternalLink />
                  </ActionIcon>
                </Group>
              }
              key={index}
            >
              {item.details.map((detail) => (
                <Text size="xs" c={gray} key={detail}>
                  {detail}
                </Text>
              ))}
              <Group mt="sm" gap="xs">
                {item.skills.map((skill) => (
                  <Badge
                    variant="light"
                    size="xs"
                    color={item.isCurrent ? matcha : gray}
                    key={skill}
                  >
                    {skill}
                  </Badge>
                ))}
              </Group>
            </Timeline.Item>
          ))}
        </Timeline>
      </Center>
    </Container>
  );
};

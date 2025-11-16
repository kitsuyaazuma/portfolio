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
} from "@mantine/core";
import {
  TbBuildings,
  TbDevicesPc,
  TbSchool,
  TbTrophyFilled,
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
    case "Internship":
      return <TbDevicesPc />;
    case "Education":
      return <TbSchool />;
    case "Award":
      return <TbTrophyFilled />;
    case "Job":
      return <TbBuildings />;
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
          color="green.9"
        >
          {items.map((item, index) => (
            <Timeline.Item
              bullet={getBullet(item.category)}
              title={
                <Anchor
                  target="_blank"
                  c={item.isCurrent ? "green.9" : "dimmed"}
                >
                  {item.title}
                </Anchor>
              }
              key={index}
            >
              {item.details.map((detail) => (
                <Text size="xs" c="dimmed" key={detail}>
                  {detail}
                </Text>
              ))}
              <Group mt="sm" gap="xs">
                {item.skills.map((skill) => (
                  <Badge variant="light" size="sm" color="gray.7" key={skill}>
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

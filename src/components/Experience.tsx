"use client";
import {
  Center,
  Timeline,
  Title,
  Text,
  Badge,
  Group,
  Container,
  useMantineColorScheme,
  ActionIcon,
  Stack,
  Image,
  Card,
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
import classes from "./Card.module.css";
import { useMediaQuery } from "@mantine/hooks";

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

  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <Container pt="xl" id="experience">
      <Center my="lg">
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
                    c="dimmed"
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
              {item.blogs && (
                <Stack mt="sm" gap="xs">
                  {item.blogs.map((blog, index) => (
                    <Card
                      shadow="sm"
                      padding="xs"
                      component="a"
                      href={blog.url}
                      target="_blank"
                      key={index}
                      radius="md"
                      withBorder
                      style={{
                        boxShadow: "none",
                        borderColor: gray,
                      }}
                      className={classes.card}
                    >
                      <Group gap="md" wrap={matches ? "wrap" : "nowrap"}>
                        {blog.thumbnail && (
                          <Image
                            src={blog.thumbnail}
                            h={100}
                            w="auto"
                            fit="contain"
                            radius="sm"
                            alt={blog.title}
                          />
                        )}
                        <Stack>
                          <Text size="sm" fw={500} c={gray} lineClamp={2}>
                            {blog.title}
                          </Text>
                          {!matches && (
                            <Text size="xs" c="dimmed">
                              {blog.url}
                            </Text>
                          )}
                        </Stack>
                      </Group>
                    </Card>
                  ))}
                </Stack>
              )}
            </Timeline.Item>
          ))}
        </Timeline>
      </Center>
    </Container>
  );
};

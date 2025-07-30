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
import { TbDevicesPc, TbSchool, TbTrophyFilled } from "react-icons/tb";
import { experienceItems } from "@/data/experience";
import { ExperienceCategory } from "@/types/data";
import { useTranslations } from "next-intl";

const currentCount = experienceItems.filter((item) => item.isCurrent).length;

const getBullet = (category: ExperienceCategory) => {
  switch (category) {
    case "Internship":
      return <TbDevicesPc />;
    case "Education":
      return <TbSchool />;
    case "Award":
      return <TbTrophyFilled />;
    default:
      return <TbDevicesPc />;
  }
};

export const Experience = () => {
  const t = useTranslations("Experience");

  return (
    <Container py="xl">
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
          {experienceItems.map((item, idx) => (
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
              key={idx}
            >
              {item.details.map((detail) => (
                <Text size="xs" color="dimmed" key={detail}>
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

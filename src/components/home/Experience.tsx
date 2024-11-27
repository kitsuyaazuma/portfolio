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
import { experiences, ExperienceCategory } from "../data/experience";

const currentCount = experiences.filter((exp) => exp.isCurrent).length;

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
  return (
    <Container py="xl">
      <Center my="xl">
        <Title>EXPERIENCE</Title>
      </Center>
      <Center>
        <Timeline
          active={currentCount - 1}
          bulletSize={28}
          lineWidth={2}
          color="green.9"
        >
          {experiences.map((exp, idx) => (
            <Timeline.Item
              bullet={getBullet(exp.category)}
              title={
                <Anchor
                  href={exp.titleUrl}
                  target="_blank"
                  c={exp.isCurrent ? "green.9" : "dimmed"}
                >
                  {exp.title}
                </Anchor>
              }
              key={idx}
            >
              {exp.details.map((detail) => (
                <Text size="xs" color="dimmed" key={detail}>
                  {detail}
                </Text>
              ))}
              <Group mt="sm" gap="xs">
                {exp.skills.map((skill) => (
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

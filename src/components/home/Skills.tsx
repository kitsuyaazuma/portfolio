"use client";
import { Center, Container, Grid, Stack, Text, Title } from "@mantine/core";
import { SkillsChart } from "./SkillsChart";

import { useTranslations } from "next-intl";

const skillsConfig = [
  {
    series: [
      {
        name: "Frontend",
        color: "rgba(255, 107, 107, 1)",
        opacity: 0.2,
      },
    ],
    data: [
      { skill: "HTML/CSS", Frontend: 3 },
      { skill: "JavaScript", Frontend: 3 },
      { skill: "TypeScript", Frontend: 4 },
      { skill: "React", Frontend: 4 },
      { skill: "Next.js", Frontend: 4 },
      { skill: "Astro", Frontend: 3 },
    ],
  },
  {
    series: [
      {
        name: "Backend",
        color: "rgba(51, 154, 240, 1)",
        opacity: 0.2,
      },
    ],
    data: [
      { skill: "Python", Backend: 5 },
      { skill: "TypeScript", Backend: 4 },
      { skill: "MySQL", Backend: 3 },
      { skill: "Go", Backend: 4 },
      { skill: "Rust", Backend: 2 },
      { skill: "GraphQL", Backend: 3 },
    ],
  },
  {
    series: [
      {
        name: "DevOps",
        color: "rgba(252, 196, 25, 1)",
        opacity: 0.2,
      },
    ],
    data: [
      { skill: "Linux", DevOps: 4 },
      { skill: "Kubernetes", DevOps: 4 },
      { skill: "Docker", DevOps: 4 },
      { skill: "Google Cloud", DevOps: 4 },
      { skill: "Terraform", DevOps: 4 },
      { skill: "AWS", DevOps: 4 },
    ],
  },
];

export const Skills = () => {
  const t = useTranslations("Skills");
  return (
    <Container py="xl">
      <Center my="xl">
        <Title>{t("title")}</Title>
      </Center>
      <Grid justify="center" align="center">
        {skillsConfig.map((config) => (
          <Grid.Col key={config.series[0].name} span={{ md: 4, xs: 6 }}>
            <Stack align="center" gap="xs">
              <Text size="md">{config.series[0].name}</Text>
              <SkillsChart data={config.data} series={config.series} />
            </Stack>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

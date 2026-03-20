"use client";
import { Center, Container, Grid, Stack, Text, Title } from "@mantine/core";
import { useTranslations } from "next-intl";
import { RadarChart } from "@mantine/charts";
import styles from "./Skills.module.css";

// Suppress recharts ResponsiveContainer initial-render warning.
// ResponsiveContainer always starts with containerWidth/Height = -1 before
// ResizeObserver fires; there is no public API to override initialDimension
// through Mantine's RadarChart wrapper.
if (typeof window !== "undefined") {
  const _warn = console.warn.bind(console);
  console.warn = (...args: unknown[]) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("The width(-1) and height(-1)")
    )
      return;
    _warn(...args);
  };
}

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
    <Container py="xl" id="skills">
      <Center my="lg">
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

type ChartSeries = {
  name: string;
  color: string;
  opacity: number;
};
type ChartData = {
  skill: string;
  [key: string]: any;
};
type SkillsChartProps = {
  series: ChartSeries[];
  data: ChartData[];
};

export const SkillsChart = ({ data, series }: SkillsChartProps) => {
  return (
    <RadarChart
      h={250}
      w={250}
      data={data}
      dataKey="skill"
      withDots
      withPolarAngleAxis
      withPolarRadiusAxis
      withPolarGrid
      classNames={{ root: styles.chart }}
      styles={{
        root: { overflow: "visible" },
        container: { overflow: "visible" },
      }}
      radarProps={{
        isAnimationActive: true,
        animationDuration: 1000,
      }}
      radarChartProps={{
        margin: { top: 20, right: 20, bottom: 20, left: 20 },
      }}
      polarRadiusAxisProps={{
        type: "number",
        domain: [0, 5],
        tick: { fontWeight: 100 },
        tickCount: 6,
      }}
      series={series}
    />
  );
};

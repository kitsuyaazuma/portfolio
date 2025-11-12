import { RadarChart } from "@mantine/charts";

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
      w="100%"
      data={data}
      dataKey="skill"
      withDots
      withPolarAngleAxis
      withPolarRadiusAxis
      withPolarGrid
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

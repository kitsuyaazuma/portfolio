"use client";
// SkillsChart is a Client Component: recharts requires browser APIs (ResizeObserver, SVG).
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import styles from "./Skills.module.css";

type ChartSeries = { name: string; color: string };
type ChartData = { skill: string; [key: string]: unknown };

const skillsConfig: { series: ChartSeries[]; data: ChartData[] }[] = [
  {
    series: [{ name: "Frontend", color: "var(--color-error)" }],
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
    series: [{ name: "Backend", color: "var(--color-info)" }],
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
    series: [{ name: "DevOps", color: "var(--color-warning)" }],
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

export function SkillsChart() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {skillsConfig.map((config) => (
        <div
          key={config.series[0].name}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-base">{config.series[0].name}</span>
          <div className={styles.chart}>
            <RadarChart
              width={250}
              height={250}
              data={config.data}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <PolarGrid />
              <PolarAngleAxis dataKey="skill" tick={{ fontSize: 11 }} />
              <PolarRadiusAxis
                domain={[0, 5]}
                tickCount={6}
                tick={{ fontWeight: 100 }}
              />
              {config.series.map((s) => (
                <Radar
                  key={s.name}
                  name={s.name}
                  dataKey={s.name}
                  stroke={s.color}
                  strokeOpacity={1}
                  fill={s.color}
                  fillOpacity={0.5}
                  dot
                  isAnimationActive
                  animationDuration={1000}
                />
              ))}
            </RadarChart>
          </div>
        </div>
      ))}
    </div>
  );
}

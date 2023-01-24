import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { Center } from "@mantine/core";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const skillData = [
  {
    label: "Front-end",
    labels: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Bootstrap"],
    data: [3, 3, 3, 4, 4, 3],
    backgroundColor: "rgba(255, 107, 107, 0.2)",
    borderColor: "rgba(255, 107, 107, 1)",
  },
  {
    label: "Back-end",
    labels: ["Python", "JavaScript", "Ruby", "Go", "C++", "C"],
    data: [5, 4, 2, 3, 2, 2],
    backgroundColor: "rgba(51, 154, 240, 0.2)",
    borderColor: "rgba(51, 154, 240, 1)",
  },
  {
    label: "DevOps",
    labels: ["Linux", "Git/GitHub", "Docker", "GCP", "Vim", "AWS"],
    data: [4, 4, 3, 4, 3, 2],
    backgroundColor: "rgba(252, 196, 25, 0.2)",
    borderColor: "rgba(252, 196, 25, 1)",
  },
];

type propsType = {
  index: number;
};

export const SkillsChart = (props: propsType) => {
  const data = () => {
    return {
      labels: skillData[props.index].labels,
      datasets: [
        {
          label: skillData[props.index].label,
          data: skillData[props.index].data,
          backgroundColor: skillData[props.index].backgroundColor,
          borderColor: skillData[props.index].borderColor,
          borderWidth: 1,
        },
      ],
    };
  };

  const options = {
    scales: {
      r: {
        min: 0,
        max: 5,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <Center>
      <Radar data={data()} options={options} />
    </Center>
  );
};

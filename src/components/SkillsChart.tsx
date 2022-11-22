import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { Center } from '@mantine/core';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);


export const SkillsChart = (props: any) => {
  
  const data = () => {
    return({
      labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
      datasets: [
        {
          label: props.label,
          data: [2, 1, 3, 5, 2, 3],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    })
  };

  const options = {
    scales: {
      r: {
        ticks: {
          stepSize: 1
        }
      }
    }
  };

  return (
    <Center>
      <Radar data={data()} options={options} />
    </Center>
  )
}

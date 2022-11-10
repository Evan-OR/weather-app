import React from 'react';
import { Line } from 'react-chartjs-2';

function TempGraph(props) {
  const { generateLabels, tempArray, minTempArray, roundToNearestFive } = props;

  const data = {
    labels: generateLabels(),
    datasets: [
      {
        label: 'Temperature °C',
        data: tempArray,
        borderColor: 'rgba(235, 156, 52, 1)',
        backgroundColor: 'rgba(235, 156, 52, 0.5)',
        pointBackgroundColor: 'rgb(235, 156, 52)',
        pointBorderColor: 'rgb(235, 156, 52)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const options = {
    elements: {
      point: {
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'rgb(255, 255, 255)',
        },
      },
    },
    scales: {
      y: {
        min: roundToNearestFive(Math.min(...minTempArray) - 5),
        max: roundToNearestFive(Math.max(...tempArray) + 5),
        grid: {
          color: 'rgba(255, 255, 255, 0.5)',
        },
        gridLines: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 1)',
          callback: (val) => {
            return `${val}°`;
          },
        },
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.5)',
        },
        gridLines: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 1)',
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}

export default TempGraph;

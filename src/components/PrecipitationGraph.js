import React from 'react';
import { Bar } from 'react-chartjs-2';

function PrecipitationGraph(props) {
  const { popArray, getDaysOfWeek } = props;

  const data = {
    labels: getDaysOfWeek(),
    datasets: [
      {
        label: 'Precipitation %',
        data: popArray,
        borderColor: 'rgba(3, 152, 252, 1)',
        backgroundColor: 'rgba(3, 152, 252, 1)',
        pointBackgroundColor: 'rgb(3, 152, 252)',
        pointBorderColor: 'rgb(3, 152, 252)',
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
        min: 0,
        max: 100,
        grid: {
          color: 'rgba(255, 255, 255, 0.5)',
        },
        gridLines: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 1)',
          callback: (val) => {
            return val + '%';
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
      <Bar data={data} options={options} />
    </div>
  );
}

export default PrecipitationGraph;

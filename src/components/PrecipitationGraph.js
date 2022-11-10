import React from 'react';
import { Bar } from 'react-chartjs-2';

function PrecipitationGraph(props) {
  const { popArray, generateLabels } = props;

  const data = {
    labels: generateLabels(),
    datasets: [
      {
        label: 'Precipitation Percentage',
        data: popArray,
        borderColor: 'rgba(97, 189, 250, 1)',
        backgroundColor: 'rgba(2, 58, 94, 1)',
        pointBackgroundColor: 'rgb(25, 159, 247)',
        pointBorderColor: 'rgb(25, 159, 247)',
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

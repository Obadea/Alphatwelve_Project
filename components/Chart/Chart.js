import { useEffect } from 'react';
import useThemeSwitcher from '../utils/useThemeSwitcher';
import './Chart.css';
import ReactApexChart from 'react-apexcharts';

const Chart = () => {
  const chartOptions = {
    chart: {
      type: 'bar', // You can change this to 'bar', 'pie', etc.
      fontFamily: 'Inter, sans-serif',
      background: 'transparent', // Background set to transparent
      foreColor: '#000', // Text and labels will switch to white

      animations: {
        enabled: true, // Enables smooth animations for resize
        easing: 'easeinout', // Easing for a smooth effect
        speed: 700, // Duration of the animation (in milliseconds)
        dynamicAnimation: {
          enabled: true,
          speed: 150, // Adjusts when data is updated or chart size changes
        },
      },

      toolbar: {
        show: true,
      },
    },
    theme: {
      mode: 'dark',
    },

    colors: ['#8576FF'],

    yaxis: {
      labels: {
        style: {
          fontFamily: 'Inter, sans-serif',
          fontSize: '10px',
          colors: '#8576FF',
        },
      },
    },

    xaxis: {
      labels: {
        style: {
          fontSize: '10px', // Font size for x-axis labels
          fontFamily: 'Inter, sans-serif', // Font family for x-axis labels

          colors: '#8576FF',
        },
      },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },

    tooltip: {
      style: {
        fontSize: '10px',
        fontFamily: 'Inter, sans-serif',
        color: '#000',
      },
    },

    dataLabels: {
      enabled: false, // This disables the numbers on the bars
    },
  };

  const series = [
    {
      name: 'Registrations',

      data: [630, 980, 780, 410, 1000, 590, 830, 390, 820, 670, 970, 600], // data points for the chart
    },
  ];

  return (
    <ReactApexChart
      options={chartOptions}
      series={series}
      type={chartOptions.chart.type}
      height={290}
      width="98%"
    />
  );
};

export default Chart;

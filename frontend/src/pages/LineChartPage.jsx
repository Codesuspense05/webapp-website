import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { useSelector } from 'react-redux';

const SalesChart = () => {
    const { seller } = useSelector((state) => state.seller);

    const availableBalance = seller?.availableBalance.toFixed(2)

  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Total Sales',
        data: [],
      },
      {
        name: 'Daily Sales',
        data: [],
      },
    ],
    options: {
      chart: {
        type: 'line', // Change the chart type to 'line' for a spline chart
        height: 350,
      },
      xaxis: {
        categories: [],
      },
    },
  });

  useEffect(() => {
    // Generate data for the chart
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const totalSales = Math.floor(Math.random() * 0) + availableBalance; // Generate a random total sales number

    const totalSalesData = Array.from({ length: currentDay }, () => totalSales);
    const dailySalesData = totalSalesData.map((sales) => Math.floor(Math.random() * sales));

    setChartData({
      series: [
        { name: 'Total Sales', data: totalSalesData },
        { name: 'Daily Sales', data: dailySalesData },
      ],
      options: {
        chart: {
          type: 'line', // Ensure the chart type is 'line'
          height: 350,
        },
        xaxis: {
          categories: Array.from({ length: currentDay }, (_, i) => `Day ${i + 1}`),
        },
      },
    });
  }, []);

  return (
    <div>
      <h1>Total Sales Chart</h1>
      <Chart options={chartData.options} series={chartData.series} type="line" height={350} width={500} />
    </div>
  );
};

export default SalesChart;
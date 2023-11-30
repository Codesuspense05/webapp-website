import React from 'react';
import ReactApexChart from 'react-apexcharts';

const OrderChart = () => {
  
  const options = {
    chart: {
      type: 'donut',
    },
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  };

  const series = [30, 40, 35, 50, 49]; // Sample data for total orders

  return (
    <div>
      <ReactApexChart options={options} series={series} type="donut" width="380" />
    </div>
  );
};

export default OrderChart;




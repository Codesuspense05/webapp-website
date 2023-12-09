import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import { useSelector } from 'react-redux';

const DoughnutChart = () => {
  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
  const { orders } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const { products } = useSelector((state) => state.products);

  const availableBalance = seller?.availableBalance
   const totalorder = orders && orders.length;
    const totalproducts = products && products.length;

  useEffect(() => {
    // Fetch your total sales, orders, products data here
    // For example:
    const totalSales = availableBalance;
    const totalOrders = totalorder;
    const totalProducts = totalproducts;

    setCurrentDate(new Date().toLocaleDateString());

    // Prepare the data for the doughnut chart
    const chartData = [
      ['Category', 'Value'],
      ['Total Sales', totalSales],
      ['Orders', totalOrders],
      ['Products', totalProducts],
    ];

    setData(chartData);
  }, [availableBalance,totalorder,totalproducts]);

  

  return (
    <div className='800px:hidden'>
      <Chart
        width={'100%'}
        height={'280px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          title: '',
          pieHole: 0.5,
          annotations: {
            textStyle: {
              fontSize: 10,
              color: 'black',
            },
            alwaysOutside: false,
            text: currentDate, // Place the current date inside the chart
          },
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
};

export default DoughnutChart;
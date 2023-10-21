import React, { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfShop } from '../redux/actions/order';
import { getAllProductsShop } from '../redux/actions/product';

const SplineAreaChart = () => {
  const dispatch = useDispatch();
  const { seller } = useSelector((state) => state.seller);
  const { orders } = useSelector((state) => state.order);
  const { products } = useSelector((state) => state.products);

  const availableBalance = seller?.availableBalance.toFixed(2);
  const totalorder = orders && orders.length;
  const totalproducts = products && products.length;

  const currentDate = new Date().toLocaleDateString();

  useEffect(() => {
    dispatch(getAllOrdersOfShop(seller._id));
    dispatch(getAllProductsShop(seller._id));
 }, [dispatch,seller._id]);
  

  // Sample data for three products
  const productData = [
    {
      name: 'Total Sales',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, availableBalance,0, 0,],
    },
    {
      name: 'Total Orders',
      data: [20, 205, 30, 35, 40, 45, 50, 55, 60, totalorder, 100,80],
    },
    {
      name: 'Total Products',
      data: [10, 15, 20, 30, 66, 40, 45, 150, 55, totalproducts, 70,80],
    },
  ];

  const options = {
    chart: {
      type: 'area',
      height: 350,
      toolbar: {
        show: false,
      },
      data: {
        show: false,
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    dataLabels: {
      enabled: false, // Disable data numbers
    },
  };

  const series = productData.map(product => ({
    name: product.name,
    data: product.data,
  }));

  return (
    <div className="spline-area-chart">
      <h1>Spline Area Chart - {currentDate}</h1>
      <ReactApexChart options={options} series={series} type="area" width={600} height={350} />
    </div>
  );
};

export default SplineAreaChart;
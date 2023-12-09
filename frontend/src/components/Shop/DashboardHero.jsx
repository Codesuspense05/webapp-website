import React, { useEffect, useState} from "react";
import { AiOutlineEye} from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import {  MdDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { getAllProductsShop } from "../../redux/actions/product";
import { Avatar, Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { GrSettingsOption } from "react-icons/gr";
import DoughnutChart from "../../pages/googlechart";



const DashboardHero = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const { products } = useSelector((state) => state.products);
  const [currentDay, setCurrentDay] = useState('');

  useEffect(() => {
     dispatch(getAllOrdersOfShop(seller._id));
     dispatch(getAllProductsShop(seller._id));

      //   // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
  const currentDate = new Date();
  const currentDayIndex = currentDate.getDay();
  
  // Set the current day label
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  setCurrentDay(daysOfWeek[currentDayIndex]);
    

  }, [dispatch,seller._id]);

  const availableBalance = seller?.availableBalance.toFixed(2)
  // const totalorder = orders && orders.length;
  // const totalproducts = products && products.length;

   
  

  // const [salesData, setSalesData] = useState([0, 0, 0, 0, 0, 0,0]);
  // const [orderData, setOrderData] = useState([0, 0, 0, 0, 0, 0,0]);
  // const [productData, setProductData] = useState([0, 0, 0, 0, 0, 0,0]);


  
  // useEffect(() => {
  //   // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
  //   const currentDate = new Date();
  //   const currentDayIndex = currentDate.getDay();

  //   // Update the sales data for the current day
  //     // Update the sales data for the current day (set it to 1000)

  //     //SALES
  //   const updatedSalesData = [...salesData];
  //   updatedSalesData[currentDayIndex] =+ availableBalance; // Set the current day's sales value to 1000

  //   //ORDERS
  //   const updatedOrderData = [...orderData];
  //   updatedOrderData[currentDayIndex] = totalorder; // Set the current day's sales value to 1000

  //   //PRODUCTS
  //   const updatedProductData = [...productData];
  //   updatedProductData[currentDayIndex] = totalproducts; // Set the current day's sales value to 1000


  //   setSalesData(updatedSalesData);
  //   setOrderData(updatedOrderData );
  //   setProductData(updatedProductData );

  //   // Set the current day label
  //   const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  //   setCurrentDay(daysOfWeek[currentDayIndex]);
  // }, [availableBalance,orderData,salesData,productData,totalorder,totalproducts]);

  // const options = {
  //   plotOptions: {
  //     pie: {
  //       donut: {
  //         size: '70%',
  //         labels: {
  //           show: true,
           
  //           value: {
  //             show: true,
  //             fontSize: '12px',
  //             color: '#333',
  //             offsetY: 10, // Adjust this value for vertical positioning
  //           },
  //           total: {
  //             show: true,
  //             label: '📈',
  //             color: '#333',
  //             fontSize: '14px',
  //             offsetY: 0, // Adjust this value for vertical positioning
  //           },
  //         },
  //       },
  //     },
  //   },
  //   labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  //   dataLabels: {
  //     enabled: false,
  //   },
  // };

  // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)



  const columns = [
    { field: "", headerName: "", minWidth: 30, flex: 0.1,  sortable: false,
    filterable: false,  },
    {
      field: "avatar",
      headerName: "👤",
      minWidth: 70,
      flex: 0.1,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        console.log(params);
        return (
          <>
            
            <Avatar src={params.value}/>
           
          </>
        );
      }
    },
    {
      field: "customer",
      headerName: "Customer Name",
      type: "text",
      minWidth: 130,
      flex: 0.5,
    },

    {
      field: "images",
      headerName: "Images",
      minWidth: 130,
      flex: 0.2,
      sortable: false,
      filterable: false,
      renderCell: (params) => {
        console.log(params);
        return (
          <>
            
            <Avatar src={params.value}/>
           
          </>
        );
      }
    },
    {
      field: "product",
      headerName: "Product name",
      type: "text",
      minWidth: 200,
      flex: 0.8,
    },
    
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.4,
    },

    {
      field: "total",
      headerName: "Total Price",
      type: "number",
      minWidth: 130,
      flex: 0.5,
    },
    {
      field: "method",
      headerName: "Payment Method",
      minWidth: 130,
      flex: 0.5,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.4,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: " ",
      flex: 0.4,
      minWidth: 150,
      headerName: "View Order",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/order/${params.id}`}>
              <Button>
                <AiOutlineEye size={20} />
              </Button>
            </Link>
          </>
        );
      },
    },

  ];

  const row = [];

  orders && orders.forEach((item) => {
    row.push({
        id: item._id,
        avatar: item.user.avatar.url,
        customer: item.user.name,
        images: item.cart[0].images[0].url,
        product: item.cart[0].name,
        itemsQty: item.cart.reduce((acc, item) => acc + item.qty, 0),
        total: "₱" + item.totalPrice,
        method: item.paymentInfo.type,
        status: "🚛" + item.status,
      });
  });
  return (
    
    <div className="w-full p-8 bg-white">
      <div className="flex"><MdDashboard size={30}/><h3 className="text-[22px] font-Poppins pb-2">Shop Dashboard |  </h3> <h2 className="text-[20px]">Current Day: {currentDay}</h2> </div>
      <div className="w-full block 800px:flex items-center justify-between">
       <DoughnutChart/>
       
        <div className="w-full grid grid-cols-2 mx-5 mb-4 800px:w-[30%] min-h-[20vh] bg-gradient-to-r from-blue-200 via-gray-150 to-blue-100 shadow-lg rounded-[50px] px-5 py-5">
          
          <div className="flex items-center">
          💰
            <h3
              className={`${styles.productTitle} !text-[18px] ml-2 leading-5 !font-[400] text-[#00000085]`}
            >
               Total Revenue{" "}
              <span className="text-[16px] ">(Profit)</span>
            </h3>
            
          </div>
         <div className="flex">
         <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">₱{availableBalance}</h5>
       
         </div>
         
          <hr />
          <Link to="/dashboard-withdraw-money">
            <h5 className=" flex pt-4 pl-[2] text-blue-500">View Profit <GrSettingsOption size={25} className="ml-1 animate-spin"/></h5>
          </Link>

        
      {/* <ReactApexChart options={options} series={salesData} type="donut" width="290" /> */}
        
        </div>

        <div className="w-full grid grid-cols-2 mx-5 mb-4 800px:w-[30%] min-h-[20vh] bg-gradient-to-r from-blue-200 via-gray-150 to-blue-100 shadow-lg rounded-[50px] px-5 py-5">
          <div className="flex items-center">
          👜
            <h3
              className={`${styles.productTitle} !text-[18px] ml-2 leading-5 !font-[400] text-[#00000085]`}
            >
              All Orders
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{orders && orders.length}</h5>
          
          <hr />
          <Link to="/dashboard-orders">
            <h5 className="flex pt-4 pl-2 text-blue-500">View Orders<GrSettingsOption size={25} className="ml-1 animate-spin"/></h5>
          </Link>
          {/* <ReactApexChart options={options} series={orderData} type="donut" width="290" /> */}
        </div>

        <div className="w-full grid grid-cols-2 mx-5 mb-4 800px:w-[30%] min-h-[20vh] bg-gradient-to-r from-blue-200 via-gray-150 to-blue-100 shadow-lg rounded-[50px] px-5 py-5">
          <div className="flex items-center">
          📦
            <h3
              className={`${styles.productTitle} !text-[18px] ml-2 leading-5 !font-[400] text-[#00000085]`}
            >
              All Products
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{products && products.length}</h5>
         
          <hr />
          <Link to="/dashboard-products">
            <h5 className="flex pt-4 pl-2 text-blue-500">View Products<GrSettingsOption size={25} className="ml-1 animate-spin"/></h5>
          </Link>
          {/* <ReactApexChart options={options} series={productData} type="donut" width="290" /> */}
        </div>
      </div>
      <div className="bg-gray-300 w-full h-1"></div>
      <br />
      <h3 className="text-[22px] font-Poppins pb-2">Latest Orders</h3>
      <div className="w-full min-h-[45vh] bg-white rounded !overflow-y-scroll">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={6}
        disableSelectionOnClick
        autoHeight
      
      
      />
      </div>
      <br />
      
     
    </div>
  );
};

export default DashboardHero;

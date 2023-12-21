import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { getAllProductsShop } from "../../redux/actions/product";
import { Avatar, Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { GrSettingsOption } from "react-icons/gr";
import {  BsSunFill } from "react-icons/bs";
import { BiData } from "react-icons/bi";
import { IoCloseCircle } from "react-icons/io5";


const DashboardHero = ({ onClose }) => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const { products } = useSelector((state) => state.products);
  const [currentDay, setCurrentDay] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    dispatch(getAllOrdersOfShop(seller._id));
    dispatch(getAllProductsShop(seller._id));
   

    //   // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();

    // Set the current day label
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    setCurrentDay(daysOfWeek[currentDayIndex]);
  }, [dispatch, seller._id]);

  const availableBalance = seller?.availableBalance.toFixed(2);


  const columns = [
    {
      field: "",
      headerName: "",
      minWidth: 30,
      flex: 0.1,
      sortable: false,
      filterable: false,
    },
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
            <Avatar src={params.value} />
          </>
        );
      },
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
            <Avatar src={params.value} />
          </>
        );
      },
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

  orders &&
    orders.forEach((item) => {
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
    <div className="w-full p-8 bg-white ">
      <div className="flex">
        <MdDashboard size={30} />
        <h3 className="text-[22px] font-Poppins pb-2">
          Shop Dashboard |{" "}
        </h3>{" "}
        <h2 className="flex text-[20px]"><BsSunFill className="shadow-md rounded-full" size={30} color="yellow"/>{currentDay}</h2>{" "}
      </div>
      <div className="w-full block 800px:flex items-center justify-between">
   
        {/* <iframe
          
          style={{
          background: "#FFFFFF",
          border: "none",
          borderRadius: "2px",
          boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
          width:"100%",
          height:"600px",
        
        }}
          src="https://charts.mongodb.com/charts-db-mmwrsms-tkkfh/embed/charts?id=657c76b6-c900-4698-817b-e9831d4fbbb7&maxDataAge=3600&theme=light&autoRefresh=true"
        ></iframe> */}

        <div className="w-full grid grid-cols-2 mx-5 mb-4 800px:w-[40%] min-h-[20vh] bg-gradient-to-r from-blue-300 via-gray-150 to-blue-100 shadow-lg rounded-[20px] px-5 py-5">
          <div className=" items-center">
            💰
            <h3
              className={`${styles.productTitle} !text-[18px] ml-2 leading-5 !font-[400] text-[#00000085]`}
            >
              Total Revenue <span className="text-[16px] "></span>
            </h3>
            <br />
           <h1 className="text-[40px] font-bold text-center">   ₱{availableBalance}</h1>
          </div>
          <div className="flex">
            {/* <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
              ₱{availableBalance}
            </h5> */}
             <iframe
          
          style={{
          background: "bg-gradient-to-r from-blue-300 via-gray-150 to-blue-100",
          border: "none",
          borderRadius: "2px",
          boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
          width:"90%",
          height:"150px",
        
        }}
          src="https://charts.mongodb.com/charts-db-mmwrsms-tkkfh/embed/charts?id=65802455-26bb-437a-8032-48aceb475a00&maxDataAge=3600&theme=light&autoRefresh=true"
        ></iframe> 
          </div>

          <hr />
          <Link to="/dashboard-withdraw-money">
       
            <h5 className=" flex pt-4 pl-[2] text-blue-500">
              View Profit{" "}
              <GrSettingsOption size={25} className="ml-1 animate-spin" />
            </h5>
          </Link>

          {/* <ReactApexChart options={options} series={salesData} type="donut" width="290" /> */}
        </div>

        <div className="w-full grid grid-cols-2 mx-5 mb-4 800px:w-[40%] min-h-[20vh] bg-gradient-to-r from-blue-300 via-gray-150 to-blue-100 shadow-lg rounded-[20px] px-5 py-5">
          <div className=" items-center">
            👜
            <h3
              className={`${styles.productTitle} !text-[18px] ml-2 leading-5 !font-[400] text-[#00000085]`}
            >
              All Orders
            </h3>
            <br />
           <h1 className="text-[40px] font-bold text-center">  {orders && orders.length}</h1>
          </div>
          {/* <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
            {orders && orders.length}
          </h5> */}
           <iframe
          
          style={{
          background: "bg-gradient-to-r from-blue-300 via-gray-150 to-blue-100",
          border: "none",
          borderRadius: "2px",
          boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
          width:"60%",
          height:"150px",
        
        }}
          src="https://charts.mongodb.com/charts-db-mmwrsms-tkkfh/embed/charts?id=65802187-26bb-4e9b-82c7-48aceb3f44b4&maxDataAge=60&theme=light&autoRefresh=true"
        ></iframe> 


          <hr />
          <Link to="/dashboard-orders">
            <h5 className="flex pt-4 pl-2 text-blue-500">
              View Orders
              <GrSettingsOption size={25} className="ml-1 animate-spin" />
            </h5>
          </Link>
          {/* <ReactApexChart options={options} series={orderData} type="donut" width="290" /> */}
        </div>

        <div className="w-full grid grid-cols-2 mx-5 mb-4 800px:w-[40%] min-h-[20vh] bg-gradient-to-r from-blue-300 via-gray-150 to-blue-100 shadow-lg rounded-[20px] px-5 py-5">
          <div className="items-center">
            📦
            <h3
              className={`${styles.productTitle} !text-[18px] ml-2 leading-5 !font-[400] text-[#00000085]`}
            >
              All Products
              
            </h3>
            <br />
           <h1 className="text-[40px] font-bold text-center"> {products && products.length}</h1>
            
          </div>
          {/* <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">
            {products && products.length}
          </h5> */}
          <iframe
          
          style={{
          background: "bg-gradient-to-r from-blue-300 via-gray-150 to-blue-100",
          border: "none",
          borderRadius: "2px",
          boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
          width:"60%",
          height:"150px",
        
        }}
          src="https://charts.mongodb.com/charts-db-mmwrsms-tkkfh/embed/charts?id=65801159-408b-4086-8e18-ff4302c7993f&maxDataAge=60&theme=light&autoRefresh=true"
        ></iframe> 

          <hr />

         <Link to="/dashboard-products">
            <h5 className="flex pt-4 pl-2 text-blue-500">
              View Products
              <GrSettingsOption size={25} className="ml-1 animate-spin" />
            </h5>
          </Link> 
          {/* <ReactApexChart options={options} series={productData} type="donut" width="290" /> */}
        </div>

       
        
      </div>
      
      <div className="bg-gray-300 w-full h-1"></div>
      <br />
      <div className="z-20">
                      <div className="text-gray-500 flex pl-4"
                       onClick={() => setShowConfirmation(true)}>
                        <BiData
                          className="mr-1 text-[red]"
                          size={24}
                         
                        />{" "}
                        CHART DATA
                      </div>

                      {showConfirmation && (
                        <div className="fixed z-20  inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center ">
                          <div className="bg-white  rounded w-full h-[50%] mx-[20%] overflow-x-auto">
                          <iframe
          
          style={{
          background: "#FFFFFF",
          border: "none",
          borderRadius: "2px",
          boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
          width:"100%",
          height:"500px",
        
        }}
          src="https://charts.mongodb.com/charts-db-mmwrsms-tkkfh/embed/charts?id=658028fb-0a41-4f69-8df1-6eea37ba77fd&maxDataAge=60&theme=light&autoRefresh=true"
        ></iframe> 

<iframe
          
          style={{
          background: "#FFFFFF",
          border: "none",
          borderRadius: "2px",
          boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
          width:"100%",
          height:"500px",
        
        }}
          src="https://charts.mongodb.com/charts-db-mmwrsms-tkkfh/embed/charts?id=65805387-7e79-4c64-88cc-7a682b3693ec&maxDataAge=60&theme=light&autoRefresh=true"
        ></iframe> 

                           
                          </div>
                          <div className="flex justify-end"
                            onClick={() => setShowConfirmation(false)}>
                              <IoCloseCircle size={50}/>
                            </div>
                        </div>
                      )}
                    </div>
     <div className="grid grid-cols-2">
     
         <iframe
          
          style={{
          background: "#FFFFFF",
          border: "none",
          borderRadius: "2px",
          boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2);",
          width:"100%",
          height:"500px",
        
        }}
          src="https://charts.mongodb.com/charts-db-mmwrsms-tkkfh/embed/charts?id=6580435a-408b-489a-81c6-ff4302750614&maxDataAge=60&theme=light&autoRefresh=true"
        ></iframe> 

      <div className="w-full min-h-[45vh] bg-white  rounded-[20px] shadow shadow-gray-500">
      <h3 className="text-[22px] font-Poppins pb-2 text-center">Latest Orders</h3>
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={6}
          disableSelectionOnClick
          autoHeight
          className="rounded-[20px]"
        />
      </div>
   
     </div>
    
    
    </div>
  );
};

export default DashboardHero;

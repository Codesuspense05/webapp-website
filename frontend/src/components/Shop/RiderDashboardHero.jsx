import React, { useEffect, useState} from "react";
import { AiOutlineEye} from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import {  MdDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { getAllProductsShop } from "../../redux/actions/product";
import { Avatar, Button } from "@material-ui/core";
import { DataGrid, GridRowCount } from "@material-ui/data-grid";
import { IoEyeOutline } from "react-icons/io5";
import ReactApexChart from 'react-apexcharts';
import { LineChartPage } from "../../routes/Routes";
import { TbTruckDelivery } from "react-icons/tb";
import { BsBag } from "react-icons/bs";
import { RxCounterClockwiseClock } from "react-icons/rx";


const DashboardHero = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
     dispatch(getAllOrdersOfShop(seller._id));
     dispatch(getAllProductsShop(seller._id));
  }, [dispatch,seller._id]);

  



  

 



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
    
    <div className="w-full p-2 overflow-hidden">

      <div className="w-full block 800px:flex items-center justify-between">
      

        <div className="w-full grid grid-cols-2 items-center justify-between 800px:w-[30%] min-h-[20vh] bg-gradient-to-r from-white via-white to-blue-300 shadow-lg rounded-[5px] px-5 py-5">
       
       <div>
       <div className="flex"> <TbTruckDelivery size={25}/>Deliveries</div>
       <img
              src="https://img.freepik.com/free-vector/fast-free-delivery-logo-with-bike-man-courier_1308-48846.jpg?size=626&ext=jpg&ga=GA1.1.1737282160.1690642300&semt=sph"
              alt=""
              className="w-[100px] h-[100px]  object-cover"
            />
       </div>
          
          <div className=" items-center justify-center w-full">
            <BsBag size={20}/>
          
            <h3
              className={`${styles.productTitle} !text-[18px]  !font-[400] text-[#00000085]`}
            >
              | Daily Orders
            
          
            </h3>
            <h5 className="text-[37px] font-[500] rounded-full  mx-10 px-3">{orders && orders.length}</h5><hr />
            
          </div>
         
          
        </div>

     
      </div>
      
    
      <h3 className="text-[20px] text-center font-Poppins pb-2">Latest Orders</h3>
      <div className="w-full min-h-[45vh] bg-white rounded">
      <DataGrid
        rows={row}
        columns={columns}
        pageSize={10}
        disableSelectionOnClick
        autoHeight
      />
      </div>
     
      
     
    </div>
  );
};

export default DashboardHero;

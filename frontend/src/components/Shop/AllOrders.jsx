import { Avatar, Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Layout/Loader";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import {AiOutlineEye } from "react-icons/ai";

const AllOrders = () => {
  const { orders, isLoading } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrdersOfShop(seller._id));
  }, [dispatch,seller._id,seller.cart]);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
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
      minWidth: 140,
      flex: 0.8,
    },
    {
      field: "images",
      headerName: "Image",
      minWidth: 140,
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
      field: "name",
      headerName: "Product Name",
      minWidth: 140,
      flex: 1.4,
    },
    
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 100,
      flex: 0.7,
    },

    {
      field: "total",
      headerName: "Total Price",
      type: "number",
      minWidth: 100,
      flex: 0.7,
    },
    {
      field: "status",
      headerName: "Delivery Status",
      minWidth: 150,
      flex: 0.9,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "paymentInfo",
      headerName: "Payment Method",
      minWidth: 200,
      flex: 0.4,
    
    },
    {
      field: "paymentinfo",
      headerName: "Payment Status",
      minWidth: 190,
      flex: 0.4,
    
    },
    {
      field: "createdAt",
      headerName: "Date Ordered",
      minWidth: 200,
      flex: 0.4,
    
    },
    {
      field: "deliveredAt",
      headerName: "Date Delivered",
      minWidth: 200,
      flex: 0.4,
    
    },
    {
      field: " ",
      flex: 0.1,
      maxWidth: 50,
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
        customer: item.user.name,
        avatar: item.user.avatar.url,
        name: item.cart[0].name,
       images: item.cart[0].images[0].url,
       paymentInfo: item.paymentInfo.type,
       paymentinfo:  item.paymentInfo.status,
       deliveredAt: "📅 " + item.deliveredAt,
       createdAt: "📅 " + item.createdAt,
        itemsQty: item.cart.length,
        total: "₱ " + item.totalPrice,
        status:"🚛" + item.status,
      });
    });

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full mx-8 pt-1 mt-10 bg-white">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default AllOrders;

import React, { useEffect } from "react";
import AdminHeader from "../components/Layout/AdminHeader";
import AdminSideBar2 from "../components/Admin/Layout/AdminYesSidebar";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfAdmin } from "../redux/actions/order";
import Loader from "../components/Layout/Loader";
import { Avatar } from "@material-ui/core";

const AdminDashboardOrders = () => {
  const dispatch = useDispatch();

  const { adminOrders, adminOrderLoading } = useSelector(
    (state) => state.order
  );

  useEffect(() => {
    dispatch(getAllOrdersOfAdmin());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 150, flex: 0.7 },
    {
      field: "avatar",
      headerName: "Avatar",
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
      headerName: "Customer Name",
      type: "text",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "image",
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
      field: "productname",
      headerName: "Product Name",
      type: "text",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "color",
      headerName: "ColorType",
      type: "text",
      minWidth: 100,
      flex: 0.5,
    },
    
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },

    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: "shopname",
      headerName: "ShopName",
      type: "text",
      minWidth: 130,
      flex: 0.8,
    },
    {
      field: "shopaddress",
      headerName: "ShopAddress",
      type: "text",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.7,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
        field: "createdAt",
        headerName: "Ordered Date",
        type: "number",
        minWidth: 130,
        flex: 0.7,
      },
      {
        field: "deliveredAt",
        headerName: "Delivered Date",
        type: "number",
        minWidth: 200,
        flex: 0.9,
      },
  ];

  const row = [];
  adminOrders &&
    adminOrders.forEach((item) => {
      row.push({
        id: item._id,
        name: item.user.name,
        avatar: item.user.avatar.url,
        image: item.cart[0].images[0].url,
        productname: item.cart[0].name,
        color: item.cart[0].color,
        itemsQty: item?.cart?.reduce((acc, item) => acc + item.qty, 0),
        total: item?.totalPrice + " ₱",
        status: item?.status,
        shopname: item.shopname?.name,
        shopaddress: item.shopname?.address,
        createdAt:"📅 " + item?.createdAt.slice(0,10),
        deliveredAt:"📅 " + item?.deliveredAt,
      });
    });
  return (

    <>
    {
      adminOrderLoading ? (
        <Loader />
      ): (
    <div>
      <AdminHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <AdminSideBar2 active={2} />
          </div>

          <div className="w-full min-h-[45vh] pt-5 rounded flex justify-center">
            <div className="w-[97%] flex justify-center">
              <DataGrid
                rows={row}
                columns={columns}
                pageSize={4}
                disableSelectionOnClick
                autoHeight
              />
            </div>
          </div>
        </div>
      </div>
    </div>
      )
    
      }
    </>
  );
};

export default AdminDashboardOrders;

import React, { useEffect} from "react";
import { AiOutlineEye} from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import {  MdDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { getAllProductsShop } from "../../redux/actions/product";
import { Avatar, Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import {  CiMoneyBill } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { CgProductHunt, CgShoppingBag } from "react-icons/cg";

const DashboardHero = () => {
  const dispatch = useDispatch();
  const { orders } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
     dispatch(getAllOrdersOfShop(seller._id));
     dispatch(getAllProductsShop(seller._id));
  }, [dispatch,seller._id]);

  const availableBalance = seller?.availableBalance.toFixed(2);

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
    
    <div className="w-full p-8">
      <div className="flex"><MdDashboard size={30}/><h3 className="text-[22px] font-Poppins pb-2">Shop Dashboard</h3></div>
      <div className="w-full block 800px:flex items-center justify-between">
        <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-gradient-to-r from-purple-50 via-gray-150 to-blue-200 shadow-lg rounded-[50px] px-5 py-5">
          
          <div className="flex items-center">
            <CiMoneyBill
              size={35}
              className="mr-2"
              fill="blue"
            />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
               Total Revenue{" "}
              <span className="text-[16px]">(Profit)</span>
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">₱{availableBalance}</h5>
          <br />
          <hr />
          <Link to="/dashboard-withdraw-money">
            <h5 className=" flex pt-4 pl-[2] text-blue-500">View Profit <IoEyeOutline size={25} className="ml-1"/></h5>
          </Link>
        </div>

        <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-gradient-to-r from-purple-50 via-gray-150 to-blue-200 shadow-lg rounded-[50px] px-5 py-5">
          <div className="flex items-center">
            <CgShoppingBag size={30} className="mr-2 text-[blue]" fill="#00000085" />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              All Orders
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{orders && orders.length}</h5>
          <br />
          <hr />
          <Link to="/dashboard-orders">
            <h5 className="flex pt-4 pl-2 text-blue-500">View Orders<IoEyeOutline size={25} className="ml-1"/></h5>
          </Link>
        </div>

        <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-gradient-to-r from-purple-50 via-gray-150 to-blue-200 shadow-lg rounded-[50px] px-5 py-5">
          <div className="flex items-center">
            <CgProductHunt
              size={35}
              className="mr-2 text-[blue]"
              fill="blue"
            />
            <h3
              className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
            >
              All Products
            </h3>
          </div>
          <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{products && products.length}</h5>
          <br />
          <hr />
          <Link to="/dashboard-products">
            <h5 className="flex pt-4 pl-2 text-blue-500">View Products<IoEyeOutline size={25} className="ml-1"/></h5>
          </Link>
        </div>
      </div>
      <div className="bg-gray-300 w-full h-1"></div>
      <br />
      <h3 className="text-[22px] font-Poppins pb-2">Latest Orders</h3>
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

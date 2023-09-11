import React, { useEffect} from "react";
import styles from "../../styles/styles";
import { AiOutlineMoneyCollect } from "react-icons/ai";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
// import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfAdmin } from "../../redux/actions/order";
import Loader from "../Layout/Loader";
import { getAllSellers } from "../../redux/actions/sellers";
import { getAllUsers } from "../../redux/actions/user";
import { GrOrderedList,GrUserAdmin} from "react-icons/gr";
import { BsLayoutSidebar, BsShopWindow } from "react-icons/bs";
import { IoOpenOutline } from "react-icons/io5";
import { HiUsers } from "react-icons/hi";
import { Avatar } from "@material-ui/core";

const AdminDashboardMain = () => {
  const dispatch = useDispatch();

  const { adminOrders,adminOrderLoading } = useSelector((state) => state.order);
  const { sellers } = useSelector((state) => state.seller);
  const { users } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllOrdersOfAdmin());
    dispatch(getAllSellers());
    dispatch(getAllUsers());
  }, [dispatch]);

   const adminEarning = adminOrders && adminOrders.reduce((acc,item) => acc + item.totalPrice * .10, 0);


   const adminBalance = adminEarning?.toFixed(2);

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 130, flex: 0.5 },

    
     
    {
      field: "avatar",
      headerName: "Avatar",
      minWidth: 100,
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
      field: "customer",
      headerName: "Customer Name",
      minWidth: 150,
      flex: 0.8,
    },
    {
      field: "images",
      headerName: "Images",
      minWidth: 100,
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
      minWidth: 150,
      flex: 0.8,
    },

    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 130,
      flex: 0.5,
    },

    {
      field: "total",
      headerName: "Total Price",
      type: "number",
      minWidth: 130,
      flex: 0.5,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 130,
      flex: 0.2,
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
      flex: 0.5,
    },
  ];

  const row = [];
  adminOrders &&
  adminOrders.forEach((item) => {
      row.push({
        id: item._id,
        customer: item.user.name,
        avatar: item.user.avatar.url,
        name: item.cart[0].name,
        images: item.cart[0].images[0].url,
        itemsQty: item?.cart?.reduce((acc, item) => acc + item.qty, 0),
        total: "₱ " + item?.totalPrice ,
        status: "🚚 " + item?.status,
        createdAt: "📅 " + item?.createdAt.slice(0,10),
      });
    });

  return (
   <>
    {
      adminOrderLoading ? (
        <Loader />
      ) : (
        <div className="w-full p-4">
        <h3 className="text-[22px] font-Poppins pb-2"><div className="flex"><GrUserAdmin size={28}/>Admin Dashboard</div></h3>
        <div className="w-full block 800px:flex items-center justify-between">
          <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-gradient-to-r from-white via-gray-150 to-blue-400 shadow-xl rounded-[40px] px-6 py-6 mr-3 ">
            <div className="flex items-center">
              <AiOutlineMoneyCollect
                size={30}
                className="mr-2"
                fill="#00000085"
              />
              <h3
                className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
              >
                Total Earning
              </h3>
            </div>
            <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">₱ {adminBalance}</h5>
          </div>
  
          <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-gradient-to-r from-white via-gray-150 to-blue-400 shadow-xl rounded-[40px] px-6 py-5 mr-3">
            <div className="flex items-center">
              <BsShopWindow size={30} className="mr-2" fill="#00000085" />
              <h3
                className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
              >
                All Shops
              </h3>
            </div>
            <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{sellers && sellers.length}</h5>
            <Link to="/admin-sellers">
              <h5 className="pt-4 pl-2 text-[#5e50ee] flex justify-end"><IoOpenOutline size={30} color="white"/></h5>
            </Link>
          </div>
  
          <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-gradient-to-r from-white via-gray-150 to-blue-400 shadow-xl rounded-[40px] px-6 py-5 mr-3">
            <div className="flex items-center">
              <GrOrderedList  
                size={30}
                className="mr-2"
                fill="#00000085"
              />
              <h3
                className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
              >
                All Orders
              </h3>
            </div>
            <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{adminOrders && adminOrders.length}</h5>
            <Link to="/admin-orders">
              <h5 className="pt-4 pl-2 text-[#5e50ee] flex justify-end"><IoOpenOutline size={30} color="white"/></h5>
            </Link>
          </div>

          <div className="w-full mb-4 800px:w-[30%] min-h-[20vh] bg-gradient-to-r from-white via-gray-150 to-blue-400 shadow-xl rounded-[40px] px-6 py-5 ">
            <div className="flex items-center">
              <HiUsers
                size={30}
                className="mr-2"
                fill="#00000085"
              />
              <h3
                className={`${styles.productTitle} !text-[18px] leading-5 !font-[400] text-[#00000085]`}
              >
                All Registered Users
              </h3>
            </div>
            <h5 className="pt-2 pl-[36px] text-[22px] font-[500]">{users && users.length}</h5>
            <Link to="/admin-orders">
              <h5 className="pt-4 pl-2 text-[#5e50ee] flex justify-end"><IoOpenOutline color="white" size={30}/></h5>
            </Link>
          </div>
        </div>
  <hr />
        <br />
        <h3 className="text-[22px] font-Poppins pb-2"><div className="flex"><BsLayoutSidebar size={30} className="mr-1"/>Latest Orders</div></h3>
        <div className="w-full min-h-[35vh] bg-white rounded">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={4}
            disableSelectionOnClick
            autoHeight
          />
        </div>
      </div>
      )
    }
   </>
  );
};

export default AdminDashboardMain;

import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfUser } from "../redux/actions/order";
import { useEffect } from "react";
import { Avatar, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { MdTrackChanges } from "react-icons/md";
import { DataGrid } from "@material-ui/data-grid";
import { BsArrowLeft } from "react-icons/bs";

// track order
const UserTrackOrder = () => {
    const { user } = useSelector((state) => state.user);
    const { orders } = useSelector((state) => state.order);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getAllOrdersOfUser(user._id));
    }, [dispatch,user._id]);
  
    const columns = [
     
      {
        field: "images",
        headerName: "Image",
        minWidth: 50,
        flex: 0.4,
        renderCell: (params) => {
          console.log(params);
          return (
            <>
               <Link to={`/user/track/order/${params.id}`}>
              <Avatar src={params.value}/>
              </Link>
             
            </>
          );
        }
      },
  
      {
        field: "status",
        headerName: "Status",
        minWidth: 120,
        flex: 0.4,
        cellClassName: (params) => {
          return params.getValue(params.id, "status") === "Delivered"
            ? "greenColor"
            : "redColor";
        },
      },
      {
        field: "itemsQty",
        headerName: "Qty",
        type: "number",
        minWidth: 100,
        flex: 0.3,
        sortable: false,
      },
      {
        field: " ",
        flex: 0.5,
        minWidth: 50,
        headerName: "",
        type: "number",
        sortable: false,
        renderCell: (params) => {
          return (
            <>
              <Link to={`/user/track/order/${params.id}`}>
                <Button>
                  <MdTrackChanges size={20} />
                </Button>
              </Link>
            </>
          );
        },
      },
      
  
      {
        field: "total",
        headerName: "Total Price",
        type: "number",
        minWidth: 130,
        flex: 0.8,
      },
  
    
    ];
  
    const row = [];
  
    orders &&
      orders.forEach((item) => {
        row.push({
          id: item._id,
          itemsQty: item.cart.length,
          images: item.cart[0].images[0].url,
          total: "P " + item.totalPrice,
          status: item.status,
        });
      });
  
    return (
      <div className=" p-2">
        <div>
        <Link to={"/profile"}><div className="flex bg-blue-500 h-10 w-full rounded-t-[4px] items-center "><BsArrowLeft size={20} color="white" className="m-2"/> <h2 className="text-white">Track Orders</h2></div></Link>
        </div>
        <DataGrid
          rows={row}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          autoHeight
        />
      </div>
    );
  };

  export default UserTrackOrder;
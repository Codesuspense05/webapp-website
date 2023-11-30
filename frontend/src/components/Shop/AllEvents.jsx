import { Avatar, Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import React, { useEffect } from "react";
import { AiOutlineDelete} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent, getAllEventsShop } from "../../redux/actions/event";
// import { getAllProductsShop } from "../../redux/actions/product";
// import { deleteProduct } from "../../redux/actions/product";
import Loader from "../Layout/Loader";

const AllEvents = () => {
  const { events, isLoading } = useSelector((state) => state.events);
  const { seller } = useSelector((state) => state.seller);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEventsShop(seller._id));
  }, [dispatch,seller._id]);

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
    window.location.reload();
  }

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "image",
      headerName: "Image",
      minWidth: 120,
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
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "color",
      headerName: "Colotype",
      minWidth: 180,
      flex: 0.5,
    },
    {
      field: "original",
      headerName: "Original Price",
      minWidth: 180,
      flex: 0.6,
    },
    
    {
      field: "discount",
      headerName: "Discount Price",
      minWidth: 180,
      flex: 0.6,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      minWidth: 120,
      flex: 0.5,
    },
    {
      field: "status",
      headerName: "Promo Status",
      minWidth: 180,
      flex: 0.5,
    },
    {
      field: "start",
      headerName: "Start Date",
      minWidth: 180,
      flex: 1.4,
    },
    {
      field: "end",
      headerName: "End Date",
      minWidth: 180,
      flex: 1.4,
    },



    
    {
      field: "Delete",
      flex: 0.8,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button
            onClick={() => handleDelete(params.id)}
            >
              <AiOutlineDelete size={20} />
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];

  events &&
  events.forEach((item) => {
      row.push({
        id: item._id,
        name: item.name,
        image: item.images[0].url,
        color: item.color,
        original: "₱" + item.discountPrice,
        discount: "₱" + item.discountPrice,
        Stock: item.stock,
        status: item.status,
        start: "📅 " + item.start_Date,
        end: "📅 " + item.Finish_Date
        
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
            disableSelectionOnClick
            autoHeight
          />
        </div>
      )}
    </>
  );
};

export default AllEvents;

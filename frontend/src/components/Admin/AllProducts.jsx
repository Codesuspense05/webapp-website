import React, { useEffect } from "react";
import { Avatar, Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import {  AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { useState } from "react";
import { TbBrandProducthunt } from "react-icons/tb";

const AllProducts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${server}/product/admin-all-products`, {withCredentials: true}).then((res) => {
        setData(res.data.products);
    })
  }, []);

  const columns = [
    { field: "id", headerName: "Product Id", minWidth: 150, flex: 0.7 },
    {
      field: "images",
      headerName: "Images",
      minWidth: 100,
      flex: 0.5,
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
      minWidth: 280,
      flex: 1.4,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 110,
      flex: 0.6,
    },
    {
      field: "Stock",
      headerName: "Stock",
      type: "number",
      minWidth: 120,
      flex: 0.7,
    },

    {
      field: "sold",
      headerName: "Sold out",
      type: "number",
      minWidth: 130,
      flex: 0.6,
    },
    {
      field: "Preview",
      flex: 0.8,
      minWidth: 120,
      headerName: "",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.id}`}>
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

  data &&
  data.forEach((item) => {
      row.push({
        id: item._id,
        images: item.images[0].url,
        name: item.name,
        price: "P" + item.discountPrice,
        Stock: item.stock,
        sold: item?.sold_out,
      });
    });

  return (
    <>
    <div className="w-full flex justify-center pt-5">
      <div className="w-[97%]">
        <h3 className="text-[22px] font-Poppins pb-2"><TbBrandProducthunt/>All Product</h3>
        <div className="w-full min-h-[45vh] bg-white rounded">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            
            autoHeight
          />
        </div>
       
      </div>
    </div>
    </>
  );
};

export default AllProducts;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/actions/user";
import { DataGrid } from "@material-ui/data-grid";
import { AiOutlineDelete } from "react-icons/ai";
import { Avatar, Button } from "@material-ui/core";
import styles from "../../styles/styles";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import {  BiUserCheck } from "react-icons/bi";


const AllUsers = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleDelete = async (id) => {
    await axios
    .delete(`${server}/user/delete-user/${id}`, { withCredentials: true })
    .then((res) => {
      toast.success(res.data.message);
    });

  dispatch(getAllUsers());
  };

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 150, flex: 0.7 },
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
      field: "name",
      headerName: "Name",
      minWidth: 200,
      flex: 1.9,
    },
    {
      field: "email",
      headerName: "Email Address",
      type: "text",
      minWidth: 300,
      flex: 1.9,
    },
    {
      field: "number",
      headerName: "Contact No.",
      type: "text",
      minWidth: 130,
      flex: 0.7,
    },
    {
      field: "address",
       headerName: " Address",
       minWidth: 300,
      flex: 1.5,
     },
     {
      field: "addresstypes",
       headerName: "Type",
       minWidth: 130,
      flex: 0.5,
     },
    {
      field: "role",
      headerName: "User Role",
      type: "text",
      minWidth: 130,
      flex: 0.7,
    },

    {
      field: "joinedAt",
      headerName: "RegisteredAt",
      type: "text",
      minWidth: 150,
      flex: 0.9,
    },
    {
      field: "fb",
      headerName: "Facebook Profile Link",
      minWidth: 200,
      flex: 1.9,
      renderCell: (params) => (
        
        <a href={params.value} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-[red]">
          {params.value}
         
        </a>
        
      ),
    },

    {
      field: " ",
      flex: 1,
      minWidth: 150,
      headerName: "Delete User",
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <>
            <Button onClick={() => setUserId(params.id) || setOpen(true)}>
              <AiOutlineDelete size={20} color="red"/>
            </Button>
          </>
        );
      },
    },
  ];

  const row = [];
  users &&
    users.forEach((item) => {
      row.push({
        id: item._id,
        avatar: item.avatar.url,
        name: item.name,
        address: item.addresses[0]?.address1,
        addresstypes: item.addresses[0]?.addressType,
        number: item.phoneNumber,
        fb: item.facebooklink,
        email: "📧 " + item.email,
        // address: item.addresses[0].address1 ,
        role: "🕵️ " + item.role,
        joinedAt: "📅 " + item.createdAt.slice(0, 10),
      });
    });

  return (
    <div className="w-full flex justify-center pt-5">
      <div className="w-[97%]">
        <h3 className="text-[22px] font-Poppins pb-2"><BiUserCheck/>All Registered Users</h3>
        <div className="w-full min-h-[45vh] bg-white rounded">
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            checkboxSelection={false}
            autoHeight
          />
        </div>
        {open && (
          <div className="w-full fixed top-0 left-0 z-[999] bg-[#00000039] flex items-center justify-center h-screen">
            <div className="w-[95%] 800px:w-[40%] min-h-[20vh] bg-white rounded shadow p-5">
              <div className="w-full flex justify-end cursor-pointer">
                <RxCross1 size={25} onClick={() => setOpen(false)} />
              </div>
              <h3 className="text-[25px] text-center py-5 font-Poppins text-[#000000cb]">
                Are you sure you wanna delete this user?
              </h3>
              <div className="w-full flex items-center justify-center">
                <div
                  className={`${styles.button} text-white text-[18px] !h-[42px] mr-4`}
                  onClick={() => setOpen(false)}
                >
                  cancel
                </div>
                <div
                  className={`${styles.button} text-white text-[18px] !h-[42px] ml-4`}
                  onClick={() =>  setOpen(false) || handleDelete(userId)}
                >
                  confirm
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUsers;

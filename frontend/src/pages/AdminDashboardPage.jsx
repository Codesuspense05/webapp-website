import React from "react";
import AdminHeader from "../components/Layout/AdminHeader";
 import AdminSideBar from "../components/Admin/Layout/AdminSideBar";
import AdminDashboardMain from "../components/Admin/AdminDashboardMain";
import  AllUsers  from "../components/Admin/AllUsers";
import  AllSellers  from "../components/Admin/AllSellers";
import  AllProducts from "../components/Admin/AllProducts";
import AllRiders from "../components/Admin/AllRiders";


const AdminDashboardPage = () => {
  return (
    <div className="bg-[#dfe6f2]">
      <AdminHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] ">
            <AdminSideBar active={1} />
          </div> 
          
          <AdminDashboardMain />
          
          
        </div>
        
      </div>
      <hr />
      
      <div className="grid grid-cols-3">
      
      <AllUsers />
      <AllSellers/>
      <AllProducts/>
     <AllRiders/>
</div>
    </div>
  );
};

export default AdminDashboardPage;

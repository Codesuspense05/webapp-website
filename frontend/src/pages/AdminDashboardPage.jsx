import React from "react";
import AdminHeader from "../components/Layout/AdminHeader";
 import AdminSideBar from "../components/Admin/Layout/AdminSideBar";
import AdminDashboardMain from "../components/Admin/AdminDashboardMain";
import  AllUsers  from "../components/Admin/AllUsers";
import  AllSellers  from "../components/Admin/AllSellers";
import  AllProducts from "../components/Admin/AllProducts";


const AdminDashboardPage = () => {
  return (
    <div>
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
</div>
    </div>
  );
};

export default AdminDashboardPage;

import React from "react";
import RiderHeader from "../../components/Shop/Layout/RiderHeader";

import RiderDashboardHero from "../../components/Shop/RiderDashboardHero";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
import DashboardHero from "../../components/Shop/DashboardHero";

const RiderDashboardPage = () => {
  return (
        <div className="p-0 m-0 overflow-hidden">
          
          <RiderHeader />
          <br />
          <br />
          <br />
          <div className="flex items-start justify-between">
           
            <RiderDashboardHero/>
          
           
          </div>
         
        </div>
  );
};

export default RiderDashboardPage;

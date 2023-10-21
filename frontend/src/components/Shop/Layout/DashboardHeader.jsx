import React, { useEffect, useState } from "react";
import { MdOutlineLocalOffer } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiCoupon3Line, RiProductHuntLine } from "react-icons/ri";
import { GrOrderedList } from "react-icons/gr";
import { TbMessageDots } from "react-icons/tb";
import { BsClock } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";

const DashboardHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every second
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="w-full h-[80px] bg-white shadow shadow-blue-500 sticky top-0 left-0 z-30 flex items-center justify-between px-4">
     
      <div className="flex items-center">
        <div className="flex items-center mr-4">
          <Link to="/dashboard-coupouns" className="800px:block hidden">
            <RiCoupon3Line
            title="Dicount Code"
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-events" className="800px:block hidden">
            <MdOutlineLocalOffer
            title="Promo Event"
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-products" className="800px:block hidden">
            <RiProductHuntLine
            title="Products"
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
          <Link to="/dashboard-orders" className="800px:block hidden">
            <GrOrderedList 
            title="Orderlist"
            color="#555" 
            size={30} 
            className="mx-5 cursor-pointer" />
          </Link>
          <Link to="/dashboard-messages" className="800px:block hidden">
            <TbMessageDots
              title="Inbox"
              color="#555"
              size={30}
              className="mx-5 cursor-pointer"
            />
          </Link>
         
        </div>
       
      </div>
      <div className="flex  items-center justify-end">
        <BsClock size={20} className="mr-1"/><p className="mr-2"> Time: {currentTime.toLocaleTimeString()}</p>
        
      <BiCalendar size={20}/><p>Date: {currentTime.toLocaleDateString()}</p>
        </div>
        
      <div className=" flex items-center justify-center p-2 800px:hidden">
        <Link to="/dashboard">
          <img
          className="w-[170px] h-[30px]"
            src="https://see.fontimg.com/api/renderfont4/ow59x/eyJyIjoiZnMiLCJoIjozMywidyI6MTAwMCwiZnMiOjMzLCJmZ2MiOiIjMUE1N0IwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TVdSU01T/airtravelerspersonaluse-bdit.png"
            alt=""
          />
        </Link>
      </div>
      <div className="flex items-center justify-end"> 
        <Link to={`/shop/${seller._id}`}>
            <img
              src={`${seller.avatar?.url}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
          </Link></div>
      
     
    </div>
    
  );
   
};


export default DashboardHeader;

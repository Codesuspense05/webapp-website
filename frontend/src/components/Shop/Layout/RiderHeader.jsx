import React, { useEffect, useState } from "react";
import { MdOutlineLocalOffer } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RiCoupon3Line, RiProductHuntLine } from "react-icons/ri";
import { GrOrderedList } from "react-icons/gr";
import { TbMessageDots } from "react-icons/tb";
import { BsClock } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";

const RiderHeader = () => {
  const { seller } = useSelector((state) => state.seller);
  const { rider } = useSelector((state) => state.rider);
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
    <div className="w-full h-[80px] bg-white shadow shadow-blue-500 fixed top-0 left-0 z-30 flex items-center justify-between px-3">
     
     
      <div className="flex tex-[12px]  items-center justify-end">
        <BsClock size={20} className="mr-1"/><p className="mr-2 text-[13px]"> Time: {currentTime.toLocaleTimeString()}</p>
        
      <BiCalendar size={20}/><p className="text-[13px]">Date: {currentTime.toLocaleDateString()}</p>
        </div>
        
     
      <div className="flex items-center justify-end border border-gray-500 rounded-full p-1"> 
        <Link to={`/shop/${seller._id}`}>
            <img
              src={`${rider.avatar?.url}`}
              alt=""
              className="w-[40px] h-[40px] rounded-full object-cover"
            />
          </Link></div>
      
     
    </div>
    
  );
   
};


export default RiderHeader;

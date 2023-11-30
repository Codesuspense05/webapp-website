import React from "react";
import {  AiFillMoneyCollect, AiOutlineDashboard, AiOutlineOrderedList } from "react-icons/ai";
import { MdCardGiftcard, MdSettings } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BiBookAdd, BiChat, BiFolderPlus, BiPurchaseTag, BiWalk } from "react-icons/bi";
import {  RiMotorbikeLine, RiProductHuntFill, } from "react-icons/ri";
import { BsShopWindow } from "react-icons/bs";

const DashboardSideBar = ({ active }) => {
  const { seller } = useSelector((state) => state.seller);

  

  return (
    <div className="w-full h-[110vh] bg-white sticky top-0 left-0 z-10 overflow-hidden shadow-xl  ">
      
      {/* single item */}
      {/* <div className=" flex items-center justify-center p-2 max-400px:hidden"
         
      >
        <Link to="/dashboard">
          <img
          className="w-[170px] h-[30px]"
            src="https://see.fontimg.com/api/renderfont4/ow59x/eyJyIjoiZnMiLCJoIjozMywidyI6MTAwMCwiZnMiOjMzLCJmZ2MiOiIjMUE1N0IwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TVdSU01T/airtravelerspersonaluse-bdit.png"
            alt=""
          />
        </Link>
      </div> */}
      <div 
      className="flex items-center justify-center mt-5 mb-5 max-400px:hidden "
     
      >
        <Link to={`/shop/${seller._id}`}>
            <img
              src={`${seller.avatar?.url}`}
              alt=""
              className="w-[100px] h-[100px] border border-gray-400 rounded-full shadow-xl object-cover"
            />
          </Link></div>
          <div className="flex items-center justify-center text-[20px] max-400px:hidden"><BsShopWindow className="mr-1"/>Shop Account </div>
          <hr />
      <div className="w-full flex items-center bg-gradient-to-r from-purple-50 via-gray-150 to-blue-200 p-4 border rounded-[5px] m-2  shadow-xl transition-transform transform hover:scale-105">
        <Link to="/dashboard" className="w-full flex items-center">
          <AiOutlineDashboard
            size={30}
            color={`${active === 1 ? "orange" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 1 ? "text-blue-600" : "text-[#555]"
            }`}
          >
            Dashboard
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center p-4  bg-gradient-to-r from-purple-50 via-gray-150 to-blue-200  border rounded-[5px] m-2  shadow-xl transition-transform transform hover:scale-105">
        <Link to="/dashboard-walkin-order-product" className="w-full flex items-center">
          <BiWalk
            size={30}
            color={`${active === 2 ? "orange" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 2 ? "text-blue-600" : "text-[#555]"
            }`}
          >
           Create Order (Wallk-in) 
          </h5>
        </Link>
      </div>
      
      <div className="w-full flex items-center p-4  bg-gradient-to-r from-purple-50 via-gray-150 to-blue-200  border rounded-[5px] m-2  shadow-xl transition-transform transform hover:scale-105">
        <Link to="/dashboard-orders" className="w-full flex items-center">
          <AiOutlineOrderedList
            size={30}
            color={`${active === 3 ? "orange" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 3 ? "text-blue-600" : "text-[#555]"
            }`}
          >
            All Orders
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center  bg-gradient-to-r from-purple-50 via-gray-150 to-blue-200 p-4 border rounded-[5px] m-2  shadow-xl transition-transform transform hover:scale-105">
        <Link to="/dashboard-products" className="w-full flex items-center">
          <RiProductHuntFill size={30} color={`${active === 4 ? "orange" : "#555"}`} />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 4 ? "text-blue-600" : "text-[#555]"
            }`}
          >
            All Products
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center bg-gradient-to-r from-purple-50 via-gray-150 to-blue-200 p-4 border rounded-[5px] m-2  shadow-xl transition-transform transform hover:scale-105">
        <Link
          to="/dashboard-create-product"
          className="w-full flex items-center"
        >
          <BiFolderPlus
            size={30}
            color={`${active === 5 ? "orange" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 5 ? "text-blue-600" : "text-[#555]"
            }`}
          >
            Create Product
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center bg-gradient-to-r from-purple-50 via-gray-150 to-blue-200 p-4 border rounded-[5px] m-2  shadow-xl transition-transform transform hover:scale-105">
        <Link to="/dashboard-events" className="w-full flex items-center">
          <BiPurchaseTag
            size={30}
            color={`${active === 6 ? "orange" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 6 ? "text-blue-600" : "text-[#555]"
            }`}
          >
            All Offer's | Promo
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center bg-gradient-to-r from-purple-50 via-gray-150 to-blue-200 p-4 border rounded-[5px] m-2  shadow-xl transition-transform transform hover:scale-105">
        <Link to="/dashboard-create-event" className="w-full flex items-center">
          <BiBookAdd
            size={30}
            color={`${active === 7 ? "orange" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 7 ? "text-blue-600" : "text-[#555]"
            }`}
          >
            Create Promo's
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center bg-gradient-to-r from-purple-50 via-gray-150 to-blue-200 p-4 border rounded-[5px] m-2  shadow-xl transition-transform transform hover:scale-105">
        <Link to="/dashboard-messages" className="w-full flex items-center">
          <BiChat
            size={30}
            color={`${active === 9 ? "orange" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 9 ? "text-blue-600" : "text-[#555]"
            }`}
          >
            Shop Inbox
          </h5>
        </Link>
      </div>

      <div className="w-full flex items-center bg-gradient-to-r from-purple-50 via-gray-150 to-blue-200 p-4 border rounded-[5px] m-2  shadow-xl transition-transform transform hover:scale-105">
        <Link to="/dashboard-coupouns" className="w-full flex items-center">
          <MdCardGiftcard
            size={30}
            color={`${active === 10 ? "orange" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 10 ? "text-blue-600" : "text-[#555]"
            }`}
          >
            Discount Codes
          </h5>
        </Link>
      </div>
 
      <div className="w-full flex items-center bg-gradient-to-r from-purple-50 via-gray-150 to-blue-200 p-4 border rounded-[5px] m-2  shadow-xl transition-transform transform hover:scale-105">
        <Link to="/dashboard-refunds" className="w-full flex items-center">
          <AiFillMoneyCollect
            size={30}
            color={`${active === 11 ? "orange" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 11 ? "text-blue-600" : "text-[#555]"
            }`}
          >
            Refunds
          </h5>
        </Link>
      </div>
      <div className="w-full flex items-center bg-gradient-to-r from-purple-50 via-gray-150 to-blue-200 p-4 border rounded-[5px] m-2  shadow-xl transition-transform transform hover:scale-105">
        <Link to="/rider-create" className="w-full flex items-center">
          <RiMotorbikeLine
            size={30}
            color={`${active === 12 ? "orange" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400] ${
              active === 12 ? "text-blue-600" : "text-[#555]"
            }`}
          >
            Create Delivery Staff
          </h5>
        </Link>
      </div>
    
      <div className="w-full flex items-center bg-gradient-to-r from-purple-50 via-gray-150 to-blue-200 p-4 border rounded-[5px] m-2  shadow-xl transition-transform transform hover:scale-105">
        <Link to="/settings" className="w-full flex items-center">
          <MdSettings
            size={30}
            color={`${active === 13 ? "orange" : "#555"}`}
          />
          <h5
            className={`hidden 800px:block pl-2 text-[18px] font-[400]   ${
              active === 13 ? "text-blue-600" : "text-[#555]"
            }`}
          >
            Account Settings
          </h5>
        </Link>
      </div>
    </div>
  );
};

export default DashboardSideBar;

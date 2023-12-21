import React, { useState } from 'react'
import { BiBookmark, BiHomeAlt, BiUserCircle } from 'react-icons/bi'
import { BsDropletHalf, BsQuestionCircle } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'
import { IoAlbumsOutline, IoCallOutline } from 'react-icons/io5'
import { RiHome3Line, RiProductHuntLine, RiShutDownLine } from 'react-icons/ri'
import {  RxContainer, RxCross1, RxHamburgerMenu } from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'
import styles from "../styles/styles";
import { useSelector } from 'react-redux'
import { HiQuestionMarkCircle } from 'react-icons/hi'
import axios from 'axios'
import { server } from '../server'
import { toast } from 'react-toastify'

const WebNavbar = () => {
    const { isAuthenticated, user } = useSelector((state) => state.user);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    // const [isSubItemsOpen, setSubItemsOpen] = useState(false);
    // const [isItemsOpen, setItemsOpen] = useState(false);

    
  // const toggleSubItems = () => {
  //   setSubItemsOpen(!isSubItemsOpen);
  // };

  // const toggleItems = () => {
  //   setItemsOpen(!isItemsOpen);
  // };

  const logoutHandler = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };
  return (
    <>
     <div className="transition fixed z-20 shadow hidden 800px:flex items-center justify-between w-full bg-blue-500 h-[70px]">
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between shadow-gray-500`}
        >
          {/* categories */}
          <div>
            <div className="relative h-[60px] mb-[10px] w-[270px]  1000px:block">
              <BsDropletHalf
                size={40}
                className="absolute top-3 left-5 text-blue-500"
              />
              <button
                className={`h-[100%] w-[80px] flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] rounded-b-xl select-none  border shadow-xl p-5`}
              ></button>
            </div>
          </div>


          {/* navitems */}
          <div className="flex justify-evenly">
                <ul className="flex items-center justify-evenly font-Roboto font-semibold text-white  ">
                  <Link to={"/"}><li className="px-4"><div className="flex"><RiHome3Line size={20}/>Home</div></li></Link>
                  <Link to={"/about"}><li className="px-4"><div className="flex"><BiBookmark color="white"  size={20}/>About Us</div></li></Link>
                  <Link to={"/webproducts"}><li className="px-4"><div className="flex"><RxContainer color="white"  size={20}/>Products</div></li></Link>
                  <Link to={"/websupport"}><li className="px-4"><div className="flex"><IoCallOutline color="white"  size={20}/>Support</div></li></Link>
                  <Link to={"/webfaq"}><li className="px-4"><div className="flex"><BsQuestionCircle color="white" className='mr-1'  size={20}/>FAQ</div></li></Link>
                </ul>
              </div>

        {/* user-profile */}
          <div className="flex justify-between">
            <div className={`${styles.noramlFlex} !justify-between`}>
             
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/">
                    <img
                      src={`${user?.avatar?.url}`}
                      className="w-[30px] h-[30px] 800px:w-[40px] 800px:h-[40px] rounded-full"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="w-full h-[70px] bg-gray-100 z-50 top-0 left-0 shadow-lg 800px:hidden">
        <div className="w-full flex items-center justify-between p-4">
          <div>
            <RxHamburgerMenu
              color="blue"
              size={40}
              className="   shadow-sm"
              onClick={() => setOpen(true)}
            />
          </div>

          <Link to="/">
            <img
              src="https://see.fontimg.com/api/renderfont4/ow59x/eyJyIjoiZnMiLCJoIjozMywidyI6MTAwMCwiZnMiOjMzLCJmZ2MiOiIjMUE1N0IwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TVdSU01T/airtravelerspersonaluse-bdit.png"
              alt=""
              className="h-[30px] w-[150px]"
            />
          </Link>

          {isAuthenticated ? (
            <div className=" flex items-center justify-center">
              <Link to="/profile">
                <img
                  src={`${user.avatar?.url}`}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full border-[3px] border-[#4357da]"
                />
              </Link>
            </div>
          ) : (
            <>
              <BiUserCircle color="gray" size={40} />
            </>
          )}
        </div>

         {/* mobile header sidebar */}
         {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className="fixed max-400px:w-[70%] max-500px:w-[60%] max-640px:w-[60%] max-768px:w-[60%] bg-blue-900 h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="bg-blue-500 w-full h-2"></div>
              <div className="w-full justify-end flex   ">
                <RxCross1
                  size={30}
                  className=" pt-2 pb-2 text-white"
                  onClick={() => setOpen(false)}
                />
              </div>
              <div className="flex pb-3 items-center justify-center">
              <Link to="/">
            <img
              src="https://see.fontimg.com/api/renderfont4/ow59x/eyJyIjoiZnMiLCJoIjozMywidyI6MTAwMCwiZnMiOjMzLCJmZ2MiOiIjMUE1N0IwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TVdSU01T/airtravelerspersonaluse-bdit.png"
              alt=""
              className="h-[30px] w-[150px]"
            />
          </Link>

              </div>

              <div className="w-50 bg-gray-100 text-white text-center">
                <div className="relative flex overflow-x-hidden text-black">
                  <div className=" animate-marquee whitespace-nowrap">
                    <span className="text-sm mx-2">
                      (02)-888888 / 09123456789 | OPEN 9am-10pm (Mon-Sun)
                    </span>
                    <span className="text-sm mx-2">9123456789</span>
                    <span className="text-sm mx-2">|</span>
                    <span className="text-sm mx-2">OPEN 9am-10pm</span>
                    <span className="text-sm mx-2">(Mon-Sun)</span>
                  </div>

                  <div className="absolute top-0  animate-marquee2 whitespace-nowrap">
                    <span className="text-sm mx-2">
                      (02)-888888 / 09123456789 | OPEN 9am-10pm (Mon-Sun)
                    </span>
                    <span className="text-sm mx-2">9123456789</span>
                    <span className="text-sm mx-2">|</span>
                    <span className="text-sm mx-2">OPEN 9am-10pm</span>
                    <span className="text-sm mx-2">(Mon-Sun)</span>
                  </div>
                </div>
                <div className="">
                  <div className="flex w-full items-center justify-center h-[10%] mb-2  ">
                    {isAuthenticated ? (
                      <div className=" items-center justify-center pl-2">
                        <Link to="/">
                          <img
                            src={`${user.avatar?.url}`}
                            alt=""
                            className="w-[80px] h-[80px] rounded-full border-[3px] border-[#4357da]"
                          />
                        </Link>
                      </div>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="text-[18px] pr-[10px] text-[#000000b7]"
                        >
                          Login |
                        </Link>
                        <Link
                          to="/sign-up"
                          className="text-[18px] text-[#000000b7]"
                        >
                          Sign up
                        </Link>
                      </>
                    )}
                  </div>
                  <hr />

                  <hr />
                  <div className="w-full text-center">
                    
                    <h4 className="text-[11px] text-gray-600 ml-2">
                     
                      Role: {user && user?.role}
                    </h4>
                    <h3 className="text-[11px] text-gray-600 ml-2">
                      
                      Name: {user && user.name}
                    </h3>
                  </div>
                </div>
                
                <ul className="py-3 bg-blue-900">
                  <li className=" ">
                    <div className="text-white flex font-semibold mb-3 ml-3 ">
                      <RxHamburgerMenu size={24} className="mr-1" /> NAVIGATION{" "}
                      <Link to={"/webfaq"}>
                        <HiQuestionMarkCircle size={22} className="ml-5 text-white" />
                      </Link>
                    </div>
                   <hr />
                    

                   <div className=" items-center justify-center">
                   <ul className="pl-10 bg-blue-900 items-center justify-center ">
                      <Link to={"/"}>
                        <li className="py-2 cursor-pointer hover:p-2 justify-center  hover:text-blue-500 text-gray-500">
                          <div className="flex text-white justify-start font-bold"><BiHomeAlt className="mr-2" size={21}/>Home</div>
                        </li>
                      </Link>
                      
                      <Link to={"/about"}>
                        <li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500  text-gray-500">
                          <div className="flex text-white font-bold justify-start"><IoAlbumsOutline className="mr-2" size={21}/> About us</div>
                        </li>
                      </Link>
                      
                      <Link to={"/webproducts"}>
                        <li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500">
                          <div className="flex text-white font-bold justify-start"><RiProductHuntLine className="mr-2" size={21}/>Products</div>
                        </li>
                      </Link>
                    
                      <Link to={"/websupport"}>
                        <li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500">
                          <div className="flex text-white font-bold justify-start"><IoCallOutline className="mr-2" size={21}/>Support</div>
                        </li>
                      </Link>

                      <Link to={"/webfaq"}>
                        <li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500">
                          <div className="flex text-white font-bold justify-start"><BsQuestionCircle className="mr-2" size={21}/>Faq</div>
                        </li>
                      </Link>
                    
                    </ul>
                   </div>
                  </li>

                  {/* <li className="pl-4 pr-2 py-2 ">
                    <div onClick={toggleItems} className="text-blue-700 flex">
                      <AiOutlineProfile size={20} className="mr-1" />
                      Profile Dashboard
                      {isItemsOpen ? (
                        <RxCaretUp className="h-6 w-6 ml-2 inline-block" />
                      ) : (
                        <RxCaretDown className="h-6 w-6 ml-2 inline-block" />
                      )}
                    </div>
                    <hr />
                    {isItemsOpen && (
                      <ul className="pl-8 ">
                        <Link to={"/profile"}>
                          <li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500">
                            <div className="flex">👨‍⚖️ Profile</div>
                          </li>
                        </Link>
                        <hr />
                        <Link to={"/user-orders"}>
                          <li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500 ">
                            <div className="flex">👜 Orders</div>
                          </li>
                        </Link>
                        <hr />
                        <Link to={"/user-trackorders"}>
                          <li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500">
                            <div className="flex">🔗 Track Orders </div>
                          </li>
                        </Link>
                        <hr />
                        <Link to={"/user-refundOrders"}>
                          <li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500">
                            <div className="flex">↩️ Refund </div>
                          </li>
                        </Link>
                        <hr />
                        <Link to={"/user-address"}>
                          <li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500">
                            <div className="flex">📌 Address </div>
                          </li>
                        </Link>
                        <hr />
                        <Link to={"/user-changepassword"}>
                          <li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500">
                            <div className="flex">🔐 Change Password </div>
                          </li>
                        </Link>
                        <hr />
                      </ul>
                    )}
                  </li> */}

                  {/* <li className="pl-4 pr-2 py-2  ">
                    <div
                      onClick={toggleSubItems}
                      className="text-blue-700 flex"
                    >
                      📨 Chat Inbox
                      {isSubItemsOpen ? (
                        <RxCaretUp className="h-6 w-6 ml-2 inline-block" />
                      ) : (
                        <RxCaretDown className="h-6 w-6 ml-2 inline-block" />
                      )}
                    </div>
                    <hr />
                    {isSubItemsOpen && (
                      <ul className="pl-8 cursor-pointer">
                        <Link to={"/inbox"}>
                          <li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500">
                            <div className="flex">💬 Message</div>
                          </li>
                        </Link>
                        <hr />
                      </ul>
                    )}
                  </li> */}
                  <hr />
                  <div className="text-white flex mt-4 pl-4">
                    <RiShutDownLine
                      className="mr-1 text-[red]"
                      size={24}
                      onClick={logoutHandler}
                    />{" "}
                    Logout
                  </div>
                </ul>
              </div>
              
             
            </div>
            
          </div>
          
        )}
        
      </div>


      
    </>
  )
}

export default WebNavbar

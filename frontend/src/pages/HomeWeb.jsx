import React, { useState } from "react";
import Hero from "../components/Route/Hero/Hero";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineAdminPanelSettings, MdOutlineFacebook } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import styles from "../styles/styles";
import { useSelector } from "react-redux";
import { BsDropletHalf, BsQuestionCircle } from "react-icons/bs";

import {
  BiBookmark,
  BiHomeAlt,
  BiMenuAltLeft,
  BiUserCircle,
} from "react-icons/bi";
import { RxContainer, RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { RiHome3Line, RiProductHuntLine, RiShutDownLine } from "react-icons/ri";
import axios from "axios";
import { server } from "../server";
import { toast } from "react-toastify";
import { IoAlbumsOutline, IoCallOutline } from "react-icons/io5";
// import Navigation from "./components/Navigation.jsx";

const HomeWeb = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  // const [isSubItemsOpen, setSubItemsOpen] = useState(false);
  // const [isItemsOpen, setItemsOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    axios
      .get(`${server}/user/logout`, { withCredentials: true })
      .then((res) => {
        toast.success(res.data.message);
        window.location.reload(true);
        navigate("/login");
        setShowConfirmation(false);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

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
      <div className="">
        {/* <div className="bg-blue-500 800px:w-[100%] h-1 max-400px:hidden max-500px:hidden max-640px:hidden  max-768px:hidden"></div> */}

        <div className=" !overflow-hidden p-0 m-0 mt-0 mb-0 ">
          <div className="hidden 800px:h-[50px]  800px:flex items-center justify-between px-10 py-10 bg-[#0099ff]">
            <div className="w-[50%] relative flex overflow-x-hidden text-white">
              <div className="py-12 animate-marquee whitespace-nowrap">
                <span className="text-xl mx-4">
                  (02)-888888 / 09123456789 | OPEN 9am-10pm (Mon-Sun)
                </span>
                <span className="text-xl mx-4">9123456789</span>
                <span className="text-xl mx-4">|</span>
                <span className="text-xl mx-4">OPEN 9am-10pm</span>
                <span className="text-xl mx-4">(Mon-Sun)</span>
              </div>

              <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                <span className="text-xl mx-4">
                  (02)-888888 / 09123456789 | OPEN 9am-10pm (Mon-Sun)
                </span>
                <span className="text-xl mx-4">9123456789</span>
                <span className="text-xl mx-4">|</span>
                <span className="text-xl mx-4">OPEN 9am-10pm</span>
                <span className="text-xl mx-4">(Mon-Sun)</span>
              </div>
            </div>

            <div className="flex">
              {" "}
              <h4 className="flex font-Roboto text-[15px] max-400px:hidden ml-5 text-white">
                Hi👋 Welcome,
                {user?.name}
              </h4>
            </div>

            <div className="flex items-center ">
              <MdOutlineFacebook size={30} color="white" className="mr-2 " />
              <AiOutlineInstagram
                size={27}
                color="white"
                className="mr-2 bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] rounded-full "
              />
              <IoLogoYoutube size={30} color="red" className="rounded-full" />
            </div>
          </div>
        </div>

        <div className="transition sticky shadow-lg shadow-gray-200 hidden 800px:flex items-center justify-between w-full bg-white h-[70px]">
          <div
            className={`${styles.section} relative ${styles.noramlFlex} justify-between shadow-gray-500`}
          >
            {/* categories */}
            <div>
              <div className="relative h-[60px] mb-[10px]  w-[270px]  1000px:block">
               <img src="https://images.squarespace-cdn.com/content/v1/5bec1b173c3a532ddba64a7e/1646400208088-WG9IIXPLG23ION64Z2CY/drink-plenty-of-water.gif"
                alt="" 
                className="absolute top-0 left-0 h-[100%] w-20"/>
                <button
                  className={`h-[100%] w-[80px] flex justify-between items-center pl-10 bg-[#0099ff] font-sans text-lg font-[500] rounded-b-xl select-none  border border-[#0099ff] shadow-xl p-5`}
                ></button>
              </div>
            </div>

            {/* navitems */}
            <div className="flex justify-evenly">
              <ul className="flex items-center justify-evenly font-Roboto  text-black  ">
                <Link to={"/"}>
                  <li className="px-4">
                    <div className="flex hover:text-blue-500">
                      <RiHome3Line className="mr-1" size={20} />
                      Home
                    </div>
                  </li>
                </Link>
                <Link to={"/about"}>
                  <li className="px-4 hover:text-blue-500 ">
                    <div className="flex hover:text-blue-500">
                      <BiBookmark
                        className="mr-1 hover:text-blue-500"
                        color="black"
                        size={20}
                      />
                      About
                    </div>
                  </li>
                </Link>
                <Link to={"/webproducts"}>
                  <li className="px-4">
                    <div className="flex hover:text-blue-500">
                      <RxContainer className="mr-1" color="black" size={20} />
                      Products
                    </div>
                  </li>
                </Link>
                <Link to={"/websupport"}>
                  <li className="px-4">
                    <div className="flex hover:text-blue-500">
                      <IoCallOutline className="mr-1" color="black" size={20} />
                      Support
                    </div>
                  </li>
                </Link>
                <Link to={"/webfaq"}>
                  <li className="px-4">
                    <div className="flex hover:text-blue-500">
                      <BsQuestionCircle
                        className="mr-1"
                        color="black"
                        size={20}
                      />
                      FAQ
                    </div>
                  </li>
                </Link>
                {user && user?.role === "Admin" && (
                  <Link to="/admin/dashboard">
                    <div className="flex items-center justify-center cursor-pointer w-full hover:text-blue-500 ">
                      <MdOutlineAdminPanelSettings size={25} />
                      <span className={`pl-1 400px:block hidden`}>
                        Admin Dashboard
                      </span>
                    </div>
                  </Link>
                )}
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
                        onClick={toggleDropdown}
                      />
                    </Link>
                  ) : (
                    <Link to="/login">
                      <CgProfile size={30} color="gray" />
                    </Link>
                  )}
                </div>
                {isOpen && (
                  <div className="text-black hover:text-red-500">
                    <button onClick={handleLogout}>Sign out</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* mobile header */}

        <div className="w-full h-[70px] bg-gray-100 z-50 top-0 left-0 shadow-lg 800px:hidden">
          <div className="w-full  flex items-center justify-between p-4">
            {isAuthenticated ? (
              <div className=" flex items-center justify-center">
                <Link to="/">
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

            <Link to="/">
              <img
                src="https://see.fontimg.com/api/renderfont4/ow59x/eyJyIjoiZnMiLCJoIjozMywidyI6MTAwMCwiZnMiOjMzLCJmZ2MiOiIjMUE1N0IwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TVdSU01T/airtravelerspersonaluse-bdit.png"
                alt=""
                className="h-[30px] w-[150px]"
              />
            </Link>
            <div>
              <BiMenuAltLeft
                color="blue"
                size={40}
                className="shadow-sm rounded-lg"
                onClick={() => setOpen(true)}
              />
            </div>
          </div>

          {/* mobile header sidebar */}
          {open && (
            <div
              className={`fixed w-full bg-[#0000005f] inset-0  z-20 h-full top-0 left-0`}
            >
              <div className="fixed max-400px:w-[70%] max-500px:w-[60%] max-640px:w-[60%] max-768px:w-[60%] bg-gradient-to-r from-blue-200 via-gray-150 to-blue-100 h-screen top-0 left-0 z-10 overflow-y-scroll">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 110 1440 170"
                >
                  <path
                    fill="#0099ff"
                    fill-opacity="1"
                    d="M0,224L6.2,224C12.3,224,25,224,37,229.3C49.2,235,62,245,74,240C86.2,235,98,213,111,186.7C123.1,160,135,128,148,112C160,96,172,96,185,85.3C196.9,75,209,53,222,64C233.8,75,246,117,258,133.3C270.8,149,283,139,295,160C307.7,181,320,235,332,256C344.6,277,357,267,369,224C381.5,181,394,107,406,90.7C418.5,75,431,117,443,144C455.4,171,468,181,480,186.7C492.3,192,505,192,517,192C529.2,192,542,192,554,170.7C566.2,149,578,107,591,112C603.1,117,615,171,628,170.7C640,171,652,117,665,128C676.9,139,689,213,702,218.7C713.8,224,726,160,738,138.7C750.8,117,763,139,775,160C787.7,181,800,203,812,213.3C824.6,224,837,224,849,234.7C861.5,245,874,267,886,272C898.5,277,911,267,923,234.7C935.4,203,948,149,960,133.3C972.3,117,985,139,997,149.3C1009.2,160,1022,160,1034,154.7C1046.2,149,1058,139,1071,138.7C1083.1,139,1095,149,1108,176C1120,203,1132,245,1145,250.7C1156.9,256,1169,224,1182,213.3C1193.8,203,1206,213,1218,186.7C1230.8,160,1243,96,1255,112C1267.7,128,1280,224,1292,229.3C1304.6,235,1317,149,1329,106.7C1341.5,64,1354,64,1366,74.7C1378.5,85,1391,107,1403,101.3C1415.4,96,1428,64,1434,48L1440,32L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"
                  ></path>
                </svg>
                <div className="w-full justify-end flex   ">
                  <RxCross1
                    size={30}
                    className=" pt-2 pb-2 text-black"
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
                      <span className="text-lg mx-2">
                        (02)-888888 / 09123456789 | OPEN 9am-10pm (Mon-Sun)
                      </span>
                      <span className="text-lg mx-2">9123456789</span>
                      <span className="text-lg mx-2">|</span>
                      <span className="text-lg mx-2">OPEN 9am-10pm</span>
                      <span className="text-lg mx-2">(Mon-Sun)</span>
                    </div>

                    <div className="absolute top-0  animate-marquee2 whitespace-nowrap">
                      <span className="text-lg mx-2">
                        (02)-888888 / 09123456789 | OPEN 9am-10pm (Mon-Sun)
                      </span>
                      <span className="text-lg mx-2">9123456789</span>
                      <span className="text-lg mx-2">|</span>
                      <span className="text-lg mx-2">OPEN 9am-10pm</span>
                      <span className="text-lg mx-2">(Mon-Sun)</span>
                    </div>
                  </div>
                  <hr />

                  <div className="">
                    <div className="flex w-full items-center justify-center h-[10%] mb-2  ">
                      {isAuthenticated ? (
                        <div className=" items-center justify-center pl-2">
                          <Link to="/">
                            <img
                              src={`${user.avatar?.url}`}
                              alt=""
                              className="w-[60px] h-[60px] rounded-full border-[3px] border-[#4357da]"
                            />
                          </Link>
                        </div>
                      ) : (
                        <>
                          <Link
                            to="/login"
                            className="text-[18px] pr-[10px] text-[#000000b7]"
                          >
                            LOGIN |
                          </Link>

                          <Link
                            to="/sign-up"
                            className="text-[18px] text-[#000000b7]"
                          >
                            SIGN UP
                          </Link>
                        </>
                      )}
                    </div>
                    {isAuthenticated ? (
                    <div className="w-full text-center">
                      <h4 className="text-[12px] text-gray-600 ml-2">
                        Role: {user && user?.role}
                      </h4>
                      <h3 className="text-[12px] text-gray-600 ml-2">
                        Name: {user && user.name}
                      </h3>
                    </div>
                  ) : (
                    <></>
                  )}
                  </div>

                  <ul className="py-3 bg-blue-500">
                  {isAuthenticated ? (
                    <li className=" ">
                    
                      <div className="text-white flex font-semibold mb-3 ml-3 ">
                        <RxHamburgerMenu size={24} className="mr-1" />{" "}
                        NAVIGATION{" "}
                        <Link to={"/webcontext"}>
                          <HiQuestionMarkCircle
                            size={22}
                            className="ml-5 text-white"
                          />
                        </Link>
                      </div>
                      <hr />

                      <div className=" items-center justify-center">
                        <ul className="pl-10 bg-white items-center justify-center ">
                          <Link to={"/"}>
                            <li className="py-2 cursor-pointer hover:p-2 justify-center  hover:text-blue-500 text-gray-500">
                              <div className="flex text-black justify-start font-bold">
                                <BiHomeAlt className="mr-2" size={21} />
                                Home
                              </div>
                            </li>
                          </Link>
                          <hr />

                          <Link to={"/about"}>
                            <li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500  text-gray-500">
                              <div className="flex text-black font-bold justify-start">
                                <IoAlbumsOutline className="mr-2" size={21} />{" "}
                                About us
                              </div>
                            </li>
                          </Link>
                          <hr />

                          <Link to={"/webproducts"}>
                            <li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500">
                              <div className="flex text-black font-bold justify-start">
                                <RiProductHuntLine className="mr-2" size={21} />
                                Products
                              </div>
                            </li>
                          </Link>
                          <hr />

                          <Link to={"/websupport"}>
                            <li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500">
                              <div className="flex text-black font-bold justify-start">
                                <IoCallOutline className="mr-2" size={21} />
                                Support
                              </div>
                            </li>
                          </Link>
                          <hr />

                          <Link to={"/webfaq"}>
                            <li className="py-2 cursor-pointer hover:p-2  hover:text-blue-500 text-gray-500">
                              <div className="flex text-black font-bold justify-start">
                                <BsQuestionCircle className="mr-2" size={21} />
                                Faq
                              </div>
                            </li>
                          </Link>
                        </ul>
                        <div className="text-white flex mt-4 pl-4">
                      <RiShutDownLine
                        className="mr-1 text-[red]"
                        size={24}
                        onClick={() => setShowConfirmation(true)}
                      />{" "}
                      Logout
                    </div>
                        
                    {showConfirmation && (
                      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
                        <div className="bg-white p-8 rounded">
                          <p className="text-black">
                            Are you sure you want to logout?
                          </p>
                          <div className="mt-4 flex justify-end">
                            <button
                              onClick={() => setShowConfirmation(false)}
                              className="mr-4 text-gray-600 hover:text-gray-800 cursor-pointer"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={logoutHandler}
                              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                            >
                              Logout
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                      </div>
                    </li>
                    ): (
                      <></>
                    )}

              
               
                  </ul>
                  
                </div>
                
                <br />
                <br />
                {isAuthenticated ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#0099ff"
                    fill-opacity="1"
                    d="M0,192L14.1,202.7C28.2,213,56,235,85,245.3C112.9,256,141,256,169,213.3C197.6,171,226,85,254,64C282.4,43,311,85,339,96C367.1,107,395,85,424,90.7C451.8,96,480,128,508,138.7C536.5,149,565,139,593,154.7C621.2,171,649,213,678,192C705.9,171,734,85,762,69.3C790.6,53,819,107,847,133.3C875.3,160,904,160,932,170.7C960,181,988,203,1016,192C1044.7,181,1073,139,1101,154.7C1129.4,171,1158,245,1186,250.7C1214.1,256,1242,192,1271,186.7C1298.8,181,1327,235,1355,256C1383.5,277,1412,267,1426,261.3L1440,256L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"
                  ></path>
                </svg>
                 ) : (
                  <></>
                )}
              </div>
            </div>
          )}
        </div>
        <Hero />
      </div>
    </>
  );
};

export default HomeWeb;

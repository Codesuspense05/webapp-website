import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { categoriesData} from "../../static/data";
import {
  AiFillCodepenSquare,
  AiFillContacts,
  AiFillHeart,
  AiOutlineContacts,
  AiOutlineSearch,
  
} from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { BiCart, BiCategory, BiHomeSmile, BiMessage, BiUser } from "react-icons/bi";
import { CgHeart, CgProfile} from "react-icons/cg";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineLocalOffer } from "react-icons/md";



const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  //const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);
  const [open, setOpen] = useState(false);
  

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      allProducts &&
      allProducts.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
    <div className="bg-blue-500 800px:w-[100%] h-1 max-400px:hidden" ></div>
    
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link to="/">
              <img
                src="https://see.fontimg.com/api/renderfont4/ow59x/eyJyIjoiZnMiLCJoIjozMywidyI6MTAwMCwiZnMiOjMzLCJmZ2MiOiIjMUE1N0IwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TVdSU01T/airtravelerspersonaluse-bdit.png"
                alt=""
              />
            </Link>
          </div>
          {/* search box */}
          <div className="w-[30%] relative ">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-blue-500 border-[2px] rounded-full shadow-xl"
            />
            <AiOutlineSearch
              size={30}
              className="absolute right-2 top-1.5 cursor-pointer text-blue-500"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute min-h-[30vh] w-full bg-slate-50 shadow-sm-2 z-[9] p-4  border-b-[5px] rounded-b-[20px] ">
                {searchData &&
                  searchData.map((i,index) => {
                    return (
                      <Link to={`/product/${i._id}`}>
                        <div className="w-full flex items-start-py-3">
                          <img
                            src={`${i.images[0]?.url}`}
                            alt=""
                            className="w-[40px] h-[40px] mr-[10px]"
                          />
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>

       
        </div>
      </div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-blue-500 h-[70px]`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          {/* categories */}
          <div onClick={() => setDropDown(!dropDown)}>
            <div className="relative h-[60px] mb-[10px] w-[270px]  1000px:block">
              <BiCategory size={30} className="absolute top-3 left-6 text-blue-700" />
              <button
                className={`h-[100%] w-[80px] flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] rounded-b-xl select-none  border shadow-xl p-5`}
              >
                
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-4 top-10 left-7 cursor-pointer text-blue-700"
                onClick={() => setDropDown(!dropDown)}
                title="Product & Category"
              />
              {dropDown ? (
                <DropDown className="bg-blue-500"
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                  
                />
              ) : null}
            </div>
          </div>

             {/* contact */}
             <div className="mr-10">
              <span className="text-[#fff] flex ml-4 mr-4 text-[15px]">
                <AiOutlineContacts className="mr-1 flex items-center text-xl " />
                <h1 className="text-[20px]">(02)-888888 / 09123456789 | OPEN 9am-10pm (Mon-Sun)</h1>
              </span>
            </div>


          {/* navitems */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenWishlist(true)}
              >
                <AiFillHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#e43840] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div
                className="relative cursor-pointer mr-[15px]"
                onClick={() => setOpenCart(true)}
              >
                <BiCart
                  size={35}
                  color="rgb(255 255 255 / 83%)"
                />
                <span className="absolute right-0 top-0 rounded-full bg-[#e43840] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>

            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img
                      src={`${user?.avatar?.url}`}
                      className="w-[30px] h-[30px] rounded-full"
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

            {/* cart popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist popup */}
            {openWishlist ? (
              <Wishlist setOpenWishlist={setOpenWishlist} />
            ) : null}
          </div>
        </div>
      </div>


      {/* mobile header */}
      <div className="bg-blue-700 800px:hidden  h-2 z-50 top-0 left-0"></div>
      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
        }
      w-full h-[60px] bg-white z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiCategory 
              size={40}
              className="ml-4 mt-2 text-blue-700"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <img
                src="https://see.fontimg.com/api/renderfont4/ow59x/eyJyIjoiZnMiLCJoIjozMywidyI6MTAwMCwiZnMiOjMzLCJmZ2MiOiIjMUE1N0IwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TVdSU01T/airtravelerspersonaluse-bdit.png"
                alt=""
                className="mt-3 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <div
              className="relative mr-[20px]"
              onClick={() => setOpenCart(true)}
            >
              <BiCart className="text-blue-500 mt-3"
              size={30} />
              <span class="absolute right-0 top-0 rounded-full bg-[#ec3a3a] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                {cart && cart.length}
              </span>
            </div>
          </div>
          {/* cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* wishlist popup */}
          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
        </div>

        {/* header sidebar */}
        {open && (
          
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            
            <div className="fixed w-[70%] bg-gray-100 h-screen top-0 left-0 z-10 overflow-y-scroll">
            <div className="bg-blue-500 w-full h-2"></div>
            <div className="w-full justify-end flex   ">
                
                <RxCross1
                  size={30}
                  className=" pt-2 text-blue-500"
                  onClick={() => setOpen(false)}
                />
              </div>


                {/* mobile search */}
                <div className="my-5 w-[92%] m-auto h-[40px] relative]">
                <input
                  type="search"
                  placeholder="Search Product..."
                  className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-full"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                
                {searchData && (
                  <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3" >
                    {searchData.map((i,index) => {
                      // const d = i.name;
                      
                      // const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link to={`/product/${i._id}`}>
                          <div className="flex items-center">
                            <img
                              src={i.images[0]?.url}
                              alt=""
                              className="w-[50px] mr-2"
                          
                            />
                            <h5 className="max-400px:text-[12px]">{i.name}</h5>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  
                )}
                
              </div>
              <hr />
              <div className="flex items-center justify-between m-2">
              <Link to="/"><BiHomeSmile size={30}/></Link>
              <Link to="/events"><MdOutlineLocalOffer size={30}/></Link>
                <div>
                  <div
                    className="relative mr-[15px]"
                    onClick={() => setOpenWishlist(true) || setOpen(false)}
                  >
                    <CgHeart  size={30} className="mt-3 ml-3 text-blue-500" />
                    <span class="absolute right-0 top-0 rounded-full bg-red-500 w-3.5 h-3.5 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                      {wishlist && wishlist.length}
                    </span>
                  </div>
                </div>
                <Link to="/inbox"><BiMessage color="black" size={30}/></Link>
                <Link to="/profile"><BiUser size={30} className="cursor-pointer"/></Link>
               </div>
             <hr />
             
              <div className="flex w-full justify-center h-[10%] mb-9 shadow-md  bg-gradient-to-r from-blue-400 via-gray-200 to-blue-400 ">
                {isAuthenticated ? (
                  <div className=" flex items-center justify-center">
                    <Link to="/profile">
                      <img
                        src={`${user.avatar?.url}`}
                        alt=""
                        className="w-[80px] h-[80px] rounded-full border-[3px] border-[#4357da]"
                      />
                    </Link>
                    
                  
                  <h4 className="text-sm text-gray-600 ml-2"> Name: {user.name}</h4>
                  </div>
                  
                  
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Login /
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

              
           
               <Navbar active={activeHeading} />
              
             
              <hr />
              <div className="flex items-center justify-center">
              <AiFillContacts size={30} className="text-blue-700 m-2 ml-0"/> (02) - 88888 | 09123456789
              </div>
              <hr />
              <div className="flex items-center justify-center">
              <AiFillCodepenSquare size={30} className="text-blue-700 m-2"/> OPEN 9am-10pm (Mon-Sun)
              </div>
              <hr />
                 <br />
                 <br />
             
               

              {/* <div className="flex items-center justify-center">
               <div className={`${styles.button} ml-4 !rounded-[4px]`}>
                <Link to="/shop-create">
                  <h1 className="text-[#fff] flex items-center">
                    Become Seller <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div> 
              </div> */}
             
              
              

              
            </div>
            
            
          </div>
          
          
        )}
        
        
      </div>
      
    </>
  );
};

export default Header;

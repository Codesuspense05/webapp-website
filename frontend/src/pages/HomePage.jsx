import React, { useState } from 'react'
import Header from "../components/Layout/Header";
// import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
import { MdHome} from 'react-icons/md';
import { CgShoppingCart} from 'react-icons/cg';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import {  BiMessageDots, BiUser} from 'react-icons/bi';
import { useSelector } from 'react-redux';
import Cart from '../components/cart/Cart';
import { Link } from 'react-router-dom';

// import Navigation from "./components/Navigation.jsx";


const HomePage = () => {
  const [openCart, setOpenCart] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <>
    <div className='mb-[3rem] mt-[4rem]  800px:hidden'>
      
        <Header activeHeading={1} />

         {/* <Hero /> */}

        <div className='bg-white'>
        <Categories /> 
        </div>
        <BestDeals /> 
        {/* <div className="fixed left-0 z-10  justify-center items-center ">
        <Navigation />
        </div> */}
        <Events />
        <FeaturedProduct/>
        <Sponsored />
        <Footer />
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 800px:hidden ">
      <div className="container mx-auto  ">
        <div className="flex  w-full">
          <div className="flex w-full ">
            <div className="flex grid-flow-col-5 justify-between w-full">
             <Link to={"/profile"}><BiUser size={25} className='m-4 rounded-t-lg rounded-b-none'/></Link>
             <Link to={"/inbox"}><BiMessageDots size={25} className='m-4'/></Link>
             <Link to={"/"}><MdHome size={35}  className='m-2 border rounded-full shadow text-blue-500 shadow-gray-500 ' onClick={refreshPage}/></Link>
             <Link to={"/user-orders"}><HiOutlineShoppingBag size={25} className='m-4'/></Link>
             <div>
            <div
              className="relative mr-[20px]"
              onClick={() => setOpenCart(true)}
            >
              <CgShoppingCart className=" m-1.5 mt-4"
              size={25} />
              <span className="absolute right-0 top-0 rounded-full bg-[#ec3a3a] w-4 h-4  text-white font-mono text-[12px]  leading-tight text-center">
                {cart && cart.length}
              </span>
            </div>
          </div>
          {/* cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            </div>
          
          </div>
          
        </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default HomePage
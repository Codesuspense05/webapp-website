import React from 'react'
import Header from "../components/Layout/Header";
// import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
// import Navigation from "./components/Navigation.jsx";


const HomePage = () => {
  
 
  return (
    <div className='scrollbar-hidden'>
        <Header activeHeading={1} />
         {/* <Hero /> */}

        <Categories /> 
        <BestDeals /> 
        {/* <div className="fixed left-0 z-10  justify-center items-center ">
        <Navigation />
        </div> */}
        <Events />
        <FeaturedProduct />
        <Sponsored />
        <Footer />
       
    </div>
  )
}

export default HomePage
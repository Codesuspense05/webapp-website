import React, { useEffect, useState } from 'react'
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
  
  const [shouldRefresh, setShouldRefresh] = useState(false);


  useEffect(() => {
    // Add a scroll event listener to the window
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const handleScroll = () => {
    // Check if the user has scrolled to the bottom (you can adjust the threshold as needed)
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollY + windowHeight >= documentHeight - 100) {
      // Set shouldRefresh to true to trigger a refresh
      setShouldRefresh(true);
    }
  };

  useEffect(() => {
    // Check if shouldRefresh is true, and if so, trigger your refresh logic
    if (shouldRefresh) {
      // Add your refresh logic here
      // For example, you can fetch new data from an API or update the component's state
      console.log('Refreshing...');
      
      // After refreshing, reset shouldRefresh to false
      setShouldRefresh(false);
    }
  }, [shouldRefresh]);
  return (
    <div className='max-400px:scrollbar-hidden'>
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
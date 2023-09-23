import React from "react";
import { Link } from "react-router-dom";
// import styles from "../../../styles/styles";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {  BsDropletHalf } from "react-icons/bs";
// ..
AOS.init();

const Hero = () => {
  

  return (
    <section className="dark:bg-blue-800 dark:text-gray-100 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-600 ">
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <BsDropletHalf size={30} className="animate-spin animate-duration-500"/>
        <h1  data-aos="fade-right" data-aos-delay='400'className="text-5xl font-bold leadi sm:text-6xl">Mineral
          <span data-aos="fade-right" data-aos-delay='400' className="dark:text-violet-400"> Water </span>Refilling Station
        </h1>
        <p data-aos="fade-right" data-aos-delay='400' className="mt-6 mb-8 text-lg sm:mb-12 ease-in duration-300">Dictum aliquam porta in condimentum ac integer
          <br data-aos="fade-right" data-aos-delay='400' className="hidden md:inline lg:hidden"/>turpis pulvinar, est scelerisque ligula sem
        </p>
        <div data-aos="fade-right" data-aos-delay='400' className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
        <Link to="/products">
          <div className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-blue-900 hover:bg-transparent border hover:border-[white] hover:text-white">Download App</div>
          </Link>
          <div className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 hover:dark:bg-violet-400 hover:text-blue-900">Learn more</div>
       
        </div> 
      </div>
      <div data-aos="fade-left" data-aos-delay='400' className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
      
        <img src="https://media.istockphoto.com/id/587812648/photo/man-drinking-water.jpg?s=612x612&w=0&k=20&c=liR0whavBItnZmL2aywupodplKHDB8m1_M-6DDbPCTs="  alt="" 
        
        className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 shadow-xl rounded-[30px] hover:opacity-70" />
      </div>
    </div>

    <div className="relative w-full h-full flex flex-col justify-center items-center bg-gray-50">

{/* <div className="pt-10 sm:pt-20 lg:pt-40 w-full flex flex-col lg:flex-row">
 
  <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-gray-600"> 

    <div className="p-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
      
      <h1 className="py-10 text-3xl sm:text-5xl font-light tracking-wide leading-tight">Effortless, <br/>fancy hero 12, <br/>made with love.</h1>
  
      <p className="text-lg font-semibold text-gray-400 tracking-wide">Four sizes, starting at $29</p>
     
     <div className="mt-10 flex flex-col sm:flex-row items-center">
        <button className="m-1.5 py-2.5 px-5 rounded-md bg-teal-300 text-white font-semibold uppercase hover:bg-teal-400">Start your journey</button>
        <button className="m-1.5 py-2.5 px-5 rounded-md border-2 border-gray-300 text-gray-400 font-semibold uppercase hover:text-teal-400 hover:border-teal-400">Take a test drive</button>
      </div> 
    </div>
  </div>
 
 <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden">
    <img src="https://fancytailwind.com/static/8b86283c874a1f43a78c79fe871525ff/d552e/illustration1.webp" alt="" className="w-2/3 lg:w-full" />
  </div> 
</div> */}

{/* :FEATURES */}
<div data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0" className="container mt-14 p-5 w-full grid grid-cols-12 sm:grid-cols-5 gap-2 text-xs md:text-sm">

  {/* ::Auto-Magic Layouts */}
  <div className="col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-blue-500 uppercase ">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
    <span className="text-center">Auto-Magic Layouts</span>
  </div>

  {/* ::Four Sizes */}
  <div className="col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
    <span className="text-center">Four Sizes</span>
  </div>

  {/* ::Quality Materials */}
  <div className="col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <span className="text-center">Quality Materials</span>
  </div>

  {/* ::Fast Shipping */}
  <div className="col-span-6 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
    </svg>
    <span className="text-center">Fast Shipping</span>
  </div>

  {/* ::Layflat Page */}
  <div className="col-span-6 sm:col-span-1 inline-flex flex-col items-center border-r-none border-gray-300 text-gray-400 uppercase">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
    <span className="text-center">24/7 Support</span>
  </div>

</div>

</div>
  </section>
  
  );
 
};

export default Hero;
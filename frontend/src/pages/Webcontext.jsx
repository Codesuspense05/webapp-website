import React from 'react'
import WebNavbar from './WebNavbar'
const WebContext = () => {

   
  return (
    <>
    <WebNavbar/>
      
      <section
        className="800px:grid 800px:grid-cols-2 grid grid-cols-1 bg-gray-100 800px:px-20 pb-10 h-[70vh] ease-in duration-300  800px:py-20" 
        data-aos="fade-down"
        data-aos-delay="400"
      >
     
       
        <div>
            <h1>What is Mineral Water Refilling Station</h1>
        </div>
        <div>
            <p>Water refilling stations are facilities that are managed by private companies and entrepreneurs, intended to offer a convenient and cheaper solution to the drinking water needs than single purchases of bottled water or use of household water filters.</p>
        </div>
      </section>
      
    </>
  )
}

export default WebContext

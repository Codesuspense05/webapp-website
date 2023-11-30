import React, { useEffect, useState } from 'react'
import { BiCalendar } from 'react-icons/bi';
import { BsClock } from 'react-icons/bs';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
    const {user} = useSelector((state) => state.user);
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
         <div className="w-full h-[80px] bg-white shadow sticky top-0 left-0 z-30 flex items-center justify-between px-4">
      <div>
        <Link to="/">
          <img
            src="https://see.fontimg.com/api/renderfont4/ow59x/eyJyIjoiZnMiLCJoIjozMywidyI6MTAwMCwiZnMiOjMzLCJmZ2MiOiIjMUE1N0IwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TVdSU01T/airtravelerspersonaluse-bdit.png"
            alt=""
          />
        </Link>
      </div>
      <div className="flex  items-center justify-end">
        <BsClock size={20} className="mr-1"/><p className="mr-2"> Time: {currentTime.toLocaleTimeString()}</p>
        
      <BiCalendar size={20}/><p>Date: {currentTime.toLocaleDateString()}</p>
        </div>
      <div className="flex items-center justify-center">
      
   
      <img
              src={`${user?.avatar?.url}`}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
            <div className=''>Hi, {user.name}</div>
      </div>
    </div>
  )
}

export default AdminHeader
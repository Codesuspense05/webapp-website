import React from 'react'
import { useSelector } from 'react-redux';
import styles from '../../styles/styles'
import EventCard from "./EventCard";

const Events = () => {
  const {allEvents,isLoading} = useSelector((state) => state.events);  
   
  return (
    <div>
     {
      !isLoading && (
        <div className="w-11/11 mx-2 ">
      <div className={`${styles.heading}`}>
        <h1 className='text-center text-blue-500 max-400px:text-[15px]'>Limited Special Promo's</h1>
      </div>

      <div className="w-full grid">
         {
          allEvents.length !== 0 && (
            <EventCard data={allEvents && allEvents[0]} />
          )
         }
         <h4 className='text-center'>{
           allEvents?.length === 0 && (
            "No available offer Promo's!"
           )
          }

         </h4>
      </div>
     
    </div>
      )
     }
  </div>
  )
}

export default Events
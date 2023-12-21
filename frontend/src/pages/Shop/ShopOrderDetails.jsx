import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import Footer from '../../components/Layout/Footer'
import OrderDetails from "../../components/Shop/OrderDetails";
import RiderHeader from '../../components/Shop/Layout/RiderHeader';

const ShopOrderDetails = () => {
  return (
    <div>
         <div className='max-400px:hidden'>
         <DashboardHeader />
         </div>
         <div className='800px:hidden'>
          <RiderHeader/>
         </div>
         <br />
         <br />
         <br />

         <OrderDetails />
          <Footer />
    </div>
  )
}

export default ShopOrderDetails
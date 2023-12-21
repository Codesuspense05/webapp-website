import React from 'react'
import CheckoutSteps from '../components/Checkout/CheckoutSteps'
import Footer from '../components/Layout/Footer'
import Payment from "../components/Payment/Payment";
import DashboardHeader from '../components/Shop/Layout/DashboardHeader';

const PaymentPage = () => {
  return (
    <div className='w-full min-h-screen bg-white !overflow-scroll h-[90vh]'>
      <DashboardHeader/>
   

       <CheckoutSteps active={2} />
       <br />
       <hr />
       <Payment />
       <br />
       <br />
       <div className='800px:hidden'><Footer /></div>
       
    </div>
  )
}

export default PaymentPage
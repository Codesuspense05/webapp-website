import React from 'react'
import CheckoutSteps from '../components/Checkout/CheckoutSteps'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import Payment from "../components/Payment/Payment";

const PaymentPage = () => {
  return (
    <div className='w-full min-h-screen bg-white'>
      <div className='w-full bg-blue-500 h-10 max-400px:hidden'></div>
      <div className='800px:hidden'><Header /></div> 
       <br />
       <br />
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
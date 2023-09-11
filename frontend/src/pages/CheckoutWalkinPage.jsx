import React from 'react'
import Header from '../components/Layout/Header'
import CheckoutSteps from "../components/Checkout/CheckoutSteps";
import CheckoutWalkinPage from "../components/Checkout/CheckoutWalkin";
// import Footer from '../components/Layout/Footer';

const CheckoutPage = () => {
  return (
    <div>
        <Header />
        <br />
        <br />
        <CheckoutSteps active={1} />
        <CheckoutWalkinPage />
        <br />
        <br />
      {/* <Footer/> */}
    </div>
  )
}

export default CheckoutPage
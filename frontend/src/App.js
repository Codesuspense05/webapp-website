import React, { useEffect, useState} from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  //  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  CheckoutPage,
  OrderSuccessPage,
  ProductDetailsPage,
  ProfilePage,
  AllUserOrders,
  // ShopCreatePage,
  SellerActivationPage,
  // ShopLoginPage,
  ShoploginPrivate,
  OrderDetailsPage,
  TrackOrderPage,
  UserInbox,
  WalkinProductPage,
  UserRefundOrder,
  UserTrackOrder,
  UserchangePassword,
  UserAddress,
  HomeWeb,
  WebAbout,
  WebProducts,
  WebSupport,
  WebFaq,
  RiderActivationPage,
  Barcode,
  // HomePage,
  LineChartPage,
  PaymentPage,
} from "./routes/Routes.js";
import {
  ShopDashboardPage,
  ShopCreateProduct,
  ShopAllProducts,
  ShopCreateEvents,
  ShopAllEvents,
  ShopAllCoupouns,
  ShopPreviewPage,
  ShopAllOrders,
  ShopOrderDetails,
  ShopAllRefunds,
  ShopSettingsPage,
  ShopCreate,
  ShopWithDrawMoneyPage,
  ShopInboxPage,
  ShopCreateOrder,
  RiderCreate,
  RiderDashboardPage,
} from "./routes/ShopRoutes";
import {
  AdminDashboardPage,
  AdminDashboardUsers,
  AdminDashboardSellers,
  AdminDashboardOrders,
  AdminDashboardProducts,
  AdminDashboardEvents,
  AdminDashboardWithdraw,
} from "./routes/AdminRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { loadSeller, loadUser, loadRider } from "./redux/actions/user";
import ProtectedRoute from "./routes/ProtectedRoute";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";
import { ShopHomePage } from "./ShopRoutes.js";
import SellerProtectedRoute from "./routes/SellerProtectedRoute";
import { getAllProducts } from "./redux/actions/product";
import { getAllEvents } from "./redux/actions/event";
import RiderLoginPrivate from "./pages/RiderLoginPrivate";
import ForgotPassword from "./components/user/ForgotPassword";
import ResetPassword from "./components/user/ResetPassword";
import WebContext from "./pages/Webcontext";
import PullToRefresh from "./pages/refresh";
import TestStocks from "./pages/test";
import RiderProtectedRoute from "./routes/RiderProtectroute";
import Googlechart from "./pages/googlechart";
import LineChart from "./pages/linechart";
import LogoutButton from "./components/Layout/showmessage.jsx";
import Popup from "./pages/Popup.jsx";
import axios from "axios";
import { server } from "./server.js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";






const App = () => {
 
  const [stripeApikey, setStripeApiKey] = useState("");

  async function getStripeApikey() {
    const { data } = await axios.get(`${server}/payment/stripeapikey`);
    setStripeApiKey(data.stripeApikey);
  }
  useEffect(() => {
    Store.dispatch(loadUser());
    Store.dispatch(loadRider());
    Store.dispatch(loadSeller());
    Store.dispatch(getAllProducts());
    Store.dispatch(getAllEvents());
    getStripeApikey();
  }, []);

  return (
    <BrowserRouter>
       {stripeApikey && (
        <Elements stripe={loadStripe(stripeApikey)}>
          <Routes>
            <Route
              path="/payment"
              element={
                <ProtectedRoute>
                  <PaymentPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Elements>
      )}

      <Routes>
        {/* For Website */}

        <Route path="/about" element={<WebAbout />} />
        <Route path="/webproducts" element={<WebProducts />} />
        <Route path="/websupport" element={<WebSupport />} />
        <Route path="/webfaq" element={<WebFaq />} />
        <Route path="/webcontext" element={<WebContext />} />

        <Route path="/barcode" element={<Barcode />} />
        <Route path="/show" element={<LogoutButton />} />
       
        {/* <Route path="/website" element={<HomePage />} /> */}
        <Route path="/" element={<HomeWeb />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/sign-up" element={<SignupPage />} />

          {/* users activation */}
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
        {/* seller activation */}
        <Route
          path="/seller/activation/:activation_token"
          element={<SellerActivationPage />}
        />
        {/* rideractivation */}

      <Route
          path="/rider/activation/:activation_token"
          element={<RiderActivationPage />}
        /> 

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />

     
      <Route path="/line" element={<LineChartPage/>} />
      <Route path="/refresh" element={<PullToRefresh/>} />
      <Route path="/test" element={<TestStocks/>} />

      <Route path="/googlecharts" element={<Googlechart/>} />
      <Route path="/linechart" element={<LineChart/>} />
      <Route path="/pop" element={<Popup/>} />
   

      

        <Route path="/order/success" element={<OrderSuccessPage />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-orders"
          element={
            <ProtectedRoute>
              <AllUserOrders />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-refundOrders"
          element={
            <ProtectedRoute>
              <UserRefundOrder />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-trackorders"
          element={
            <ProtectedRoute>
              <UserTrackOrder />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-changepassword"
          element={
            <ProtectedRoute>
              <UserchangePassword />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user-address"
          element={
            <ProtectedRoute>
              <UserAddress />
            </ProtectedRoute>
          }
        />
        <Route
          path="/inbox"
          element={
            <ProtectedRoute>
              <UserInbox />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/order/:id"
          element={
            <ProtectedRoute>
              <OrderDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user/track/order/:id"
          element={
            <ProtectedRoute>
              <TrackOrderPage />
            </ProtectedRoute>
          }
        />
        <Route path="/shop/preview/:id" element={<ShopPreviewPage />} />
        {/* shop Routes */}
        {/* <Route path="/shop-login" element={<ShopLoginPage />} />  */}

        <Route
          path="/rider-create"
          element={
            <SellerProtectedRoute>
              <RiderCreate />{" "}
              </SellerProtectedRoute>
            
          }
        />
        <Route
          path="/shop-create"
          element={
            <ProtectedAdminRoute>
              <ShopCreate />{" "}
            </ProtectedAdminRoute>
          }
        />
        <Route path="/shop-private" element={<ShoploginPrivate />} />

        <Route path="/rider-private" element={

        <RiderLoginPrivate />
        
        } />


        <Route
          path="/shop/:id"
          element={
            <SellerProtectedRoute>
              <ShopHomePage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <SellerProtectedRoute>
              <ShopSettingsPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <SellerProtectedRoute>
              <ShopDashboardPage />
            </SellerProtectedRoute>
          }
        />

        <Route
          path="/deliveryrider"
          element={
            <RiderProtectedRoute>
              <RiderDashboardPage />
            </RiderProtectedRoute>
          }
        />

        <Route
          path="/dashboard-create-product"
          element={
            <SellerProtectedRoute>
              <ShopCreateProduct />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-walkin-order-product"
          element={
            <SellerProtectedRoute>
              <WalkinProductPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-create-orders"
          element={
            <SellerProtectedRoute>
              <ShopCreateOrder />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-orders"
          element={
            <SellerProtectedRoute>
              <ShopAllOrders />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-refunds"
          element={
            <SellerProtectedRoute>
              <ShopAllRefunds />
            </SellerProtectedRoute>
          }
        />

        <Route
          path="/order/:id"
          element={
            <SellerProtectedRoute>
              <ShopOrderDetails />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-products"
          element={
            <SellerProtectedRoute>
              <ShopAllProducts />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-create-event"
          element={
            <SellerProtectedRoute>
              <ShopCreateEvents />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-events"
          element={
            <SellerProtectedRoute>
              <ShopAllEvents />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-coupouns"
          element={
            <SellerProtectedRoute>
              <ShopAllCoupouns />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-withdraw-money"
          element={
            <SellerProtectedRoute>
              <ShopWithDrawMoneyPage />
            </SellerProtectedRoute>
          }
        />
        <Route
          path="/dashboard-messages"
          element={
            <SellerProtectedRoute>
              <ShopInboxPage />
            </SellerProtectedRoute>
          }
        />
        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardPage />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-users"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardUsers />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-sellers"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardSellers />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-orders"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardOrders />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-products"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardProducts />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-events"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardEvents />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-withdraw-request"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardWithdraw />
            </ProtectedAdminRoute>
          }
        />
      </Routes>
      <ToastContainer
position="top-center"
autoClose={1000}
limit={1}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss={false}
draggable={false}
pauseOnHover={false}
theme="colored"




/>
    </BrowserRouter>
  );
};

export default App;

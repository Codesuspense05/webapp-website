import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { server } from "../../server";
import axios from "axios";
import { toast } from "react-toastify";
import { IoBagCheckOutline, IoListOutline } from "react-icons/io5";
import { MdPayments, MdSecurityUpdateGood} from "react-icons/md";
import {  GrStatusInfo } from "react-icons/gr";
import Loader from "../Layout/Loader";


const OrderDetails = () => {
  const { orders, isLoading } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfShop(seller._id));
  }, [dispatch,seller._id]);

  const data = orders && orders.find((item) => item._id === id);

  const orderUpdateHandler = async (e) => {
    await axios
      .put(
        `${server}/order/update-order-status/${id}`,
        {
          status,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Order updated!");
        navigate("/dashboard-orders");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const riderorderUpdateHandler = async (e) => {
    await axios
      .put(
        `${server}/order/update-order-status/${id}`,
        {
          status,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Order updated!");
        navigate("/deliveryrider");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const refundOrderUpdateHandler = async (e) => {
    await axios
    .put(
      `${server}/order/order-refund-success/${id}`,
      {
        status,
      },
      { withCredentials: true }
    )
    .then((res) => {
      toast.success("Order updated!");
      dispatch(getAllOrdersOfShop(seller._id));
    })
    .catch((error) => {
      toast.error(error.response.data.message);
    });
  }

  console.log(data?.status);

  const isButtonDisabled = status === '';
  
  return (
    <>
     {
      isLoading ? (
        <Loader />
      ) : (
    
    <div className={`py-4 min-h-screen ${styles.section}`}>
      <div className="w-full flex items-center justify-around max-400px:hidden">
        <div className="flex items-center ">
          <IoBagCheckOutline size={30} color="blue" />
          <h1 className="pl-2 text-[25px]">Order Details</h1>
        </div>
        <Link to="/dashboard-orders">
          <div
            className={`${styles.button} 800px:!bg-blue-500 !rounded-full text-white font-[600] !h-[45px] text-[18px] max-400px:w-[50px] max-400px:bg-transparent`}
          >
            <IoListOutline className="mr-1 max-400px:text-[30px] max-400px:text-blue-500"/><h1 className="max-400px:hidden ">Order List</h1>
          </div>
        </Link>
      </div>

      <div className="w-full flex items-center justify-around 800px:hidden">
        <div className="flex items-center ">
          <IoBagCheckOutline size={30} color="blue" />
          <h1 className="pl-2 text-[25px]">Order Details</h1>
        </div>
        <Link to="/deliveryrider">
          <div
            className={`${styles.button} 800px:!bg-blue-500 !rounded-full text-white font-[600] !h-[45px] text-[18px] max-400px:w-[50px] max-400px:bg-transparent`}
          >
            <IoListOutline className="mr-1 max-400px:text-[30px] max-400px:text-blue-500"/><h1 className="max-400px:hidden ">Order List</h1>
          </div>
        </Link>
      </div>

      <div className="w-full flex items-center justify-around pt-6">
        <h5 className="text-[red]">
          Order ID: <span>#{data?._id?.slice(0, 8)}</span>
        </h5>|
        <h5 className="text-[black]">
          Ordered on: <span>{data?.createdAt?.slice(0, 10)}</span>
        </h5>
      </div>
      <hr />

      {/* order items */}
      <br />
      <br />
      {data &&
        data?.cart.map((item, index) => (
          <div className="w-full flex items-start mb-5">
            <img
              src={`${item.images[0]?.url}`}
              alt=""
              className="w-[80x] h-[80px]"
            />
            <div className="w-full">
              <h5 className="pl-3 text-[20px]">{item.name}</h5>
              <h5 className="pl-3 text-[20px] text-[#00000091]">
               P{item.discountPrice} x {item.qty}
              </h5>
            </div>
          </div>
        ))}

      <div className="border-t w-full text-right">
        <h5 className="pt-3 text-[18px]">
          Total Price: <strong>₱{data?.totalPrice}</strong>
        </h5>
      </div>
      <br />
      <br />
      <hr />
      <div className="w-full 800px:flex items-center border p-5 bg-white">
        <div className="w-full 800px:w-[60%]">
        <div className="w-full 800px:w-[60%]">
        <h4 className="pt-3 text-[20px] font-bold">Customer Info:</h4>
        <div className="flex "><h1 className="max-400px:text-[15px] mr-1 pt-2 text-[18px] font-semibold">Customer Name: </h1><h4 className="max-400px:text-[15px]  text-[18px] pt-2"> {data?.user?.name}</h4></div>
          <div className="flex "><h1 className="text-[18px] mr-1 max-400px:text-[15px] font-semibold">Conctact Number : </h1><h4 className="max-400px:text-[15px] text-[18px]"># {data?.user?.phoneNumber}</h4></div>
          <div className="flex "><h1 className="text-[18px] mr-1 max-400px:text-[15px] font-semibold">Nick Name : </h1><h4 className="max-400px:text-[15px] text-[18px]">{data?.shippingAddress.penname}</h4></div>
          

        </div>
        <br />
        <hr />
          <h4 className="pt-3 text-[20px] font-[600]">Delivery Address:</h4>
          <h4 className="pt-3 text-[17px] max-400px:text-[15px]">
            {data?.shippingAddress.address +
              " " +
              data?.shippingAddress.landmark}
          </h4>
          {/* <h4 className=" text-[17px] max-400px:text-[15px]">{data?.shippingAddress.country}</h4>
          <h4 className=" text-[17px] max-400px:text-[15px]">{data?.shippingAddress.city}</h4> */}
         
        </div>
        <hr />
        <br />
        <div className="w-full 800px:w-full flex  justify-end  text-[20px] max-400px:text-[17px]">
          <h4 className="flex">
            <MdPayments size={20} color="blue" className="mr-1"/>Payment Status:{" "}
            {data?.paymentInfo?.status ? data?.paymentInfo?.status : "❌Not Paid"}
          </h4>
        </div>
      </div>
      <br />
      
      <hr />
      <div className="flex items-center justify-end">
      <h4 className="flex pt-3 text-[19px] max-400px:w-[70%] max-400px:text-[18px]  font-[600] 800px:mr-2"><GrStatusInfo size={15} className=""/>Order Status:</h4>
      {data?.status !== "Processing refund" && data?.status !== "Refund Success" && (
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-[150px] mt-2 border h-[35px] rounded-[5px] max-400px:w-[250px]"
          
        >
          {[
            "Processing",
            // "Transferred to delivery partner",
            // "Shipping",
            // "Received",
            "On the way",
            "Delivered",
          ]
            .slice(
              [
                "Processing",
            // "Transferred to delivery partner",
            // "Shipping",
            // "Received",
            "On the way",
            "Delivered",
              ].indexOf(data?.status)
            )
            .map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
        </select>
      )}
      
      {
        data?.status === "Processing refund" || data?.status === "Refund Success" ? (
          <select value={status} 
       onChange={(e) => setStatus(e.target.value)}
       className="w-[200px] mt-2 border h-[35px] rounded-[5px]"
      >
        {[
            "Processing refund",
            "Refund Success",
          ]
            .slice(
              [
                "Processing refund",
                "Refund Success",
              ].indexOf(data?.status)
            )
            .map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
      </select>
        ) : null
      }
    
      <button disabled={isButtonDisabled}><div
        className={`${styles.button} mt-5  !rounded-[10px] text-white font-[600] !h-[45px] text-[18px] ml-2  max-400px:w-full bg-blue-500 hover:bg-blue-600 max-400px:hidden`}
        onClick={data?.status !== "Processing refund" ? orderUpdateHandler : refundOrderUpdateHandler}
        
        
      >
        <MdSecurityUpdateGood className="max-400px:text-[30px]"/><h1 className="max-400px:hidden">Update Status</h1>
      </div>
      </button>

      <button disabled={isButtonDisabled}><div
        className={`${styles.button} mt-5  !rounded-[10px] text-white font-[600] !h-[45px] text-[18px] ml-2  max-400px:w-full bg-blue-500 hover:bg-blue-600 800px:hidden`}
        onClick={data?.status !== "Processing refund" ? riderorderUpdateHandler : refundOrderUpdateHandler}
        
        
      >
        <MdSecurityUpdateGood className="max-400px:text-[30px]"/><h1 className="max-400px:hidden">Update Status</h1>
      </div>
      </button>
    </div>
    
    </div>
  )
}

    </>
  )};
  
export default OrderDetails;

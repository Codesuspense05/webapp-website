import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../../redux/actions/cart";
import { toast } from "react-toastify";
import { AiOutlineArrowRight } from "react-icons/ai";
import { IoIosCart} from "react-icons/io";

const EventCard = ({ active, data }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = (data) => {
    const isItemExists = cart && cart.find((i) => i._id === data._id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart successfully!");
      }
    }
  }
  return (
    <div
      className={`w-full block bg-white rounded-lg ${
        active ? "unset" : "mb-12"
      } lg:flex p-2 `}
    >
      {/* <div className="flex"><IoMdRibbon color="red" size={40}/></div> */}
      <div className="w-full lg:-w[50%] max-400px:w-full max-400px:flex  max-400px:items-center max-400px:justify-center m-auto">
      <CountDown data={data} />
        <img src={`${data.images[0]?.url}`} alt="" className="max-400px:h-[110px] max-400px:w-[130px]" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center  ">
        <h2 className={`${styles.productTitle} max-400px:text-[15px]`}>{data.name}</h2>
        <hr />
        <p className="max-400px:hidden">{data.description}</p>
          {/* color type */}
       <div className=" flex items-center justify-start">
          <h5 className={"text-[15px] max-400px:text-[13px] text-gray-500 pt-0 pb-0.5 text-shadow flex"}><h4 className="text-blue-500 flex pr-2">Colortype:</h4> {data.color}</h5>
          </div>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-red-500 pr-3 line-through">
            ₱{data.originalPrice}
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
            P{data.discountPrice}
            </h5>
          
          </div>
          <span className="pr-3 font-[400] text-[17px] text-blue-500">
            {data.sold_out} sold
          </span>
        </div>
        <hr />
        
        <br />
        <div className="flex items-center justify-center">
          <Link to={`/product/${data._id}?isEvent=true`}>
            <div className="text-[#000]  w-[150px] bg-transparent h-[50px] my-3 flex items-center justify-center border-blue-500 border-[2px] rounded-xl cursor-pointer">
              <AiOutlineArrowRight size={20} className="pr-1 text-blue-500" /><h1 className="text-blue-500">See Details</h1></div>
          </Link>
          <div className={`${styles.button} text-[#fff] ml-6`} onClick={() => addToCartHandler(data)}><IoIosCart  size={20} className="pr-1" /> Add to cart</div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

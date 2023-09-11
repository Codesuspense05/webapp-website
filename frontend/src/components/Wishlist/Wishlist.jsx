import React, { useState } from "react";
import { RxArrowRight, RxCross1 } from "react-icons/rx";
import { BsCartPlus } from "react-icons/bs";
import styles from "../../styles/styles";
import { AiFillHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../../redux/actions/wishlist";
import { addTocart } from "../../redux/actions/cart";
import { IoSad } from "react-icons/io5";

const Wishlist = ({ setOpenWishlist }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const removeFromWishlistHandler = (data) => {
    dispatch(removeFromWishlist(data));
  };

  const addToCartHandler = (data) => {
    const newData = {...data, qty:1};
    dispatch(addTocart(newData));
    setOpenWishlist(false);
  }

  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 h-full w-[80%] overflow-y-scroll 800px:w-[25%] bg-white flex flex-col justify-between shadow-sm">
        {wishlist && wishlist.length === 0 ? (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="flex w-full justify-end pt-5 pr-5 fixed top-3 right-3">
              <RxCross1
                size={25}
                className="cursor-pointer"
                onClick={() => setOpenWishlist(false)}
              />
            </div>
            <h5>Wishlist Items is empty!</h5><IoSad size={20} className="text-gray-500 ml-1"/>
          </div>
        ) : (
          <>
            <div>
              <div className="flex w-full justify-start pt-5 pl-5 shadow-lg ">
                <RxArrowRight
                  size={25}
                  className="cursor-pointer text-blue-600 max-400px:mb-4 800px:mb-4"
                  onClick={() => setOpenWishlist(false)}
                />
                <div className={`${styles.noramlFlex}items-center justify-center text-[15px]`}><h1 className="text-[17px] pl-2">Wished List</h1></div>
               
              
              </div>
              {/* Item length */}
              <div className={`${styles.noramlFlex} pt-4 flex items-center justify-center`}>
                <AiFillHeart size={30} className="text-red-500 flex items-center justify-center text-center" />
                <h5 className="pl-2 text-[20px] font-[500] flex items-center justify-center text-center">
                  ({wishlist && wishlist.length}) Items
                </h5>
              </div>

              {/* cart Single Items */}
              <br />
              <div className="w-full border-t">
                {wishlist &&
                  wishlist.map((i, index) => (
                    <CartSingle key={index} data={i} removeFromWishlistHandler={removeFromWishlistHandler} addToCartHandler={addToCartHandler} />
                  ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const CartSingle = ({ data,removeFromWishlistHandler,addToCartHandler }) => {
  const [value] = useState(1);
  const totalPrice = data.discountPrice * value;

  return (
    <div className="border-b p-4">
       {/* color type */}
       <div className=" flex items-center justify-start">
                    <h5 className={"text-[15px] max-400px:text-[12px] text-gray-500 pt-0 pb-0.5 text-shadow flex"}><h4 className="text-orange-500 flex pr-2">Colortype:</h4> {data.color}</h5>
                  </div>
      <div className="w-full 800px:flex items-center">
        <RxCross1 className="cursor-pointer 800px:mb-['unset'] 800px:ml-['unset'] mb-2  max-400px:ml-[250px]"
        onClick={() => removeFromWishlistHandler(data)}
        />
        <img
          src={`${data?.images[0]?.url}`}
          alt=""
          className="w-[130px] max-400px:w-[70px] max-400px:h-[70px] h-min ml-2 mr-2 rounded-full bg-gray-50"
        />

        <div className="pl-[5px]">
          <h1 className="max-400px:text-[13px]">{data.name}</h1>
          <h4 className="font-[600] pt-3 800px:pt-[3px] text-[17px] text-[#000] font-Roboto">
            P{totalPrice}
          </h4>
        </div>
        <div>
          <BsCartPlus size={20} className="cursor-pointer max-400px:ml-[250px] 800px:ml-[50px] text-blue-600" tile="Add to cart"
           onClick={() => addToCartHandler(data)}
          />
        </div>
      </div>
    </div>
  );
};

export default Wishlist;

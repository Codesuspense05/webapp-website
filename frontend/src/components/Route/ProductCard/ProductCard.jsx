import React, { useState } from "react";
import {
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
// import {
//   addToWishlist,
//   removeFromWishlist,
// } from "../../../redux/actions/wishlist";
import { useEffect } from "react";
import { addTocart } from "../../../redux/actions/cart";
import { toast } from "react-toastify";
import Ratings from "../../Products/Ratings";
 import { HiLocationMarker } from "react-icons/hi";

const ProductCard = ({ data,isEvent }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [, setClick] = useState(false);
  const [open, setOpen] = useState(false);
// const { seller } = useSelector((state) => state.seller);
  // const [avatar] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true)

    } else {
      setClick(false);
    }
  }, [wishlist, data._id]);

  // const removeFromWishlistHandler = (data) => {
  //   setClick(!click);
  //   dispatch(removeFromWishlist(data));
  // };

  // const addToWishlistHandler = (data) => {
  //   setClick(!click);
  //   dispatch(addToWishlist(data));
  // };

  const addToCartHandler = (id) => {
    const isItemExists = cart && cart.find((i) => i._id === id);
    if (isItemExists) {
      toast.error("Item already in cart!");
    } else {
      if (data.stock < 1) {
        toast.error("Product stock limited!");
      } else {
        const cartData = { ...data, qty: 1 };
        dispatch(addTocart(cartData));
        toast.success("Item added to cart🛒");
      }
    }
  };


  return (
    <>
      <div className="w-full h-[360px] max-400px:h-[175px]  max-500px:h-[175px] max-640px:h-[175px] max-768px:h-[175px] bg-white rounded-lg shadow-xl p-2 relative cursor-pointer">
    <div className="flex">
        <Link to={`/shop/preview/${data?.shop._id}`}>
      <img
              src={`${data?.shop.avatar?.url}`}
              alt=""
              className=" flex w-[35px] h-[35px] max-400px:w-[20px]  max-400px:h-[20px] max-500px:w-[20px] max-500px:h-[20px] max-640px:w-[20px] max-640px:h-[20px]  rounded-full cursor-pointer mr-1"
            />
        </Link> 
        <HiLocationMarker size={12} color="red"/><h5 className={`${styles.shop_name} text-[15px] max-400px:text-[8px] max-500px:text-[9px] max-640px:text-[9px] max-768px:text-[9px] pt-0`}>{data?.shop.address}</h5>
        </div> 
          
        <div className="flex justify-end"></div>
        <Link to={`${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`}>
          <img
            src={`${data.images && data.images[0]?.url}`}
            alt=""
            className="w-full 800px:h-[160px] max-400px:h-[70px] max-500px:h-[70px] max-640px:h-[70px] max-768px:h-[70px] object-contain 800px:transform 800px:transition-all 800px:hover:scale-110 max-400px:transform max-400px:transition-all max-400px:hover:scale-110 cursor-pointer"
          />
        </Link>
        
        {/* color type */}
       <div className=" flex items-center justify-center">
          <h5 className={"text-[15px] max-400px:text-[10px] max-500px:text-[10px] max-640px:text-[10px] max-768px:text-[10px] text-gray-500 pt-0 pb-0.5 text-shadow flex"}><h4 className="text-orange-500 flex pr-2">Colortype:</h4> {data.color}</h5>
          </div>
          <hr />

      
        
        <Link to={`${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`}>
          <h4 className="font-[500] 800px:text-[20px] max-400px:text-[9px] max-500px:text-[9px] max-640px:text-[9px] max-768px:text-[9px]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>

          <div className="flex 800px:items-end 800px:justify-end 800px:text-[20px] 800px:hidden  ">
          <Ratings  rating={data?.ratings} />
          </div>

          <div className=" flex items-center justify-end">
            <div className="flex">
              <h5 className={`${styles.productDiscountPrice} max-400px:text-sm 800px:text-[25px] mr-2`}>
              ₱{data.originalPrice === 0
                  ? data.originalPrice
                  : data.discountPrice}
                
              </h5>
              <span className="font-[400] text-[17px] text-[#6878d2] max-400px:hidden max-500px:hidden max-640px:hidden max-768px:hidden">
             | {data?.stock} stock
            </span>

              <h4 className={`${styles.price}  max-400px:hidden max-500px:hidden max-640px:hidden max-768px:hidden  800px:hidden`}>
                {data.originalPrice ? data.originalPrice + "₱" : null}
              </h4>
            </div>
         
          </div>
        </Link>

        {/* side options */}
        <div>
        
          <AiOutlineEye
           
            className="cursor-pointer absolute right-2 800px:top-28 max-400px:top-14 max-500px:top-14 max-640px:top-14 max-768px:top-14 800px:text-[30px]"
            onClick={() => setOpen(!open)}
            color="blue"
            title="Quick view"
          />
          <AiOutlineShoppingCart
            
            className="cursor-pointer absolute right-2 800px:top-40 max-400px:top-20 max-500px:top-20 max-640px:top-20 max-768px:top-20 800px:text-[30px]"
            onClick={() => addToCartHandler(data._id)}
            color="green"
            title="Add to cart"
          />
          {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
      
      </div>
      
    </>
  );
};

export default ProductCard;

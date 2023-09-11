import React, { useState } from "react";
import {
  AiFillHeart,
  AiOutlineEye,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailsCard from "../ProductDetailsCard/ProductDetailsCard";
import {
  addToWishlist,
  removeFromWishlist,
} from "../../../redux/actions/wishlist";
import { useEffect } from "react";
import { addTocart } from "../../../redux/actions/cart";
import { toast } from "react-toastify";
import Ratings from "../../Products/Ratings";

const ProductCard = ({ data,isEvent }) => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i._id === data._id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [wishlist, data._id]);

  const removeFromWishlistHandler = (data) => {
    setClick(!click);
    dispatch(removeFromWishlist(data));
  };

  const addToWishlistHandler = (data) => {
    setClick(!click);
    dispatch(addToWishlist(data));
  };

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
        toast.success("Item added to cart successfully!");
      }
    }
  };

  return (
    <>
      <div className="w-full h-[360px] max-400px:h-[175px]  bg-white rounded-lg shadow-xl p-2 relative cursor-pointer">
      <Link to={`/shop/preview/${data?.shop._id}`}>
          <h5 className={`${styles.shop_name} text-[15px] max-400px:text-[10px] pt-0`}>{data.shop.name}</h5>
        </Link>
          
        <div className="flex justify-end"></div>
        <Link to={`${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`}>
          <img
            src={`${data.images && data.images[0]?.url}`}
            alt=""
            className="w-full 800px:h-[170px] max-400px:h-[60px]   object-contain 800px:transform 800px:transition-all 800px:hover:scale-110 max-400px:transform max-400px:transition-all max-400px:hover:scale-110 cursor-pointer"
          />
        </Link>
        
        {/* color type */}
       <div className=" flex items-center justify-center">
          <h5 className={"text-[15px] max-400px:text-[10px] text-gray-500 pt-0 pb-0.5 text-shadow flex"}><h4 className="text-orange-500 flex pr-2">Colortype:</h4> {data.color}</h5>
          </div>

      
        
        <Link to={`${isEvent === true ? `/product/${data._id}?isEvent=true` : `/product/${data._id}`}`}>
          <h4 className="font-[500] 800px:text-[20px] max-400px:text-[9px]">
            {data.name.length > 40 ? data.name.slice(0, 40) + "..." : data.name}
          </h4>

          <div className="flex 800px:items-end 800px:justify-end 800px:text-[20px]  ">
          <Ratings  rating={data?.ratings} />
          </div>

          <div className=" flex items-center justify-end">
            <div className="flex">
              <h5 className={`${styles.productDiscountPrice} max-400px:text-sm 800px:text-[25px]`}>
              P{data.originalPrice === 0
                  ? data.originalPrice
                  : data.discountPrice}
                
              </h5>
              <h4 className={`${styles.price}  max-400px:hidden`}>
                {data.originalPrice ? data.originalPrice + "₱" : null}
              </h4>
            </div>
            <span className="font-[400] text-[17px] text-[#6878d2] max-400px:hidden">
              {data?.sold_out} stock
            </span>
          </div>
        </Link>

        {/* side options */}
        <div>
          {click ? (
            <AiFillHeart
             
              className="cursor-pointer absolute right-2 top-4 800px:text-[30px]"
              onClick={() => removeFromWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
             
              className="cursor-pointer absolute right-2 top-4 800px:text-[30px]"
              onClick={() => addToWishlistHandler(data)}
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}
          <AiOutlineEye
           
            className="cursor-pointer absolute right-2 top-14 max-400px:top-10 800px:text-[30px]"
            onClick={() => setOpen(!open)}
            color="#333"
            title="Quick view"
          />
          <AiOutlineShoppingCart
            
            className="cursor-pointer absolute right-2 top-24 max-400px:top-16 800px:text-[30px]"
            onClick={() => addToCartHandler(data._id)}
            color="#444"
            title="Add to cart"
          />
          {open ? <ProductDetailsCard setOpen={setOpen} data={data} /> : null}
        </div>
      
      </div>
      
    </>
  );
};

export default ProductCard;

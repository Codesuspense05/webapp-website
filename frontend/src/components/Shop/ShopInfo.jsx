import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { server } from "../../server";
// import styles from "../../styles/styles";
import Loader from "../Layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product";
import { AiFillEdit } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";

const ShopInfo = ({ isOwner }) => {
  const [data,setData] = useState({});
  const {products} = useSelector((state) => state.products);
  const [isLoading,setIsLoading] = useState(false);
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsShop(id));
    setIsLoading(true);
    axios.get(`${server}/shop/get-shop-info/${id}`).then((res) => {
     setData(res.data.shop);
     setIsLoading(false);
    }).catch((error) => {
      console.log(error);
      setIsLoading(false);
    })
  }, [dispatch,id])
  

  const logoutHandler = async () => {
    axios.get(`${server}/shop/logout`,{
      withCredentials: true,
    });
    window.location.reload();
  };

  const totalReviewsLength =
    products &&
    products.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings = products && products.reduce((acc,product) => acc + product.reviews.reduce((sum,review) => sum + review.rating, 0),0);

  const averageRating = totalRatings / totalReviewsLength || 0;

  return (
   <>
   {
    isLoading  ? (
      <Loader />
    ) : (
      <div>
      <div className="w-full py-5">
        <div className="w-full flex item-center justify-center">
          <img
            src={`${data.avatar?.url}`}
            alt=""
            className="w-[150px] h-[150px] object-cover rounded-full"
          />
        </div>
        <h3 className="text-center py-2 text-[20px]">{data.name}</h3>
        <hr />
        <p className="text-[16px] text-[#000000a6] p-[10px] flex items-center">
          {data.description}
        </p>
      </div>
      <div className="p-3">
        <h5 className="font-[600]">Address</h5>
        <h4 className="text-[#000000a6]">{data.address}</h4>
      </div>
      <div className="p-3">
        <h5 className="font-[600]">Phone Number</h5>
        <h4 className="text-[#000000a6]">{data.phoneNumber}</h4>
      </div>
      <div className="p-3">
        <h5 className="font-[600]">Total Post Products</h5>
        <h4 className="text-[#000000a6]">{products && products.length}</h4>
      </div>
      <div className="p-3">
        <h5 className="font-[600]">Shop Ratings</h5>
        <h4 className="text-[#000000b0]">{averageRating}/5</h4>
      </div>
      <div className="p-3">
        <h5 className="font-[600]">Account was Created On</h5>
        <h4 className="text-[#000000b0]">Date : {data?.createdAt?.slice(0, 10)}</h4>
      </div>
      {isOwner && (
        <div className="mt-[100px] py-3 px-4">
           <Link to="/settings">
           <div className={"w-full flex items-center justify-center border border-blue-700 !h-[42px] !rounded-[5px] hover:bg-blue-500 "}>
            <span className="text-blue-500 hover:text-white"> <div className="flex"><AiFillEdit size={20} />Edit Shop</div> </span>
          </div>
           </Link>
           <br />
          <div className={"w-full flex items-center justify-center border border-gray-500  !h-[42px] !rounded-[5px] hover:bg-gray-500"}
          onClick={logoutHandler}
          >
            <span className="text-gray-500 hover:text-white "><div className="flex"><BiLogOut size={20} />Log Out</div></span>
          </div>
        </div>
      )}
    </div>
    )
   }
   </>
  );
};

export default ShopInfo;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import { AiFillCaretDown } from "react-icons/ai";

const BestDeals = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  useEffect(() => {
    const allProductsData = allProducts ? [...allProducts] : [];
    const sortedData = allProductsData?.sort((a,b) => b.sold_out - a.sold_out); 
    const firstFive = sortedData && sortedData.slice(0, 5);
    setData(firstFive);
  }, [allProducts]);
  

  return (
    <div className="">
      <div className={`${styles.section} max-400px:hidden max-500px:hidden max-640px:hidden max-768px:hidden `}>
      <div className={`${styles.heading} flex item-center justify-center`}>
                
                <h1 className='text-blue-600 text-[30px] font-Poppins max-400px:text-[15px]'>Available Product</h1>
                <AiFillCaretDown  size={20} className=' text-blue-500'/>
            </div>
        <div className=" grid grid-cols-2 gap-[5px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
           {
            data && data.length !== 0 &&(
              <>
               {data && data.map((i, index) => <ProductCard data={i} key={index} />)}
              </>
            )
           }
        </div>
      </div>
    </div>
  );
};

export default BestDeals;

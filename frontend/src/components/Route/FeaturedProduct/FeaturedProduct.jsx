import React from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";


const FeaturedProduct = () => {
  const {allProducts} = useSelector((state) => state.products);
   
  return (
    <div >
      <div className={`${styles.section}`}>
      <div className={`${styles.heading} flex item-center justify-center`}>
                
                <h1 className='text-blue-600 text-[30px] bg-gray-200 shadow-lg w-full  font-Poppins max-400px:text-[16px] max-500px:text-[16px] max-640px:text-[16px] max-768px:text-[16px]'>Available Products 💧</h1>
                
            </div>
        <div className="grid grid-cols-2 gap-[5px] md:grid-cols-2 md:gap-[25px]  lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
        {
            allProducts && allProducts.length !== 0 &&(
              <>
               {allProducts && allProducts.map((i, index) => <ProductCard data={i} key={index} />)}
              </>
            )
           }
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;

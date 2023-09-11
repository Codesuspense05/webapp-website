import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";
import { AiFillCarryOut } from "react-icons/ai";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[90vh] 800px:min-h-[100vh] w-full bg-no-repeat bg-[100%] max-400px:bg-[10%] max-400px:hidden ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://okcredit-blog-images-prod.storage.googleapis.com/2022/01/mineralwater2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[75%] mb-20 `}>
      <h1
          className={`text-[35px] leading-[1.2] 800px:text-[50px] text-[#3d3a3a] font-[600] capitalize max-400px:text-[30px] max-400px:pt-[50px]`}
        >
         The Best Purified Water  <br /> for Our Mineral Station
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba] max-400px:text-[15px] max-400px:text-justify 800px:w-[50%] 800px:text-justify">
        "Welcome to our oasis of hydration, where each drop tells a tale of purity.
        At MWRS we're committed to quenching your thirst with the essence of untouched minerals.
         Our purification process ensures that every sip revitalizes your body and soul.
         Join us on a journey to embrace nature's finest elixir one refill at a time."
          
        </p>
        <Link to="/products" className="inline-block ">
            <div className={`${styles.button} mt-10 bg-blue-700 hover:bg-blue-900 max-400px:w-[120px] max-400px:h-11  `}>
              <AiFillCarryOut 
              className='text-[white]'/>
                 <span className="text-[#fff] font-[Poppins] text-[18px] shadow-xl max-400px:text-[15px] ">
                    Order Now
                 </span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

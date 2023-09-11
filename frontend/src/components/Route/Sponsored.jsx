import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div className={`w-full block bg-white rounded-lg  lg:flex p-2 pl-[10%] pr-[10%] max-400px:hidden`}>
    <div className="w-full lg:[w-50%] flex flex-col justify-center">
    <h1 className={`${styles.productTitle} text-blue-900 text-[20px] text-center max-400px:text-[20px] max-400px:pt-2 max-400px:pb-2  `}>Mineral Water Refilling Station</h1>
    <p className="text-justify max-400px:text-[14px]">
      Purified Water Refilling Station offers you safe, clean and affordable drinking water with Purification and Filtration System. 
  In our water station we STRICTLY OBSERVED proper sanitation procedures for your safety.
  30 pesos only / 5gallon,
  Free DELIVERY,
  Free Use of Bottle,
  Open Monday-Saturday 8am - 6pm,
  For inquiries:
☎️  091-234-56789
    </p>
  
  </div>

  <div className="w-full lg:-w[50%] lg:-h[20%] m-auto justify-between ml-8">
   
    <img
      src="https://static.vecteezy.com/system/resources/previews/007/884/777/non_2x/water-delivery-service-worker-carry-bottle-vector.jpg"
      alt=""
      className=" w-[60%] h-[20%] ml-10"
    />
  </div>
  
  

</div>
  );
};

export default Sponsored;

import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AiOutlinePicCenter } from "react-icons/ai";
const Categories = () => {
  const navigate = useNavigate();
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
     <div className={`w-full block bg-white rounded-lg  lg:flex p-2 pl-[10%] pr-[10%] max-400px:mb-[10px] max-400px:hidden`}>
        <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h1 className={`${styles.productTitle} text-blue-900 800px:text-[20px] max-400px:text-[20px] text-center `}>Our Services & Offer Promo's</h1>
    <p className="text-justify  max-400px:text-[12px]">
    Mineral Drinking Water, Certified Cristal clear and Purified Water with Value Deals, Just Buy products &
    Order more with Free Delivery & up to 5% off!   
    </p>
  
  </div>

  <div className="w-full lg:-w[50%] lg:-h[20%] m-auto justify-between ml-8">
   
    <img
      src="https://whitewaternow.com/wp-content/uploads/2020/04/water-delivery-precautions-coronavirus.jpg"
      alt=""
      className=" w-[70%] h-[30%] ml-10"
    />
  </div>
  
  


</div>
      <div className={`${styles.section} hidden sm:block`}>
        <div
          className={`branding  my-12 flex justify-between w-full shadow-sm bg-white p-5 rounded-md`}
        >
          {brandingData &&
            brandingData.map((i, index) => (
              <div className="flex items-start" key={index}>
                {i.icon}
                <div className="px-3">
                  <h3 className="font-bold text-sm md:text-base">{i.title}</h3>
                  <p className="text-xs md:text-sm">{i.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div
        className={`${styles.section}  bg-transparent p-3 rounded-lg 800px:mb-12`}
        id="categories"
      >
 <div className="flex"><AiOutlinePicCenter size={25} color="blue"/><h4 className="text-gray-500">Categories</h4></div>
        <Carousel 
   
  showDots={true}
  responsive={responsive}
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style">
        {categoriesData &&
            categoriesData.map((i) => {
              const handleSubmit = (i) => {
                navigate(`/products?category=${i.title}`);
              };
              return (
                
                <div
                  className=" w-full  max-400px:flex gap-[10px] md:grid-cols-2 md:gap-[5px] lg:grid-cols-4 lg:gap-[20px] xl:grid-cols-5 xl:gap-[30px] items-center  cursor-pointer overflow-hidden"
                  key={i.id}
                  onClick={() => handleSubmit(i)}
                >
                  <h5 className={`text-[18px] leading-[1.3] `}>{i.title}</h5>
                  <img
                    src={i.image_Url}
                    className="h-[100px] w-[100px] object-cover shadow-sm"
                    
                    alt=""
                  />
                </div>
              );
            })}
  
</Carousel>
<hr />
      </div>
      
      
    </>
  );
};

export default Categories;

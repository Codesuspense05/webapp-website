import React from "react";
import { useNavigate } from "react-router-dom";
import { brandingData, categoriesData } from "../../../static/data";
import styles from "../../../styles/styles";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


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

  const settings = {
    arrows: null,
    nextArrow: null,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed (in milliseconds)
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite loop
    speed: 500, // Transition speed (in milliseconds)
    slidesToShow: 3, // Number of items to show at once
    slidesToScroll: 1, // Number of items to scroll on each autoplay
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>



<div className="w-full h-50 800px:hidden ">
<Slider {...settings} className="max-400px:h-40  max-500px:h-60 max-640px:h-60 max-768px:h-60">
  
          {/* Add your product items here */}
          <div>
            <img src="https://cdn.vectorstock.com/i/preview-1x/50/64/man-works-as-water-delivery-holding-large-vector-45755064.webp" alt="Product 1" 
             className="w-full"
            />
            {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
          </div>
          <div>
            <img src="https://cdn.vectorstock.com/i/preview-1x/16/30/happy-man-recommend-bottled-water-service-vector-45051630.webp" alt="Product 1" 
             className="w-full"
            />
            {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
          </div>
          <div>
            <img src="https://cdn.vectorstock.com/i/preview-1x/64/17/water-delivery-truck-male-bottle-vector-48056417.webp" alt="Product 1" 
             className="w-full h-[230px]"
            />
            {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
          </div>
          <div>
            <img src="https://cdn.vectorstock.com/i/preview-1x/08/75/man-holding-two-paper-cups-with-hot-or-cold-drink-vector-34500875.webp" alt="Product 1" 
             className="w-full h-[230px]"
            />
            {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
          </div>
          {/* Add more product items as needed */}
        </Slider>


</div>
<hr />


      
        <br />
        <hr />
      <div className={`${styles.section} 800px:hidden`} >
      <div
          className={`branding  flex justify-between max-400px:w-full shadow-xl relative bg-white p-2 rounded-md `}
        >
      {brandingData &&
            brandingData.map((i, index) => (
              <div className="flex items-center justify-between" key={index}>
              
              <div className="border rounded-full p-2 shadow-md">{i.icon}</div> 
              </div>
            ))}

            </div>
        <div
          className={`branding  flex justify-between w-full shadow-sm bg-white p-4 rounded-md`}
        >
          {brandingData &&
            brandingData.map((i, index) => (
              <div className="flex items-start" key={index}>
              
                <div className="px-2">
                  <h3 className=" max-400px:text-[9px] max-500px:text-[10px] max-640px:text-[11px] max-768px:text-[12px] md:text-base">{i.title}</h3>
                  {/* <p className="text-xs md:text-sm max-400px:text-[8px]">{i.Description}</p> */}
                </div>
              </div>
            ))}
        </div>
      </div>

     <div data-aos="fade-up"
     data-aos-anchor-placement="top-center" className={`w-full block bg-white rounded-lg  lg:flex p-2 pl-[10%] pr-[10%] max-400px:mb-[10px] max-768px:hidden max-500px:hidden max-400px:hidden`}>
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
 <div className="flex"><h4 className="text-blue-500">✨ Categories</h4></div>
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
                  className=" w-full  max-400px:flex max-500px:flex max-640px:flex gap-[10px] md:grid-cols-3 md:gap-[30px] lg:grid-cols-4 lg:gap-[30px] xl:grid-cols-5 xl:gap-[30px] items-center  cursor-pointer overflow-hidden"
                  key={i.id}
                  onClick={() => handleSubmit(i)}
                >
                  <h5 className={`text-[15px] leading-[1.3] `}>{i.title}</h5>
                  <img
                    src={i.image_Url}
                    className="h-[25vh] w-[25vh] max-400px:h-[80px] max-400px:w-[80px] max-500px:h-[100px] max-500px:w-[100px] max-640px:h-[100px] max-640px:w-[100px] max-768px:h-[100px] max-768px:w-[100px]object-cover"
                    
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

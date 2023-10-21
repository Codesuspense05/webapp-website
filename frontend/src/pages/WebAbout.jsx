import React from "react";
import WebNavbar from "./WebNavbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Webfooter from "./Webfooter";
const WebAbout = () => {
  const settings = {
    arrows: null,
    nextArrow: null,
    autoplay: true,
    autoplaySpeed: 3000, // Adjust the speed (in milliseconds)
    dots: true, // Show navigation dots
    infinite: true, // Enable infinite loop
    speed: 500, // Transition speed (in milliseconds)
    slidesToShow: 1, // Number of items to show at once
    slidesToScroll: 1, // Number of items to scroll on each autoplay
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <WebNavbar />

      <div className="bg-cover  bg-blue-500 bg-gradient-to-r from-blue-500 to-blue-900 ">
        <img
          src="https://static.vecteezy.com/system/resources/previews/014/552/947/non_2x/man-worker-in-workwear-and-with-a-protective-mask-on-his-face-working-in-a-drink-water-factory-checking-blue-water-gallons-before-shipment-free-photo.jpg"
          alt=""
          className="h-[50vh] w-full bg-blue-500 opacity-50 hover:opacity-40 "
        />
      </div>
      
    

      <div
        className="absolute top-60 left-0 right-0 w-full justify-center  text-center px-20 ease-in duration-300"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <p className=" text-center text-blue-900 text-[50px] font-semibold">
          MINERAL WATER REFILLING STATION
        </p>
        <p className=" text-center text-blue-700 text-[40px] font-semibold">
          ABOUT US
        </p>
      </div>

      <br />

      <section
        className="800px:grid 800px:grid-cols-2 grid grid-cols-1 bg-gray-100 800px:px-20 pb-10 h-[70vh] ease-in duration-300  "
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className="  shadow-lg grid grid-cols-1 max-400px:px-5">
          <p className="800px:px-20 text-justify  400px:px-5 390px:px-5 text-black text-[20px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ex
            sint incidunt sed reiciendis saepe dolore recusandae. Mollitia
            blanditiis debitis, deserunt amet repellat recusandae unde assumenda
            animi. Assumenda, maiores. Et. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptas ex sint incidunt sed
            reiciendis saepe dolore recusandae. Mollitia blanditiis debitis,
            deserunt amet repellat recusandae unde assumenda animi. Assumenda,
            maiores. Et. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptas ex sint incidunt sed reiciendis saepe dolore
            recusandae. Mollitia blanditiis debitis, deserunt amet repellat
            recusandae unde assumenda animi.
            <img
              src="https://img.freepik.com/free-vector/mineral-water-bottle-ad-banner-flask-with-drink_107791-2565.jpg?size=626&ext=jpg&ga=GA1.1.1737282160.1690642300&semt=ais"
              alt=""
              className="h-50 w-full"
            />
          </p>
        </div>
        <div className="bg-white 800px:px-20 800px:py-20 800px:rounded-br-[20px] shadow-md max-400px:px-5 ">
          <Slider {...settings} className="bg-white text-center">
            {/* Add your product items here */}
            <div className="text-[20px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                vero repellat veniam non eum accusamus dolorum deleniti
                recusandae aliquid distinctio ullam ipsum, neque iure iusto
                rerum quo eligendi et error.
              </p>
              {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
            </div>
            <div className="text-[20px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                vero repellat veniam non eum accusamus dolorum deleniti
                recusandae aliquid distinctio ullam ipsum, neque iure iusto
                rerum quo eligendi et error.
              </p>
              {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
            </div>
            <div className="text-[20px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                vero repellat veniam non eum accusamus dolorum deleniti
                recusandae aliquid distinctio ullam ipsum, neque iure iusto
                rerum quo eligendi et error.
              </p>
              {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
            </div>
            <div className="text-[20px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                vero repellat veniam non eum accusamus dolorum deleniti
                recusandae aliquid distinctio ullam ipsum, neque iure iusto
                rerum quo eligendi et error.
              </p>
              {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
            </div>
            {/* Add more product items as needed */}
            <div className="text-[20px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                vero repellat veniam non eum accusamus dolorum deleniti
                recusandae aliquid distinctio ullam ipsum, neque iure iusto
                rerum quo eligendi et error.
              </p>
              {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
            </div>
            {/* Add more product items as needed */}
            <div className="text-[20px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                vero repellat veniam non eum accusamus dolorum deleniti
                recusandae aliquid distinctio ullam ipsum, neque iure iusto
                rerum quo eligendi et error.
              </p>
              {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
            </div>
            {/* Add more product items as needed */}

            <div className="text-[20px]">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                vero repellat veniam non eum accusamus dolorum deleniti
                recusandae aliquid distinctio ullam ipsum, neque iure iusto
                rerum quo eligendi et error.
              </p>
              {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
            </div>
            {/* Add more product items as needed */}
          </Slider>
          <br />
          <div className="grid grid-cols-2 w-full gap-[10px]">
            <div className=" w-50 h-10 ">
              <img
                src="https://img.freepik.com/free-photo/front-view-water-recipients-ice-cube-copy-space_23-2148728782.jpg?size=626&ext=jpg&ga=GA1.1.1737282160.1690642300&semt=ais"
                alt=""
              />
              <div className="card-details border shadow-md p-5 rounded-b-[20px]">
                <h3 className="font-bold">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </h3>
                <hr />
                <p className=" mb-2 text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <div className="flex items-center justify-end rounded-md">
                  <button className=" flex justify-end shadow-sm hover:text-blue-500">
                    Read more...
                  </button>
                </div>
              </div>
            </div>
            <div className=" w-50 h-10  ">
              <img
                src="https://img.freepik.com/free-photo/front-view-water-recipients-ice-cube-copy-space_23-2148728782.jpg?size=626&ext=jpg&ga=GA1.1.1737282160.1690642300&semt=ais"
                alt=""
              />
              <div className="card-details border shadow-md p-5 rounded-b-[20px]">
                <h3 className="font-bold">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </h3>
                <hr />
                <p className=" mb-2 text-gray-500">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <div className="flex items-center justify-end rounded-md">
                  <button className=" flex justify-end shadow-sm hover:text-blue-500">
                    Read more...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Webfooter />
      </div>
    </>
  );
};

export default WebAbout;

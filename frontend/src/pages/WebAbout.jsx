import React, { useState } from "react";
import styles from "../styles/styles";
import WebNavbar from "./WebNavbar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Webfooter from "./Webfooter";
import { BiArrowFromBottom, BiCaretRight } from "react-icons/bi";
import { BsArrowDown, BsCaretDownSquare } from "react-icons/bs";
import { CgArrowTopLeftR, CgArrowsScrollV } from "react-icons/cg";
import { IoHandRight } from "react-icons/io5";
const WebAbout = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
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

  const photos = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjf9CPeypFNR14Wj2g6UMiWN9mPDSatagt_V5HmuwzfSBAqnnUax1IBWqpYqMl99rPVg&usqp=CAU",
    "https://filipiknow.net/wp-content/uploads/2018/07/water-refilling-station-business-in-the-philippines.jpg?ezimgfmt=rs:372x279/rscb47",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTovxnNVWQgLIdggMOuF_0vraEqkx_nEdqruQCxdl1HxB8VdBsstVFyZ1frX9WdWFuimzY&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2BVgZyzBVaFDuEnU8jgSmvIa7yu_e14Let_BzW-S-meE3fEorYZab9yqLqC4doePgJFw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UD0mN7RBbBfXK2scT-RahtR3BCvtOlmsVqepPJP-YTcIWR7MRYv5TPhfhIQIt07FpX0&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UD0mN7RBbBfXK2scT-RahtR3BCvtOlmsVqepPJP-YTcIWR7MRYv5TPhfhIQIt07FpX0&usqp=CAU",
    // Add more photo URLs as needed
  ];
  return (
    <>
      <WebNavbar />

      <div className="relative bg-gradient-to-r from-blue-900  to-transparent bg-cover bg-center  flex items-center justify-center">
        <img
          src="https://ofwnewsbeat.com/wp-content/uploads/2018/02/GQ-West-Launches-Aquabest-and-Laundrybest-SM-Sea-Residences-7.jpg"
          alt=""
          className="h-[80vh] w-full "
        />

        <h1 className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-800">
          <p className="absolute grid grid-cols-2 inset-0  items-center justify-end z-10 px-10 text-white text-[18px] text-justify">
            <BsArrowDown className=" opacity-10" />
            <p>
              <h1>ABOUT MINERAL WATER STAION</h1>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
              corrupti repellat, fugiat ex accusantium modi officiis odio
              molestiae voluptates alias tempore ratione possimus molestias
              deleniti aspernatur sint rerum blanditiis ut?
            </p>
          </p>
        </h1>

        <h1 className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-800">
          <p className="absolute grid grid-cols-2 inset-0  items-center justify-end z-10 px-10 text-white text-[18px] text-justify"></p>
        </h1>
      </div>
      <h1 className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-800">
        <p className="absolute grid grid-cols-2 inset-0  items-center justify-end z-10 px-10 text-white text-[18px] text-justify"></p>
      </h1>

      <div
        className=" top-60 left-0 right-0 w-full justify-center  text-center px-20 ease-in duration-300 bg-white "
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <img
          src="https://media3.giphy.com/media/MagjwsUK2vunGimNXT/giphy.gif"
          alt=""
          className="absolute top-5 left-20 h-20 w-20 rounded-b-[20px] "
        />
        <h1 className="text-[30px] font-bold">WHY CHOOSE MINERAL WATER?</h1>
        <h3 className=" font-semibold">What makes us different?</h3>
        <br />

        <img
          src="https://media3.giphy.com/media/MagjwsUK2vunGimNXT/giphy.gif"
          alt=""
          className="absolute top-5 right-20 h-20 w-20 rounded-b-[20px] "
        />
      </div>

      <section
        className="800px:grid 800px:grid-cols-2 grid grid-cols-1 bg-blue-800 800px:px-20 pb-10 h-[60vh] ease-in duration-300  "
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className="  shadow-white shadow-sm grid grid-cols-1 max-400px:px-5 px-5">
          <h1 className="px-5 font-bold py-5 text-[20px] text-white">
            BACKGROUND
          </h1>
          <p className=" text-justify text-white  400px:px-5 390px:px-5  text-[20px] px-10">
            SYSTEM TECHNOLOGY is continuously providing excellent products and
            services for the betterment of water product quality. Its name was
            derived from which pertains to water and which is meant to express
            love for water treatment and the people who NEED it in their daily
            lives. Being a quality water technology expert, We are an industry
            leader of high quality, state-of-the-art Reverse Osmosis components
            & filtration equipment for water treatment/purification. Our
            reputation has been established by providing high quality products,
            honest and good after sales personal service, competitive pricing
            and on-going research and development.
          </p>
        </div>
        <div
          className="bg-white  800px:py-5  shadow-white shadow-sm  max-400px:px-5 ease-in duration-300"
          data-aos="fade-down"
          data-aos-delay="400"
        >
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

          <div className="w-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4cgY8ZiQ723hydOWcZsA5iAWMq3w1xjZ-MA&usqp=CAU"
              alt=""
              className="h-[310px] w-full"
            />
          </div>
        </div>
      </section>
      <br />
      <div className="bg-white w-full h-[60vh]  py-5 px-20 grid grid-cols-2 gap-2">
        <h1
          className=" ease-in duration-300 px-10 py-5"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <p className="text-justify text-[16px]">
            Welcome to WaterDelivery.ph – your one-stop-shop for water delivery
            services in the Philippines! We understand that water is not just a
            commodity, but an absolute necessity. And as such, we are committed
            to providing you with only the highest quality water, delivered
            straight to your doorstep! We offer a range of water products, from
            mineral water to purified drinking water, all refilled under strict
            quality control standards. Our suppliers products meet the industry
            standards for potability, taste, and quality, ensuring that you stay
            healthy and hydrated.
          </p>
          <br />
          <p className="text-justify text-[16px]">
            So why choose WaterDelivery.ph? Because we value your health, your
            time, and your convenience. Because we believe that access to clean,
            quality water should be easy and affordable. Because we know that
            when it comes to your hydration needs, you deserve only the best.
            Order now and experience the difference!
          </p>
        </h1>

        <div
          className="grid grid-cols-2 max-400px:overflow-x-visible items-center justify-center"
          data-aos="fade-down"
          data-aos-delay="400"
        >
          {photos.map((photo, index) => (
            <div key={index} className="flex-none w-64 p-2">
              <img
                src={photo}
                alt={` ${index + 1}`}
                className="w-full h-[120px] rounded shadow-lg shadow-gray-500 transition-transform hover:scale-110 ease-in duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <section
        className="800px:grid 800px:grid-cols-1 grid grid-cols-1 bg-gray-100  w-full h-[70vh] ease-in duration-300"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div
          class="relative bg-gradient-to-r from-blue-800 to-transparent bg-cover bg-center  flex items-center justify-center "
          style={{
            backgroundImage:
              "url(https://home.drinkflowater.com/cdn/shop/articles/The-Importance-of-Water-Filtration_1024x.jpg?v=1596714019)",
          }}
        >
          <p class="absolute inset-0 bg-gradient-to-r from-transparent to-blue-800"></p>

          <p class="absolute inset-0 bg-gradient-to-r from-transparent to-blue-800"></p>
          <p
            class="absolute grid grid-cols-2 inset-0  items-center justify-end z-10 px-10 text-white text-[18px] text-justify ease-in duration-500"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <img
              src="https://media0.giphy.com/media/RN2DRs6Ogl4v5c1nlP/giphy.gif"
              alt=""
            />
            <p>
              {" "}
              MORE THAN JUST FOR DRINKING Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eveniet tempore non nemo animi harum nihil
              nesciunt ipsum. Hic expedita laudantium veniam tenetur, delectus
              atque, aliquam libero animi incidunt inventore nisi. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Enim eligendi,
              debitis optio porro maiores similique odio veniam nulla nisi
              asperiores. Repellendus dolore numquam, natus tempora cum officia
              porro inventore mollitia.
            </p>
          </p>
        </div>
      </section>
      <section className="grid grid-cols-2 w-full h-[60vh] bg-white px-10 py-10">
        <div className="">
          <img
            src="https://t3.ftcdn.net/jpg/03/93/65/50/360_F_393655042_ViRG2btjAahLuyWarsUI6W3AiOtIpPWB.jpg"
            alt=""
          />
        </div>
        <div className="">
          <h1 className="font-bold text-[20px]">Why WaterDelivery?</h1>
          <p>
            Order water from anywhere in NCR Philippines with the WaterDelivery
            app! If we’re not in your area yet, let us know and we’ll do our
            best to get there.
          </p>
          <br />
          <div className="grid grid-cols-2 gap-4">
            <div className="flex p-4 bg-white">
              {/* First div content */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/5579/5579459.png"
                alt=""
                className="w-1/2 h-[100px] mr-4"
              />
              <div>
                <p className="text-[0.9rem]">
                  Hassle free We provide mobile based water delivery search for
                  your office and home.
                </p>
                {/* Add any additional text content here */}
              </div>
            </div>

            <div className="flex p-4 bg-white">
              {/* First div content */}
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA51BMVEX///8AAAALzvvQ2NqTmZoImrsL1P/V3uBlaWqZn6Chp6n4+PiDiYonKSoJsdcInL1GSkoHgp0LyPQL1/+kpKScnJwL0/9CQkIEUWLY2NgGbYRUVFQBGB2urq4BIim4uLjt7e0DMDoEWWwQEBDj7/EADRGcrbIGaH9YW1yNjo8JpMg7Oztxdn9kanUcHx8mJiZ5eXnk5OTIyMjR0dFycnIKveZG1/wzMzNueXs5Sk8ERlYGd5EYGBhZXmcM3f8BHSMHjKoDLTcESVgDPEmyxMiKmp4AERpSZmt2fIZHS1M5PUM8UFVTbnVCO5aKAAAOqUlEQVR4nO2dfUPiOhbGhZGKU0QtWEVEKgwrLzPK63KvsqPo3r2zd/f7f54Fek6atEmaBIrg9vkP7Wnya5KT9+TgIFWqpOWNhp1xvl2ttvPjQn00+Oj4bFZ2vfCYCamZr30WSrteDdOhHi8+AWRlLMLzVa1/dAzXU6Ut51uqt8eMngLfUrPRR8fUUBdqfEvlvY+OrIEGvSjI+1Xj/v6+8fQS/df+ZdV6iODuues4WddayM1mneLrVeiB/kfHWFN9JvZPuWxpwUXJXbB2Gy36oZN9qjlsxsVcT0J4qJLzOqcfrHx0vJVlX1LRfp5YXDw/KbO5G+rZ4UfHXFH2lMqfMj6f8ZlC3JNq4yyIcS6Gb5VXJ3eqGdXjaztYgYIyeMcmoGuVXMeZONmS5bIF856YNCXR7T82uZpNL6vlLbqpDoltg4awSpPX+/f5y03r5faucV60aHjrlRj1hC8Wtt/h23Ts7QAOAxdKpZM7eW6FYtToZoMHrC75u7BelAMuVd4Go9fE4J6DRHK74ep9pXkuYKQQRa2beMLMdAt5lRTCewJoTbh8K8Zu8NQp+asgJRQIt1DfkLbaVZABz2UxunIwGYOymOe/e6aEWEuYEMO5dRDQeZPHqFXEZCwRj8pPiEpkIISrZKtU4keLLnqY29goBXUmPivwp3Ylx9Xr+T3txrwEAT0M5NxCQLafVC10yrWLTp5FfEXEIv5F5GwW9ShXllt8Iq87S5AQk3COZYsBHFPxHnUeqP+cAqKFDThRpchvwPt5PEdel5y3ITVFF2NCZdG+F3q6THkOzNTOrTySEsKFy8asepkYYQ1CuIKIWEFjrMqpqOyg9YOOyUV/KshpMsKsSzJ5YomIfaYuhBjkG0E7JRgHaGDcMR08fcKgvklquGAA738qQZYjPb+yyKRCECFjk0S84D7P6akw0HOwTogQM90pRJb0+zpiG4J4izGF31xfM+hGVXSo1iF+n4TqROz3QnAORn4sMyIZNecjWg34HS24vMG7VQ6fkHScwJ+SadhgZQgNUuL5p/IGfwEem0NSYAs8WiXS9QurHCKWWrI8vq6w2wR+xsLg4xxbhrVzWqKUFwKSgpEt3fm/k3E1OH7osGkR28Ios2nvQkekF0l6CWELArXAuJoIIXTBn7JseYot9DbkPqgTXeyKeOEHJYSZczd5Qhv8wDUkxdz/OYu3xJJY9A2x3o64GnqIMqx3K3lCdDSv/tfEeEpqCtSITQf0hxFX44Ua7IxKyRNifQ9NTCyGCjWTfeI/CgXReRF+Gzuq8vYIse6esHWvp2AKIx9vrD9USP2DoC28BcIhQ2hd+78eVUa/YB58DoTv/s+CUrBbJITGSQsIoVuh1BuF5t6N70wtGPaQNoWItkgIBeLl776gshAMKvFj6TD1TFsp2O3nUkw0SBelxkWdS6gWyy0S2v5IGLYIwfEoNfL5hDuXhgejJlN4VkELO4aM9oXwwK6X6bmxQU11VdfeEBorJZQpJdwNpYQypYS7oZRQppRwN/Q5CYf1YBz1MxKulvZNPfj1GQnzTDw+ISGOPHr+z09IiONy0Nn6xIQwApASyrQrhB7b2/8QwsHCf481Fy+OzjJnKssevMW7H+gxqY8g9GcdxKtXefIjFr8TBEbhqGRMgPDnam1USUwI05s6C1FgvXr8uD1Egho6FfjSrB9LJcJR3RfOy8ISN5gR6A0j68VhlYHO/DdWaiNbsL4cZMO0BDX8jYQXfixxAvGVieVlPVB42LWisBJzzBrBPKzafA9LePglRrB0n5qHqHCjJNOMSRNbzYjZLmZACMUr0z+KIXyMvFufMDOjC0N4T5XQiCr7BoQ4cd+OIcRpN8olGRAyHq0W/7gvam+DCSGUr54c8Ag/OJXPTAjpCYJR/OOgYHbPhBA2UDaHcsJDCIxTW+iI8RuKe1Mz1OooE0LMfjGE4M+nlKUBYWgishNv4etxHUKM51dpQTyC733GsVQXJ2LHMhVEG2y0CHFJcEHuasCV0pPWSPiPQ2k0VzoUhD46lOpYsDRFixCbCWM5Ibya9hSE8Jc8mkuJdjPVY+yOmzxATULICWdSQlJaeYTfzQm/xhHyl1DpEWJxlxEeHcNDdKOEEP4wJ6zFEfL3n+gRYk0nS8IjbHTShgFhx5hwGANY4OBpE5LWiiQRj6DEP/AJ4wuiiNCWe6mCYL2tHiG2vY+PxPoG7ojpCwWE3w196aDcr55JFGTRGmhmQogrPi/zEsEzTL8MCU+mU1k0V7rsLxTeA6vcMA16pSY1frB2XUHM2nKDNg1j78U/j/LWI+zL306LaVaatEs9yl49CYMPY0aocXgJ4y+21nuiyoYZoWpPdNEBYexMCOlsOoh/PGJjRqgaUnjwy4SQ8TVKXYs+Y2JGqDhekgmvUTQgDMVs2L/0BSuoM/PbpeawWaPZLtRD9agZITrTmzuR5hABdhAPCae9lTCWt2wse4HGwmFOLCg/S0v9hPFSzkgkdOJ0D/qB2u7Nfz9HuPCejaFovNSPZTJj3hCIp0kIjb852bkdFi7Z34F5i070S2u8fyIAxA0wofM8lAg3vkZ4UAuXTQVhVIsCQlzQfsk34xOKy9J6hEbC6iIn2L7qwrr70DhSiBD7KP5mFGvu/1Lbf5Y0IY57PwsO2hHsfwkR4s+rn1lq17maX1f2paaCgYyGiBDCD/noEOEBDqk0nBLZbKPiFAadM5yiaflC415/U/u5Ydz7XZBJiyEUjBn8GT0srz+usNtG0I0H8TbIGwjb3vzqgiRIODC/pUBmW3itv/iJvpgzh5h5GXOxu53Cwr3Aj3yzIO9G25knsUHLU3Cpaew7FIQlqssnhIIfPcahkp+16dG3SHrEfn+VVv8mtnRjb/ucW11YcOZA/CYtO4QYv9dGpW+6kQMyoLq45jpTF0JS2TpDZ7ozhRIUVwpXWhsvCOi9xCPkt7sFIsfxqp1JC92aaZsnPBPPWwcNhD6CR0iO/lBzat+gNvub0tPQ5WpzhyD7GyRk9w4KKgu1VxkS8oaRxxskZNuUIUcDvQSFHetL7SghOlNe2xv3LCu2EneUEMe9nzmELlQWiuuQdpUQjlK44lQXmmepbI7weKOE4LbmUWfq4hCG4uG5OoQ2Ela5E1ZIOOCcUaArbFvcTJywsuTUgbDNWoSDcpU/gb1TmnY46apEONCYK/lgXUYaOiqE6vMIu6Bwe1yBUHmh0I4odIxQPKHGXNeOiO3dxBIO5W/bSfW1CAWnme22KhqEgZdpH3/dcfXJUpCqBiH2ead1ydqPXdEXsq5uoE6IJsO4Zdc7oSNMkLI24eFeAH75MoSW11ibcE8AycLaqi7hw94Q4uJoW5PwZG8IYfTwMSX8TIS4Xvqfn5bwt2gVySGcJlxTR2NqKiQkAH8A4L9EYwD+v2eypZ7rqh/dWXFU7xu+DBaaN3/z9Se2WDK/CQDVbn9YV/kQItnys0F9+VDCzDGLmECP7U8R4JYI2a14CSShsBRui/Dk13dKv/7a9PtbR0LALRH++wejTRP+/k0MuB3Chx+JEsrHguGhE33NVE2nbSaPLvTX+qH+7us///1D6EQZwof47W4RQT9m9jX+0fAMCPRjHw1ChV5+/KqSCCF3pkImQmhgCoQP2pYkVKWDhlNCxbBSQp5pShgf6p4QPmpbmhNmDKIJC4ia5qaz+K2gEVP4OBrrB4HQICycMy7om+JekIL21zmGVVsaK7IhrGmkWo4J6ZicwDA9NDY90TbFYX2N+1IwJR7yBR2NqSmrmblpU9OUbCXXWI69PzP4tGaeOqH6Trldkta1Rfs3ya29Elt2DcuOSiOPrmReFKvmyzjWMDW429Z0PU3n4GBouJKqsIap0f3ENe01X83ehR9Svap2HS2l3oXnm7Z1TZvTjmfCt5Tt4ar3c5ngYtLpwOOYtlRMe4zpAC+LeVYxrRjjrYROtXsqVpe/1wMui2mpmJ5xTW9yMtMGN1RjwlP+7bkrnfIJwbSlYiok1A41JUwJU8INE77qh2pMWJSJ79Vw0baKKZ/wpasfqjEhd7MVbvbgbyNHQqnptYzwVnj4AGW6KULB7uOVBBvlkVBqak5opYQpYUqYEqaEKWFKmBKmhClhSpgSpoQpYUqYEqaEKWFKmBKmhClhSpgSpoQpYUqYEqaEKeHmCHFBheCIdQXCl20QsgexC8KCNXShzQAQTcHh1b5c/sn+uPJTdInAKlStSwHEqitEs3TrP5Pnm4puAlgJPk7ozE75uddAyD9mX1uyQ1NJWPCM4MB7/uHVIDizM7RTYqBiesc11Zb8BGpfeCxl6OBNvDhGdBPAUkW+KYbKPxWaNdVaoc8TvIdz4CYKD0uPnLIBOz3uxLG04FKOyJmdsAfq1sBUW7i2XFya8FaGyG4ANBXnNRdOkYkcDkwW7oqzzlwQqrbwutw3UVjkY0bukMCC+C40fY0znYuyKTkaet1iuChNuJpd9DkdvAcikl1s3I12KrqxAvwM51x4XM2eEyFiqBu4eoJsgZhwEV24vTxcaS9Fdt4IvD74e15Ow8pU4MRdWHrJXvZoKBs/5zzLO2b7HqPC+5iY/twbjrBRwjfFUG8dXqjPMlNtkc/5HklFN0sAuedsk3vp7jgZgJhyWyVkQ8vtJJJRXfJtNnJhQZASmVaXrTOsCWZR0YFMwQWXEdMn8i/+7QzBhsTTEvN5LOctxlRb1F69t4mLobmucx38Q3AnA2X6VBSYCqpsyvSdMrWc51hTfdFboN7OJxPHyjqTXIP6q9Bn06ZPXFPhjRxDxrTom57eU39dt0lKid1SdjN/unth/iJp31/EmEpKEmvamr+/s6YaB33oIoZVlW0ck5ueyUzl+zx73iYJpbd1xjQrZNv8Ykxlh2PF3zejqZHgXmOFi18q/FutMwqeYmBuqi+bn2fGCns3BaZ5FdOysamB7OjO2api38WOXhmlbBotyJdr95jEoQ3HJyScZrum8SVZ06qeaZ+68FnL1ET2oH7Y6Rc6Nf2tmwvTi+2b/p/qf1QzW6VIGDRlAAAAAElFTkSuQmCC"
                alt=""
                className="w-1/2 h-[100px] mr-4"
              />
              <div>
                <p className="text-[0.9rem]">
                  Filtered water Water purified from harmful pollutants, passed
                  regulated potability tests.
                </p>
                {/* Add any additional text content here */}
              </div>
            </div>

            <div className="flex p-4 bg-white">
              {/* First div content */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/4371/4371287.png"
                alt=""
                className="w-1/2 h-[100px] mr-4"
              />
              <div>
                <p className="text-[0.9rem]">
                  Better order experience, with cleanliness on certified safety,
                  giving you quality water,
                </p>
                {/* Add any additional text content here */}
              </div>
            </div>

            <div className="flex p-4 bg-white">
              {/* First div content */}
              <img
                src="data:image/png;base64,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"
                alt=""
                className="w-1/2 h-[100px] mr-4"
              />
              <div>
                <p className="text-[0.9rem]">
                  No more hassle with payment (COD) for waiting for the
                  delivery. Most common are accepted through the method.
                </p>
                {/* Add any additional text content here */}
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

import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WebNavbar from './WebNavbar';
import { BiArrowToRight } from 'react-icons/bi';
const WebProducts = () => {

    const settings = {
        arrows: null,
        nextArrow: null,
        autoplay: true,
        autoplaySpeed: 3000, // Adjust the speed (in milliseconds)
        dots: false, // Show navigation dots
        infinite: true, // Enable infinite loop
        speed: 500, // Transition speed (in milliseconds)
        slidesToShow: 2, // Number of items to show at once
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
    <section
        className="800px:grid 800px:grid-cols-1 grid grid-cols-1 bg-gray-100  w-full h-[70vh] ease-in duration-300"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div
          class="relative bg-gradient-to-r from-blue-800 to-transparent bg-cover bg-center  flex items-center justify-center "
          style={{
            backgroundImage:
              "url(https://cebu-matome.site/wp-content/uploads/2021/06/187807382_109060128037945_1636812727331777641_n.jpg)",
          }}
         
        >
          <p class="absolute inset-0 bg-gradient-to-r from-transparent to-blue-800"></p>
          
          <p class="absolute inset-0 bg-gradient-to-r from-transparent to-blue-800"></p>
          <p class="absolute grid grid-cols-2 inset-0  items-center justify-end z-10 px-10 text-white text-[18px] text-justify ease-in duration-500"
           data-aos="fade-right"
           data-aos-delay="400">
           <BiArrowToRight className=' opacity-0'/>
            <p> MORE THAN JUST FOR DRINKING Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            tempore non nemo animi harum nihil nesciunt ipsum. Hic expedita
            laudantium veniam tenetur, delectus atque, aliquam libero animi
            incidunt inventore nisi. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Enim eligendi, debitis optio porro maiores
            similique odio veniam nulla nisi asperiores. Repellendus dolore
            numquam, natus tempora cum officia porro inventore mollitia.</p>
          </p>
        </div>
      </section>
    <br />
    <section className="800px:px-20  ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 180 1440 100">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,32L14.1,58.7C28.2,85,56,139,85,149.3C112.9,160,141,128,169,128C197.6,128,226,160,254,154.7C282.4,149,311,107,339,112C367.1,117,395,171,424,192C451.8,213,480,203,508,197.3C536.5,192,565,192,593,197.3C621.2,203,649,213,678,192C705.9,171,734,117,762,106.7C790.6,96,819,128,847,133.3C875.3,139,904,117,932,133.3C960,149,988,203,1016,240C1044.7,277,1073,299,1101,261.3C1129.4,224,1158,128,1186,90.7C1214.1,53,1242,75,1271,85.3C1298.8,96,1327,96,1355,85.3C1383.5,75,1412,53,1426,42.7L1440,32L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"
          ></path>
        </svg>

        <div className="grid grid-cols-2 max-400px:grid max-400px:grid-cols-1 max-500px:grid  max-500px:grid-cols-1  max-640px:grid  max-640px:grid-cols-1 max-768px:grid max-768px:grid-cols-1">
          <div className="px-10 400px:px-5 max-400px:px-5 390px:px-5 text-justify">
            <h1
              className="font-bold text-[30px] max-400px:pt-5 max-500px:pt-5 max-640px:pt-5 max-768px:pt-5 
            max-400px:text-[20px] max-500px:text-[20px] max-640px:text-[20px] max-768px:text-[20px]"
            >
              Our Products
            </h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
            magni laudantium neque officia nisi, sed iure repellendus voluptate.
            Sequi provident omnis consequatur sapiente vel ipsam hic perferendis
            molestias dolore? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quasi esse magni laudantium neque officia nisi, sed iure
            repellendus voluptate. Sequi provident omnis consequatur sapiente
            vel ipsam hic perferendis molestias dolore? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quasi esse magni laudantium neque
            officia nisi, sed iure repellendus voluptate. Sequi provident omnis
            consequatur sapiente vel ipsam hic perferendis molestias dolore?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
            magni laudantium neque officia nisi, sed iure repellendus voluptate.
            Sequi provident omnis consequatur sapiente vel ipsam hic perferendis
            molestias dolore?
            <hr />
          </div>
          <div>
            <Slider {...settings} className="bg-white">
              {/* Add your product items here */}
              <div>
                <img
                  src="https://down-ph.img.susercontent.com/file/93a3211b7ceacf91e6335643cb7b6480"
                  alt="Product 1"
                  className="w-60 h-60  border max-400px:h-[100%] max-400px:w-[100%] 400px:h-[100%] 390px:w-[100%]  shadow-lg rounded-[20px] hover:mx-auto transition-transform duration-300 transform hover:scale-105"
                />
                {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
              </div>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGhIRYJB-9X8M-JAEngwz6ildEpHpAmbBvKzb8w9NlwWqwxofOnwIhabV3mEmJASR_4R0&usqp=CAU"
                  alt="Product 1"
                  className="w-60 h-60 border shadow-lg rounded-[20px] max-400px:h-[100%] max-400px:w-[100%] 400px:h-[100%] 390px:w-[100%] hover:mx-auto transition-transform duration-300 transform hover:scale-105"
                />
                {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
              </div>
              <div>
                <img
                  src="https://down-ph.img.susercontent.com/file/2faff09308079c871c09df8025884578"
                  alt="Product 1"
                  className="w-60 h-60 border shadow-lg rounded-[20px] max-400px:h-[100%] max-400px:w-[100%] 400px:h-[100%] 390px:w-[100%]  hover:mx-auto transition-transform duration-300 transform hover:scale-105"
                />
                {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
              </div>
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRNSNB9h_PIJy8Tkj8wHBHzmZRTOA6qz9QGg&usqp=CAU"
                  alt="Product 1"
                  className="w-60 h-60 border shadow-lg rounded-[20px] max-400px:h-[100%] max-400px:w-[100%] 400px:h-[100%] 390px:w-[100%] hover:mx-auto transition-transform duration-300 transform hover:scale-105"
                />
                {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
              </div>
              {/* Add more product items as needed */}
              <div>
                <img
                  src="https://lzd-img-global.slatic.net/g/p/67e00bbcbe2f2161278a32fcb6a99d5a.jpg_200x200q80.jpg_.webp"
                  alt="Product 1"
                  className="w-60 h-60 border shadow-lg rounded-[20px] max-400px:h-[100%] max-400px:w-[100%] 400px:h-[100%] 390px:w-[100%] hover:mx-auto transition-transform duration-300 transform hover:scale-105"
                />
                {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
              </div>
              {/* Add more product items as needed */}
              <div>
                <img
                  src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQMNXGQHvsDOtx9OlJVNTp_GV4eGCPV-bC3LIhL8ee2IcrwGLrFol1ZGS0w3OYREJAI-Dm_z9v99rD7cIKGkl35TTKqsXng-4qMCLXGjU4bh0CoemEw56WmuvtLXrB5&usqp=CAc"
                  alt="Product 1"
                  className="w-60 h-60 border shadow-lg rounded-[20px] max-400px:h-[100%] max-400px:w-[100%] 400px:h-[100%] 390px:w-[100%]  hover:mx-auto transition-transform duration-300 transform hover:scale-105"
                />
                {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
              </div>
              {/* Add more product items as needed */}

              <div>
                <img
                  src="https://down-ph.img.susercontent.com/file/b888bd326669848a45b53d38c9f40ce3"
                  alt="Product 1"
                  className="w-60 h-60 border shadow-lg rounded-[20px] max-400px:h-[100%] max-400px:w-[100%] 400px:h-[100%] 390px:w-[100%] hover:mx-auto transition-transform duration-300 transform hover:scale-105"
                />
                {/* <h3>Product 1</h3>
            <p>Description for Product 1</p> */}
              </div>
              {/* Add more product items as needed */}
            </Slider>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 100">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,224L8.3,192C16.6,160,33,96,50,74.7C66.2,53,83,75,99,85.3C115.9,96,132,96,149,133.3C165.5,171,182,245,199,261.3C215.2,277,232,235,248,192C264.8,149,281,107,298,80C314.5,53,331,43,348,69.3C364.1,96,381,160,397,165.3C413.8,171,430,117,447,101.3C463.4,85,480,107,497,122.7C513.1,139,530,149,546,133.3C562.8,117,579,75,596,53.3C612.4,32,629,32,646,69.3C662.1,107,679,181,695,181.3C711.7,181,728,107,745,101.3C761.4,96,778,160,794,202.7C811,245,828,267,844,256C860.7,245,877,203,894,170.7C910.3,139,927,117,943,133.3C960,149,977,203,993,240C1009.7,277,1026,299,1043,288C1059.3,277,1076,235,1092,181.3C1109,128,1126,64,1142,58.7C1158.6,53,1175,107,1192,122.7C1208.3,139,1225,117,1241,96C1257.9,75,1274,53,1291,58.7C1307.6,64,1324,96,1341,106.7C1357.2,117,1374,107,1390,106.7C1406.9,107,1423,117,1432,122.7L1440,128L1440,320L1431.7,320C1423.4,320,1407,320,1390,320C1373.8,320,1357,320,1341,320C1324.1,320,1308,320,1291,320C1274.5,320,1258,320,1241,320C1224.8,320,1208,320,1192,320C1175.2,320,1159,320,1142,320C1125.5,320,1109,320,1092,320C1075.9,320,1059,320,1043,320C1026.2,320,1010,320,993,320C976.6,320,960,320,943,320C926.9,320,910,320,894,320C877.2,320,861,320,844,320C827.6,320,811,320,794,320C777.9,320,761,320,745,320C728.3,320,712,320,695,320C678.6,320,662,320,646,320C629,320,612,320,596,320C579.3,320,563,320,546,320C529.7,320,513,320,497,320C480,320,463,320,447,320C430.3,320,414,320,397,320C380.7,320,364,320,348,320C331,320,314,320,298,320C281.4,320,265,320,248,320C231.7,320,215,320,199,320C182.1,320,166,320,149,320C132.4,320,116,320,99,320C82.8,320,66,320,50,320C33.1,320,17,320,8,320L0,320Z"
          ></path>
        </svg>
      </section>
      <hr />
      <section className="800px:px-20 bg-white  ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 180 1440 100">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,32L14.1,58.7C28.2,85,56,139,85,149.3C112.9,160,141,128,169,128C197.6,128,226,160,254,154.7C282.4,149,311,107,339,112C367.1,117,395,171,424,192C451.8,213,480,203,508,197.3C536.5,192,565,192,593,197.3C621.2,203,649,213,678,192C705.9,171,734,117,762,106.7C790.6,96,819,128,847,133.3C875.3,139,904,117,932,133.3C960,149,988,203,1016,240C1044.7,277,1073,299,1101,261.3C1129.4,224,1158,128,1186,90.7C1214.1,53,1242,75,1271,85.3C1298.8,96,1327,96,1355,85.3C1383.5,75,1412,53,1426,42.7L1440,32L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"
          ></path>
        </svg>

        <div className="grid grid-cols-2 max-400px:grid max-400px:grid-cols-1 max-500px:grid  max-500px:grid-cols-1  max-640px:grid  max-640px:grid-cols-1 max-768px:grid max-768px:grid-cols-1">
          <div className="px-10 400px:px-5 max-400px:px-5 390px:px-5 text-justify">
            <h1
              className="font-bold text-[30px] max-400px:pt-5 max-500px:pt-5 max-640px:pt-5 max-768px:pt-5 
            max-400px:text-[20px] max-500px:text-[20px] max-640px:text-[20px] max-768px:text-[20px]"
            >
              5 GALLON / CONTAINER SLIM TYPE
            </h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
            magni laudantium neque officia nisi, sed iure repellendus voluptate.
            Sequi provident omnis consequatur sapiente vel ipsam hic perferendis
            molestias dolore? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quasi esse magni laudantium neque officia nisi, sed iure
            repellendus voluptate. Sequi provident omnis consequatur sapiente
            vel ipsam hic perferendis molestias dolore? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quasi esse magni laudantium neque
            officia nisi, sed iure repellendus voluptate. Sequi provident omnis
            consequatur sapiente vel ipsam hic perferendis molestias dolore?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
            magni laudantium neque officia nisi, sed iure repellendus voluptate.
            Sequi provident omnis consequatur sapiente vel ipsam hic perferendis
            molestias dolore?
            <hr />
          </div>
          <div className='grid grid-cols-2'>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBuY1M-MwUPy3j3ynV5TqYdKcx8cx_N9_tQ&usqp=CAU" alt="" />
           <img src="https://edepot.com.ph/wp-content/uploads/2021/04/website-2-2021-04-29T110219.110.png" alt="" />
           <img src="https://www.delpermarketing.com/uploads/7/3/5/9/7359498/galon-brand-new-1648579574-682b594e-progressive.jpg" alt="" className='h-[150px] w-[150px] ml-5' />
           <img src="https://www.delpermarketing.com/uploads/7/3/5/9/7359498/galon-brand-new-1648579574-15a00af4-progressive.jpg" alt="" className='h-[150px] w-[170px'/>
          </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 100">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,224L8.3,192C16.6,160,33,96,50,74.7C66.2,53,83,75,99,85.3C115.9,96,132,96,149,133.3C165.5,171,182,245,199,261.3C215.2,277,232,235,248,192C264.8,149,281,107,298,80C314.5,53,331,43,348,69.3C364.1,96,381,160,397,165.3C413.8,171,430,117,447,101.3C463.4,85,480,107,497,122.7C513.1,139,530,149,546,133.3C562.8,117,579,75,596,53.3C612.4,32,629,32,646,69.3C662.1,107,679,181,695,181.3C711.7,181,728,107,745,101.3C761.4,96,778,160,794,202.7C811,245,828,267,844,256C860.7,245,877,203,894,170.7C910.3,139,927,117,943,133.3C960,149,977,203,993,240C1009.7,277,1026,299,1043,288C1059.3,277,1076,235,1092,181.3C1109,128,1126,64,1142,58.7C1158.6,53,1175,107,1192,122.7C1208.3,139,1225,117,1241,96C1257.9,75,1274,53,1291,58.7C1307.6,64,1324,96,1341,106.7C1357.2,117,1374,107,1390,106.7C1406.9,107,1423,117,1432,122.7L1440,128L1440,320L1431.7,320C1423.4,320,1407,320,1390,320C1373.8,320,1357,320,1341,320C1324.1,320,1308,320,1291,320C1274.5,320,1258,320,1241,320C1224.8,320,1208,320,1192,320C1175.2,320,1159,320,1142,320C1125.5,320,1109,320,1092,320C1075.9,320,1059,320,1043,320C1026.2,320,1010,320,993,320C976.6,320,960,320,943,320C926.9,320,910,320,894,320C877.2,320,861,320,844,320C827.6,320,811,320,794,320C777.9,320,761,320,745,320C728.3,320,712,320,695,320C678.6,320,662,320,646,320C629,320,612,320,596,320C579.3,320,563,320,546,320C529.7,320,513,320,497,320C480,320,463,320,447,320C430.3,320,414,320,397,320C380.7,320,364,320,348,320C331,320,314,320,298,320C281.4,320,265,320,248,320C231.7,320,215,320,199,320C182.1,320,166,320,149,320C132.4,320,116,320,99,320C82.8,320,66,320,50,320C33.1,320,17,320,8,320L0,320Z"
          ></path>
        </svg>
      </section>
      <section className="800px:px-20 bg-white  ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 180 1440 100">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,32L14.1,58.7C28.2,85,56,139,85,149.3C112.9,160,141,128,169,128C197.6,128,226,160,254,154.7C282.4,149,311,107,339,112C367.1,117,395,171,424,192C451.8,213,480,203,508,197.3C536.5,192,565,192,593,197.3C621.2,203,649,213,678,192C705.9,171,734,117,762,106.7C790.6,96,819,128,847,133.3C875.3,139,904,117,932,133.3C960,149,988,203,1016,240C1044.7,277,1073,299,1101,261.3C1129.4,224,1158,128,1186,90.7C1214.1,53,1242,75,1271,85.3C1298.8,96,1327,96,1355,85.3C1383.5,75,1412,53,1426,42.7L1440,32L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"
          ></path>
        </svg>

        <div className="grid grid-cols-2 max-400px:grid max-400px:grid-cols-1 max-500px:grid  max-500px:grid-cols-1  max-640px:grid  max-640px:grid-cols-1 max-768px:grid max-768px:grid-cols-1">
          
          <div className='grid grid-cols-2'>
           <img src="https://5.imimg.com/data5/IP/DA/MY-46494510/water-dispenser-container-500x500.jpg" alt="" className='h-[150px] w-[200px]' />
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyyZPrbsZrweb445R08a2PfDrh9SucBdcp7Q&usqp=CAU" alt="" />
           <img src="https://drink-pack.com/uploadfile/2019/09/23/201909232006172v9anS.jpg" alt="" />
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzf9kfVa3w9iv385Q-DFDQabOo1E37MuyAj2vC_99emgageWHHDVXxgO0v-k4EabmIDOw&usqp=CAU" alt="" />
          </div>
          <div className="px-10 400px:px-5 max-400px:px-5 390px:px-5 text-justify">
            <h1
              className="font-bold text-[30px] max-400px:pt-5 max-500px:pt-5 max-640px:pt-5 max-768px:pt-5 
            max-400px:text-[20px] max-500px:text-[20px] max-640px:text-[20px] max-768px:text-[20px]"
            >
              5 GALLON ROUNDED TYPE
            </h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
            magni laudantium neque officia nisi, sed iure repellendus voluptate.
            Sequi provident omnis consequatur sapiente vel ipsam hic perferendis
            molestias dolore? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quasi esse magni laudantium neque officia nisi, sed iure
            repellendus voluptate. Sequi provident omnis consequatur sapiente
            vel ipsam hic perferendis molestias dolore? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quasi esse magni laudantium neque
            officia nisi, sed iure repellendus voluptate. Sequi provident omnis
            consequatur sapiente vel ipsam hic perferendis molestias dolore?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
            magni laudantium neque officia nisi, sed iure repellendus voluptate.
            Sequi provident omnis consequatur sapiente vel ipsam hic perferendis
            molestias dolore?
            <hr />
          </div>
        </div>
        

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 100">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,224L8.3,192C16.6,160,33,96,50,74.7C66.2,53,83,75,99,85.3C115.9,96,132,96,149,133.3C165.5,171,182,245,199,261.3C215.2,277,232,235,248,192C264.8,149,281,107,298,80C314.5,53,331,43,348,69.3C364.1,96,381,160,397,165.3C413.8,171,430,117,447,101.3C463.4,85,480,107,497,122.7C513.1,139,530,149,546,133.3C562.8,117,579,75,596,53.3C612.4,32,629,32,646,69.3C662.1,107,679,181,695,181.3C711.7,181,728,107,745,101.3C761.4,96,778,160,794,202.7C811,245,828,267,844,256C860.7,245,877,203,894,170.7C910.3,139,927,117,943,133.3C960,149,977,203,993,240C1009.7,277,1026,299,1043,288C1059.3,277,1076,235,1092,181.3C1109,128,1126,64,1142,58.7C1158.6,53,1175,107,1192,122.7C1208.3,139,1225,117,1241,96C1257.9,75,1274,53,1291,58.7C1307.6,64,1324,96,1341,106.7C1357.2,117,1374,107,1390,106.7C1406.9,107,1423,117,1432,122.7L1440,128L1440,320L1431.7,320C1423.4,320,1407,320,1390,320C1373.8,320,1357,320,1341,320C1324.1,320,1308,320,1291,320C1274.5,320,1258,320,1241,320C1224.8,320,1208,320,1192,320C1175.2,320,1159,320,1142,320C1125.5,320,1109,320,1092,320C1075.9,320,1059,320,1043,320C1026.2,320,1010,320,993,320C976.6,320,960,320,943,320C926.9,320,910,320,894,320C877.2,320,861,320,844,320C827.6,320,811,320,794,320C777.9,320,761,320,745,320C728.3,320,712,320,695,320C678.6,320,662,320,646,320C629,320,612,320,596,320C579.3,320,563,320,546,320C529.7,320,513,320,497,320C480,320,463,320,447,320C430.3,320,414,320,397,320C380.7,320,364,320,348,320C331,320,314,320,298,320C281.4,320,265,320,248,320C231.7,320,215,320,199,320C182.1,320,166,320,149,320C132.4,320,116,320,99,320C82.8,320,66,320,50,320C33.1,320,17,320,8,320L0,320Z"
          ></path>
        </svg>
        <div className="grid grid-cols-2 max-400px:grid max-400px:grid-cols-1 max-500px:grid  max-500px:grid-cols-1  max-640px:grid  max-640px:grid-cols-1 max-768px:grid max-768px:grid-cols-1">
          <div className="px-10 400px:px-5 max-400px:px-5 390px:px-5 text-justify">
            <h1
              className="font-bold text-[30px] max-400px:pt-5 max-500px:pt-5 max-640px:pt-5 max-768px:pt-5 
            max-400px:text-[20px] max-500px:text-[20px] max-640px:text-[20px] max-768px:text-[20px]"
            >
              2.5 GALLON / CONTAINER SLIM TYPE
            </h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
            magni laudantium neque officia nisi, sed iure repellendus voluptate.
            Sequi provident omnis consequatur sapiente vel ipsam hic perferendis
            molestias dolore? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quasi esse magni laudantium neque officia nisi, sed iure
            repellendus voluptate. Sequi provident omnis consequatur sapiente
            vel ipsam hic perferendis molestias dolore? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quasi esse magni laudantium neque
            officia nisi, sed iure repellendus voluptate. Sequi provident omnis
            consequatur sapiente vel ipsam hic perferendis molestias dolore?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
            magni laudantium neque officia nisi, sed iure repellendus voluptate.
            Sequi provident omnis consequatur sapiente vel ipsam hic perferendis
            molestias dolore?
            <hr />
          </div>
          <div className='grid grid-cols-2'>
           <img src="https://media.karousell.com/media/photos/products/2021/12/26/10l25_gallon_water_container_d_1640516222_9d9ba231_progressive.jpg" alt="" />
           <img src="https://down-ph.img.susercontent.com/file/2faff09308079c871c09df8025884578" alt="" />
           <img src="https://img.ws.mms.shopee.ph/cf2cf1bda4ef58c5aa7845ecf2e8f461" alt="" className='h-[150px] w-[150px] ml-5' />
           <img src="https://www.acehardware.ph/cdn/shop/products/5cf60ce704beb85e68a3cc02_1024x1024.jpg?v=1631520232" alt="" className='h-[150px] w-[170px'/>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 100">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,224L8.3,192C16.6,160,33,96,50,74.7C66.2,53,83,75,99,85.3C115.9,96,132,96,149,133.3C165.5,171,182,245,199,261.3C215.2,277,232,235,248,192C264.8,149,281,107,298,80C314.5,53,331,43,348,69.3C364.1,96,381,160,397,165.3C413.8,171,430,117,447,101.3C463.4,85,480,107,497,122.7C513.1,139,530,149,546,133.3C562.8,117,579,75,596,53.3C612.4,32,629,32,646,69.3C662.1,107,679,181,695,181.3C711.7,181,728,107,745,101.3C761.4,96,778,160,794,202.7C811,245,828,267,844,256C860.7,245,877,203,894,170.7C910.3,139,927,117,943,133.3C960,149,977,203,993,240C1009.7,277,1026,299,1043,288C1059.3,277,1076,235,1092,181.3C1109,128,1126,64,1142,58.7C1158.6,53,1175,107,1192,122.7C1208.3,139,1225,117,1241,96C1257.9,75,1274,53,1291,58.7C1307.6,64,1324,96,1341,106.7C1357.2,117,1374,107,1390,106.7C1406.9,107,1423,117,1432,122.7L1440,128L1440,320L1431.7,320C1423.4,320,1407,320,1390,320C1373.8,320,1357,320,1341,320C1324.1,320,1308,320,1291,320C1274.5,320,1258,320,1241,320C1224.8,320,1208,320,1192,320C1175.2,320,1159,320,1142,320C1125.5,320,1109,320,1092,320C1075.9,320,1059,320,1043,320C1026.2,320,1010,320,993,320C976.6,320,960,320,943,320C926.9,320,910,320,894,320C877.2,320,861,320,844,320C827.6,320,811,320,794,320C777.9,320,761,320,745,320C728.3,320,712,320,695,320C678.6,320,662,320,646,320C629,320,612,320,596,320C579.3,320,563,320,546,320C529.7,320,513,320,497,320C480,320,463,320,447,320C430.3,320,414,320,397,320C380.7,320,364,320,348,320C331,320,314,320,298,320C281.4,320,265,320,248,320C231.7,320,215,320,199,320C182.1,320,166,320,149,320C132.4,320,116,320,99,320C82.8,320,66,320,50,320C33.1,320,17,320,8,320L0,320Z"
          ></path>
        </svg>
        <div className="grid grid-cols-2 max-400px:grid max-400px:grid-cols-1 max-500px:grid  max-500px:grid-cols-1  max-640px:grid  max-640px:grid-cols-1 max-768px:grid max-768px:grid-cols-1">
          
          <div className='grid grid-cols-2'>
           <img src="https://w7.pngwing.com/pngs/791/400/png-transparent-water-bottles-bottled-water-water-bottle-plastic-bottle-drinking-water-mineral-water-thumbnail.png" alt="" className='h-[200px] w-[200px]' />
           <img src="https://en-beyondmachine.usa72.wondercdn.com/uploads/image/tupian1-le3hwivyzut.png" alt="" />
           <img src="https://media.istockphoto.com/photos/liter-water-bottle-with-empty-label-clipping-path-picture-id691893082?k=6&m=691893082&s=170667a&w=0&h=usNiULXqQWsnQ1gcRPHA4-CschJNnggyb2IDJwUQ5SQ=" alt="" className='h-[250px] w-[200px]' />
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN0IHGwvOjnP2cuDZTopvJJPK3LIp6PM5AJCs_CVUNdZB65F_1QA6sIiKXo-KBGoPhkqY&usqp=CAU" alt="" />
          </div>
          <div className="px-10 400px:px-5 max-400px:px-5 390px:px-5 text-justify">
            <h1
              className="font-bold text-[30px] max-400px:pt-5 max-500px:pt-5 max-640px:pt-5 max-768px:pt-5 
            max-400px:text-[20px] max-500px:text-[20px] max-640px:text-[20px] max-768px:text-[20px]"
            >
              6.6 LITTERS SIZE JAG TYPE
            </h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
            magni laudantium neque officia nisi, sed iure repellendus voluptate.
            Sequi provident omnis consequatur sapiente vel ipsam hic perferendis
            molestias dolore? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quasi esse magni laudantium neque officia nisi, sed iure
            repellendus voluptate. Sequi provident omnis consequatur sapiente
            vel ipsam hic perferendis molestias dolore? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quasi esse magni laudantium neque
            officia nisi, sed iure repellendus voluptate. Sequi provident omnis
            consequatur sapiente vel ipsam hic perferendis molestias dolore?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
            magni laudantium neque officia nisi, sed iure repellendus voluptate.
            Sequi provident omnis consequatur sapiente vel ipsam hic perferendis
            molestias dolore?
            <hr />
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 100">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,224L8.3,192C16.6,160,33,96,50,74.7C66.2,53,83,75,99,85.3C115.9,96,132,96,149,133.3C165.5,171,182,245,199,261.3C215.2,277,232,235,248,192C264.8,149,281,107,298,80C314.5,53,331,43,348,69.3C364.1,96,381,160,397,165.3C413.8,171,430,117,447,101.3C463.4,85,480,107,497,122.7C513.1,139,530,149,546,133.3C562.8,117,579,75,596,53.3C612.4,32,629,32,646,69.3C662.1,107,679,181,695,181.3C711.7,181,728,107,745,101.3C761.4,96,778,160,794,202.7C811,245,828,267,844,256C860.7,245,877,203,894,170.7C910.3,139,927,117,943,133.3C960,149,977,203,993,240C1009.7,277,1026,299,1043,288C1059.3,277,1076,235,1092,181.3C1109,128,1126,64,1142,58.7C1158.6,53,1175,107,1192,122.7C1208.3,139,1225,117,1241,96C1257.9,75,1274,53,1291,58.7C1307.6,64,1324,96,1341,106.7C1357.2,117,1374,107,1390,106.7C1406.9,107,1423,117,1432,122.7L1440,128L1440,320L1431.7,320C1423.4,320,1407,320,1390,320C1373.8,320,1357,320,1341,320C1324.1,320,1308,320,1291,320C1274.5,320,1258,320,1241,320C1224.8,320,1208,320,1192,320C1175.2,320,1159,320,1142,320C1125.5,320,1109,320,1092,320C1075.9,320,1059,320,1043,320C1026.2,320,1010,320,993,320C976.6,320,960,320,943,320C926.9,320,910,320,894,320C877.2,320,861,320,844,320C827.6,320,811,320,794,320C777.9,320,761,320,745,320C728.3,320,712,320,695,320C678.6,320,662,320,646,320C629,320,612,320,596,320C579.3,320,563,320,546,320C529.7,320,513,320,497,320C480,320,463,320,447,320C430.3,320,414,320,397,320C380.7,320,364,320,348,320C331,320,314,320,298,320C281.4,320,265,320,248,320C231.7,320,215,320,199,320C182.1,320,166,320,149,320C132.4,320,116,320,99,320C82.8,320,66,320,50,320C33.1,320,17,320,8,320L0,320Z"
          ></path>
        </svg>
        <div className="grid grid-cols-2 max-400px:grid max-400px:grid-cols-1 max-500px:grid  max-500px:grid-cols-1  max-640px:grid  max-640px:grid-cols-1 max-768px:grid max-768px:grid-cols-1">
          <div className="px-10 400px:px-5 max-400px:px-5 390px:px-5 text-justify">
            <h1
              className="font-bold text-[30px] max-400px:pt-5 max-500px:pt-5 max-640px:pt-5 max-768px:pt-5 
            max-400px:text-[20px] max-500px:text-[20px] max-640px:text-[20px] max-768px:text-[20px]"
            >
              ML SIZE BOTTLE WATER
            </h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
            magni laudantium neque officia nisi, sed iure repellendus voluptate.
            Sequi provident omnis consequatur sapiente vel ipsam hic perferendis
            molestias dolore? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quasi esse magni laudantium neque officia nisi, sed iure
            repellendus voluptate. Sequi provident omnis consequatur sapiente
            vel ipsam hic perferendis molestias dolore? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quasi esse magni laudantium neque
            officia nisi, sed iure repellendus voluptate. Sequi provident omnis
            consequatur sapiente vel ipsam hic perferendis molestias dolore?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi esse
            magni laudantium neque officia nisi, sed iure repellendus voluptate.
            Sequi provident omnis consequatur sapiente vel ipsam hic perferendis
            molestias dolore?
            <hr />
          </div>
          <div className='grid grid-cols-2'>
           <img src="https://4.imimg.com/data4/HD/YC/MY-21898468/oxycool-mineral-bottles.png" alt="" />
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoThh-3kdd4wkQJ_Z93L723Y4_FiO2Drm2-e2kprWu2yWtJykYYslqq2yDCLCTrfH3e4U&usqp=CAU" alt="" />
           <img src="https://5.imimg.com/data5/OF/NF/MY-7507778/pet-bottles-250x250.jpg" alt="" className='h-[150px] w-[150px] ml-5' />
           <img src="https://5.imimg.com/data5/FS/AT/GLADMIN-18566915/mineral-water-bottle-500x500.png" alt="" className='h-[150px] w-[170px'/>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 30 1440 100">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,224L8.3,192C16.6,160,33,96,50,74.7C66.2,53,83,75,99,85.3C115.9,96,132,96,149,133.3C165.5,171,182,245,199,261.3C215.2,277,232,235,248,192C264.8,149,281,107,298,80C314.5,53,331,43,348,69.3C364.1,96,381,160,397,165.3C413.8,171,430,117,447,101.3C463.4,85,480,107,497,122.7C513.1,139,530,149,546,133.3C562.8,117,579,75,596,53.3C612.4,32,629,32,646,69.3C662.1,107,679,181,695,181.3C711.7,181,728,107,745,101.3C761.4,96,778,160,794,202.7C811,245,828,267,844,256C860.7,245,877,203,894,170.7C910.3,139,927,117,943,133.3C960,149,977,203,993,240C1009.7,277,1026,299,1043,288C1059.3,277,1076,235,1092,181.3C1109,128,1126,64,1142,58.7C1158.6,53,1175,107,1192,122.7C1208.3,139,1225,117,1241,96C1257.9,75,1274,53,1291,58.7C1307.6,64,1324,96,1341,106.7C1357.2,117,1374,107,1390,106.7C1406.9,107,1423,117,1432,122.7L1440,128L1440,320L1431.7,320C1423.4,320,1407,320,1390,320C1373.8,320,1357,320,1341,320C1324.1,320,1308,320,1291,320C1274.5,320,1258,320,1241,320C1224.8,320,1208,320,1192,320C1175.2,320,1159,320,1142,320C1125.5,320,1109,320,1092,320C1075.9,320,1059,320,1043,320C1026.2,320,1010,320,993,320C976.6,320,960,320,943,320C926.9,320,910,320,894,320C877.2,320,861,320,844,320C827.6,320,811,320,794,320C777.9,320,761,320,745,320C728.3,320,712,320,695,320C678.6,320,662,320,646,320C629,320,612,320,596,320C579.3,320,563,320,546,320C529.7,320,513,320,497,320C480,320,463,320,447,320C430.3,320,414,320,397,320C380.7,320,364,320,348,320C331,320,314,320,298,320C281.4,320,265,320,248,320C231.7,320,215,320,199,320C182.1,320,166,320,149,320C132.4,320,116,320,99,320C82.8,320,66,320,50,320C33.1,320,17,320,8,320L0,320Z"
          ></path>
        </svg>
      </section>
      
    </>
  )
}

export default WebProducts

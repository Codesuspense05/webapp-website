import React from "react";
import { Link } from "react-router-dom";
// import styles from "../../../styles/styles";
import YouTubeVideo from "../Hero/Video.jsx";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { BsDropletHalf } from "react-icons/bs";
// ..
AOS.init();

const Hero = () => {
  return (
    <section className=" bg-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 110 1440 170"
        data-aos="fade-right"
        data-aos-delay="400"
      >
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,224L6.2,224C12.3,224,25,224,37,229.3C49.2,235,62,245,74,240C86.2,235,98,213,111,186.7C123.1,160,135,128,148,112C160,96,172,96,185,85.3C196.9,75,209,53,222,64C233.8,75,246,117,258,133.3C270.8,149,283,139,295,160C307.7,181,320,235,332,256C344.6,277,357,267,369,224C381.5,181,394,107,406,90.7C418.5,75,431,117,443,144C455.4,171,468,181,480,186.7C492.3,192,505,192,517,192C529.2,192,542,192,554,170.7C566.2,149,578,107,591,112C603.1,117,615,171,628,170.7C640,171,652,117,665,128C676.9,139,689,213,702,218.7C713.8,224,726,160,738,138.7C750.8,117,763,139,775,160C787.7,181,800,203,812,213.3C824.6,224,837,224,849,234.7C861.5,245,874,267,886,272C898.5,277,911,267,923,234.7C935.4,203,948,149,960,133.3C972.3,117,985,139,997,149.3C1009.2,160,1022,160,1034,154.7C1046.2,149,1058,139,1071,138.7C1083.1,139,1095,149,1108,176C1120,203,1132,245,1145,250.7C1156.9,256,1169,224,1182,213.3C1193.8,203,1206,213,1218,186.7C1230.8,160,1243,96,1255,112C1267.7,128,1280,224,1292,229.3C1304.6,235,1317,149,1329,106.7C1341.5,64,1354,64,1366,74.7C1378.5,85,1391,107,1403,101.3C1415.4,96,1428,64,1434,48L1440,32L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"
        ></path>
      </svg>
      <div className="container flex flex-col justify-center  mx-auto sm:py-2 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center  text-center  rounded-sm lg:max-w-md xl:max-w-lg lg:text-left ">
          <BsDropletHalf
            size={30}
            className="animate-spin animate-duration-500"
          />
          <div className="flex">
            <h1
              data-aos="fade-right"
              data-aos-delay="400"
              className="max-400px:text-2xl text-5xl font-bold leadi sm:text-5xl"
            >
              Mineral
              <span
                data-aos="fade-right"
                data-aos-delay="400"
                className="dark:text-blue-500"
              >
                {" "}
                Water{" "}
              </span>
              Refilling Station
            </h1>
          </div>
          <div className="flex text-[12px]">
            <p
              data-aos="fade-right"
              data-aos-delay="400"
              className="mt-6 mb-8   ease-in duration-300 text-[12px]"
            >
              Dictum aliquam porta in condimentum ac integer
              <br
                data-aos="fade-right"
                data-aos-delay="400"
                className="hidden md:inline lg:hidden"
              />
              turpis pulvinar, est scelerisque ligula sem
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="400"
            className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
          >
            <Link to="/products">
              <div className="px-3 py-2 text-lg font-semibold  shadow-md bg-blue-500 text-white  border rounded-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                Download App
              </div>
            </Link>
            <div className="px-8 py-2 text-lg font-semibold border shadow-md border-blue-500 rounded-xl dark:border-gray-100  ">
              Learn more
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 max-400px:hidden"
        >
          <img
            src="https://media.istockphoto.com/id/1131617171/photo/water-delivery-man-in-blue-t-shirt-and-cap.jpg?s=612x612&w=0&k=20&c=kG8v7OJpptuVfbkA2bLx_Op7GyjnsnW-FYhdebHqvfo="
            alt=""
            className="object-contain h-80  rounded-[30px] hover:opacity-70 "
          />
          <img
            src="https://media.istockphoto.com/id/1131617173/photo/water-delivery-man-in-blue-t-shirt-and-cap.jpg?s=612x612&w=0&k=20&c=qNjLodfiNQBUgwoBSJEd_sh3x0xX0E_2aU5UIclxOIs="
            alt=""
            className="object-contain h-80  rounded-[30px] hover:opacity-70 "
          />
          <img
            src="https://media.istockphoto.com/id/1131616903/photo/water-delivery-man-in-blue-t-shirt-and-cap.jpg?s=612x612&w=0&k=20&c=81oUw_ENCWadxlA1v_Zo28CGQDlcma1VgqMmDI2oiW4="
            alt=""
            className="object-contain h-80  rounded-[30px] hover:opacity-70 "
          />
        </div>
      </div>

      <div className="relative w-full h-full border shadow-xl flex flex-col justify-center items-center bg-white">
        {/* :FEATURES */}
        <div
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="container mt-14 p-5 w-full grid grid-cols-12 sm:grid-cols-5 gap-2 text-xs md:text-sm"
        >
          {/* ::Auto-Magic Layouts */}
          <div className="col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-blue-500 uppercase ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              />
            </svg>
            <span className="text-center">Auto-Magic Layouts</span>
          </div>

          {/* ::Four Sizes */}
          <div className="col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              />
            </svg>
            <span className="text-center">Four Sizes</span>
          </div>

          {/* ::Quality Materials */}
          <div className="col-span-4 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-center">Quality Materials</span>
          </div>

          {/* ::Fast Shipping */}
          <div className="col-span-6 sm:col-span-1 inline-flex flex-col items-center border-r border-gray-300 text-gray-400 uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
              />
            </svg>
            <span className="text-center">Fast Shipping</span>
          </div>

          {/* ::Layflat Page */}
          <div className="col-span-6 sm:col-span-1 inline-flex flex-col items-center border-r-none border-gray-300 text-gray-400 uppercase">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 w-9"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-center">24/7 Support</span>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 130 1440 110">
        <path
          fill="#f3f4f7"
          fill-opacity="1"
          d="M0,288L12.6,277.3C25.3,267,51,245,76,229.3C101.1,213,126,203,152,192C176.8,181,202,171,227,170.7C252.6,171,278,181,303,186.7C328.4,192,354,192,379,197.3C404.2,203,429,213,455,213.3C480,213,505,203,531,197.3C555.8,192,581,192,606,192C631.6,192,657,192,682,192C707.4,192,733,192,758,176C783.2,160,808,128,834,117.3C858.9,107,884,117,909,138.7C934.7,160,960,192,985,176C1010.5,160,1036,96,1061,112C1086.3,128,1112,224,1137,234.7C1162.1,245,1187,171,1213,160C1237.9,149,1263,203,1288,213.3C1313.7,224,1339,192,1364,192C1389.5,192,1415,224,1427,240L1440,256L1440,0L1427.4,0C1414.7,0,1389,0,1364,0C1338.9,0,1314,0,1288,0C1263.2,0,1238,0,1213,0C1187.4,0,1162,0,1137,0C1111.6,0,1086,0,1061,0C1035.8,0,1011,0,985,0C960,0,935,0,909,0C884.2,0,859,0,834,0C808.4,0,783,0,758,0C732.6,0,707,0,682,0C656.8,0,632,0,606,0C581.1,0,556,0,531,0C505.3,0,480,0,455,0C429.5,0,404,0,379,0C353.7,0,328,0,303,0C277.9,0,253,0,227,0C202.1,0,177,0,152,0C126.3,0,101,0,76,0C50.5,0,25,0,13,0L0,0Z"
        ></path>
      </svg>
      <section className="flex bg-white">
        <div className="bg-white flex items-center justify-center w-full">
          <br />
          <div className="items-center text-justify ml-12">
            <h1 className="font-bold text-[30px]">VIDEO FOR TUTORIAL</h1>
            <h1 className="items-center text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo velit fugiat voluptates unde tempore ipsum laboriosam
              vero aliquam architecto quaerat <br /> reprehenderit doloribus,
              cum, ratione saepe distinctio necessitatibus atque beatae!
            </h1>
          </div>
          <main className="p-20 w-full">
            <YouTubeVideo videoId="https://youtu.be/X7-X89zzIUU" />
          </main>
        </div>
      </section>
    </section>
  );
};

export default Hero;

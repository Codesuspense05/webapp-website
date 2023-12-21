import React, { useState } from "react";
import styles from "../styles/styles";
import WebNavbar from "./WebNavbar";

const WebFaq = () => {
  const [activeTab, setActiveTab] = useState(0);

  const toggleTab = (tab) => {
    if (activeTab === tab) {
      setActiveTab(0);
    } else {
      setActiveTab(tab);
    }
  };

  const handleDownload = () => {
    // Replace 'your_file_path' with the actual path to your application/file
    const filePath =
      "https://drive.usercontent.google.com/download?id=1ErGS2zRrNFBgozbCqrsEwxmu3gjS00F4&export=download&authuser=0&confirm=t&uuid=f0a13977-dc4e-4dd8-9a0b-79116e7b8e3f&at=APZUnTVHi8xcH2LEOAcYKNLif7WN%3A1702049094279&fbclid=IwAR2RhuxI7R2Exr-BgAl5Mvi6X87iGLJISK9T-BVpEzmDz6WOewy70CDLAeU";
    window.open(filePath, "_blank");
  };

  return (
    <>
      <WebNavbar />
      <br />
      <br />
      <div className={`${styles.section} my-8 text-blue-400`}>
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          FAQ
        </h2>
        <div className="mx-auto space-y-4">
          {/* single Faq */}

          <div className="border-b border-gray-500 pb-4">
            <button
              className="flex items-center justify-between w-full text-gray-400"
              onClick={() => toggleTab(2)}
            >
              <span className=" max-400px:text-[15px] text-lg font-medium text-gray-900">
                What is your return policy?
              </span>
              {activeTab === 2 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 2 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  If you're not satisfied with your purchase, we accept returns
                  within a day of delivery. To initiate a return, please email
                  us at support@MWRSMS.com with your order number and a brief
                  explanation of why you're returning the item.
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-500  pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(3)}
            >
              <span className="max-400px:text-[15px] text-lg font-medium text-gray-900">
                How do I track my order?
              </span>
              {activeTab === 3 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 3 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  You can track your order by clicking the tracking link in your
                  shipping confirmation email, or by logging into your account
                  on our website and viewing the order details.
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-500  pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(4)}
            >
              <span className=" max-400px:text-[15px] text-lg font-medium text-gray-900">
                How do I contact customer support?
              </span>
              {activeTab === 4 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 4 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  You can contact our customer support team by emailing us at
                  support@MWRSMS.com, or by calling us at (02) 123-4567 between
                  the hours of 9am and 5pm, Monday To Sunday.
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-500  pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(5)}
            >
              <span className="max-400px:text-[15px] text-lg font-medium text-gray-900">
                Can I change or cancel my order?
              </span>
              {activeTab === 5 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 5 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  Unfortunately, we are not cancellations orders, but we are
                  able to make changes product order. If you no longer want the
                  items you've ordered, you can change item within a day of
                  delivery.
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-500  pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(6)}
            >
              <span className="max-400px:text-[15px] text-lg font-medium text-gray-900">
                Do you offer Free Delivery?
              </span>
              {activeTab === 6 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 6 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  Yes, we offer free delivery for our near station.
                </p>
              </div>
            )}
          </div>

          <div className="border-b border-gray-500  pb-4">
            <button
              className="flex items-center justify-between w-full"
              onClick={() => toggleTab(7)}
            >
              <span className="max-400px:text-[15px] text-lg font-medium text-gray-900">
                What payment methods do you accept?
              </span>
              {activeTab === 7 ? (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="blue"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </button>
            {activeTab === 7 && (
              <div className="mt-4">
                <p className="text-base text-gray-500">
                  We accept only COD or cash on delivery system.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <section
        className="800px:grid 800px:grid-cols-2 grid grid-cols-1 bg-white  pb-10 h-[70vh] ease-in duration-300  "
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className="  shadow-lg grid grid-cols-1 max-400px:px-5 py-5">
          <p className="800px:px-20 text-center font-semibold  400px:px-5 390px:px-5 text-black text-[20px]">
            HOW TO ORDER MINERAL WATER?
            
            <p className="text-justify text-[16px] font-normal mt-4">
              Our App is designed to make ordering water delivery quick, easy,
              and hassle-free. With just a few clicks, you can place your order,
              schedule delivery, and sit back and relax as our team takes care
              of the rest. We offer flexible delivery options, including
              recurring deliveries at intervals of your choice, so you never
              have to worry about running out of water again!
            </p>
            <div className="">
              <img src="https://i.pinimg.com/originals/79/d2/84/79d284cb76d1201aeba6957a557b1a69.gif" alt="" className="h-[200px] w-full"/>
            </div>
            <div
              class="flex justify-center my-10 max-400px:my-2"
              onClick={handleDownload}
            >
              <div class="flex items-center border rounded-lg px-4 py-2 w-52 mx-2 bg-black">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                  alt=""
                  class="w-7 md:w-8 max-400px:w-5  max-400px:h-6"
                />
                <div class="text-left ml-3">
                  <p class="text-xs text-white max-400px:text-[10px]">
                    Download on{" "}
                  </p>
                  <p class="text-sm md:text-base max-400px:text-[12px] text-white">
                    {" "}
                    Google Play Store{" "}
                  </p>
                </div>
              </div>
              {/* <div class="flex items-center border  rounded-lg px-4 py-2 w-44 mx-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                    alt=""
                    class="w-7 md:w-8 max-400px:w-6  max-400px:h-6"
                  />
                  <div class="text-left ml-3">
                    <p class="text-xs text-gray-200 max-400px:text-[10px]">
                      Download on{" "}
                    </p>
                    <p class="text-sm md:text-base max-400px:text-[12px]">
                      {" "}
                      Apple Store{" "}
                    </p>
                  </div>
                </div> */}
            </div>
          </p>
        </div>
        <div className="bg-white 800px:px-10 800px:py-5 800px:rounded-br-[20px] shadow-md max-400px:px-5 ">
          <img
            src="https://media.tenor.com/6qAdvIpWGV4AAAAC/order.gif"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default WebFaq;

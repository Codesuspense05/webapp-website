import React from "react";
import { BsMessenger, BsTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiFacebookCircleFill } from "react-icons/ri";

const Contact = () => {
  return (
    <>
      <section
        className="bg-white  800px:pt-20 800px:pb-5  overflow-hidden relative z-10 ease-in duration-300"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className="800px:container">
          <div className="flex flex-wrap  lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="800px:mb-12 800px:max-w-[570px] max-400px:text-center lg:mb-0">
                <span className=" mb-4 text-4xl font-bold text-center w-full max-400px:text-[23px]  ">
                  Contact Us
                </span>
                <h2 className="mb-6 text-[22px] text-gray-500 font-bold uppercase max-400px:text-[15px] w-full text-dark sm:text-[20px] lg:text-[20px] xl:text-[20px]">
                  GET IN TOUCH WITH US
                </h2>
                <p className="w-full text-base max-400px:text-[13px] leading-relaxed mb-9 text-justify text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eius tempor incididunt ut labore e dolore magna aliqua. Ut
                  enim adiqua minim veniam quis nostrud exercitation ullamco
                </p>
                <div className="max-400px:mb-5">
                  <iframe
                  title="map"
                  className="max-400px:w-[100%] "
                   height={300}
                   width={720}
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=720&amp;height=300&amp;hl=en&amp;q=Kasiglahan,%20Village%20Rodriguez%20Rizal+(Mineral%20Water%20Refilling%20Station)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  >
                    <a href="https://www.maps.ie/population/">
                      Population calculator map
                    </a>
                  </iframe>
                </div>
               
               
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-4/12">
              <div className="relative p-8 bg-white rounded-lg border shadow-xl max-400px:p-5 xl:p-10">
                <form>
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Your Name"
                   
                    
                  />
                  <ContactInputBox
                    type="text"
                    name="email"
                    placeholder="Your Email"
                  />
                  <ContactInputBox
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Your Message"
                    name="details"
                    defaultValue=""
                  />
                  <div>
                    <button
                      type="submit"
                      className="w-full p-3 text-white transition border rounded border-primary bg-primary bg-blue-500"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <div>
                 
                  
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <br />
        <br />
        <div className="flex w-full justify-between max-400px:grid max-400px:grid-cols-1 max-400px:px-5">
                <div className="800px:mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <HiLocationMarker size={30} color="red" />
                  </div>
              
                  <div className="w-full">
                    <hr />
                    <h4 className=" text-lg font-bold text-dark">
                      Our Location
                    </h4>
                    <p className="text-base text-body-color">
                      # 101 St. Brgy., Papuntang Langit. Philippines
                    </p>
                  </div>
                </div>
                <div className="800px:mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <BsTelephoneFill size={25} color="green" />
                  </div>
                  <div className="w-full">
                  <hr />
                    <h4 className=" text-lg font-bold text-dark">
                      Phone Number
                    </h4>
                    <p className="text-base text-body-color">
                      (+63)9 123 456 789
                    </p>
                  </div>
                </div>
                <div className="800px:mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <MdOutlineMarkEmailRead size={30} />
                  </div>
                  <div className="w-full">
                  <hr />
                    <h4 className=" text-lg font-bold text-dark">
                      Email Address
                    </h4>
                    <p className="text-base text-body-color">
                      Capstonev2@gmail.com
                    </p>
                  </div>
                </div>
                <div className="800px:mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <RiFacebookCircleFill size={30} color="blue" />
                  </div>
                  <hr />
                  <div className="w-full">
                  <hr />
                    <h4 className=" text-lg font-bold text-dark">
                      Facebook
                    </h4>
                    <p className="text-base text-body-color">
                      www.facebook.com/profile
                    </p>
                  </div>
                  
                </div>
                <div className="800px:mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <BsMessenger size={25} className="text-blue-600" />
                  </div>
                  <div className="w-full">
                  <hr />
                    <h4 className=" text-lg font-bold text-dark">
                      Messenger
                    </h4>
                    <p className="text-base text-body-color">
                      www.messenger.com/me
                    </p>
                  </div>
                  
                </div>
                </div>
      </section>
    </>
  );
};

export default Contact;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="border-gray-500 w-full  rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="border-[gray] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
        />
      </div>
    </>
  );
};

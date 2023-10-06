import React, { useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import { BsMessenger, BsTelephoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiFacebookCircleFill } from "react-icons/ri";
import { toast } from "react-toastify";
import WebNavbar from "./WebNavbar";


const Contact = () => {
 const [name,setName] = useState()
 const [email,setEmail] = useState()
 const [phone,setPhone] = useState()
 const [message,setMessage] = useState()
 const [errorMessage, setErrorMessage] = useState("");
 const [error, setError] = useState("");
 const [isNameValid, setIsNameValid] = useState(false);


  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (phone.length !== 11) {
      return setErrorMessage("Must be exactly 11 digits & start with (09)");
    } else {
      // Perform your submit logic here, e.g., send the phone number to the server.
      // If the input is valid, you can reset the error message and proceed with submission.
      setErrorMessage("");
      // Add your submission code here.
    }

    const nameParts = name.split(" ");

    if (nameParts.length >= 2) {
      // Ensure each part is a valid name (text characters only, capitalized first letters)
      const formattedName = nameParts
        .map((part) =>
          part
            .replace(/[^a-zA-Z\s]/g, "")
            .replace(/\b\w/g, (match) => match.toUpperCase())
        )
        .join(" ");

      setName(formattedName);
      setError("");
      setIsNameValid(true);
    } else {
      setName("");
      setError("Please provide your full name (first name and last name).");
      setIsNameValid(false);
    }

    if (isNameValid) {
      // The name is valid, you can proceed with form submission or any other action here
      console.log("Submitting the form with valid name:", name);
    } else {
      // The name is not valid, do not submit the form
      console.log("Name is not valid. Please correct the input.");
    }

    // if(isNameValid === !name.length){
    //  setIsNameValid(false)
    // }
    if (!isNameValid || !nameParts) {
      return "Please provide the all fields!";
    }
    emailjs.sendForm('service_zmgm25d', 'template_1ugpo8z', form.current, 'RqdYT5pgtORGEK3M8')
      .then((result) => {
          console.log(result.text);
          toast.success("Message sent successful");
          setName("")
          setEmail("")
          setPhone("")
          setMessage("")


      }, (error) => {
          console.log(error.text);
          toast.error("Message not send to Email");
      });



  };
  
  

  return (
    <>
    <WebNavbar/>
      <section
        className="bg-white  800px:pt-20 800px:pb-5  overflow-hidden relative z-10 ease-in duration-300"
        data-aos="fade-down"
        data-aos-delay="400"
      >
        <div className="800px:container">
          <div className="flex flex-wrap  lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="800px:mb-12 800px:max-w-[570px] max-400px:text-center 400px:text-center 390px:text-center lg:mb-0">
                <span className=" mb-4 text-4xl font-bold text-center w-full max-400px:text-[23px] 400px:text-[23px] 390px:text-[23px] ">
                  CONTACT US
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
                  className="max-400px:w-[100%] 400px:w-[100%] "
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
                <form ref={form} onSubmit={sendEmail} >
                {error && <div className="error text-[red]">{error}</div>}
                  <input
                    type="text"
                    name="name"
                    value={name}
                    autoComplete="name"
                    placeholder="Your Full Name"
                    className="border-[gray] w-full mb-6 rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                   required
                   onChange={(e) => setName(e.target.value.replace(/[^A-Za-z ]/g, ""))}
                   
                    
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="border-[gray] w-full mb-6 rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    
                  />
                   {errorMessage && (
                  <div className="error-message text-red-500 max-400px:text-[12px]">
                    {errorMessage}
                  </div>
                )}
               
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    required
                    id="phone"
                    autoComplete="number"
                    maxLength={11}
                    value={phone}
                    className="border-[gray] w-full mb-6 rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  />
                  <textarea
                    row="6"
                    placeholder="Your Message"
                    name="message"
                    defaultValue=""
                    required
                    value={message}
                    className="border-gray-500 w-full mb-6 rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <div>
                    <button
                      type="submit"
                      value="Send"
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
        <div className="flex w-full justify-between max-400px:grid max-400px:grid-cols-1 400px:grid 400px:grid-cols-1 800px:grid 800px:grid-cols-5 max-400px:px-5 428px:px-5">
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



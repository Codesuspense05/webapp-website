import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { TfiBackLeft } from "react-icons/tfi";
import { BiUserCircle } from "react-icons/bi";

const ShopCreate = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState();
  const [avatar, setAvatar] = useState();
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); 
  const [Message,] = useState(""); 
  const [confirmpassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [isValid, setIsValid] = useState(true);
  const [suggestedNumbers, setSuggestedNumbers] = useState([]);


  


  const handleSubmit = async (e) => {

    
    e.preventDefault();



      // You can replace this with an API call to fetch suggested numbers based on user input
    // For this example, we'll simulate some suggested numbers.
    const suggested = ["ex.090****567", " 091****678", "092****789","093****789", "094****789","095****789", "096****789",
    "097****789", "098****789", "099****789"
  
  ].filter(
      (number) => number.startsWith("09" + phoneNumber)
    );
    setSuggestedNumbers(suggested);

    if (!phoneNumber.startsWith('09')) {
      setErrorMessage('Phone number must start with "09"');
      return;
    }

    // Handle the form submission logic here
    // You can submit the form data to your server or perform other actions

    // Clear the error message and reset the input

    



    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    const isValidPassword = regex.test(password);
    setIsValid(isValidPassword);

    const smallLetters = /^(?=.*[a-z])(?=.*\d).{8,}$/;
    const isnotValidPassword = smallLetters.test(password);
    setIsValid(isnotValidPassword);

    if (password === confirmpassword) {
      // Passwords match, you can submit the form or perform other actions here.
      console.log("Passwords match!");
      setPasswordMatch(true);
    } else {
      // Passwords do not match, display an error message.
      console.log("Passwords do not match!");
      setPasswordMatch(false);
    }

    if (password.length < 8) {
      setPassword(password);
      return;
    }

    if (password >= 8) {
      setPassword("");
      setConfirmPassword("");
      return;
    }

    //    if (regex !== password){
    //   setIsValid(isValidPassword)
    //    return;
    //  }

    // Continue with form submission logic here
    // If passwords match, you can submit the form data
    console.log("Form submitted");

    if (password !== confirmpassword) {
      setPasswordMatch(false);
      return;
    }

    
    if (phoneNumber.length !== 11) {
      return setErrorMessage("Must be exactly 11 digits & start with (09)");
    } else {
      // Perform your submit logic here, e.g., send the phone number to the server.
      // If the input is valid, you can reset the error message and proceed with submission.
      setErrorMessage("");
      // Add your submission code here.
    }

    axios
      .post(`${server}/shop/create-shop`, {
        name,
        email,
        password,
        avatar,
        zipCode,
        address,
        phoneNumber,
      })
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setAvatar();
        setZipCode("");
        setAddress("");
        setPhoneNumber("");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });


    

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
  };

  

    

  const handleFileInputChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);

  };



  return (
    <div className="min-h-screen bg-transparent flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-[35rem]">
        <div className="bg-white py-8 px-4 shadow sm:rounded-xl sm:px-10">


      <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
          <img src="https://img.freepik.com/free-vector/scene-beautiful-cityscape-with-hight-building-shop-street-with-park_1150-48968.jpg?size=626&ext=jpg&ga=GA1.1.1737282160.1690642300&semt=sph" alt="" />
        </div>
        
        <div className="p-6">
          <hr />
        <form className="space-y-2 " onSubmit={handleSubmit}>
          
        <div className="flex items-center justify-center border">
           <label
             htmlFor="avatar"
             className="block text-sm font-medium text-gray-700"
           ></label>
           <div className="mt-2 mb-2 flex items-center justify-center">
             <span className="inline-block h-20 w-20 rounded-full border overflow-hidden">
               {avatar ? (
                 <img
                   src={avatar}
                   alt="avatar"
                   className="h-full w-full object-cover rounded-full"
                 />
               ) : (
                 <BiUserCircle size={20} color="gray" className=" h-20 w-20  " />
               )}
             </span>
             <label
               htmlFor="file-input"
               className=" absolute flex items-center justify-center h-20 w-20    rounded-full  text-sm font-medium "
             >
               <span></span>
               <input
                 type="file"
                 name="avatar"
                 id="file-input"
                 onChange={handleFileInputChange}
                 className="sr-only"
               />
             </label>
           </div>
         </div>
         

         <div className="flex">
          
           <div className="mt-1 w-full mr-1">
             <input
               type="name"
               name="name"
               required
               placeholder="Staff Delivery Name..."
               value={name}
               onChange={(e) => setName(e.target.value.replace(/[^A-Za-z ]/g, ""))}
               className="appearance-none block px-1 py-2 w-full border border-blue-400 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
             />
               {error && <div className="error text-[red] text-[12px]">{error}</div>}
           </div>
           
         
         
           <div className="mt-1 w-full">
             <input
               type="tel"
               name="phone-number"
               id="phoneNumber"
               autoComplete="number"
               maxLength={11}
               required
               placeholder="Contact Number..."
               value={phoneNumber}
               onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
               className="appearance-none block w-full px-1 py-2 border border-blue-400 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
             />
              {suggestedNumbers.map((number) => (
                  <div className="text-[green] text-[12px] flex" key={number}>
                    <p>Follow as ex.</p>
                    {number}{" "}
                  </div>
                ))}
             {errorMessage && (
                  <div className="error-message text-red-500 text-[12px]">
                    {errorMessage}
                  </div>
                )}

              {Message && (
                  <div className="error-message text-red-500 text-[12px]">
                    {Message}
                  </div>
                )}
           
         </div>
         </div>

        

         <div className="flex">
          
           <div className="mt-1 w-full">
             <input
               type="email"
               name="email"
               autoComplete="email"
               required
               placeholder="Email Address..."
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className="appearance-none block w-full px-3 py-2 border border-blue-400 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
             />
           </div>
           
         
          
           <div className="mt-1 ml-1">
             <input
               type="tel"
               name="zipcode"
               required
               placeholder="ZIP Code..."
               maxLength={4}
               value={zipCode}
               onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ""))}
               className="appearance-none block w-full px-3 py-2 border border-blue-400 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
             />
           </div>
         
         </div>

         <div>
          
           <div className="mt-1">
             <input
               type="address"
               name="address"
               required
               placeholder=" Type Address..."
               value={address}
               onChange={(e) => setAddress(e.target.value)}
               className="appearance-none block w-full px-3 py-2 border border-blue-400 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
             />
           </div>
         </div>

       

         <div>
           
           <div className="mt-1 relative">
             <input
               type={visible ? "text" : "password"}
               name="password"
               autoComplete="current-password"
               required
               placeholder="Password..."
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className="appearance-none block w-full px-3 py-2 border border-blue-400 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
             />
             
             {visible ? (
               <AiOutlineEye
                 className="absolute right-2 top-2 cursor-pointer"
                 size={25}
                 onClick={() => setVisible(false)}
               />
             ) : (
               <AiOutlineEyeInvisible
                 className="absolute right-2 top-2 cursor-pointer"
                 size={25}
                 onClick={() => setVisible(true)}
               />
             )}
           </div>

         </div>

         <div>
         {!isValid && (
                  <p style={{ color: "red" }} className="max-400:text-[12px]">
                    Password must be at least 8 characters long and contain at
                    least one number and letters.
                  </p>
                )}
             
             
              <div className="mt-1 relative">
                <input
                  type={visible ? "text" : "password"}
                  placeholder="Confirm Password..."
                  name="password"
                  autoComplete="current-password"
                  required
                  value={confirmpassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="h-9 appearance-none block w-full px-3 py-2 border border-blue-400 rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
                 {!passwordMatch && (
                <p style={{ color: "red" }} className="max-400px:text-[12px]">
                  Passwords do not match!
                </p>
              )}

              </div>
            </div>

         

         <div>
           <button
             type="submit"
             
             className="group relative w-full h-[40px] flex justify-center py-2 px-4 border  text-sm font-medium  border-blue-500 rounded-md text-blue-500 bg-transparent hover:bg-blue-700 hover:text-white"
             
           >
             Register as another Shop
           </button>
         </div>
         <div className={`${styles.noramlFlex} flex w-full`}>
           {/* <h4>Already have an account?</h4> */}
           <Link to="/admin/dashboard" className="text-blue-600 pl-2 hover:text-[red] flex">
             <TfiBackLeft size={20}/>Back to Dashboard
           </Link>
         </div>
       </form>
         
        
        </div>
        <div className="p-6 pt-0">
        
        </div>
      </div>

        </div>
      </div>
    </div>
  );
};

export default ShopCreate;

import React, { useState } from "react";
import styles from "../../styles/styles";
// import { Country, State } from "country-state-city";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";
import { AiOutlineArrowRight, AiOutlineNumber } from "react-icons/ai";
import { IoScaleOutline, IoSwapHorizontalOutline } from "react-icons/io5";
import { CgArrowDown,CgNametag } from "react-icons/cg";
import { MdOutlineEmail } from "react-icons/md";
import { BsHouseFill, BsTruck } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { RiCoupon2Fill } from "react-icons/ri";
import { BiHomeAlt, BiPen } from "react-icons/bi";

const Checkout = () => {
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  // const [country, setCountry] = useState("");
  // const [city, setCity] = useState("");
  const [userInfo, setUserInfo] = useState(false);
  const [penname, setPenName] = useState("");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [zipCode, setZipCode] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const [couponCodeData, setCouponCodeData] = useState(null);
  const [discountPrice, setDiscountPrice] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const paymentSubmit = () => {
   if(address === "" || landmark === "" || penname === ""){
      toast.error("Please Provide complete Info")
   } else{
    const shippingAddress = {
      address,
      landmark,
      zipCode,
      penname
      // country,
      // city,
    };

    const orderData = {
      cart,
      totalPrice,
      subTotalPrice,
     // shipping,
      discountPrice,
      shippingAddress,
      user,
      penname
    }

    // update local storage with the updated orders array
    localStorage.setItem("latestOrder", JSON.stringify(orderData));
    navigate("/payment");
   }
  };

  const subTotalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discountPrice,
    0
  );

  // this is shipping cost variable
  //const shipping = subTotalPrice * 0.1;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = couponCode;

    await axios.get(`${server}/coupon/get-coupon-value/${name}`).then((res) => {
      const shopId = res.data.couponCode?.shopId;
      const couponCodeValue = res.data.couponCode?.value;
      if (res.data.couponCode !== null) {
        const isCouponValid =
          cart && cart.filter((item) => item.shopId === shopId);

        if (isCouponValid.length === 0) {
          toast.error("Coupon code is not valid for this shop");
          setCouponCode("");
        } else {
          const eligiblePrice = isCouponValid.reduce(
            (acc, item) => acc + item.qty * item.discountPrice,
            0
          );
          const discountPrice = (eligiblePrice * couponCodeValue) / 100;
          setDiscountPrice(discountPrice);
          setCouponCodeData(res.data.couponCode);
          setCouponCode("");
        }
      }
      if (res.data.couponCode === null) {
        toast.error("Discount code doesn't exists!");
        setCouponCode("");
      }
    });
  };

  const discountPercentenge = couponCodeData ? discountPrice : "";

  const totalPrice = couponCodeData
    ? (subTotalPrice  - discountPercentenge).toFixed(2)
    : (subTotalPrice).toFixed(2);

  console.log(discountPercentenge);

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-[90%] 1000px:w-[70%] block 800px:flex">
        <div className="w-full 800px:w-[65%]">
          <ShippingInfo
            user={user}
           
            // setCountry={setCountry}
            // city={city}
            // setCity={setCity}
            penname={penname}
            setPenName={setPenName}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            address={address}
            setAddress={setAddress}
           landmark={landmark}
            setLandmark={setLandmark}
            zipCode={zipCode}
            setZipCode={setZipCode}
          />
        </div>
        <div className="w-full 800px:w-[35%] 800px:mt-0 mt-8">
          <CartData
            handleSubmit={handleSubmit}
            totalPrice={totalPrice}
            //shipping={shipping}
            subTotalPrice={subTotalPrice}
            couponCode={couponCode}
            setCouponCode={setCouponCode}
            discountPercentenge={discountPercentenge}
          />
        </div>
      </div>
      <div
        className={`${styles.button} max-400px:w-[250px] 400px:w-[250px] 800px:w-[240px] mt-10`}
        onClick={paymentSubmit}
      >
       <h5 className="text-white max-400px:text-[15px] ">Proceed to Payment Method</h5> <AiOutlineArrowRight className="text-white text-[20px]"/>
      </div>
    </div>
  );
};

const ShippingInfo = ({
  user,
  // country,
  // setCountry,
  // city,
  // setCity,
  penname,
  setPenName,
  userInfo,
  setUserInfo,
  address,
  setAddress,
 landmark,
  setLandmark,
  
  // zipCode,
  // setZipCode,
  
}) => {
  return (
    
    <div className=" w-full 800px:w-[65%] bg-white rounded-md p-5 pb-8  border-[2px] justify-end">
      
      <h5 className="text-[18px] font-[500]"><div className="flex justify-between"><BiHomeAlt size={25}/> | Home Delivery Address</div></h5>
      <br />
      <form>
        <div className="w-full flex pb-3">
          <div className="w-[100%] mr-1">
            <label className="block pb-2"><div className="flex"><CgNametag size={25} color="gray"/>Full Name</div></label>
            <input
              type="text"
              value={user.name}
              required
              className={`${styles.input} !w-[100%] border border-gray-400`}
            />
          </div>
          <div className="w-[100%]">
            <label className="block pb-2"><div className="flex"><AiOutlineNumber size={25} color="gray"/>Phone Number</div></label>
            <input
              type="number"
              required
              value={user && user.phoneNumber}
              className={`${styles.input} !w-[100%] border border-gray-400`}
            />
          </div>
         
        
        </div>

        <div className="w-full flex pb-3">
        <div className="w-[100%]">
            <label className="block pb-2"><div className="flex"><MdOutlineEmail size={25} color="gray"/>Email Address</div></label>
            <input
              type="email"
              value={user && user.email}
              required
              className={`${styles.input} border border-gray-400`}
            />
          </div>

          {/* <div className="w-[50%]">
            <label className="block pb-2">Zip Code</label>
            <input
              type="number"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
              className={`${styles.input}`}
            />
          </div> */}
        </div>
        <hr />
      
        <div className="w-full flex pb-3">
          {/* <div className="w-[50%]">
            <label className="block pb-2">Country</label>
            <select
              className="w-[95%] border h-[40px] rounded-[5px]"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option className="block pb-2" value="">
                Choose your country
              </option>
              {Country &&
                Country.getAllCountries().map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div> */}
         
        </div>
        <div className="w-full flex pb-3">
          <div className="w-[100%]">
            <label className="block pb-2"><div className="flex"><BiPen size={20} color="gray"/> Pen Name</div></label>
            <input
              type="name"
              required
              value={penname}
              onChange={(e) => setPenName(e.target.value)}
              className={`${styles.input} !w-[100%] border border-gray-400`}
            />
            
           
          </div>
         
        </div>

        <div className="w-full flex pb-3">
          <div className="w-[100%]">
            <label className="block pb-2"><div className="flex"><BsHouseFill size={22} color="gray"/> Home Address</div></label>
            <input
              type="address"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className={`${styles.input} !w-[100%] border border-gray-400`}
            />
            
             <div className="w-[100%] mt-1">
            
            <label className="block pb-2"><div className="flex"><HiLocationMarker size={22} color="gray"/>Land Mark</div></label>
            <input
              type="address"
              value={landmark}
              onChange={(e) => setLandmark(e.target.value)}
              required
              className={`${styles.input} border border-gray-400`}
            />
          </div>
          </div>
         
        </div>

        <div></div>
      </form>
      <h5
        className="text-[18px] cursor-pointer inline-block max-400px:text-[17px]"
        onClick={() => setUserInfo(!userInfo)}
      >
        <div className="flex"><CgArrowDown size={25}/>Choose default Home Address </div>
      </h5>
      {userInfo && (
        <div>
          {user &&
            user.addresses.map((item, index) => (
              <div className="w-full flex mt-1">
                <input
                  type="checkbox"
                  className="mr-3"
                  value={item.addressType}
                  onClick={() =>
                    setAddress(item.address) ||
                    setLandmark(item.landmark) 
                    // setZipCode(item.zipCode) ||
                    // setCountry(item.country) ||
                    // setCity(item.city)
                  }
                />
                <h2>{item.addressType}</h2>
              </div>
            ))}
            
        </div>
        
      )}
      <div className="bg-blue-500 h-1"></div>
      
    </div>
    
  );
  
};

const CartData = ({
  handleSubmit,
  totalPrice,
  //shipping,
  subTotalPrice,
  couponCode,
  setCouponCode,
  discountPercentenge,
}) => {
  return (
    
    <div className=" w-full bg-[#fff] h-full rounded-md p-5 pb-8 border-[2px]">
   
    <div className="flex items-center justify-between"> <RiCoupon2Fill color="red" size={40}/> <RiCoupon2Fill  color="red" size={40}/></div>
    <br />
      <div className="flex justify-between">
      <IoScaleOutline className="text-[30px] text-blue-500"/><h3 className="text-[16px] font-[400] text-[#000000a4]">Subtotal:</h3>
        <h5 className="text-[18px] font-[600]">P{subTotalPrice}</h5>
      </div>
      <br />
      <div className="flex justify-between">
      <BsTruck className="text-[30px] text-blue-500"/><h3 className="text-[16px] font-[400] text-[#000000a4]">Delivery Fee:</h3>
        <h5 className="text-[18px] font-[600]">Free</h5>
      </div>
      <br />
      <div className="flex justify-between border-b pb-3">
      <IoSwapHorizontalOutline className="text-[30px] text-blue-500"/><h3 className="text-[16px] font-[400] text-[#000000a4]">Discount:</h3>
        <h5 className="text-[18px] font-[600]">
          - {discountPercentenge ? "P" + discountPercentenge.toString() : null}
        </h5>
      </div>
      <h5 className="text-[18px] font-[600] text-end pt-3">P{totalPrice}</h5>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className={`${styles.input} h-[40px] pl-2`}
          placeholder="Input Discount Code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          required
        />
        <input
          className={`w-full h-[40px] border border-blue-500 text-center text-blue-500 rounded-[3px] mt-8 cursor-pointer`}
          required
          value="Apply Discount Code"
          type="submit"
        />
      </form>
      <div className="bg-blue-500 h-1"></div>
    </div>
    
  );
};


export default Checkout;
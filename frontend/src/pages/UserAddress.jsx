import { useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { deleteUserAddress, updatUserAddress } from "../redux/actions/user";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineDelete, AiOutlinePlusCircle } from "react-icons/ai";
import styles from "../styles/styles";
import { toast } from "react-toastify";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";

const UserAddress = () => {
    const [open, setOpen] = useState(false);
    const [zipCode, setZipCode] = useState();
    const [address, setAddress] = useState("");
    const [landmark, setLandmark] = useState("");
    const [addressType, setAddressType] = useState("");
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
  
    const addressTypeData = [
      {
        name: "Default",
      },
      {
        name: "Home",
      },
      {
        name: "Office",
      },
    ];
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (addressType === "") {
        toast.error("Please fill all the fields!");
      } else {
        dispatch(
          updatUserAddress(
            
            address,
            landmark,
            zipCode,
            addressType
          )
        );
        setOpen(false);
        setAddress("");
        setLandmark("");
        setZipCode(null);
        setAddressType("");
      }
    };
  
    const handleDelete = (item) => {
      const id = item._id;
      dispatch(deleteUserAddress(id));
    };
  
    return (
      <div className="w-full p-2">
          <div>
        <Link to={"/"}><div className="flex bg-blue-500 h-10 w-full rounded-t-[4px] items-center "><BsArrowLeft size={20} color="white" className="m-2"/> <h2 className="text-white">Address</h2></div></Link>
        </div>
        {open && (
          <div className="fixed w-full h-screen bg-[#0000004b] top-0 left-0 flex items-center justify-center ">
            <div className="w-[35%] h-[80vh] bg-white rounded shadow relative overflow-x-scroll max-400px:w-[80%]">
              <div className="w-full flex justify-end p-3">
                <RxCross1
                  size={30}
                  className="cursor-pointer"
                  onClick={() => setOpen(false)}
                />
              </div>
              <h1 className="text-center text-[25px] font-Poppins">
                Add New Address
              </h1>
              <div className="w-full">
                <form props-required onSubmit={handleSubmit} className="w-full">
                  <div className="w-full block p-4">
                    
  
                    
  
                    <div className="w-full pb-2">
                      <label className="block pb-2">Address</label>
                      <input
                        type="address"
                        className={`${styles.input}`}
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className="w-full pb-2">
                      <label className="block pb-2">Landmark</label>
                      <input
                        type="address"
                        className={`${styles.input}`}
                        required
                        value={landmark}
                        onChange={(e) => setLandmark(e.target.value)}
                      />
                    </div>
  
                    <div className="w-full pb-2">
                      <label className="block pb-2">Zip Code</label>
                      <input
                        type="number"
                        className={`${styles.input}`}
                        required
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                      />
                    </div>
  
                    <div className="w-full pb-2">
                      <label className="block pb-2">Address Type</label>
                      <select
                        name=""
                        id=""
                        value={addressType}
                        onChange={(e) => setAddressType(e.target.value)}
                        className="w-[95%] border h-[40px] rounded-[5px]"
                      >
                        <option value="" className="block border pb-2">
                          Choose your Address Type
                        </option>
                        {addressTypeData &&
                          addressTypeData.map((item) => (
                            <option
                              className="block pb-2"
                              key={item.name}
                              value={item.name}
                            >
                              {item.name}
                            </option>
                          ))}
                      </select>
                    </div>
  
                    <div className=" w-full pb-2">
                      <input
                        type="submit"
                        className={`${styles.input} mt-5 cursor-pointer`}
                        required
                        readOnly
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        <br />
        <hr />
        <div className="flex w-full items-center justify-between mt-2 mb-2">
          <HiLocationMarker size={20} color="red"/><h1 className="text-[18px] font-[600] text-[#000000ba] ">
            My Addresses
          </h1>
          <AiOutlinePlusCircle
            size={25}
            className="text-blue-500 cursor-pointer"
            onClick={() => setOpen(true)}
          />
           
          
        </div>
        
        <hr />




        
        {user &&
          user.addresses.map((item, index) => (
            <div
              className="w-full bg-gray-50 h-min 800px:h-[70px] max-400px:h-[70px] rounded-[4px] flex  items-center px-2 shadow justify-between  mb-1"
              key={index}
            >
              <div className="">
              
                <h5 className=" font-[600] max-400px:text-[13px]">
                    {item.addressType}</h5><br /><br />
              </div>
              <div className="flex items-center">
                <h6 className=" pt-2 text-[11px] 800px:text-[unset]  pr-2 ">
                  {item.address} {item.landmark}, #{user && user.phoneNumber}
                </h6>
              </div>
            
              <div className="min-w-[10%] flex items-center justify-between  ">
                <AiOutlineDelete
                  
                  className="cursor-pointer text-red-500 max-400px:text-[20px] 800px:text-[25px] max-400px:pl-1"
                  onClick={() => handleDelete(item)}
                />
              </div>
            </div>
          ))}
  
        {user && user.addresses.length === 0 && (
          <h5 className="text-center pt-8 text-[18px]">
            You not have any saved address!
          </h5>
        )}
      </div>
    );
  };

  export default UserAddress
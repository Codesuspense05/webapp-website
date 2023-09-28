import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import styles from "../styles/styles";
import { server } from "../server";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const passwordChangeHandler = async (e) => {
      e.preventDefault();
  
      await axios
        .put(
          `${server}/user/update-user-password`,
          { oldPassword, newPassword, confirmPassword },
          { withCredentials: true }
        )
        .then((res) => {
          toast.success(res.data.success);
          setOldPassword("");
          setNewPassword("");
          setConfirmPassword("");
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        });
    };
    return (
      <div className="w-full p-5 border">
          <div>
        <Link to={"/"}><div className="flex bg-blue-500 h-10 w-full rounded-t-[4px] items-center "><BsArrowLeft size={20} color="white" className="m-2"/> <h2 className="text-white">Change Password</h2></div></Link>
        </div>
        
        <h1 className="block text-[20px] text-center font-[600] text-[#000000ba] pb-2 pt-5">
        🔏 Change Password
        </h1>
        <hr />
        <div className="w-full p-6">
          <form
            props-required
            onSubmit={passwordChangeHandler}
            className="flex flex-col items-center"
          >
            <div className=" w-[100%] 800px:w-[50%] mt-5">
              <label className="block pb-2">Enter your old password</label>
              <input
                type="password"
                className={`${styles.input} !w-[100%] mb-4 800px:mb-0`}
                placeholder="Enter your old Password..."
                required
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div className=" w-[100%] 800px:w-[50%] mt-2">
              <label className="block pb-2">Enter your new password</label>
              <input
                type="password"
                className={`${styles.input} !w-[100%] mb-4 800px:mb-0`}
                required
                placeholder="Enter your new Password..."
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className=" w-[100%] 800px:w-[50%] mt-2">
              <label className="block pb-2">Enter your confirm password</label>
              <input
                type="password"
                className={`${styles.input} !w-[100%] mb-4 800px:mb-0`}
                placeholder=" Confirm Password..."
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <input
                className={`w-[100%] h-[35px] border border-[#3a24db] text-center hover:bg-blue-500 hover:text-white text-[#3a24db] rounded-full mt-8 cursor-pointer`}
                required
                value="Update Password"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default ChangePassword;
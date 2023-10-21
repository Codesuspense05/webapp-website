// import React, { Fragment, useState, useEffect } from "react";
// import Loading from "../../components/Layout/Loader";
// // import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import { useDispatch, useSelector } from "react-redux";
// import { clearErrors, forgotPassword } from "../../redux/actions/user";
// import { ToastContainer, toast } from 'react-toastify';
// // import MetaData from "../../more/Metadata";

// const  ForgotPassword = () => {
//     const dispatch = useDispatch();
//     const { error, message} = useSelector((state) => state.user);
    
  
//     const [email, setEmail] = useState("");
  
//     const forgotPasswordSubmit = (e) => {
//       e.preventDefault();
  
//       const myForm = new FormData();
  
//       myForm.set("email", email);
//       dispatch(forgotPassword(myForm));
//     };
  
//     useEffect(() => {
//       if (error) {
//         toast.error(error);
//         dispatch(clearErrors());
//       }
  
//       if (message) {
//         toast.success(message);
//       }
//     }, [dispatch, error, message]);
  
//    return(
//     <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-gray-500">
//               <div className="forgotPasswordBox">
//                 <h2 className="forgotPasswordHeading">Forgot Password</h2>
  
//                 <form
//                   className="forgotPasswordForm"
//                   onSubmit={forgotPasswordSubmit}
//                 >
//                   <div className="forgotPasswordEmail">
                    
//                     <input
//                       type="email"
//                       placeholder="Email"
//                       required
//                       name="email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                   </div>
  
//                   <input
//                     type="submit"
//                     value="Send"
//                     className="forgotPasswordBtn"
//                   />
//                 </form>
//               </div>
//               </div>

//    );
//    }
  
// export default ForgotPassword

// import axios from "axios";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AcmeLogo } from "./AcmeLogo.jsx";
// import PasswordRecovery from "./PasswordRecovery";
// import { useTextareaContext } from './TextareaProvider'; // Import context

// function SignInForm() {
//   const [state, setState] = useState({
//     email: "",
//     password: "",
//     newPassword: "",
//     confirmPassword: "",
//     otp: "",
//   });
//   const { setUserEmail } = useTextareaContext();
  
//   const [showPassword, setShowPassword] = useState(false);
//   const [isRecovering, setIsRecovering] = useState(false);
//   const [validationError, setValidationError] = useState("");

//   const [isConfirming, setIsConfirming] = useState(false);
//   const navigate = useNavigate();


//   const handleChange = (evt) => {
//     const value = evt.target.value;
//     setState({
//       ...state,
//       [evt.target.name]: value,
//     });
//     setValidationError(""); // Clear error on change

//   };

//   const handleOnSubmit = async (evt) => {
//     evt.preventDefault();
//     const { email, password } = state;

//     if (!email || !password) {
//       setValidationError("All fields are required.");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:3000/signin", { email, password });

//       if (response.status === 200) {
//         setUserEmail(email);
//         setValidationError("");
//         navigate("/landing"); // Navigate to another page after successful sign-in
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         setValidationError("Invalid email or password.");
//       } else {
//         setValidationError("An error occurred during sign-in.");
//       }
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSocialLogin = (provider) => {
//     console.log(`Logging in with ${provider}`);
//   };

//   const handleForgotPassword = () => {
//     setState({ email: "", password: "", otp: "" }); // Clear password fields
//     setIsRecovering(true); // Proceed to password recovery
//   };

//   const handleConfirm = () => {
//     // Logic for confirming OTP and showing password fields
//     const { email, otp } = state;
//     alert(`OTP confirmed for email: ${email}`);
//     setIsConfirming(true); // Proceed to password change
//   };

//   return (
//     <div className="form-container sign-in-container">
//       <form onSubmit={handleOnSubmit} className="space-y-4">
//         <h1 className="text-2xl font-bold">
//           {isRecovering
//             ? "Recover Account"
//             : isConfirming
//               ? "Change Password"
//               : "Sign in"}
//         </h1>
//         {isRecovering ? (
//           <PasswordRecovery
//             state={state}
//             handleChange={handleChange}
//             handleConfirm={handleConfirm}
//             isConfirming={isConfirming}
//             handleOnSubmit={handleOnSubmit}
//           />
//         ) : (
//           <>
//             {!isConfirming && (
//               <>
//                 <div className="flex justify-center space-x-4">
//                 <AcmeLogo/>
//                   {/* <button
//                     type="button"
//                     className="social"
//                     onClick={() => handleSocialLogin("facebook")}
//                   >
                    
//                     <i className="fab fa-facebook-f text-blue-500" />
//                   </button> */}
//                   {/* <button
//                     type="button"
//                     className="social"
//                     onClick={() => handleSocialLogin("google")}
//                   >
//                     <i className="fab fa-google-plus-g text-red-500" />
//                   </button> */}
//                 </div>
//                 <span className="text-gray-600">Market Ease Plus</span>
//               </>
//             )}
//             <input
//               type="email"
//               placeholder="Email"
//               name="email"
//               value={state.email}
//               onChange={(e) => setState({ ...state, email: e.target.value })}
//               className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
//             />
//             <div className="flex items-center bg-gray-200 rounded-lg">
//               <input
//                 type={showPassword ? "text" : "password"}
//                 name="password"
//                 placeholder="Password"
//                 value={state.password}
//                 onChange={(e) => setState({ ...state, password: e.target.value })}
//                 className="w-full px-4 py-2 bg-transparent focus:outline-none"
//               />
//               <button
//                 type="button"
//                 className="px-4 flex items-center text-gray-500"
//                 onClick={togglePasswordVisibility}
//               >
//                 {showPassword ? (
//                   <svg
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//             <a
//               href="#"
//               className="text-sm text-gray-600 hover:underline"
//               onClick={handleForgotPassword}
//             >
//               Forgot your password?
//               <br />
//               {validationError && (
//                 <div className="text-red-600 text-sm">
//                   {validationError}
//                 </div>
//               )}
//             </a>
//             <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors duration-300">
//               Sign In
//             </button>
//           </>
//         )}
//       </form>
//     </div>
//   );
// }

// export default SignInForm;








import axios from "axios";
import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AcmeLogo } from "./AcmeLogo.jsx";
import PasswordRecovery from "./PasswordRecovery";
import { useTextareaContext } from './TextareaProvider'; // Import context

function SignInForm() {
  const [state, setState] = useState({
    email: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
    otp: "",
  });
  const { setUserEmail } = useTextareaContext();
  
  const [showPassword, setShowPassword] = useState(false);
  const [isRecovering, setIsRecovering] = useState(false);
  const [validationError, setValidationError] = useState("");

  const [isConfirming, setIsConfirming] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const { email, isSignedIn } = getUserState();
    if (isSignedIn) {
      setUserEmail(email);
      navigate("/landing"); // Navigate to the last page the user was on
    }
  }, [setUserEmail, navigate]);

  const saveUserState = (email, isSignedIn) => {
    localStorage.setItem('userEmail', email);
    localStorage.setItem('isSignedIn', isSignedIn.toString());
  };
  
  const getUserState = () => {
    const email = localStorage.getItem('userEmail');
    const isSignedIn = localStorage.getItem('isSignedIn') === 'true';
    return { email, isSignedIn };
  };


  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
    setValidationError(""); // Clear error on change

  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();
    const { email, password } = state;

    if (!email || !password) {
      setValidationError("All fields are required.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/signin", { email, password });

      if (response.status === 200) {
        setUserEmail(email);
        setValidationError("");
        saveUserState(email, true); // Save user state to local storage
        navigate("/landing"); 
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setValidationError("Invalid email or password.");
      } else {
        setValidationError("An error occurred during sign-in.");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
  };

  const handleForgotPassword = () => {
    setState({ email: "", password: "", otp: "" }); // Clear password fields
    setIsRecovering(true); // Proceed to password recovery
  };

  const handleConfirm = () => {
    // Logic for confirming OTP and showing password fields
    const { email, otp } = state;
    alert(`OTP confirmed for email: ${email}`);
    setIsConfirming(true); // Proceed to password change
  };

  return (
    <div className="form-container sign-in-container">
      <form onSubmit={handleOnSubmit} className="space-y-4">
        <h1 className="text-2xl font-bold">
          {isRecovering
            ? "Recover Account"
            : isConfirming
              ? "Change Password"
              : "Sign in"}
        </h1>
        {isRecovering ? (
          <PasswordRecovery
            state={state}
            handleChange={handleChange}
            handleConfirm={handleConfirm}
            isConfirming={isConfirming}
            handleOnSubmit={handleOnSubmit}
          />
        ) : (
          <>
            {!isConfirming && (
              <>
                <div className="flex justify-center space-x-4">
                <AcmeLogo/>
                  {/* <button
                    type="button"
                    className="social"
                    onClick={() => handleSocialLogin("facebook")}
                  >
                    
                    <i className="fab fa-facebook-f text-blue-500" />
                  </button> */}
                  {/* <button
                    type="button"
                    className="social"
                    onClick={() => handleSocialLogin("google")}
                  >
                    <i className="fab fa-google-plus-g text-red-500" />
                  </button> */}
                </div>
                <span className="text-gray-600">Market Ease Plus</span>
              </>
            )}
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={state.email}
              onChange={(e) => setState({ ...state, email: e.target.value })}
              className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
            />
            <div className="flex items-center bg-gray-200 rounded-lg">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={state.password}
                onChange={(e) => setState({ ...state, password: e.target.value })}
                className="w-full px-4 py-2 bg-transparent focus:outline-none"
              />
              <button
                type="button"
                className="px-4 flex items-center text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <a
              href="#"
              className="text-sm text-gray-600 hover:underline"
              onClick={handleForgotPassword}
            >
              Forgot your password?
              <br />
              {validationError && (
                <div className="text-red-600 text-sm">
                  {validationError}
                </div>
              )}
            </a>
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors duration-300">
              Sign In
            </button>
          </>
        )}
      </form>
    </div>
  );
}

export default SignInForm;

// import React, { useState } from "react";
// import axios from "axios";

// function SignUpForm() {
//   const [state, setState] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [validationError, setValidationError] = useState(""); // To store error messages
//   const [isRegistered, setIsRegistered] = useState(false); // To track registration status


//   const handleChange = (evt) => {
//     const { name, value } = evt.target;
//     setState((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//     setValidationError(""); // Clear any existing error message when changing input
//   };

//   const validateForm = () => {
//     const { name, email, password } = state;

//     if (!name || !email || !password) {
//       return "All fields are required.";
//     }

//     if (/^\d/.test(name)) {
//       return "Username should not start with a digit.";
//     }

//     if (/^\d/.test(email)) {
//       return "Email should not start with a digit.";
//     }

//     // Basic email pattern validation
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//       return "Invalid email format.";
//     }

//     // Password must contain at least 8 characters, 1 special character, and 1 digit
//     const passwordPattern = /^(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
//     if (!passwordPattern.test(password)) {
//       return "Password must be at least 8 characters, contain one special character, and one digit.";
//     }

//     return "";
//   };

//   const handleOnSubmit = async (evt) => {
//     evt.preventDefault();

//     const error = validateForm(); // Validate before submitting
//     if (error) {
//       setValidationError(error);
//       return; // If validation fails, do not proceed
//     }

//     try {
//       const response = await axios.post("http://localhost:3000/signup", {
//         name: state.name,
//         email: state.email,
//         password: state.password,
//       });

//       if (response.status === 201) {
//         setState({
//           name: "",
//           email: "",
//           password: "",
//         });
//         setValidationError(""); // Clear any error message
//         setIsRegistered(true);
//       }
//     } catch (error) {
//       if (error.response && error.response.status === 409) {
//         setValidationError("Email already exists.");
//       } else {
//         setValidationError("An error occurred during registration.");
//       }
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSocialLogin = (provider) => {
//     console.log(`Logging in with ${provider}`);
//   };

//   return (
//     <div className="form-container sign-up-container">
//       <form onSubmit={handleOnSubmit} className="space-y-4">
//         <h1 className="text-2xl font-bold">Create Account</h1>
//         <div className="flex justify-center space-x-4">
//           <button
//             type="button"
//             className="social"
//             onClick={() => handleSocialLogin("facebook")}
//           >
//             <i className="fab fa-facebook-f text-blue-500" />
//           </button>
//           <button
//             type="button"
//             className="social"
//             onClick={() => handleSocialLogin("google")}
//           >
//             <i className="fab fa-google-plus-g text-red-500" />
//           </button>
//         </div>
//         <span className="text-gray-600">Or use your email for registration</span>
//         <input
//           type="text"
//           name="name"
//           value={state.name}
//           onChange={handleChange}
//           placeholder="name"
//           className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
//         />
//         <input
//           type="email"
//           name="email"
//           value={state.email}
//           onChange={handleChange}
//           placeholder="Email"
//           className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
//         />
//         <div className="flex items-center bg-gray-200 rounded-lg">
//           <input
//             type={showPassword ? "text" : "password"}
//             name="password"
//             value={state.password}
//             onChange={handleChange}
//             placeholder="Password"
//             className="w-full px-4 py-2 bg-transparent focus:outline-none"
//           />
//           <button
//             type="button"
//             className="px-4 flex items-center text-gray-500"
//             onClick={togglePasswordVisibility}
//           >
//             {showPassword ? (
//               <svg
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
//                 />
//               </svg>
//             ) : (
//               <svg
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>

//         {/* Display error message if any */}
//         {/* Display error message if any */}
//         {validationError && (
//           <div className="text-red-600 text-sm">
//             {validationError}
//           </div>
//         )}

//         {/* Conditional rendering based on registration status */}
//         {!isRegistered ? (
//           <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors duration-300">
//             Sign Up
//           </button>
//         ) : (
//           <div className="text-green-600 text-sm">
//             Successfully Registered! Please Sign In.
//           </div>
//         )}
//       </form>
//     </div>
//   );
// }

// export default SignUpForm;


import axios from "axios";
import React, { useState } from "react";
import { AcmeLogo } from "./AcmeLogo.jsx";

function SignUpForm() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState(""); // To store error messages
  const [isRegistered, setIsRegistered] = useState(false); // To track registration status


  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setValidationError(""); // Clear any existing error message when changing input
  };

  const validateForm = () => {
    const { name, email, password } = state;

    if (!name || !email || !password) {
      return "All fields are required.";
    }

    if (/^\d/.test(name)) {
      return "Username should not start with a digit.";
    }

    if (/^\d/.test(email)) {
      return "Email should not start with a digit.";
    }

    // Basic email pattern validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return "Invalid email format.";
    }

    // Password must contain at least 8 characters, 1 special character, and 1 digit
    const passwordPattern = /^(?=.\d)(?=.[@$!%?&#])[A-Za-z\d@$!%?&#]{8,}$/;
    if (!passwordPattern.test(password)) {
      return "Password must be at least 8 characters, contain one special character, and one digit.";
    }

    return "";
  };

  const handleOnSubmit = async (evt) => {
    evt.preventDefault();

    const error = validateForm(); // Validate before submitting
    if (error) {
      setValidationError(error);
      return; // If validation fails, do not proceed
    }

    try {
      const response = await axios.post("http://localhost:3000/signup", {
        name: state.name,
        email: state.email,
        password: state.password,
      });

      if (response.status === 201) {
        setState({
          name: "",
          email: "",
          password: "",
        });
        setValidationError(""); // Clear any error message
        setIsRegistered(true);
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setValidationError("Email already exists.");
      } else {
        setValidationError("An error occurred during registration.");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
  };

  return (
    <div className="form-container sign-up-container">
      <form onSubmit={handleOnSubmit} className="space-y-4">
        <h1 className="text-2xl font-bold">Create Account</h1>
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
        <span className="text-gray-600">Use your email for registration</span>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="name"
          className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
        />
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-2 rounded-lg bg-gray-200 focus:outline-none focus:bg-white"
        />
        <div className="flex items-center bg-gray-200 rounded-lg">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={state.password}
            onChange={handleChange}
            placeholder="Password"
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

        {/* Display error message if any */}
        {/* Display error message if any */}
        {validationError && (
          <div className="text-red-600 text-sm">
            {validationError}
          </div>
        )}

        {/* Conditional rendering based on registration status */}
        {!isRegistered ? (
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors duration-300">
            Sign Up
          </button>
        ) : (
          <div className="text-green-600 text-sm">
            Successfully Registered! Please Sign In.
          </div>
        )}
      </form>
    </div>
  );
}

export default SignUpForm;








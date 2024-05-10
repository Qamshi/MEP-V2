

// import React, { useState } from "react";
// import { FaBug, FaLightbulb, FaUserCircle } from 'react-icons/fa';
// import { useNavigate } from "react-router-dom";
// import "./App.css";
// // import Footer from "./Footer";
// import './App.css';
// import Navbar2 from "./Navbar2";
// const Feedback = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [feedback, setFeedback] = useState('');
//   const [type, setType] = useState('general');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     // Prepare the request body
//     const requestBody = {
//       projectId: "663b2d52c750c70002019467",
//       feedbackMsg: feedback,
//       feedbackType: type,
//       feedbackEmail: email,
//       subProject: "", // Set this field if you have a subProject
//       feedbackSrc: "" // Set this field if you have a feedbackSrc
//     };
  
//     try {
//       // Send the POST request
//       const response = await fetch("https://feeder-node-1337.herokuapp.com/feedback/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(requestBody)
//       });
  
//       // Check if the request was successful
//       if (response.ok) {
//         console.log("Feedback submitted successfully");
//         // Reset form fields
//         setEmail("");
//         setFeedback("");
//         setType("general");
//       } else {
//         console.error("Failed to submit feedback");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div style={{ height: "530px", width: "640px", overflow: "hidden" }} className="z-index-1">
//       <Navbar2 />
//       <div className="relative isolate px-6 pt-14 lg:px-8 z-index-1">
//         <div
//           className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
//           aria-hidden="true"
//         >
//           <div
//             className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//           />
//         </div>
//         <h1 className="text-3xl font-bold mb-4 text-center text-indigo-600">
//           User Feedback
//         </h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block font-medium mb-2 text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="border-indigo-300 border-2 rounded-md px-3 py-2 w-[310px] focus:outline-none focus:ring-2 focus:ring-indigo-300"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="feedback" className="block font-medium mb-2 text-gray-700">
//               Feedback
//             </label>
//             <textarea
//               id="feedback"
//               value={feedback}
//               onChange={(e) => setFeedback(e.target.value)}
//               className="border-indigo-300 border-2 rounded-md px-3 py-1 w-[555px] resize-none focus:outline-none focus:ring-2 focus:ring-indigo-300"
//               placeholder="Enter your feedback"
//               rows={3}
//               required
//             ></textarea>
//           </div>
//           <div className="mb-4 flex items-center space-x-4">
//             <button
//               type="button"
//               className={`flex items-center px-4 py-2 rounded-md ${
//                 type === 'general'
//                   ? 'bg-indigo-500 text-white'
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//               onClick={() => setType('general')}
//             >
//               <FaUserCircle className="mr-2" />
//               General
//             </button>
//             <button
//               type="button"
//               className={`flex items-center px-4 py-2 rounded-md ${
//                 type === 'bug'
//                   ? 'bg-indigo-500 text-white'
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//               onClick={() => setType('bug')}
//             >
//               <FaBug className="mr-2" />
//               Bug
//             </button>
//             <button
//               type="button"
//               className={`flex items-center px-4 py-2 rounded-md ${
//                 type === 'idea'
//                   ? 'bg-indigo-500 text-white'
//                   : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
//               }`}
//               onClick={() => setType('idea')}
//             >
//               <FaLightbulb className="mr-2" />
//               Idea
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-medium py-2 px-4 rounded-md w-full hover:from-indigo-600 hover:to-blue-600 transition-colors duration-300"
//           >
//             Submit Feedback
//           </button>
//         </form>
//         <div
//           className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//           aria-hidden="true"
//         >
//           <div
//             className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//             style={{
//               clipPath:
//                 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//             }}
//           />
//         </div>
//       </div>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default Feedback;

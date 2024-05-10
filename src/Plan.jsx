// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight } from "react-feather";
// import { useNavigate } from "react-router-dom";
// import "./App.css";
// import Footer from "./Footer";
// import Navbar2 from "./Navbar2";
// import Tabs from "./Tabs";
// import TextArea1 from "./TextArea1";
// import TextArea2 from "./TextArea2";
// import { useTextareaContext } from './TextareaProvider'; // Use the context

// const Plan = () => {
//   const { productName, setProductName, websiteURL, setWebsiteURL, phoneNumber, setPhoneNumber, productDescription, setProductDescription } = useTextareaContext();
//   const navigate = useNavigate();
//     const [showTextArea2, setShowTextArea2] = useState(false);
    
//     const handleNextClick = () => {
//         setShowTextArea2(true);
      
//       };
    
//       const handlePrevClick = () => {
//         setShowTextArea2(false);
//       };
//       const handleOptionsPage = () => {
//         navigate("/options"); // Navigate to the options page
//     };

// return (
//         <div style={{ height: "530px", width: "640px", overflow: "hidden" }} className="z-index-1">
//         <Navbar2 />
        
//         <div className="relative isolate px-6 pt-14 lg:px-8 z-index-1">
//         {showTextArea2 ? (<TextArea2  productDescription={productDescription}
//             setProductDescription={setProductDescription} /> ): ( <TextArea1 productName={productName}
//               setProductName={setProductName}
//               websiteURL={websiteURL}
//               setWebsiteURL={setWebsiteURL}
//               phoneNumber={phoneNumber}
//               setPhoneNumber={setPhoneNumber} />)}

//         <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"aria-hidden="true">
//         <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//         style={{clipPath:'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',}}/>
//         </div>
//         <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
//         <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{clipPath:'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',}}/>
//         </div>
//         </div>
//         <Tabs/>
//         <Footer/>
//         <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer" onClick={handlePrevClick}>
//         <ChevronLeft size={32} />
//         </div>
//         <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer" onClick={showTextArea2 ? handleOptionsPage : handleNextClick}>
//         <ChevronRight size={32} />
//         </div>
//         </div>
//      );
//     };

//     export default Plan;

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import Tabs from "./Tabs";
import TextArea1 from "./TextArea1";
import TextArea2 from "./TextArea2";
import { useTextareaContext } from "./TextareaProvider";

const Plan = () => {
  const {
    productName,
    setProductName,
    websiteURL,
    setWebsiteURL,
    phoneNumber,
    setPhoneNumber,
    productDescription,
    setProductDescription,
    productImage,
    setProductImage,
    imageURL,
  } = useTextareaContext();
  const navigate = useNavigate();
  const [showTextArea2, setShowTextArea2] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [attemptedNext, setAttemptedNext] = useState(false);

  useEffect(() => {
    if (attemptedNext) {
      const isFieldEmpty = isAnyFieldEmpty();
      setShowPopup(isFieldEmpty);
      // Automatically hide the popup after 1 second if it's shown
      if (isFieldEmpty) {
        const timer = setTimeout(() => {
          setShowPopup(false);
        }, 1000); // 1000 milliseconds = 1 second
        return () => clearTimeout(timer); // Cleanup on unmount
      }
    }
  }, [productName, productDescription, imageURL, attemptedNext]);

  const isAnyFieldEmpty = () => {
    return (
      !productName ||
      (showTextArea2 && (!productDescription || !imageURL))
    );
  };

  const handleNextClick = () => {
    setAttemptedNext(true);
    if (isAnyFieldEmpty()) {
      setShowPopup(true);
    } else {
      setShowTextArea2(!showTextArea2);
    }
  };

  const handlePrevClick = () => {
    setShowTextArea2(!showTextArea2);
    setAttemptedNext(false);
  };

  const handleOptionsPage = () => {
    if (!isAnyFieldEmpty()) {
      navigate("/options");
    } else {
      setShowPopup(true);
      setAttemptedNext(true);
    }
  };

  return (
    <div
      style={{ height: "530px", width: "640px", overflow: "hidden" }}
      className="z-index-1"
    >
      <Navbar2 />
      <Alert
            variant="danger"
            show={showPopup && attemptedNext} // Only show the alert when attemptedNext is true
            onClose={() => setShowPopup(false)}
            dismissible
            className="absolute left-1/2 transform -translate-x-1/2 z-50 mt-4 rounded-lg shadow-lg"
        style={{ maxWidth: "320px", top: "1px", left: "307px" }}
          >
            Please fill in all the required fields.
          </Alert>
      <div className="relative isolate px-6 pt-14 lg:px-8 z-index-1">
          {showTextArea2 ? (
            <TextArea2
              productDescription={productDescription}
              setProductDescription={setProductDescription}
              productImage={productImage}
              setProductImage={setProductImage}
            />
          ) : (
            <TextArea1
              productName={productName}
              setProductName={setProductName}
              websiteURL={websiteURL}
              setWebsiteURL={setWebsiteURL}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
            />
          )}

          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <Tabs isDisabled={isAnyFieldEmpty()} />
          <Footer />
          <div
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={handlePrevClick}
          >
            <ChevronLeft size={32} />
          </div>
          <div
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
            onClick={showTextArea2 ? handleOptionsPage : handleNextClick}
          >
            <ChevronRight size={32} />
          </div>
        </div>
      </div>

  );
};

export default Plan;
// import { Textarea } from "@nextui-org/react";
// import React from "react";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import { useTextareaContext } from "./TextareaProvider"; // Import the Context hook

// const TextArea1 = () => {
//   const { productName, setProductName, websiteURL, setWebsiteURL, phoneNumber, setPhoneNumber } = useTextareaContext(); // Access the Context

//   return (
//     <div className="flex flex-col items-center mt-6">
//       <div className="w-full max-w-md">
//         <div className="mb-4">
//           <Textarea
//             variant="bordered"
//             label="Product Name"
//             labelPlacement="outside"
//             placeholder="Enter your Selling Product Name"
//             value={productName} // Context value
//             onChange={(e) => setProductName(e.target.value)} // Update context
//           />
//         </div>
//         <div className="mb-4">
//           <Textarea
//             variant="bordered"
//             label="URL (optional)"
//             labelPlacement="outside"
//             placeholder="Enter your Website URL here"
//             value={websiteURL} // Context value
//             onChange={(e) => setWebsiteURL(e.target.value)} // Context update
//           />
//         </div>
//         <div className="mb-4">
//           <div className="phone-input-wrapper">
//             <PhoneInput
//               defaultCountry="PK"
//               placeholder="Enter your phone number"
//               value={phoneNumber} // Context value
//               onChange={setPhoneNumber} // Context update
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TextArea1;

import { Textarea } from "@nextui-org/react";
import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useTextareaContext } from "./TextareaProvider"; // Import the Context hook

const TextArea1 = () => {
  const { productName, setProductName, websiteURL, setWebsiteURL, phoneNumber, setPhoneNumber } = useTextareaContext(); // Access the Context

  const handlePhoneNumberChange = (value) => {
    // Check if the value is defined
    if (value) {
      // Check if the input value length is greater than 11
      if (value.length > 11) {
        // If the input value is longer than 11 characters, do not update the state
        return;
      }
      setPhoneNumber(value);
    } else {
      // If the value is undefined, clear the phone number state
      setPhoneNumber("");
    }
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="w-full max-w-md">
        <div className="mb-4">
          <Textarea
            variant="bordered"
            label="Product Name"
            labelPlacement="outside"
            placeholder="Enter your Selling Product Name"
            value={productName} // Context value
            onChange={(e) => setProductName(e.target.value)} // Update context
          />
        </div>
        <div className="mb-4">
          <Textarea
            variant="bordered"
            label="URL (optional)"
            labelPlacement="outside"
            placeholder="Enter your Website URL here"
            value={websiteURL} // Context value
            onChange={(e) => setWebsiteURL(e.target.value)} // Context update
          />
        </div>
        <div className="mb-4">
          <div className="phone-input-wrapper">
            <PhoneInput
              defaultCountry="PK"
              placeholder="Enter your phone number"
              value={phoneNumber} // Context value
              onChange={handlePhoneNumberChange} // Custom onChange handler
              maxLength={12} // Set the maximum length to 11
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextArea1;
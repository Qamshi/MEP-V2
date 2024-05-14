import { Textarea } from "@nextui-org/react";
import React from "react";
import "react-phone-number-input/style.css";
import Niche from './Niche';
import { useTextareaContext } from "./TextareaProvider"; // Import the Context hook
const TextArea1 = () => {
  const { productName, setProductName, websiteURL, setWebsiteURL } = useTextareaContext(); // Access the Context

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="w-full max-w-md">
      <div className="mb-4" style={{marginLeft:'60px'}}>
      <Niche/>
        </div>
        <div className="mb-4">
          <Textarea
            variant="bordered"
            label="Headline"
            labelPlacement="outside"
            placeholder="Enter your Selling Product Name"
            value={productName} // Context value
            onChange={(e) => setProductName(e.target.value)} // Update context
            isRequired
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
        {/* <div className="mb-4">
          <div className="phone-input-wrapper">
            <PhoneInput
              defaultCountry="PK"
              placeholder="Enter your phone number"
              value={phoneNumber} // Context value
              onChange={setPhoneNumber} // Custom onChange handler
              maxLength={12} // Set the maximum length to 11
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TextArea1;
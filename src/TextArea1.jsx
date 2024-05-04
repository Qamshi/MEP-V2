import { Textarea } from "@nextui-org/react";
import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useTextareaContext } from "./TextareaProvider"; // Import the Context hook

const TextArea1 = () => {
  const { productName, setProductName, websiteURL, setWebsiteURL, phoneNumber, setPhoneNumber } = useTextareaContext(); // Access the Context

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
            label="URL"
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
              onChange={setPhoneNumber} // Context update
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextArea1;


// import React, { useState } from "react";
// import { Button, Textarea } from "@nextui-org/react";
// import ImageUploader from "./ImageUploader";
// import { useTextareaContext } from "./TextareaProvider";
// import axios from "axios";

// const TextArea2 = () => {
//   const {
//     productDescription,
//     setProductDescription,
//     productName,
//   } = useTextareaContext(); // Access Context values

//   const [descriptionLoading, setDescriptionLoading] = useState(false);
//   const [imageLoading, setImageLoading] = useState(false);

//   const handleGenerateImage = () => {
//     setImageLoading(true); // Start image loading state
//     // Add your logic for generating the image here
//     console.log("Generate image button clicked");
//     setImageLoading(false); // Reset image loading state
//   };


//   const handleGenerateDescription = async () => {
//     setDescriptionLoading(true); // Start loading state
//     try {
//       const descriptionResponse = await axios.post(
//         "http://localhost:5000/generate-description",
//         {
//           product_name: productName, // Pass product name
//         }
//       );

//       const fullDescription = descriptionResponse.data.description;
//       const colonIndex = fullDescription.indexOf(":");

//       let updatedDescription = "";
//       if (colonIndex !== -1) {
//         updatedDescription = fullDescription.slice(colonIndex + 1).trim();
//       } else {
//         updatedDescription = fullDescription;
//       }

//       let currentIndex = 0;

//       const intervalId = setInterval(() => {
//         if (currentIndex < updatedDescription.length) {
//           setProductDescription(updatedDescription.substring(0, currentIndex + 1)); // Update Context
//           currentIndex++;
//         } else {
//           clearInterval(intervalId);
//         }
//       }, 5);

//       console.log("Server Response:", descriptionResponse.data);
//     } catch (error) {
//       console.error("Error generating description:", error.message);
//     } finally {
//       setDescriptionLoading(false); // Reset loading state
//     }
//   };

//   return (
//     <div className="flex flex-col items-center mt-6">
//       <div className="w-full max-w-md">
//         <div className="mb-4">
//           <Textarea
//             variant="bordered"
//             label="Product Description"
//             labelPlacement="outside"
//             placeholder="Write description of your selling product."
//             value={productDescription} // Context value
//             onChange={(e) => setProductDescription(e.target.value)} // Context update
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <Button
//             color="primary"
//             onClick={handleGenerateDescription} // Use the function
//             disabled={descriptionLoading}
//           >
//             {descriptionLoading ? "Generating..." : "Copilot"}
//           </Button>
//           <ImageUploader />
//           <Button
//             color="primary"
//             onClick={handleGenerateImage} // Use the function
//             disabled={imageLoading}
//           >
//             {imageLoading ? "Generating..." : "Copilot"}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TextArea2;

import { Button, Textarea } from "@nextui-org/react";
import axios from "axios";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import ImageUploader from "./ImageUploader";
import { useTextareaContext } from "./TextareaProvider";

const TextArea2 = () => {
  const {
    productDescription,
    setProductDescription,
    productName,
    phoneNumber, setPhoneNumber
  } = useTextareaContext(); // Access Context values

  const [descriptionLoading, setDescriptionLoading] = useState(false); // Separate loading state for description button
  const [imageLoading, setImageLoading] = useState(false); // Separate loading state for image button

  // const [loading, setLoading] = useState(false);
  const handleGenerateImage = () => {
  };
  
  const handleGenerateDescription = async () => {
    setDescriptionLoading(true); // Start loading state
    try {
      const descriptionResponse = await axios.post(
        "http://localhost:5000/generate-description",
        {
          product_name: productName, // Pass product name
        }
      );

      const fullDescription = descriptionResponse.data.description;
      const colonIndex = fullDescription.indexOf(":");

      let updatedDescription = "";
      if (colonIndex !== -1) {
        updatedDescription = fullDescription.slice(colonIndex + 1).trim();
      } else {
        updatedDescription = fullDescription;
      }

      let currentIndex = 0;

      const intervalId = setInterval(() => {
        if (currentIndex < updatedDescription.length) {
          setProductDescription(updatedDescription.substring(0, currentIndex + 1)); // Update Context
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 5);

      console.log("Server Response:", descriptionResponse.data);
    } catch (error) {
      console.error("Error generating description:", error.message);
    } finally {
      setDescriptionLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="mb-4" style={{marginTop:'-23px'}}>
          <div className="phone-input-wrapper">
            <PhoneInput
              defaultCountry="PK"
              placeholder="Enter your phone number"
              value={phoneNumber} // Context value
              onChange={setPhoneNumber} // Custom onChange handler
              maxLength={12} // Set the maximum length to 11
            />
          </div>
        </div>
      <div className="w-full max-w-md" style={{height:'130px !important'}}>
        <div className="mb-4">
          <Textarea
            size="mb"
            variant="bordered"
            label="Product Description"
            labelPlacement="outside"
            placeholder="Write description of your selling product."
            value={productDescription} // Context value
            onChange={(e) => setProductDescription(e.target.value)} // Context update
            isRequired
          />
        </div>
        <div className="flex items-center justify-between">
          <Button className="button-1"
            color="primary"
            onClick={handleGenerateDescription} // Use the function
            disabled={descriptionLoading} // Disable button when loading
          >
            {descriptionLoading ? "Generating..." : "Copilot"}
          </Button>
          <ImageUploader />

          <Button className="button-2"
            color="primary"
            onClick={handleGenerateImage} // Use the function
            disabled={imageLoading} // Disable button when loading
          >
            {imageLoading ? "Generating AI image" : "Get Image"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TextArea2;




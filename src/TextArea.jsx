// import { Button, Textarea } from "@nextui-org/react";
// import axios from "axios";
// import React, { useState } from "react";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";
// import ImageUploader from "./ImageUploader";
// import Niche from './Niche';
// import { useTextareaContext } from "./TextareaProvider";
// const TextArea = () => {
//   const {
//     productName,
//     setProductName,
//     websiteURL,
//     setWebsiteURL,
//     phoneNumber,
//     setPhoneNumber,
//     productDescription,
//     setProductDescription,
//     productImage,
//     setProductImage,
//     imageURL,
//   } = useTextareaContext();

//   const [loading, setLoading] = useState(false);

//   const handleGenerateDescription = async () => {
//     setLoading(true);
//     try {
//       const descriptionResponse = await axios.post(
//         "http://localhost:5000/generate-description",
//         {
//           product_name: productName,
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
//           setProductDescription(updatedDescription.substring(0, currentIndex + 1));
//           currentIndex++;
//         } else {
//           clearInterval(intervalId);
//         }
//       }, 5);

//       console.log("Server Response:", descriptionResponse.data);
//     } catch (error) {
//       console.error("Error generating description:", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGenerateImage = () => {
//     // Implement the image generation logic here
//   };

//   return (
//     <div className="flex flex-col items-center mt-6">
//       <div className="w-full max-w-md">
//       <div className="mb-4" style={{marginLeft:'62px', width:'290px'}}>
//           <div className="phone-input-wrapper">
//             <PhoneInput
//               defaultCountry="PK"
//               placeholder="Enter your phone number"
//               value={phoneNumber}
//               onChange={setPhoneNumber}
//               maxLength={12}
//             />
//           </div>
//         </div>
//             <div className="mb-4" style={{ marginLeft: "60px" }}>
//             <Niche />
//             </div>  
           
        
//         <div className="mb-4">
//           <Textarea
//             isRequired
//             variant="bordered"
//             label="Product Name"
//             labelPlacement="outside"
//             placeholder="Enter your Selling Product Name"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//           />
//         </div>
//         <div className="mb-4">
//           <Textarea
//             variant="bordered"
//             label="URL (optional)"
//             labelPlacement="outside"
//             placeholder="Enter your Website URL here"
//             value={websiteURL}
//             onChange={(e) => setWebsiteURL(e.target.value)}
//           />
//         </div>
        
//         <div className="mb-4">
//           <Textarea
//             isRequired
//             size="mb"
//             variant="bordered"
//             label="Product Description"
//             labelPlacement="outside"
//             placeholder="Write description of your selling product."
//             value={productDescription}
//             onChange={(e) => setProductDescription(e.target.value)}
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <Button
//             className="button-1"
//             color="primary"
//             onClick={handleGenerateDescription}
//             disabled={loading}
//           >
//             {loading ? "Generating..." : "Copilot"}
//           </Button>
//           <ImageUploader />
//           <Button
//             className="button-2"
//             color="primary"
//             onClick={handleGenerateImage}
//             disabled={loading}
//           >
//             {loading ? "Generating AI image" : "Get Image"}
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TextArea;
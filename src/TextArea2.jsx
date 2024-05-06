import React, { useState } from "react";
import { Button, Textarea } from "@nextui-org/react";
import ImageUploader from "./ImageUploader";
import { useTextareaContext } from "./TextareaProvider";
import axios from "axios";

const TextArea2 = () => {
  const {
    productDescription,
    setProductDescription,
    productName,
  } = useTextareaContext(); // Access Context values

  const [loading, setLoading] = useState(false);

  const handleGenerateDescription = async () => {
    setLoading(true); // Start loading state
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
      setLoading(false); // Reset loading state
    }
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="w-full max-w-md">
        <div className="mb-4">
          <Textarea
            variant="bordered"
            label="Product Description"
            labelPlacement="outside"
            placeholder="Write description of your selling product."
            value={productDescription} // Context value
            onChange={(e) => setProductDescription(e.target.value)} // Context update
          />
        </div>
        <div className="flex items-center justify-between">
          <Button
            color="primary"
            onClick={handleGenerateDescription} // Use the function
            disabled={loading} // Disable button when loading
          >
            {loading ? "Generating..." : "Copilot"}
          </Button>
          <ImageUploader />
        </div>
      </div>
    </div>
  );
};

export default TextArea2;






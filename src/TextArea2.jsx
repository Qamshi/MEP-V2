import { Button, Textarea } from "@nextui-org/react";
import React from "react";
import ImageUploader from "./ImageUploader"; // Custom component
import { useTextareaContext } from "./TextareaProvider"; // Import the Context hook

const TextArea2 = () => {
  const { productDescription, setProductDescription } = useTextareaContext(); // Access the Context

  const handleDescriptionChange = (e) => {
    setProductDescription(e.target.value);
  };

  return (
    <div className="flex flex-col items-center mt-6">
      <div className="w-full max-w-md">
        <div className="mb-4">
          <Textarea
            variant="bordered"
            label="Product Description"
            labelPlacement="outside"
            placeholder="Write Description of your Selling Product."
            value={productDescription} // Context value
            onChange={handleDescriptionChange} // Context update
          />
        </div>
        <div className="flex items-center justify-between">
          <Button color="primary">
            Copilot
          </Button>
          <ImageUploader />
        </div>
      </div>
    </div>
  );
};

export default TextArea2;

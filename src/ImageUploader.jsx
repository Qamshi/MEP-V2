import { Button, Tooltip } from "@nextui-org/react";
import React, { useRef, useState } from 'react';
import { FiTrash, FiUpload } from 'react-icons/fi';
import axios from 'axios';
import { useTextareaContext } from './TextareaProvider'; // Context import

const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const { setImageURL } = useTextareaContext(); // Context to store image URL
  
  const uploadImageToCloudinary = async (selectedFile) => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "Customer_Ads"); // Cloudinary upload preset

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dnu5j5hmj/image/upload`, // Cloudinary cloud name
        formData
      );
      console.log("Image uploaded successfully:", response.data.secure_url); // Log the uploaded URL
      return response.data.secure_url; // Return the URL of the uploaded image
    } catch (error) {
      console.error("Image upload error:", error); // Log if upload fails
      setError("Failed to upload image. Please try again.");
      return null; // Return null if error
    }
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && (selectedFile.type === 'image/png' || selectedFile.type === 'image/jpeg')) {
      setFile(selectedFile);
      setError(null);

      const uploadedURL = await uploadImageToCloudinary(selectedFile); // Upload to Cloudinary
      if (uploadedURL) {
        console.log("Image URL:", uploadedURL); // Log the image URL
        setImageURL(uploadedURL); // Store in context
      } else {
        console.error("Image upload failed."); // Log failure if URL is null
      }
    } else {
      setFile(null);
      setError("Please select a PNG or JPEG image file.");
    }
  };

  const handleRemoveImage = () => {
    setFile(null);
    fileInputRef.current.value = null; // Reset the file input
    setImageURL(""); // Clear the image URL in context
  };

  return (
    <div className="flex items-center mt-6">
      <div className="ml-4">
        <Tooltip
          content={error || 'Upload a PNG or JPEG image'}
          color={error ? 'error' : 'default'}
          css={{ marginBottom: '10px' }}
        >
          <div
            css={{
              display: 'flex',
              alignItems: 'center',
              borderRadius: '8px',
              border: '1px dashed $accents7',
              padding: '8px',
              height: '40px',
              width: 'auto',
            }}
          >
            {file ? (
              <div css={{ display: 'flex', alignItems: 'center' }}>
                <span css={{ marginRight: '8px' }}>{file.name}</span>
                <Button
                  onClick={handleRemoveImage}
                  auto
                  ghost
                  color="error"
                  css={{
                    padding: '2px',
                    minWidth: 'unset',
                    zIndex: 1,
                  }}
                >
                  <FiTrash size={12} color="currentColor" />
                </Button>
              </div>
            ) : (
              <Button auto ghost as="label" htmlFor="file-input" css={{ cursor: 'pointer', padding: '4px' }}>
                <FiUpload size={16} color="currentColor" />
              </Button>
            )}
          </div>
        </Tooltip>
        <input
          ref={fileInputRef}
          id="file-input"
          type="file"
          accept="image/png, image/jpeg"
          onChange={handleFileChange} // Handle file change and trigger upload
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default ImageUploader;

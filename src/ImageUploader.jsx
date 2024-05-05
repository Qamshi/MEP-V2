import { Button, Tooltip } from "@nextui-org/react";
import React, { useRef, useState } from 'react';
import { FiTrash, FiUpload } from 'react-icons/fi';
import axios from 'axios';
import { useTextareaContext } from './TextareaProvider'; 

const ImageUploader = () => {
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const { setImageURL, uploadedFileName, setUploadedFileName, resetUploadedFileName } = useTextareaContext(); // Get context
  
  const uploadImageToCloudinary = async (selectedFile) => {
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "Customer_Ads"); 

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dnu5j5hmj/image/upload`, 
        formData
      );
      console.log("Image uploaded successfully:", response.data.secure_url); 
      return response.data.secure_url; 
    } catch (error) {
      console.error("Image upload error:", error); 
      setError("Failed to upload image. Please try again.");
      return null; 
    }
  };

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && (selectedFile.type === 'image/png' || 'image/jpeg')) {
      setUploadedFileName(selectedFile.name); 
      const uploadedURL = await uploadImageToCloudinary(selectedFile);

      if (uploadedURL) {
        console.log("Image URL:", uploadedURL); 
        setImageURL(uploadedURL); 
      } else {
        setUploadedFileName("");
        console.error("Image upload failed."); 
      }
    } else {
      
      setError("Please select a PNG or JPEG image file.");
    }
  };

  const handleRemoveImage = () => {
    fileInputRef.current.value = null; 
    resetUploadedFileName(); 
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
            {uploadedFileName ? (
              <div css={{ display: 'flex', alignItems: 'center' }}>
                <span css={{ marginRight: '8px' }}>{uploadedFileName}</span>
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
          onChange={handleFileChange} 
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
};

export default ImageUploader;

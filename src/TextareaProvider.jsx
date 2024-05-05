import React, { createContext, useState, useContext, useEffect } from 'react';

const TextareaContext = createContext();

const TextareaProvider = ({ children }) => {
  const [productName, setProductName] = useState("");
  const [websiteURL, setWebsiteURL] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const [ageBracket, setAgeBracket] = useState("25-50");
  const [priceRange, setPriceRange] = useState("1000-3000");
  const [adPurpose, setAdPurpose] = useState(new Set([]));
  const [selectedGender, setSelectedGender] = useState(new Set([]));
  const [facebookSwitch, setFacebookSwitch] = useState(0);
  const [instagramSwitch, setInstagramSwitch] = useState(0);
  const [platform, setPlatform] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  const [userFirstName, setUserFirstName] = useState(""); 
  const [imageURL, setImageURL] = useState(""); 
  const [uploadedFileName, setUploadedFileName] = useState(""); 
  const resetUploadedFileName = () => {
    setUploadedFileName(""); 
  };

  useEffect(() => {
    if (facebookSwitch === 1 && instagramSwitch === 1) {
      setPlatform(0); 
    } else if (facebookSwitch === 1 && instagramSwitch === 0) {
      setPlatform(1); 
    } else if (facebookSwitch === 0 && instagramSwitch === 1) {
      setPlatform(2); 
    }
  }, [facebookSwitch, instagramSwitch]);
  
  useEffect(() => {
    if (userEmail) {
      const emailParts = userEmail.split('@');
      if (emailParts.length > 1) {
        const username = emailParts[0]; 
        const firstName = username.split('.')[0]; 
        setUserFirstName(firstName); 
      }
    }
  }, [userEmail]); 
  
  const resetAll = () => {
    setProductName("");
    setWebsiteURL("");
    setPhoneNumber("");
    setProductDescription("");
    setAgeBracket("25-50"); 
    setPriceRange("1000-3000"); 
    setAdPurpose(new Set([])); 
    setSelectedGender(new Set([])); 
    setPlatform(0); 
    setUserEmail("");
    setUserFirstName("");
    setImageURL("");
    setFacebookSwitch(0); 
    setInstagramSwitch(0);
    resetUploadedFileName();
  };

  return (
    <TextareaContext.Provider
      value={{
        productName,
        setProductName,
        websiteURL,
        setWebsiteURL,
        phoneNumber,
        setPhoneNumber,
        productDescription,
        setProductDescription,
        ageBracket,
        setAgeBracket,
        priceRange,
        setPriceRange,
        adPurpose,
        setAdPurpose,
        selectedGender,
        setSelectedGender,
        facebookSwitch,
        setFacebookSwitch,
        instagramSwitch,
        setInstagramSwitch,
        platform,
        userEmail,
        setUserEmail,
        userFirstName,
        imageURL,
        setImageURL,
        resetAll,
        uploadedFileName,
        setUploadedFileName,
        resetUploadedFileName,
      }}
    >
      {children}
    </TextareaContext.Provider>
  );
};

export const useTextareaContext = () => {
  return useContext(TextareaContext);
};

export default TextareaProvider;


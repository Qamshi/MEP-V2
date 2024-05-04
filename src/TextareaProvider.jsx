import React, { createContext, useState, useContext, useEffect } from 'react';

// Create Context
const TextareaContext = createContext();

// Create Context Provider
const TextareaProvider = ({ children }) => {
  // Existing shared state for Plan.js, Options.js, and other components
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
  const [userFirstName, setUserFirstName] = useState(""); // New state for the first name
  const [imageURL, setImageURL] = useState(""); // State to store the image URL


  useEffect(() => {
    if (facebookSwitch === 1 && instagramSwitch === 1) {
      setPlatform(0); // Both selected
    } else if (facebookSwitch === 1 && instagramSwitch === 0) {
      setPlatform(1); // Only Facebook selected
    } else if (facebookSwitch === 0 && instagramSwitch === 1) {
      setPlatform(2); // Only Instagram selected
    }
  }, [facebookSwitch, instagramSwitch]); // Existing effect
  
  useEffect(() => {
    // Extract the first name from userEmail
    if (userEmail) {
      const emailParts = userEmail.split('@');
      if (emailParts.length > 1) {
        const username = emailParts[0]; // Part before '@'
        const firstName = username.split('.')[0]; // Take the first part
        setUserFirstName(firstName); // Store the extracted first name
      }
    }
  }, [userEmail]); // New effect, triggered by userEmail change
  
  const resetAll = () => {
    setProductName("");
    setWebsiteURL("");
    setPhoneNumber("");
    setProductDescription("");
    setAgeBracket("25-50"); // Default age bracket
    setPriceRange("1000-3000"); // Default price range
    setAdPurpose(new Set([])); // Reset set
    setSelectedGender(new Set([])); // Reset set
    setPlatform(0); // Reset platform
    setUserEmail("");
    setUserFirstName("");
    setImageURL(""); // Reset image URL
    setFacebookSwitch(0); // Reset Facebook toggle
    setInstagramSwitch(0);
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
      }}
    >
      {children}
    </TextareaContext.Provider>
  );
};

// Custom hook to use the Context
export const useTextareaContext = () => {
  return useContext(TextareaContext);
};

export default TextareaProvider;


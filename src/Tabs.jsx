// import { Tab, Tabs } from "@nextui-org/react";
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import TextareaProvider from "./TextareaProvider"; // Import the Context Provider

// const MyTabs = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedTab, setSelectedTab] = useState("Plan-I");

//   useEffect(() => {
//     // Update the selected tab based on the current location
//     switch (location.pathname) {
//       case "/plan":
//         setSelectedTab("Plan-I");
//         break;
//       case "/options":
//         setSelectedTab("Plan-II");
//         break;
//       case "/ads":
//         setSelectedTab("Plan-III");
//         break;
//         case "/post":
//         setSelectedTab("Plan-IV");
//         break;
//       default:
//         setSelectedTab("Plan-I");
//         break;
//     }
//   }, [location.pathname]);

//   const handleSelectionChange = (key) => {
//     // Navigate to the corresponding route based on the selected tab
//     switch (key) {
//       case "Plan-I":
//         navigate("/plan");
//         break;
//       case "Plan-II":
//         navigate("/options");
//         break;
//       case "Plan-III":
//         navigate("/ads");
//         break;
//         case "Plan-IV":
//           navigate("/post");
//           break;
//       default:
//         break;
//     }
//   };

//   return (
//     <TextareaProvider>
//     <div className="fixed bottom-10 left-40 right-0 flex justify-center mb-4">
//       <Tabs selectedKey={selectedTab} onSelectionChange={handleSelectionChange}>
//         <Tab key="Plan-I" title="Product" />
//         <Tab key="Plan-II" title="Option" />
//         <Tab key="Plan-III" title="Preview" />
//         <Tab key="Plan-IV" title="Post" />
//       </Tabs>
//     </div>
//     </TextareaProvider>
//   );
// };

// export default MyTabs;

///////-----------------------------------------------------

// import { Tab, Tabs } from "@nextui-org/react";
// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import TextareaProvider, { useTextareaContext } from "./TextareaProvider";

// const MyTabs = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [selectedTab, setSelectedTab] = useState("Plan-I");
//   const { productName, productDescription, imageURL, websiteURL, phoneNumber, adPurpose, selectedGender } = useTextareaContext(); // Access the Context

//   useEffect(() => {
//     // Update the selected tab based on the current location
//     switch (location.pathname) {
//       case "/plan":
//         setSelectedTab("Plan-I");
//         break;
//       case "/options":
//         setSelectedTab("Plan-II");
//         break;
//       case "/ads":
//         setSelectedTab("Plan-III");
//         break;
//       case "/post":
//         setSelectedTab("Plan-IV");
//         break;
//       default:
//         setSelectedTab("Plan-I");
//         break;
//     }
//   }, [location.pathname]);

//   const handleSelectionChange = (key) => {
//     // Navigate to the corresponding route based on the selected tab
//     switch (key) {
//       case "Plan-I":
//         navigate("/plan");
//         break;
//       case "Plan-II":
//         navigate("/options");
//         break;
//       case "Plan-III":
//         navigate("/ads");
//         break;
//       case "Plan-IV":
//         navigate("/post");
//         break;
//       default:
//         break;
//     }
//   };

//   // Determine which tabs should be disabled based on the required fields
//   const isAnyFieldEmpty = () => {
//     switch (selectedTab) {
//       case "Plan-I":
//         // Enable only "Plan-II" (Options) tab if productName, productDescription, and imageURL are filled
//         return !(productName && productDescription && imageURL);
//       case "Plan-II":
//         // Disable all tabs except "Plan-I" (Product), "Plan-II" (Options), and "Plan-III" (Preview)
//         // if adPurpose, selectedGender, or any other required fields for "Plan-II" are empty
//         return !adPurpose || adPurpose.size === 0 || !selectedGender || selectedGender.size === 0;
//       case "Plan-III":
//         // Disable all tabs except "Plan-I" (Product), "Plan-II" (Options), "Plan-III" (Preview), and "Plan-IV" (Post)
//         // if any required fields for "Plan-III" are empty (you can add the conditions here)
//         return false; // For now, we'll assume no required fields for "Plan-III"
//       case "Plan-IV":
//         // Disable all subsequent tabs
//         return false; // For now, we'll assume no required fields for "Plan-IV"
//       default:
//         // Disable all subsequent tabs by default
//         return true;
//     }
//   };

//   const disabledKeys = isAnyFieldEmpty()
//     ? [
//         "Plan-I",
//         "Plan-II",
//         "Plan-III",
//         "Plan-IV",
//       ].filter((key, index) => index >= ["Plan-I", "Plan-II", "Plan-III", "Plan-IV"].indexOf(selectedTab))
//     : [];

//   return (
//     <TextareaProvider>
//       <div className="fixed bottom-10 left-40 right-0 flex justify-center mb-4">
//         <Tabs
//           selectedKey={selectedTab}
//           onSelectionChange={handleSelectionChange}
//           disabledKeys={disabledKeys}
//         >
//           <Tab key="Plan-I" title="Product" />
//           <Tab key="Plan-II" title="Option" />
//           <Tab key="Plan-III" title="Preview" />
//           <Tab key="Plan-IV" title="Post" />
//         </Tabs>
//       </div>
//     </TextareaProvider>
//   );
// };

// export default MyTabs;

import { Tab, Tabs } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TextareaProvider, { useTextareaContext } from "./TextareaProvider";

const MyTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("Plan-I");
  const { productName, productDescription, imageURL, websiteURL, phoneNumber, adPurpose, selectedGender } = useTextareaContext(); // Access the Context

  useEffect(() => {
    // Update the selected tab based on the current location
    switch (location.pathname) {
      case "/plan":
        setSelectedTab("Plan-I");
        break;
      case "/options":
        setSelectedTab("Plan-II");
        break;
      case "/ads":
        setSelectedTab("Plan-III");
        break;
      case "/post":
        setSelectedTab("Plan-IV");
        break;
      default:
        setSelectedTab("Plan-I");
        break;
    }
  }, [location.pathname]);

  const handleSelectionChange = (key) => {
    // Navigate to the corresponding route based on the selected tab
    switch (key) {
      case "Plan-I":
        navigate("/plan");
        break;
      case "Plan-II":
        navigate("/options");
        break;
      case "Plan-III":
        navigate("/ads");
        break;
      case "Plan-IV":
        navigate("/post");
        break;
      default:
        break;
    }
  };

  // Determine which tabs should be disabled based on the required fields
  const isAnyFieldEmpty = () => {
    switch (selectedTab) {
      case "Plan-I":
        // Enable only "Plan-II" (Options) tab if productName, productDescription, and imageURL are filled
        return !(productName && productDescription && imageURL);
      case "Plan-II":
        // Disable all tabs except "Plan-I" (Product) if required fields for "Plan-I" are not filled
        // return !productName || !productDescription || !imageURL;
        return !adPurpose || adPurpose.size === 0 || !selectedGender || selectedGender.size === 0;
        case "Plan-III":
        // Disable all tabs except "Plan-I" (Product), "Plan-II" (Options), and "Plan-III" (Preview)
        // if adPurpose, selectedGender, or any other required fields for "Plan-II" are empty
        return !adPurpose || adPurpose.size === 0 || !selectedGender || selectedGender.size === 0;
      case "Plan-IV":
        // Disable all subsequent tabs
        return false; // For now, we'll assume no required fields for "Plan-IV"
      default:
        // Disable all subsequent tabs by default
        return true;
    }
  };
  
  // Update the disabledKeys calculation
  const disabledKeys = isAnyFieldEmpty()
    ? [
        "Plan-II",
        "Plan-III",
        "Plan-IV",
      ].filter((key, index) => index >= ["Plan-I", "Plan-II", "Plan-III", "Plan-IV"].indexOf(selectedTab))
    : [];

  return (
    <TextareaProvider>
      <div className="fixed bottom-10 left-40 right-0 flex justify-center mb-4">
        <Tabs
          selectedKey={selectedTab}
          onSelectionChange={handleSelectionChange}
          disabledKeys={disabledKeys}
        >
          <Tab key="Plan-I" title="Product" />
          <Tab key="Plan-II" title="Option" />
          <Tab key="Plan-III" title="Preview" />
          <Tab key="Plan-IV" title="Post" />
        </Tabs>
      </div>
    </TextareaProvider>
  );
};
export default MyTabs;
import { Tab, Tabs } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TextareaProvider from "./TextareaProvider"; // Import the Context Provider

const MyTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState("Plan-I");

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

  return (
    <TextareaProvider>
    <div className="fixed bottom-10 left-40 right-0 flex justify-center mb-4">
      <Tabs selectedKey={selectedTab} onSelectionChange={handleSelectionChange}>
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
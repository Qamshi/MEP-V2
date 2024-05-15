import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import { MyMap } from "./MapComponent";
import Navbar2 from "./Navbar2";
import { useTextareaContext } from './TextareaProvider';

const Map = () => {
  const { userEmail } = useTextareaContext();
  const [insights, setInsights] = useState({});
  const [error, setError] = useState(null);
  console.log("mapData:", userEmail);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const itemName = queryParams.get('itemName');
  const item = JSON.parse(itemName);
    // Now 'item' contains the object passed from the previous component
  console.log("Received item:", item); 
  useEffect(() => {

    
    if (userEmail && item) {
      sendDataToServer(userEmail, item);
    }
  }, [userEmail, item]);

  const sendDataToServer = async (userEmail, campaignName) => {
    try {
      const response = await fetch('http://localhost:2000/send-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userEmail, campaignName }),
      });
      if (response.ok) {
        const data = await response.json();
        setInsights(data);
        console.log('map received successfully.', data);
        /////ADD 10 SEC DELAY HERE
      } else {
        const errorData = await response.json();
        setError(errorData.error);
        console.error('Failed to fetch data.', errorData);
      }
    } catch (error) {
      setError('Error fetching data: ' + error.message);
      console.error('Error fetching data:', error);
    }
  };
  
  const handlePostClick = () => {
    navigate("/post");
  };

  const handleOptionsClick = () => {
    navigate("/options");
  };

  return (
    <div style={{ height: "100vh", width: "100%", overflow: "hidden" }} className="z-index-1">
      <Navbar2 />
      <div className="relative isolate px-6 pt-0 lg:px-8 z-index-1 h-full">
        <div className="h-full">
        <MyMap insights={insights.cities} />
        </div>
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Map;
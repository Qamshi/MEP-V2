import { Button } from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import { useTextareaContext } from './TextareaProvider'; // Use context
import axios from 'axios'; // Import axios for HTTP requests

const AdCounter = () => {
  const [adCount, setAdCount] = useState(0);
  const { userEmail } = useTextareaContext();

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/subscription/${userEmail}`);
        if (response.data.exist) {
          setAdCount(response.data.subscription.ads_count);
        }
      } catch (error) {
        console.error("Error fetching subscription data:", error);
      }
    };

    if (userEmail) {
      fetchSubscription();
    }
  }, [userEmail]);

  return (
    <div className="mt-4 text-base leading-6 text-gray-600 z-index-1" style={{ marginLeft: '510px' }}>
      <Button color="primary" href="#" variant="flat">
        Ads Left: {adCount}
      </Button>
    </div>
  );
};

export default AdCounter;

import { Button } from "@nextui-org/react";
import React, { useState } from "react";

const AdCounter = () => {
  const [adCount, setAdCount] = useState(0);

  const increaseAdCount = (count) => {
    setAdCount(count);
  };

  return (
    <div className="mt-4 text-base leading-6 text-gray-600 z-index-1" style={{marginLeft:'510px'}}>
     {/* <button > Ad Counter: {adCount} </button> */}
     <Button color="primary" href="#" variant="flat">
     Ad Counter: {adCount}
          </Button>
    </div>
  );
};

export default AdCounter;
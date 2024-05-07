import { Slider } from "@nextui-org/react";
import React from "react";
import { useTextareaContext } from './TextareaProvider';

export default function PriceRange() {
  const { priceRange, setPriceRange } = useTextareaContext(); // Use context
  
  const handleSliderChange = (value) => {
    const singleValue = value[0]; // Get the first value of the array
    setPriceRange(singleValue.toString()); // Store as string in context
  };

  // Convert the single value string to a number
  const rangeValue = parseInt(priceRange);

  return (
    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
      <Slider 
        label="Select a budget"
        formatOptions={{style: "currency", currency: "PKR"}}
        step={10}
        maxValue={5000}
        minValue={300}
        value={[rangeValue]} 
        onChange={handleSliderChange} 
        className="max-w-md"
      />
      <p className="text-default-500 font-medium text-small">
        Selected budget: {priceRange} 
      </p>
    </div>
  );
}







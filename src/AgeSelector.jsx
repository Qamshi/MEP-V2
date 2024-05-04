import { Slider } from "@nextui-org/react";
import React from "react";
import { useTextareaContext } from './TextareaProvider';

export default function AgeSelector() {
  const { ageBracket, setAgeBracket } = useTextareaContext();
  
  const handleSliderChange = (value) => {
    const ageBracketWithHyphen = value.join("-"); // Join with hyphen to store as string
    setAgeBracket(ageBracketWithHyphen); // Store in the context
  };

  // Split ageBracket to get an array; use default values if split fails
  const ageArray = ageBracket ? ageBracket.split("-").map(Number) : [25, 50];
  
  return (
    <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
      <Slider 
        label="Select Age Bracket Of Your Audience"
        step={1}
        maxValue={65}
        minValue={18}
        value={ageArray} // Convert ageBracket to array
        onChange={handleSliderChange} // Update context with hyphenated string
        className="max-w-md"
      />
      <p className="text-default-500 font-medium text-small">
        Selected age bracket: {ageBracket}
      </p>
    </div>
  );
}


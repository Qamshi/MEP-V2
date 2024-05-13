import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { useTextareaContext } from './TextareaProvider'; // Import context
import { metrics } from "./data3";

export default function Target_audience() {
  const { adAudience, setAdAudience } = useTextareaContext(); // Use context
  
  const handleSelectionChange = (keys) => {
    setAdAudience(keys); // Store the selected keys in context
  };

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Select
        label="Target Audience"
        variant="bordered"
        placeholder="Select the Desired Loction"
        selectedKeys={adAudience} // Use the context value
        className="max-w-xs"
        onSelectionChange={handleSelectionChange} // Use the new handler
        selectionMode="multiple"
        isRequired
      >
        {metrics.map((metric) => (
          <SelectItem key={metric.value} value={metric.value}>
            {metric.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}


import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { metrics } from "./data";
import { useTextareaContext } from './TextareaProvider'; // Import context

export default function Purpose() {
  const { adPurpose, setAdPurpose } = useTextareaContext(); // Use context
  
  const handleSelectionChange = (keys) => {
    setAdPurpose(keys); // Store the selected keys in context
  };

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Select
        label="Ad's Purpose"
        variant="bordered"
        placeholder="Select your Ad Purpose"
        selectedKeys={adPurpose} // Use the context value
        className="max-w-xs"
        onSelectionChange={handleSelectionChange} // Use the new handler
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


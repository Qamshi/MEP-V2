import { Select, SelectItem } from "@nextui-org/react";
import React from "react";
import { gender } from "./data1";
import { useTextareaContext } from './TextareaProvider'; // Import the context

export default function GenderSelector() {
  const { selectedGender, setSelectedGender } = useTextareaContext(); // Use context
  
  const handleSelectionChange = (keys) => {
    setSelectedGender(keys); // Store the new selection in the context
  };

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Select
        label="Audience Gender"
        variant="bordered"
        placeholder="Select Audience Gender"
        selectedKeys={selectedGender} // Use the context's selectedGender
        className="max-w-xs"
        onSelectionChange={handleSelectionChange} // Store new selection in context
        selectionMode="multiple" // Allow multiple selections
      >
        {gender.map((g) => (
          <SelectItem key={g.value} value={g.value}>
            {g.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}

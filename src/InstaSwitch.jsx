import { Switch, cn } from "@nextui-org/react";
import React from "react";
import { useTextareaContext } from './TextareaProvider'; // Context import

export default function InstaSwitch() {
  const { instagramSwitch, setInstagramSwitch } = useTextareaContext(); // Context se data lein

  const handleSwitchChange = (e) => {
    console.log("Switch toggled:", e.target.checked);
    const isSelected = e.target.checked;
    // Switch ke on-off state ko update karna
    setInstagramSwitch(isSelected ? 1 : 0); // Agar selected, toh 1, warna 0
  };

  return (
    <Switch
      isSelected={instagramSwitch === 1} // Check if switch is on
      onChange={handleSwitchChange} // Handle switch toggle
      classNames={{
        base: cn(
          "inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center",
          "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
          "data-[selected=true]:border-primary",
        ),
        wrapper: "p-0 h-4 overflow-visible",
        thumb: cn(
          "w-6 h-6 border-2 shadow-lg",
          "group-data-[hover=true]:border-primary",
          "group-data-[selected=true]:ml-6",
          "group-data-[pressed=true]:w-7",
          "group-data-[selected]:group-data-[pressed]:ml-4",
        ),
      }}
    >
      <div className="flex flex-col gap-1">
        <p className="text-medium">Instagram</p>
      </div>
    </Switch>
  );
}


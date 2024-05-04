
import { Spacer } from "@nextui-org/react";
import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useNavigate } from "react-router-dom";
import AgeSelector from "./AgeSelector";
import "./App.css";
import Footer from "./Footer";
import GenderSelector from "./GenderSelector";
import Navbar2 from "./Navbar2";
import PriceRange from "./PriceRange";
import Purpose from "./Purpose";
import Tabs from "./Tabs";




const Options = () => {
  const navigate = useNavigate();

  const handlePlanClick = () => {
    navigate("/plan")
  };

  const handlePreviewClick = () => {
    navigate("/ads")
  };
 
  return (
    <div style={{ height: "530px", width: "640px", overflow: "hidden" }} className="z-index-1">
      <Navbar2 />
      <div className="relative isolate px-6 pt-14 lg:px-8 z-index-1">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath:'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',}}/>
        </div>
        <div className="flex flex-col items-center justify-center">
        <AgeSelector/>
        <Spacer x={4} />
        <Spacer x={4} />
        <Spacer x={4} />
        <PriceRange/>
        <Spacer x={4} />
        <Spacer x={4} />
        <Spacer x={4} />
        <Spacer x={4} />
        <Spacer x={4} />
        {/* <div className="flex"></div> */}
        <Purpose />
        <Spacer x={4} />
        <Spacer x={4} />
        <Spacer x={4} />
        <GenderSelector />
        {/* <Cities/> */}
        
        </div>
        
        
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{clipPath:'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',}}/>
        </div>
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer" onClick={handlePlanClick}>
        <ChevronLeft size={32} />
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer" onClick={handlePreviewClick}>
        <ChevronRight size={32} />
        </div>
      </div>
      <Tabs/>
      <Footer />
    </div>
  );
};

export default Options;


import React from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import Preview from "./Preview";
import Preview2 from "./Preview2";
import Tabs from "./Tabs";

const Ads = () => {
  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate("/post")
  };

  const handleOptionsClick = () => {
    navigate("/options")
  };

  return (
    <div style={{ height: "530px", width: "640px", overflow: "hidden" }} className="z-index-1">
      <Navbar2 />
      <div className="relative isolate px-6 pt-14 lg:px-8 z-index-1">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="flex justify-between">
          <Preview />
          <Preview2 />
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer" onClick={handleOptionsClick} style={{ marginLeft: '-20px' }}>
        <ChevronLeft size={32} />
        </div>
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer" onClick={handlePostClick} style={{ marginRight: '-20px' }}>
        <ChevronRight size={32} />
        </div>
      </div>
      
      <Tabs/>
      <Footer />
    </div>
  );
};

export default Ads;
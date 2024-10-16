import { Spacer } from "@nextui-org/react";
import React from "react";
import { ChevronLeft } from "react-feather";
import { useNavigate } from "react-router-dom";
import "./App.css";
import FbSwitch from "./FbSwitch";
import InstaSwitch from "./InstaSwitch";
import Modal from "./Modal";
import Navbar2 from "./Navbar2";
import Tabs from "./Tabs";
import Scheduler from './Scheduler';

const AdPerformance = () => {
    const navigate = useNavigate();

    const handleAdsClick = () => {
        navigate("/ads")
      };
    
    return (
        <div style={{ height: "530px", width: "640px", overflow: "hidden" }} className="z-index-1">
            <Navbar2/>
            <div className="relative isolate px-6 pt-14 lg:px-8 z-index-1">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold text-black">Choose Platforms to Advertise</h2>
                    <p className="mt-2 text-lg text-gray-600">Select where you want to post your ads: Facebook, Instagram, or both.</p>
                </div>
                <div className="flex justify-center items-center" style={{ marginTop: '45px' }}>
                    <FbSwitch />
                    <Spacer x={4} />
                    <InstaSwitch />
                </div>
                <Scheduler/>
                <Modal/>
                <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                    <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{ clipPath:'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}/>
                </div>
                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
                    <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath:'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}/>
                </div>
                <Tabs/>
            </div>
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer" onClick={handleAdsClick} style={{ marginTop: '-175px' }}>
        <ChevronLeft size={32} />
        </div>
        </div>
    );
};

export default AdPerformance;

import React from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import BarChartpost from "./BarChartpost";
import Navbar2 from "./Navbar2";

const Cards = () => {
  const { id } = useParams();
  console.log("ID:", id);


  return (
    <div>
      <div style={{ height: "530px", width: "640px", overflow: "hidden" }} className="z-index-1">
        <Navbar2 />
        <div className="relative isolate px-6 pt-14 lg:px-8 z-index-1">
          <h1 className="text-2xl font-bold mb-4">Insights for Item {id}</h1>
          <div className="flex flex-row space-x-4">
            <div className="bg-white rounded-lg shadow-md p-4 w-1/4" style={{marginLeft: '-16px'}}>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Reach</p>
                  <p className="text-lg font-bold">350,897</p>
                </div>
                <div className="bg-red-500 text-white rounded-full p-2">
                  <i className="fas fa-chart-bar" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 w-1/4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Impression</p>
                  <p className="text-lg font-bold">49.65%</p>
                </div>
                <div className="bg-teal-500 text-white rounded-full p-2">
                  <i className="fas fa-percentage" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 w-1/4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Clicks</p>
                  <p className="text-lg font-bold">12,456</p>
                </div>
                <div className="bg-orange-500 text-white rounded-full p-2">
                  <i className="fas fa-mouse-pointer" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 w-1/4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-gray-500 text-sm font-medium" style={{marginLeft:'-11px'}}>Engagement</p>
                  <p className="text-lg font-bold">24,789</p>
                </div>
                <div className="bg-purple-500 text-white rounded-full p-2">
                  <i className="fas fa-users" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <BarChartpost />
          </div>
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Cards;
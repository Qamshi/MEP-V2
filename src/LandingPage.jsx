

import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";


const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate("/plan");
  };

  const handleLearnMoreClick = () => {
    window.open("https://github.com", "_blank");
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
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32 z-index-1">
          <div className="hidden sm:mb-4 sm:flex sm:justify-center z-index-1">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 z-index-1">
              Announcing our next round of funding.{' '}
              <a href="#" className="font-semibold text-indigo-600 z-index-1">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center z-index-1">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl z-index-1">
              Transforming Social Spaces
            </h1>
            <p className="mt-4 text-base leading-6 text-gray-600 z-index-1">
              AT ONE CLICK
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-4 z-index-1">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleGetStartedClick();
                }}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 z-index-1"
              >
                Get started
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLearnMoreClick();
                }}
                className="text-sm font-semibold leading-6 text-gray-900 z-index-1"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
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
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
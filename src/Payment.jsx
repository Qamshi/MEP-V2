import React, { useRef } from "react";
import "./App.css";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";
import PricingPage from "./PricingPage";

const Payment = () => {
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.scrollTop;
      const cardHeight = 1000; // Adjust this value based on your card height

      const cardIndex = Math.floor(scrollPosition / cardHeight);
      const scrollToPosition = cardIndex * cardHeight;

      scrollRef.current.scrollTo({
        // top: scrollToPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div style={{ height: "530px", width: "640px", overflow: "hidden" }} className="z-index-1">
      <Navbar2 />
      <div
        ref={scrollRef}
        className="relative isolate px-6 pt-14 lg:px-8 z-index-1 custom-scrollbar"
        style={{ overflowY: "auto", height: "calc(100% - 64px)" }}
        onScroll={handleScroll}
      >
        <PricingPage />
        <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
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
      <Footer />
    </div>
  );
};

export default Payment;

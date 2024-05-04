// import React from "react";
// import { useParams } from "react-router-dom";
// import "./App.css";
// import Footer from "./Footer";
// import Navbar2 from "./Navbar2";

// const Cards = () => {
//   const { id } = useParams();
//   console.log("ID:", id);

//   return (
//     <div>
//       <div style={{ height: "530px", width: "640px", overflow: "hidden" }} className="z-index-1">
//         <Navbar2 />
//         <div className="relative isolate px-6 pt-14 lg:px-8 z-index-1">
//           <h1 className="text-2xl font-bold mb-4">Insights for Item {id}</h1>
//           <div className="flex flex-row space-x-4">
//             <div className="bg-white rounded-lg shadow-md p-4 w-1/3">
//               <div className="flex items-center justify-between mb-2">
//                 <div>
//                   <p className="text-gray-500 text-sm font-medium">Total traffic</p>
//                   <p className="text-lg font-bold">350,897</p>
//                 </div>
//                 <div className="bg-red-500 text-white rounded-full p-2">
//                   <i className="fas fa-chart-bar" />
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <p className="text-green-500 flex items-center text-sm">
//                   <i className="fas fa-arrow-up mr-1" />
//                   3.48% Since last month
//                 </p>
//               </div>
//             </div>
//             <div className="bg-white rounded-lg shadow-md p-4 w-1/3">
//               <div className="flex items-center justify-between mb-2">
//                 <div>
//                   <p className="text-gray-500 text-sm font-medium">Performance</p>
//                   <p className="text-lg font-bold">49.65%</p>
//                 </div>
//                 <div className="bg-teal-500 text-white rounded-full p-2">
//                   <i className="fas fa-percentage" />
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <p className="text-green-500 flex items-center text-sm">
//                   <i className="fas fa-arrow-up mr-1" />
//                   1.2% Since last month
//                 </p>
//               </div>
//             </div>
//             <div className="bg-white rounded-lg shadow-md p-4 w-1/3">
//               <div className="flex items-center justify-between mb-2">
//                 <div>
//                   <p className="text-gray-500 text-sm font-medium">Clicks</p>
//                   <p className="text-lg font-bold">12,456</p>
//                 </div>
//                 <div className="bg-orange-500 text-white rounded-full p-2">
//                   <i className="fas fa-mouse-pointer" />
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <p className="text-red-500 flex items-center text-sm">
//                   <i className="fas fa-arrow-down mr-1" />
//                   2.8% Since last week
//                 </p>
//               </div>
//             </div>
//           </div>
//           {/* Render the charts here */}
//           <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
//             <div
//               className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
//               style={{
//                 clipPath:
//                   "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//               }}
//             />
//           </div>
//           <div
//             className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
//             aria-hidden="true"
//           >
//             <div
//               className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
//               style={{
//                 clipPath:
//                   "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
//               }}
//             />
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Cards;


// chart
// import Chart from "chart.js/auto"; // Import the entire library
// import React, { useEffect, useRef } from "react";
// import { useParams } from "react-router-dom";
// import "./App.css";
// import Footer from "./Footer";
// import Navbar2 from "./Navbar2";

// // Sample data for the chart
// const chartData = {
//   labels: ["January", "February", "March", "April", "May", "June", "July"],
//   datasets: [
//     {
//       label: "Sales",
//       data: [65, 59, 80, 81, 56, 55, 40],
//       fill: false,
//       borderColor: "rgba(75,192,192,1)",
//     },
//   ],
// };

// // Sample options for the chart
// const chartOptions = {
//   scales: {
//     y: {
//       beginAtZero: true,
//     },
//   },
// };

// const ChartComponent = () => {
//   const chartRef = useRef(null);

//   useEffect(() => {
//     const chart = new Chart(chartRef.current, {
//       type: "line",
//       data: chartData,
//       options: chartOptions,
//     });

//     return () => {
//       chart.destroy(); // Clean up the chart instance when the component unmounts
//     };
//   }, []);

//   return <canvas ref={chartRef} />;
// };

// const Cards = () => {
//   const { id } = useParams();
//   console.log("ID:", id);

//   return (
//     <div>
//       <div style={{ height: "530px", width: "640px", overflow: "hidden" }} className="z-index-1">
//         <Navbar2 />
//         <div className="relative isolate px-6 pt-14 lg:px-8 z-index-1">
//           <h1 className="text-2xl font-bold mb-4">Insights for Item {id}</h1>
//           <div className="flex flex-row space-x-4">
//             {/* ... (previous card components) ... */}
//           </div>
//           {/* Render the chart component */}
//           <ChartComponent />
//           {/* Background blur effects */}
//           {/* ... (previous background blur effects) ... */}
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Cards;



import Chart from "chart.js/auto";
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./App.css";
import Navbar2 from "./Navbar2";

// Sample data for the first chart
const chartData1 = {
  labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Click Impressions",
      data: [12000, 15000, 18000, 22000, 20000, 17000, 14000],
      fill: true,
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderWidth: 2,
      pointBackgroundColor: "rgba(75, 192, 192, 1)",
      pointBorderColor: "#fff",
      pointRadius: 5,
      pointHoverRadius: 8,
    },
  ],
};

// Sample data for the second chart
const chartData2 = {
  labels: ["Jan", "Feb", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Views",
      data: [8000, 10000, 12000, 18000, 15000, 11000, 9000],
      fill: true,
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderWidth: 2,
      pointBackgroundColor: "rgba(255, 99, 132, 1)",
      pointBorderColor: "#fff",
      pointRadius: 5,
      pointHoverRadius: 8,
    },
  ],
};

// Options for both charts
const chartOptions = {
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Number",
        font: {
          size: 12,
        },
      },
      ticks: {
        font: {
          size: 10,
        },
      },
    },
    x: {
      title: {
        display: true,
        text: "Month",
        font: {
          size: 12,
        },
      },
      ticks: {
        font: {
          size: 10,
        },
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        font: {
          size: 12,
        },
      },
    },
  },
};

const ChartComponent1 = () => {
  const chartRef1 = useRef(null);

  useEffect(() => {
    const chart = new Chart(chartRef1.current, {
      type: "line",
      data: chartData1,
      options: chartOptions,
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-2 mt-4" style={{ width: "350px", height: "220px" }}>
      {/* <h2 className="text-lg font-bold mb-2">Click Impressions Chart</h2> */}
      <canvas ref={chartRef1} height={205} width={300} />
    </div>
  );
};

const ChartComponent2 = () => {
  const chartRef2 = useRef(null);

  useEffect(() => {
    const chart = new Chart(chartRef2.current, {
      type: "line",
      data: chartData2,
      options: chartOptions,
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-2 mt-4" style={{ width: "350px", height: "220px" }}>
      {/* <h2 className="text-lg font-bold mb-2">Views Chart</h2> */}
      <canvas ref={chartRef2} height={205} width={300} />
    </div>
  );
};
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
            <div className="bg-white rounded-lg shadow-md p-4 w-1/3">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Total traffic</p>
                  <p className="text-lg font-bold">350,897</p>
                </div>
                <div className="bg-red-500 text-white rounded-full p-2">
                  <i className="fas fa-chart-bar" />
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-green-500 flex items-center text-sm">
                  <i className="fas fa-arrow-up mr-1" />
                  3.48% Since last month
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 w-1/3">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Performance</p>
                  <p className="text-lg font-bold">49.65%</p>
                </div>
                <div className="bg-teal-500 text-white rounded-full p-2">
                  <i className="fas fa-percentage" />
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-green-500 flex items-center text-sm">
                  <i className="fas fa-arrow-up mr-1" />
                  1.2% Since last month
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 w-1/3">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <p className="text-gray-500 text-sm font-medium">Clicks</p>
                  <p className="text-lg font-bold">12,456</p>
                </div>
                <div className="bg-orange-500 text-white rounded-full p-2">
                  <i className="fas fa-mouse-pointer" />
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-red-500 flex items-center text-sm">
                  <i className="fas fa-arrow-down mr-1" />
                  2.8% Since last week
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row space-x-4">
            {/* Render the first chart component */}
            <ChartComponent1 />
            {/* Render the second chart component */}
            <ChartComponent2 />
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
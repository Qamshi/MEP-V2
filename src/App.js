import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import AdPerformance from "./AdPerformance";
import Ads from "./Ads";
import AdsCharts from "./AdsCharts";
import './App.css';
import LandingPage from "./LandingPage";
import Login from "./Login";
import Options from "./Options";
import Payment from "./Payment";
import Plan from "./Plan";
import Posting from "./Posting";
import TextareaProvider from "./TextareaProvider"; // Import the Context Provider
import Map from "./Map";
import Feedback from "./Feedback";
export default function App() {
  return (
    <TextareaProvider>
    <MemoryRouter>
      
    <Routes>
        <Route index  element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/landing" element={<LandingPage/>} />
        <Route path="/plan" element={<Plan/>} />
        <Route path="/options" element={<Options/>} />
        <Route path="/ads" element={<Ads/>} />
        <Route path="/AdPerformance" element={<AdPerformance />} />
        {/* <Route path="/AdChart" element={<AdsCharts />} /> */}
        <Route path="/AdChart/:id" element={<AdsCharts />} />
        <Route path="/payment" element={<Payment/>} />
        <Route path="/post" element={<Posting/>} />
        <Route path="/map" element={<Map/>} />
        <Route path="/feedback" element={<Feedback/>} />
    </Routes>
    </MemoryRouter>
    </TextareaProvider>
  );
}
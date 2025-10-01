import React from 'react'
import Navbar from "./first";
import Header from "./second";
import DashboardTiles from "./third";
import ChatSection from "./fourt";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Header />
      <DashboardTiles />
      <ChatSection />
    </div>
  );
}


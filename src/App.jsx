import React, { useEffect, useState } from "react";

import illustration from "../images/illustration-intro.svg";

import Navbar from "./components/Navbar.jsx";
import ButtonOne from "./components/ButtonOne.jsx";
import ButtonTwo from "./components/ButtonTwo.jsx";
import Slide from "./components/Slide.jsx";
import Footer from "./components/Footers.jsx";

function PointCard({ number, subhead, paragraph }) {
  return (
    <div className="mb-6">
      <div className="hidden md:flex items-center gap-3 mb-2">
        <h1 className=" rounded-xl bg-[#f25f3a] text-white  px-3">{number}</h1>
        <h2 className="font-semibold text-l">{subhead}</h2>
      </div>
      <div className="relative w-full  bg-orange-200 flex items-center gap-3 rounded-l-xl mb-2 md:hidden">
        <h1 className=" left-0 h-[inherit] rounded-xl bg-[#f25f3a] text-white  px-3">
          {number}
        </h1>
        <h2 className=" font-semibold text-l">{subhead}</h2>
      </div>
      <p className="font-sm text-l md:ml-14 ">{paragraph}</p>
    </div>
  );
}

function App() {
  const points = [
    {
      number: "01",
      subhead: "Track company-wide progress",
      paragraph:
        "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      number: "02",
      subhead: "Advanced built-in reports",
      paragraph:
        "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      number: "03",
      subhead: "Everything you need in one place",
      paragraph:
        "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];

  return (
    <div className="overflow-hidden ">
      <Navbar />

      <div className=" w-4/5 mx-auto flex flex-col-reverse md:w-3/4 md:flex-row gap-3 mt-12 ">
        <div className=" flex flex-col gap-6 justify-center items-center md:items-start">
          <div className="w-full text-center font-bold text-5xl md:w-3/4 md:text-left">
            Bring everyone together to build better products.
          </div>
          <div className=" w-3/4 font-sm text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view
          </div>
          <div className="w-[150px]">
            <ButtonOne />
          </div>
        </div>
        <div className="w-[100%] mx-auto mb-8 ">
          <img src={illustration} alt="" />
        </div>
      </div>

      <div className=" w-2/3 mt-12 mx-auto flex flex-col gap-2  items-center md:flex-row md:items-start md:w-3/4">
        <div className=" w-full  flex flex-col items-center mb-8 md:w-1/2 md:items-start">
          <div className=" w-1/2  font-bold text-2xl mb-3 md:w-3/4">
            what's the different about Manage?
          </div>
          <div className="w-2/3 text-l ">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </div>
        </div>
        {/* right side */}
        <div className="w-full ml-20 flex flex-col gap-2 md:w-1/2">
          {points?.map((point, index) => (
            <PointCard
              key={index}
              number={point.number}
              subhead={point.subhead}
              paragraph={point.paragraph}
            />
          ))}
        </div>
      </div>

      <div className=" w-[98%] mx-auto mt-12">
        <div className=" mb-14 mx-auto  text-center font-bold text-3xl">
          What they 've said
        </div>

        {/* slide */}

        <Slide />

        <div className="w-1/3 mx-auto mb-20 flex justify-center">
          <ButtonOne className="" />
        </div>
      </div>

      <div className="w-full bg-BrightRed text-white">
        <div className="w-3/4 py-10 mx-auto flex flex-col gap-y-10 justify-between items-center md:flex-row md:w-2/3">
          <div className=" w-2/3  text-center font-bold text-3xl md:w-1/2 md:text-4xl md:text-left ">
            <div className=" ">Simplify how your team works today</div>
          </div>
          <ButtonTwo />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;

"use client";
import Records from "./Record";
import { useState } from "react";
import React from "react";
import OverView from "./OverView";
import Personal from "./Personal";
import Stats from "./Stats";

const DisplayDetails = () => {
  const [selected, setSelected] = useState("OverView");

  const handleSelected = (value) => {
    setSelected(value);
  };

  return (
    <div className="mt-10 ml-5 z-30 text-white ">
      <div>
        <div className="flex flex-row gap-20 z-50 max-lg:gap-6">
          <div className="flex flex-col gap-4">
            <h1
              onClick={() => handleSelected("OverView")}
              className={`${
                selected == "OverView"
                  ? "text-[#b17ddf] text-xl font-semibold hover:cursor-pointer"
                  : "text-gray-500 text-xl font-semibold hover:cursor-pointer"
              }`}
            >
              OverView
            </h1>
            {selected == "OverView" && (
              <div className="w-[140%] -ml-3 bg-[#b17ddf] h-1"></div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <h1
              onClick={() => handleSelected("Personal")}
              className={`${
                selected == "Personal"
                  ? "text-[#b17ddf] text-xl font-semibold hover:cursor-pointer"
                  : "text-gray-500 text-xl font-semibold hover:cursor-pointer"
              }`}
            >
              Details
            </h1>
            {selected == "Personal" && (
              <div className="w-[140%] -ml-3 bg-[#b17ddf] h-1"></div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <h1
              onClick={() => handleSelected("Stats")}
              className={`${
                selected == "Stats"
                  ? "text-[#b17ddf] text-xl font-semibold hover:cursor-pointer"
                  : "text-gray-500 text-xl font-semibold hover:cursor-pointer"
              }`}
            >
              Stats
            </h1>
            {selected == "Stats" && (
              <div className="w-[140%] -ml-3 bg-[#b17ddf] h-1"></div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            <h1
              onClick={() => handleSelected("Records")}
              className={`${
                selected == "Records"
                  ? "text-[#b17ddf] text-xl font-semiboldhover:cursor-pointer"
                  : "text-gray-500 text-xl font-semibold hover:cursor-pointer"
              }`}
            >
              Records
            </h1>
            {selected == "Records" && (
              <div className="w-[140%] -ml-3 bg-[#b17ddf] h-1"></div>
            )}
          </div>
        </div>
        <div className="h-1 w-[100%] bg-gray-700 -ml-3"></div>
        <div className="w-[100%]">
          {selected == "OverView" && <OverView />}
          {selected == "Stats" && <Stats />}
          {selected == "Records" && <Records />}
          {selected == "Personal" && <Personal />}
        </div>
      </div>
    </div>
  );
};

export default DisplayDetails;

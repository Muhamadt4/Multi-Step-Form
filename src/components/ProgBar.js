import React from "react";

export default function ProgBar({ step, AllSteps }) {
  return (
    <div className="bg-white w-full h-3 my-6">
      <div
        className={` bg-slate-600 h-3 transition-all duration-500 ${
          step == 0 ? "w-[33%]" : step == 1 ? "w-[66%]" : "w-[100%]"
        }`}
      ></div>
    </div>
  );
}

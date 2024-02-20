import React, { useState } from "react";
import ControlBtns from "./controlBtns";
import Account from "./Steps/Account";
import Personal from "./Steps/Personal";
import Other from "./Steps/Other";
import ProgBar from "./ProgBar";

export default function Form() {
  const [step, setStep] = useState(0);

  const AllSteps = ["Personal Info ", " Account Info ", "Other Info"];

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
    confpass: "",
    address1: "",
    address2: "",
    address3: "",
  });

  const PageDisplay = () => {
    switch (step) {
      case 0:
        return <Personal data={data} setData={setData} />;
      case 1:
        return <Account data={data} setData={setData} />;
      case 2:
        return <Other data={data} setData={setData} />;
      default:
        return <div>Error</div>;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-gradient-to-br from-gray-500 to-slate-800">
      <div className="container w-1/2 bg-slate-400 p-6 shadow-xl rounded-lg">
        <div className="progbar">
          <ProgBar
            step={step}
            AllSteps={AllSteps}
          ></ProgBar>
        </div>
        <div>
          <div className="Header text-4xl pb-4 font-semibold">
            {" "}
            {AllSteps[step]}
          </div>
          <div className="Body">{PageDisplay(step)}</div>
          <ControlBtns
            data={data}
            step={step}
            setStep={setStep}
            AllSteps={AllSteps}
          ></ControlBtns>
        </div>
      </div>
    </div>
  );
}

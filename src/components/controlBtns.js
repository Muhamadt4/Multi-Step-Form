import React from "react";

export default function ControlBtns({ step, setStep, AllSteps, data }) {
  const clickHandler = () => {
    if (step == 0) {
      if (
        Object.values(data).some(
          (value) =>
            data.firstName === "" || data.lastName === "" || data.age === ""
        )
      ) {
        alert("Please fill all the feilds");
      } else {
        setStep((currStep) => currStep + 1);
      }
    } else if (step == 1) {
      if (
        Object.values(data).some(
          (value) =>
            data.confpass === "" || data.password === "" || data.email === ""
        )
      ) {
        alert("Please fill all the feilds");
      } else {
        setStep((currStep) => currStep + 1);
      }
    } else if (step == 2) {
      if (
        Object.values(data).some(
          (value) =>
            data.address3 === "" || data.address2 === "" || data.address1 === ""
        )
      ) {
        alert("Please fill all the feilds");
      } else if (step == AllSteps.length - 1) {
        alert("Form Submitted , Data displayed in console");
        console.log(data);
      }
    }
  };

  return (
    <div className="flex justify-between mt-6">
      <button
        className="transition-all duration-300 bg-slate-300 px-6 py-2 rounded-lg border-2 border-slate-400 hover:bg-slate-700 hover:text-slate-200 disabled:opacity-0"
        disabled={step == 0}
        onClick={() => setStep((currStep) => currStep - 1)}
      >
        Prev
      </button>
      <button
        className="transition-all duration-300 bg-green-800 px-6 py-2 rounded-lg border-2 border-slate-400 hover:bg-green-600 text-slate-200 hover:text-slate-800"
        onClick={clickHandler}
      >
        {step !== AllSteps.length - 1 ? "Next" : "Submit"}
      </button>
    </div>
  );
}

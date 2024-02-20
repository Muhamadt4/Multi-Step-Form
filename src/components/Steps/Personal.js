import React from "react";

export default function Personal({data , setData}) {
  return (
    <div className="flex flex-col">
      <label className="font-semibold py-3">First Name</label>
      <input
        className="text-xl p-2 rounded-lg outline-none"
        type="text"
        required
        value={data.firstName}
        onChange={(event)=>setData({...data,firstName: event.target.value})}
      />
      <label className="font-semibold py-3">Last Name</label>
      <input
        className="text-xl p-2 rounded-lg outline-none"
        type="text"
        required
        value={data.lastName}
        onChange={(event)=>setData({...data,lastName: event.target.value})}
      />
      <label className="font-semibold py-3">Age</label>
      <input
        className="text-xl p-2 rounded-lg outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        type="number"
        required
        value={data.age}
        onChange={(event)=>setData({...data,age: event.target.value})}
      />
    </div>
  );
}

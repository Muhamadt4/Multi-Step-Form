import React from "react";

export default function Account({ data, setData }) {
  return (
    <div className="flex flex-col">
      <label className="font-semibold py-3">E-mail</label>{" "}
      <input
        className="text-xl p-2 rounded-lg outline-none"
        type="email"
        required
        value={data.email}
        onChange={(event)=>setData({...data,email: event.target.value})}
      />
      <label className="font-semibold py-3">Password</label>{" "}
      <input
        className="text-xl p-2 rounded-lg outline-none"
        type="password"
        required
        value={data.password}
        onChange={(event)=>setData({...data,password: event.target.value})}
      />
      <label className="font-semibold py-3">Confirm Password</label>{" "}
      <input
        className="text-xl p-2 rounded-lg outline-none"
        type="password"
        required
        value={data.confpass}
        onChange={(event)=>setData({...data,confpass: event.target.value})}
      />
    </div>
  );
}

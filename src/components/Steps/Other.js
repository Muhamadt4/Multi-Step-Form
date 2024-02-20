import React from "react";

export default function Other({ data, setData }) {
  return (
    <div className="flex flex-col">
      <label className="font-semibold py-3">Address</label>
      <input
        className="text-xl p-2 rounded-lg outline-none "
        type="text"
        required
        value={data.address1}
        onChange={(event)=>setData({...data,address1: event.target.value})}
      />
      <label className="font-semibold py-3">Address</label>
      <input
        className="text-xl p-2 rounded-lg outline-none "
        type="text"
        required
        value={data.address2}
        onChange={(event)=>setData({...data,address2: event.target.value})}
      />
      <label className="font-semibold py-3">Address</label>
      <input
        className="text-xl p-2 rounded-lg outline-none "
        type="text"
        required
        value={data.address3}
        onChange={(event)=>setData({...data,address3: event.target.value})}
      />
    </div>
  );
}

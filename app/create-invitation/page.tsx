"use client";

import { useState } from "react";

const Page = () => {
  const [val, setVal] = useState("");

  const getLink = async () => {
    const host = window.location.host;
    const link = `${host}/${encodeURIComponent(val)}`;

    try {
      await navigator.clipboard.writeText(link);
      alert("Copied to clipboard:\n" + link);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="">
      <div className="w-[300px] m-auto">
        <div className="flex flex-col gap-2">
          <label htmlFor="friend">Your friend name</label>
          <input
            className="border border-white px-1 py-2"
            id="friend"
            onChange={(e) => {
              setVal(e.target.value);
            }}
          ></input>
          <button className="bg-black p-2" onClick={getLink}>
            Get Link
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;

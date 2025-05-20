import React, { useEffect, useState } from "react";

export const CardComponent = ({ title, value, buttonText,icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (start === end) return;

    let incrementTime = Math.max(20, Math.floor(1000 / end)); // Faster Speed (~1 sec)
    let timer = setInterval(() => {
      start += Math.ceil(end / 50); // Bigger steps for faster counting
      if (start > end) start = end;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex items-center p-4 shadow-lg bg-white rounded-lg text-gray-700 hover:scale-105 transition-all duration-500">
      {/* Circular Icon */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-purple-500 text-white text-2xl shadow-md">
      {icon}
      </div>

      {/* Title & Count */}
      <div className="ml-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-xl font-bold">{count}</p>
      </div>

      {/* Button (Optional) */}
    
    </div>
  );
};

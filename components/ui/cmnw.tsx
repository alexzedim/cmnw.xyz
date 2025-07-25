"use client";
import React from "react";

const gradients = [
  "from-blue-600 via-rose-500 to-amber-600",
  "from-purple-600 via-pink-500 to-red-400",
  "from-green-400 via-blue-500 to-purple-600",
  "from-yellow-400 via-red-500 to-pink-500",
  "from-cyan-400 via-blue-500 to-indigo-600",
  "from-orange-400 via-yellow-500 to-pink-500",
  "from-teal-400 via-green-500 to-lime-600",
  "from-fuchsia-500 via-red-600 to-orange-400",
  "from-emerald-400 via-cyan-500 to-blue-600",
  "from-indigo-500 via-sky-400 to-emerald-400"
];

export function CMNW() {
  const [gradient, setGradient] = React.useState(gradients[0]);

  React.useEffect(() => {
    setGradient(gradients[Math.floor(Math.random() * gradients.length)]);
  }, []);

  return (
    <h1 className="text-12xl md:text-[12rem] font-extrabold mb-4 leading-tight">
      <span className={`block bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        CMNW
      </span>
    </h1>
  );
} 
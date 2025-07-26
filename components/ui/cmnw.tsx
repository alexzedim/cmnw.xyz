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

const fonts = [
  "font-extrabold",
  "font-extrabold underline",
  "font-bold",
  "font-light",
  "font-light underline",
  "font-black uppercase tracking-widest",
  "font-thin lowercase tracking-tight",
  "font-thin lowercase tracking-tight underline",
  "font-medium",
  "font-semibold underline",
];

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function CMNW() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (index >= fonts.length - 1) return;
    const nextDelay = getRandomInt(300, 1000); // 0.3s to 3s
    const timeout = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, nextDelay);
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <h1 className={`text-12xl md:text-[12rem] mb-4 leading-tight transition-all duration-500 ${fonts[index]}`}>
      <span className={`block bg-gradient-to-r ${gradients[index % gradients.length]} bg-clip-text text-transparent`}>
        CMNW
      </span>
    </h1>
  );
} 
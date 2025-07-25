"use client";
import React from "react";

const getWelcomeText = () => {
  if (typeof window !== "undefined") {
    const lang = window.navigator.language || window.navigator.languages[0] || "en";
    if (lang.startsWith("ru")) {
      return "Добро пожаловать";
    }
  }
  return "Welcome to";
};

export function Welcome() {
  const [text, setText] = React.useState("Welcome to");

  React.useEffect(() => {
    setText(getWelcomeText());
  }, []);

  return (
    <h1 className="text-4xl md:text-6xl font-normal text-slate-800 mb-4 leading-tight font-great-vibes">
      {text}
    </h1>
  );
} 
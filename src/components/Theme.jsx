import { useEffect, useState } from "react";
import sol from '../assets/sol.svg'
import luna from '../assets/moonn.png'

import React from 'react'

export const Theme = () => {
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="flex gap-3">
        {theme === "light" ? (
          <div className="w-8" onClick={handleChangeTheme}>
            <img src={luna} alt="" />
          </div>
        ) : (
          <div className="w-8" onClick={handleChangeTheme}>
            <img src={sol} alt="" />
          </div>
        )}
      </div>

    </>


  );
}



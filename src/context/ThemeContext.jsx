"use client";
import React, { createContext, useState } from "react";

const ThemeModeContext = createContext();

const ThemeContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <ThemeModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </ThemeModeContext.Provider>
  );
};

export { ThemeContextProvider, ThemeModeContext };
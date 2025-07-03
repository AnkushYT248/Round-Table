'use client'
import React, { useContext } from "react";
import { ThemeModeContext } from "@/context/ThemeContext";

export default function ThemeBody({ children, className }) {
  const { darkMode } = useContext(ThemeModeContext);
  return (
    <body className={`${className} ${darkMode ? "dark" : "light"}`}>
      {children}
    </body>
  );
}
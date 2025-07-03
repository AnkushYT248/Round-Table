import { ChevronDown } from "lucide-react";
import React, { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeModeContext } from "@/context/ThemeContext";

const ItemDropdown = ({ title = "Dropdown", children, divider, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode } = useContext(ThemeModeContext);
  return (
    <div
      className={`w-full h-max p-3 rounded-xl cursor-pointer border transition-colors duration-300 shadow-md ${
        darkMode
          ? "bg-zinc-900 text-white border-zinc-800"
          : "bg-white text-black border-zinc-200"
      }`}
      aria-haspopup="true"
      aria-expanded={isOpen}
      tabIndex={0}
      onKeyDown={e => (e.key === "Enter" || e.key === " ") && setIsOpen(prev => !prev)}
    >
      <div
        className="flex items-center justify-between gap-4 select-none"
        onClick={() => setIsOpen((prev) => !prev)}
        role="button"
        aria-label={title}
      >
        <h2 className="text-sm font-bold flex items-center gap-4">{icon && icon} {title}</h2>
        <ChevronDown
          className={`transition-transform duration-500 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="dropdown-content"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.5 } }}
            transition={{ duration: 0.3 }}
            className={`mt-4 rounded-2xl shadow-lg border transition-colors duration-300 ${
              darkMode
                ? "bg-zinc-800 text-white border-zinc-700"
                : "bg-zinc-100 text-black border-zinc-200"
            }`}
            aria-label="Dropdown content"
          >
            {divider && <div className="w-full h-2 bg-black dark:bg-white relative mb-2 rounded" />}
            <div>{children && children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ItemDropdown;

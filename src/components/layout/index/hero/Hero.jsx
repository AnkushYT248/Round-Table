"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";

const placeholderTexts = [
  "Full Stack Developer",
  "Data Science",
  "Data Structure & Algorithm",
  "Learn Java, JavaScript, C++, C#",
];

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [showText, setShowText] = useState(true);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (inputValue) return;
      setShowText(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % placeholderTexts.length);
        setShowText(true);
      }, 200); // smoother transition
    }, 3000);

    return () => clearInterval(interval);
  }, [inputValue]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full min-h-[420px] md:min-h-[480px] flex flex-col items-center justify-center px-2 sm:px-6 pt-8 pb-4 bg-gradient-to-b from-blue-50 via-white to-purple-50 dark:from-[#181b20] dark:via-[#181b20] dark:to-[#23272f] relative overflow-x-hidden"
    >
      <div className="flex flex-col items-center justify-center my-6">
        <span
          className="audiowide rounded-md px-4 py-2 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent flex items-center justify-center drop-shadow-lg"
          style={{
            fontSize: '2.5rem',
            fontWeight: 800,
            letterSpacing: '0.07em',
            lineHeight: 1.1,
          }}
        >
          <span className="mr-2">Round</span>|<span>Table</span>
        </span>
        <p className="mt-2 text-base md:text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl">
          Empowering learners and creators with curated resources, hands-on practice, and a vibrant community.
        </p>
      </div>
      <div className="flex flex-col items-center gap-5 text-center w-full">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white drop-shadow-sm max-w-3xl">
          As the world learns what’s right, it grows—guided by the light of wisdom.
        </h2>
        <div className="relative w-full max-w-2xl mt-3 flex items-center justify-center">
          <input
            type="text"
            className="w-full p-4 border-2 rounded-2xl bg-white/80 dark:bg-black/30 backdrop-blur-sm text-black dark:text-white border-black/20 dark:border-white/30 focus:outline-none placeholder:opacity-0 focus:placeholder:opacity-0 text-base md:text-lg shadow-md"
            placeholder=""
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            aria-label="Search courses, tutorials, topics..."
          />
          {/* Animated Placeholder */}
          <div className="absolute top-0 w-full h-full pointer-events-none p-4 text-gray-500 dark:text-gray-400 select-none">
            <AnimatePresence mode="wait">
              {showText && !inputValue && (
                <motion.span
                  key={placeholderTexts[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-start mt-1 text-base md:text-lg"
                >
                  {placeholderTexts[index]}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          {/* Search Icon */}
          <button
            className="absolute right-4 top-4 md:top-5 text-gray-500 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            tabIndex={-1}
            aria-label="Search"
            type="button"
          >
            <Search size={22} />
          </button>
        </div>
      </div>
      {/* Tags/Filters */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
        {[
          "Artificial Intelligence",
          "Data Science",
          "Frontend Interview Practice",
        ].map((tag, idx) => (
          <span
            key={idx}
            className="px-5 py-2 rounded-2xl text-base font-semibold bg-white/90 dark:bg-gray-800 text-blue-700 dark:text-blue-200 border border-blue-200 dark:border-blue-900 cursor-pointer shadow-sm hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white transition duration-300"
          >
            {tag}
          </span>
        ))}
      </div>
      {/* Decorative background shapes */}
      <span className="absolute left-0 top-0 w-40 h-40 bg-gradient-to-br from-blue-100/40 to-purple-200/20 dark:from-blue-900/10 dark:to-purple-900/10 rounded-br-3xl pointer-events-none blur-2xl opacity-70" />
      <span className="absolute right-0 bottom-0 w-40 h-40 bg-gradient-to-tl from-purple-100/40 to-blue-200/20 dark:from-purple-900/10 dark:to-blue-900/10 rounded-tl-3xl pointer-events-none blur-2xl opacity-70" />
    </motion.section>
  );
};

export default Hero;

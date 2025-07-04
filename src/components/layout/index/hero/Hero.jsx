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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full h-full max-h-[500px] flex flex-col items-center justify-center p-4 overflow-x-hidden"
    >
      <div className="items-center justify-center flex flex-col my-6">
        <span
          className="audiowide rounded-md p-2 bg-gradient-to-r from-red-500 to-violet-700 dark:to-white text-transparent bg-clip-text flex items-center justify-center"
          style={{
            fontSize: '2rem',
            fontWeight: 700,
            letterSpacing: '0.05em',
            lineHeight: 1.1,
          }}
        >
          <span className="mr-1">Round</span>|<span>Table</span>
        </span>
        <div className=""></div>
      </div>
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-xl font-bold md:text-2xl lg:text-3xl xl:text-5xl tracking-wide text-gray-100">
          As the world learns what’s right, it grows—guided by the light of
          wisdom.
        </h2>

        <div className="relative w-full max-w-3xl mt-2 flex items-center justify-center">
          <input
            type="text"
            className="w-full p-4 border-2 rounded-2xl bg-white/80 dark:bg-black/30 backdrop-blur-sm text-black dark:text-white 
              border-black/20 dark:border-white/30 focus:outline-none 
              placeholder:opacity-0 focus:placeholder:opacity-0 text-sm sm:text-base md:text-lg"
            placeholder=""
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          {/* Animated Placeholder */}
          <div className="absolute top-0 w-full h-full pointer-events-none p-4 text-gray-500 dark:text-gray-400 ">
            <AnimatePresence mode="wait">
              {showText && !inputValue && (
                <motion.span
                  key={placeholderTexts[index]}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-start mt-1"
                >
                  {placeholderTexts[index]}
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Search Icon */}
          <div className="absolute right-5 top-5 md:top-6 text-gray-500 dark:text-gray-300">
            <Search size={20} />
          </div>
        </div>
      </div>

      {/* Tags/Filters */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
        {[
          "Artificial Intelligence",
          "Data Science",
          "Frontend Interview Practice",
        ].map((tag, idx) => (
          <span
            key={idx}
            className="px-4 py-2 rounded-xl text-sm font-medium bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-transparent cursor-pointer
            hover:bg-blue-600 hover:text-white transition duration-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Hero;

'use client'
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useRef } from "react";

const links = [
  {
    title: "DSA",
    path: "/courses/dsa",
  },
  {
    title: "Data Science",
    path: "/courses/data-science",
  },
  {
    title: "Python",
    path: "/courses/python",
  },
  {
    title: "Java",
    path: "/courses/java",
  },
  {
    title: "Java Script",
    path: "/courses/javascript",
  },
  {
    title: "React",
    path: "/courses/react",
  },
  {
    title: "Django",
    path: "/courses/django",
  },
  {
    title: "Rust",
    path: "/courses/rust",
  },
  {
    title: "Ruby",
    path: "/courses/ruby",
  },
  {
    title: "C++",
    path: "/courses/cpp",
  },
  {
    title: "C#",
    path: "/courses/csharp",
  },
  {
    title: "Unreal Engine",
    path: "/courses/unreal-engine",
  },
  {
    title: "Backend",
    path: "/courses/backend",
  },
  {
    title: "More",
    path: "/courses/all",
  },
];

const CarouselLinks = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.7;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <hr />
      <div className="w-full max-w-[200vw] mx-auto relative scroll bg-white dark:bg-[#0f0f10]">
        <button
          className="absolute left-0 top-[45%] -translate-y-1/2 z-10 bg-white dark:bg-[#161617] rounded-full p-1 shadow hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          type="button"
        >
          <ChevronLeft />
        </button>
        <div
          ref={scrollRef}
          className="flex items-center gap-3 justify-start overflow-x-auto scrollbar-hide px-10"
          style={{ scrollBehavior: "smooth" }}
        >
          {links.map((link, idx) => (
            <Link
              href={link.path}
              key={idx}
              className="mx-4 px-4 py-2 rounded-md transition-colors whitespace-nowrap hover:text-blue-500 duration-300 text-black/80 dark:text-white text-sm"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <button
          className="absolute right-0 top-[45%] -translate-y-1/2 z-10 bg-white dark:bg-[#161617] rounded-full p-1 shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          type="button"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default CarouselLinks;

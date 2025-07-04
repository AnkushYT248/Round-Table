"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const CarouselLinks = () => {
  const scrollRef = useRef(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await fetch("/api/nav_data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requestType: "getPillBarData",
        }),
      })
        .then((res) => {
          if (!res.ok) {
            setIsLoading(false);
            return;
          }
          return res.json();
        })
        .then((data) => {
          setData(data);

          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    }

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full max-w-[200vw] mx-auto relative scroll bg-white dark:bg-[#0f0f10]">
        <div className="flex items-center gap-3 justify-between p-1">
          {Array.from({ length: 10 }).map((_, idx) => {
            return <Skeleton className="h-6 w-10 " key={idx} />;
          })}
        </div>
      </div>
    );
  }

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.7;
      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
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
          {data.map((link, idx) => (
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
          className="absolute right-4 top-[45%] -translate-y-1/2 z-10 bg-white dark:bg-[#161617] rounded-full p-1 shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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

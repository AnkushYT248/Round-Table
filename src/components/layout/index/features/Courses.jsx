"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ArrowDownNarrowWide,
  ChartNoAxesColumnIncreasing,
  Check,
  ListFilterPlus,
} from "lucide-react";
import React, { useEffect, useState } from "react";

function formatJoined(num) {
  if (num >= 1_000_000)
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (num >= 1_000) return (num / 1_000).toFixed(0) + "K";
  return num;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return date.toLocaleDateString("en-US", options);
}

const Courses = () => {
  const [filter, setFilter] = useState("Most Popular");
  const [levelFilter, setLevelFilter] = useState("");
  const [showLevels, setShowLevels] = useState(false);
  const [coursesData, setCoursesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      await fetch("api/courses")
        .then(async (res) => {
          if (!res.ok) {
            setIsLoading(false);
            return;
          }

          const data = await res.json();

          // Ensure data is always an array
          setCoursesData(
            Array.isArray(data.courses) ? data.courses.slice(0, 10) : []
          );
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching courses data:", err);
          setIsLoading(false);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    fetchCourses();
  }, []);

  let filteredCourses = [...coursesData];
  if (filter === "Free") {
    filteredCourses = filteredCourses.filter((c) => c.price === 0);
  }
  if (levelFilter) {
    filteredCourses = filteredCourses.filter((c) =>
      c.level.toLowerCase().includes(levelFilter.toLowerCase())
    );
  }
  if (filter === "A-Z") {
    filteredCourses.sort((a, b) => a.title.localeCompare(b.title));
  } else if (filter === "Most Popular") {
    filteredCourses.sort((a, b) => b.rating - a.rating);
  }

  if (isLoading) {
    return (
      <div className="dark:bg-[#111111] bg-[#e9e6ef] px-6 py-10 min-h-[80vh]">
        <div className="flex items-center justify-between mb-8 flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <Skeleton className="h-8 w-48 rounded-lg" />
            <Skeleton className="h-4 w-32 rounded-lg" />
          </div>
          <Skeleton className="h-10 w-44 rounded-lg" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, idx) => (
            <div
              className="relative bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition h-full flex flex-col animate-pulse"
              key={idx}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex flex-col gap-2">
                  <Skeleton className="h-7 w-36 rounded" />
                  <Skeleton className="h-4 w-28 rounded" />
                </div>
                <Skeleton className="h-6 w-10 rounded-full" />
              </div>
              <Skeleton className="h-16 w-full rounded-lg mb-4" />
              <div className="flex items-center justify-between mb-3">
                <Skeleton className="h-4 w-28 rounded" />
                <Skeleton className="h-4 w-20 rounded" />
              </div>
              <div className="flex flex-col gap-2 mb-3">
                <Skeleton className="h-4 w-24 rounded" />
                <Skeleton className="h-4 w-20 rounded" />
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {Array.from({ length: 4 }).map((_, tagIdx) => (
                  <Skeleton className="h-4 w-16 rounded-full" key={tagIdx} />
                ))}
              </div>
              <div className="flex items-center justify-between gap-3 mt-auto">
                <Skeleton className="h-9 w-28 rounded-lg" />
                <Skeleton className="h-9 w-28 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="dark:bg-[#111111] bg-[#e9e6ef] px-6 py-10">
      <div className="flex items-center justify-between mb-6 flex-col md:flex-row gap-2">
        <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">
          Courses
        </h2>
        <DropdownMenu>
          <DropdownMenuTrigger className="font-bold flex gap-2 items-center cursor-pointer border-none outline-none px-4 py-2 rounded bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition">
            <ListFilterPlus /> Filter Courses
          </DropdownMenuTrigger>
          <DropdownMenuContent className="min-w-[220px] p-2 space-y-2">
            <DropdownMenuLabel className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Sort By
            </DropdownMenuLabel>
            <DropdownMenuItem
              className="flex items-center justify-between"
              onClick={() => setFilter("A-Z")}
            >
              A-Z{" "}
              {filter === "A-Z" && (
                <Check className="text-blue-500" size={16} />
              )}
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center justify-between"
              onClick={() => setFilter("Most Popular")}
            >
              Most Popular{" "}
              {filter === "Most Popular" && (
                <Check className="text-blue-500" size={16} />
              )}
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center justify-between"
              onClick={() => setFilter("Free")}
            >
              Free{" "}
              {filter === "Free" && (
                <Check className="text-blue-500" size={16} />
              )}
            </DropdownMenuItem>
            <DropdownMenuLabel className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mt-2">
              By Level
            </DropdownMenuLabel>
            <DropdownMenuItem
              asChild
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setShowLevels((v) => !v)}
            >
              <div>
                <span className="flex items-center">
                  <ArrowDownNarrowWide className="mr-2" size={16} />{" "}
                  {levelFilter || "Select Level"}
                </span>
              </div>
            </DropdownMenuItem>
            {showLevels && (
              <div className="pl-6 space-y-1">
                {Array.from(new Set(coursesData.map((c) => c.level))).map(
                  (level, idx) => (
                    <DropdownMenuItem
                      key={idx}
                      onClick={() => {
                        setLevelFilter(level);
                        setShowLevels(false);
                      }}
                      className="flex items-center justify-between"
                    >
                      {level}{" "}
                      {levelFilter === level && (
                        <Check className="text-blue-500" size={16} />
                      )}
                    </DropdownMenuItem>
                  )
                )}
                {levelFilter && (
                  <DropdownMenuItem
                    onClick={() => {
                      setLevelFilter("");
                      setShowLevels(false);
                    }}
                  >
                    Clear Level
                  </DropdownMenuItem>
                )}
              </div>
            )}
            {(filter || levelFilter) && (
              <DropdownMenuItem
                onClick={() => {
                  setFilter("");
                  setLevelFilter("");
                  setShowLevels(false);
                }}
                className="text-red-500"
              >
                Clear All Filters
              </DropdownMenuItem>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Course Card */}
        {filteredCourses.map((course) => {
          return (
            <div
              className="relative bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl p-6 shadow-md hover:shadow-lg transition h-full flex flex-col"
              key={course._id}
            >
              <div className="flex items-start justify-between mb-5">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {course.title}
                  </h3>
                  <div className="mt-1 text-sm text-white bg-red-500 px-3 py-1 rounded flex items-center gap-2 w-max">
                    <ChartNoAxesColumnIncreasing size={16} />
                    {course.level}
                  </div>
                </div>
                <div className="text-yellow-500 text-sm font-medium">
                  ★ {course.rating}
                </div>
              </div>

              <div className="bg-blue-600/90 dark:bg-blue-700/80 text-white rounded-lg p-4 text-sm leading-relaxed mb-3">
                {course.description}
              </div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs">
                  Uploaded Date: {formatDate(course.uploadedDate)}
                </p>
                <p className="text-xs">
                  {formatJoined(course.joined)} People Interested
                </p>
              </div>

              <div className="w-full h-1 bg-gray-300 dark:bg-gray-700 mb-3 rounded" />

              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{course.category}</p>
                  <p className="text-sm font-semibold">{course.duration}</p>
                </div>
                <div className="flex items-center justify-between my-2">
                  <p className="font-bold text-sm">
                    Instructor:
                    <span className="text-blue-400"> {course.instructor}</span>
                  </p>
                  <p>{course.price === 0 ? "Free" : `$${course.price}`}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {course.tags.map((tag, idx) => {
                    return (
                      <p
                        key={tag + idx}
                        className="px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 text-xs font-medium shadow-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-200"
                      >
                        {tag}
                      </p>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 mt-auto">
                <Button className="cursor-pointer" variant="outline">
                  Learn More
                </Button>
                <Button className="cursor-pointer">View Course</Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;

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
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      await fetch("api/courses")
        .then(async (res) => {
          if (!res.ok) {
            setIsLoading(false);
            setError("Failed to fetch courses data");
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
          setError("Failed to fetch courses data");
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

  if (error)
    return (
      <section className="w-full px-4 py-10 lg:px-16 lg:py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#111111] dark:via-[#181b20] dark:to-[#23272f] min-h-[80vh] transition-colors">
        <div className="max-w-2xl mx-auto flex flex-col items-center justify-center min-h-[300px]">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4 drop-shadow-sm">
            <span className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">Error Loading Courses</span>
          </h2>
          <p className="text-lg text-red-600 dark:text-red-400 font-semibold mb-2 text-center">{error}</p>
          <p className="text-base text-gray-600 dark:text-gray-300 text-center">Please try refreshing the page or check your network connection.</p>
        </div>
      </section>
    );
  if (isLoading)
    return (
      <section className="w-full px-4 py-10 lg:px-16 lg:py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#111111] dark:via-[#181b20] dark:to-[#23272f] min-h-[80vh] transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10 flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-2 w-full md:w-auto">
              <Skeleton className="h-10 w-56 rounded-lg" />
              <Skeleton className="h-5 w-40 rounded-lg" />
            </div>
            <Skeleton className="h-12 w-52 rounded-lg" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                className="relative bg-white/90 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition h-full flex flex-col animate-pulse overflow-hidden"
                key={idx}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-8 w-40 rounded" />
                    <Skeleton className="h-5 w-28 rounded" />
                  </div>
                  <Skeleton className="h-7 w-12 rounded-full" />
                </div>
                <Skeleton className="h-20 w-full rounded-lg mb-5" />
                <div className="flex items-center justify-between mb-4">
                  <Skeleton className="h-5 w-32 rounded" />
                  <Skeleton className="h-5 w-24 rounded" />
                </div>
                <div className="flex flex-col gap-2 mb-4">
                  <Skeleton className="h-5 w-28 rounded" />
                  <Skeleton className="h-5 w-24 rounded" />
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {Array.from({ length: 4 }).map((_, tagIdx) => (
                    <Skeleton className="h-5 w-20 rounded-full" key={tagIdx} />
                  ))}
                </div>
                <div className="flex items-center justify-between gap-3 mt-auto">
                  <Skeleton className="h-10 w-32 rounded-lg" />
                  <Skeleton className="h-10 w-32 rounded-lg" />
                </div>
                <span className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-blue-100/40 to-purple-200/20 dark:from-blue-900/10 dark:to-purple-900/10 rounded-bl-3xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );

  return (
    <section className="w-full px-4 py-10 lg:px-16 lg:py-16 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-[#111111] dark:via-[#181b20] dark:to-[#23272f] transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-10 flex-col md:flex-row gap-4">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white drop-shadow-sm">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Courses</span>
          </h2>
          <DropdownMenu>
            <DropdownMenuTrigger className="font-bold flex gap-2 items-center cursor-pointer border-none outline-none px-5 py-3 rounded-lg bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition text-lg shadow-sm">
              <ListFilterPlus /> Filter Courses
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[240px] p-3 space-y-2 rounded-xl shadow-lg">
              <DropdownMenuLabel className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Sort By
              </DropdownMenuLabel>
              <DropdownMenuItem
                className="flex items-center justify-between"
                onClick={() => setFilter("A-Z")}
              >
                A-Z {filter === "A-Z" && <Check className="text-blue-500" size={16} />}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center justify-between"
                onClick={() => setFilter("Most Popular")}
              >
                Most Popular {filter === "Most Popular" && <Check className="text-blue-500" size={16} />}
              </DropdownMenuItem>
              <DropdownMenuItem
                className="flex items-center justify-between"
                onClick={() => setFilter("Free")}
              >
                Free {filter === "Free" && <Check className="text-blue-500" size={16} />}
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
                    <ArrowDownNarrowWide className="mr-2" size={16} /> {levelFilter || "Select Level"}
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
                        {level} {levelFilter === level && <Check className="text-blue-500" size={16} />}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          {filteredCourses.map((course) => (
            <div
              className="relative bg-white/90 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition h-full flex flex-col overflow-hidden group"
              key={course._id}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {course.title}
                  </h3>
                  <div className="mt-2 text-xs text-white bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 px-3 py-1 rounded-full flex items-center gap-2 w-max font-semibold shadow-sm">
                    <ChartNoAxesColumnIncreasing size={16} />
                    {course.level}
                  </div>
                </div>
                <div className="text-yellow-500 text-lg font-bold flex items-center gap-1">
                  <span className="text-2xl">★</span> {course.rating}
                </div>
              </div>
              <div className="bg-blue-600/90 dark:bg-blue-700/80 text-white rounded-lg p-5 text-base leading-relaxed mb-4 shadow-sm">
                {course.description}
              </div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Uploaded: <span className="font-semibold">{formatDate(course.uploadedDate)}</span>
                </p>
                <p className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  <span className="font-semibold">{formatJoined(course.joined)}</span> Interested
                </p>
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 mb-4 rounded" />
              <div className="flex flex-col gap-2 mb-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{course.category}</p>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{course.duration}</p>
                </div>
                <div className="flex items-center justify-between my-2">
                  <p className="font-bold text-sm text-gray-800 dark:text-gray-200">
                    Instructor:
                    <span className="text-blue-500 dark:text-blue-300"> {course.instructor}</span>
                  </p>
                  <p className="font-bold text-sm text-gray-800 dark:text-gray-200">
                    {course.price === 0 ? (
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold ml-2">Free</span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold ml-2">${course.price}</span>
                    )}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {course.tags.map((tag, idx) => (
                    <span
                      key={tag + idx}
                      className="px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-[#23272f] dark:via-[#23272f] dark:to-[#23272f] text-neutral-800 dark:text-neutral-100 text-xs font-medium shadow-sm transition-colors duration-200 hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 mt-auto">
                <Button className="cursor-pointer font-semibold px-6 py-2 rounded-lg shadow-sm bg-gradient-to-r from-blue-600 to-purple-500 text-white hover:from-blue-700 hover:to-purple-600 dark:hover:from-blue-500 dark:hover:to-purple-400 dark:hover:text-gray-900 transition-colors" variant="outline">
                  Learn More
                </Button>
                <Button className="cursor-pointer font-semibold px-6 py-2 rounded-lg shadow-sm bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700 dark:hover:from-purple-400 dark:hover:to-blue-500 dark:hover:text-gray-900 transition-colors">
                  View Course
                </Button>
              </div>
              <span className="absolute right-0 top-0 w-24 h-24 bg-gradient-to-br from-blue-100/40 to-purple-200/20 dark:from-blue-900/10 dark:to-purple-900/10 rounded-bl-3xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ArrowDownNarrowWide,
  ChartNoAxesColumnIncreasing,
  Check,
  ListFilterPlus,
} from "lucide-react";
import React, { useState } from "react";

const coursesSampleData = [
  {
    id: 1,
    title: "AI & ML",
    level: "Beginner to Advanced",
    description:
      "Dive into the world of Artificial Intelligence and Machine Learning with a structured roadmap covering core concepts, hands-on projects, and real-world applications.",
    rating: 4.4,
    category: "Artificial Intelligence",
    duration: "12 weeks",
    instructor: "Dr. Ayesha Verma",
    price: 0.0,
    isPopular: true,
    uploadedDate: "04-04-2025",
    joined: 14000,
    tags: ["AI", "Machine Learning", "Python", "Neural Networks"],
  },
  {
    id: 2,
    title: "Frontend Web Development",
    level: "Beginner to Intermediate",
    description:
      "Learn HTML, CSS, JavaScript, and modern frameworks to build responsive and accessible web interfaces from scratch.",
    rating: 4.5,
    category: "Web Development",
    duration: "10 weeks",
    instructor: "John Malik",
    price: 49,
    isPopular: true,
    uploadedDate: "16-06-2025",
    joined: 254000,
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: 3,
    title: "Data Structures & Algorithms",
    level: "All Levels",
    description:
      "Master data structures and algorithms for coding interviews, problem-solving, and foundational computer science skills.",
    rating: 3.5,
    category: "Computer Science",
    duration: "8 weeks",
    instructor: "Neha Sharma",
    price: 29,
    isPopular: false,
    uploadedDate: "06-03-2025",
    joined: 124570,
    tags: ["DSA", "Java", "C++", "Competitive Programming"],
  },
  {
    id: 4,
    title: "Cloud Computing with AWS",
    level: "Intermediate to Advanced",
    description:
      "Understand cloud infrastructure, services, and deployment using AWS with real-world use cases.",
    rating: 4.2,
    category: "Cloud",
    duration: "6 weeks",
    instructor: "Amit Joshi",
    price: 99,
    isPopular: false,
    uploadedDate: "23-05-2025",
    joined: 80192,
    tags: ["AWS", "Cloud", "DevOps"],
  },
];

// Format numbers like 80192 to 80K, 112000 to 112K, 1800000 to 1.8M, etc.
function formatJoined(num) {
  if (num >= 1_000_000) return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (num >= 1_000) return (num / 1_000).toFixed(0) + 'K';
  return num;
}

const Courses = () => {
  const [filter, setFilter] = useState("Most Popular");
  const [levelFilter, setLevelFilter] = useState("");
  const [showLevels, setShowLevels] = useState(false);

  let filteredCourses = [...coursesSampleData];
  if (filter === "A-Z") {
    filteredCourses.sort((a, b) => a.title.localeCompare(b.title));
  } else if (filter === "Most Popular") {
    filteredCourses.sort((a, b) => b.rating - a.rating);
  } else if (filter === "Free") {
    filteredCourses = filteredCourses.filter((c) => c.price === 0);
  }
  if (levelFilter) {
    filteredCourses = filteredCourses.filter((c) =>
      c.level.toLowerCase().includes(levelFilter.toLowerCase())
    );
  }

  return (
    <div className="dark:bg-[#111111] bg-[#e9e6ef] px-6 py-10">
      <div className="flex items-center justify-between mb-6">
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
                {Array.from(new Set(coursesSampleData.map((c) => c.level))).map(
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Course Card */}
        {filteredCourses.map((course) => {
          return (
            <div
              className="relative bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 rounded-xl p-5 shadow-sm hover:shadow-md transition h-full flex flex-col"
              key={course.id}
            >
              <div className="flex items-start justify-between mb-4">
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

              <div className="bg-blue-600/90 dark:bg-blue-700/80 text-white rounded-lg p-4 text-sm leading-relaxed">
                {course.description}
              </div>
              <div className="my-2 flex items-center justify-between">
                <p className="text-sm">Uploaded Date: {course.uploadedDate}</p>
                <p className="text-sm">{formatJoined(course.joined)} People Interested</p>
              </div>

              <div className="w-full h-1 bg-gray-400 mb-2 rounded" />

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
                <div className="flex items-center justify-between gap-2 flex-wrap mb-2">
                  {course.tags.map((tag, idx) => {
                    return (
                      <p
                        key={idx}
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

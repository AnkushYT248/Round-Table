"use client";
import Link from "next/link";
import React, { use, useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Bell, BookOpenText, Brain, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeChanger from "@/components/layout/theme/ThemeChanger";
import SheetLayout from "@/components/layout/header/Sheet";
import CarouselLinks from "@/components/layout/header/Carousel_Links";
import Header_Skeleton from "./header_skeleton";
import { usePathname } from "next/navigation";

const practice = [
  {
    title: "Problem Solving",
    path: "/practice/problem-solving"
  },
  {
    title: "Data Structures & Algorithms",
    path: "/practice/data-structures-algorithms"
  },
  {
    title: "Competitive Programming",
    path: "/practice/competitive-programming"
  },
  {
    title: "Interview Preparation",
    path: "/practice/interview-preparation"
  },
  {
    title: "System Design",
    path: "/practice/system-design"
  }
]

const Header = () => {
  const [coursesData, setCoursesData] = useState([]);
  const [tutorialsData, setTutorialsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pileData, setPileData] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    const fetchNavData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch("/api/nav_data", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ requestType: "getNavData" }),
        });
        if (!res.ok) {
          setIsLoading(false);
          return;
        }

        const data = await res.json();

        const tutorialData = data?.tutorialData || [];
        const courseData = data?.courseData || [];

        setCoursesData(courseData);
        setTutorialsData(tutorialData.slice(0, 8));

        if (courseData.length > 0 || tutorialData.length > 0) {
          const pile = [
            ...courseData.slice(0, 4).map((item) => ({
              ...item,
              path: item.courseLink,
            })),
            ...tutorialData.slice(0, 6).map((item) => ({
              ...item,
              path: item.tutorialLink,
              title: item.name,
            })),
          ];
          setPileData(pile);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNavData();
  }, []);

  if (pathname && pathname.startsWith("/protected")) {
    return null;
  }

  if (isLoading) {
    return <Header_Skeleton />;
  }

  return (
    <header className="relative w-full">
      <nav className="fixed z-50 top-0 left-0 w-full bg-white/90 dark:bg-[#0f0f10]/90 text-black dark:text-white shadow-sm border-b border-gray-200 dark:border-gray-800 backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-2 sm:px-4 lg:px-8 h-[60px]">
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 flex-1 min-w-0">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-bold flex items-center gap-2 text-base px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition">
                    <GraduationCap size={20} /> Courses
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[350px] gap-2 md:w-[450px] md:grid-cols-2 lg:w-[600px]">
                      {coursesData.map((item, idx) => (
                        <ListItem
                          key={idx}
                          title={item.title}
                          href={item.courseLink}
                        />
                      ))}
                      <ListItem title="All Courses" href={"/courses"} />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-bold flex items-center gap-2 text-base px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition">
                    <BookOpenText size={20} /> Tutorials
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[350px] gap-2 md:w-[450px] md:grid-cols-2 lg:w-[600px]">
                      {tutorialsData.map((item, idx) => (
                        <ListItem
                          key={idx}
                          title={item.name}
                          href={`${item.tutorialLink}/introduction`}
                        />
                      ))}
                      <ListItem title="All Tutorials" href={"/tutorials/"} />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-bold flex items-center gap-2 text-base px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition">
                    <Brain size={20} /> Practice
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[350px] gap-2 md:w-[450px] md:grid-cols-2 lg:w-[600px]">
                      {practice.map((item, idx) => (
                        <ListItem
                          key={idx}
                          title={item.title}
                          href={item.path}
                        />
                      ))}
                      <ListItem title="All Practice" href={"/practice/"} />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* Mobile Nav & Logo */}
          <div className="flex items-center gap-2 flex-1 lg:hidden min-w-0">
            <SheetLayout courseData={coursesData} TutorialData={tutorialsData} />
            <Link
              href={"/"}
              className="text-2xl font-extrabold tracking-tight audiowide rounded-md px-2 py-1 flex items-center justify-center bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent"
              aria-label="Roundtable Home"
            >
              <span className="mr-1">R</span>
              <span>T</span>
            </Link>
          </div>
          {/* Right Side Controls */}
          <div className="flex items-center gap-3 flex-1 justify-end min-w-0">
            <ThemeChanger />
            <button
              className="relative p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Notifications"
            >
              <Bell size={22} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-[#0f0f10] animate-pulse" />
            </button>
            <Button className="font-semibold px-5 py-2 rounded-lg shadow-sm bg-gradient-to-r from-blue-600 to-purple-500 text-white hover:from-blue-700 hover:to-purple-600 dark:hover:from-blue-500 dark:hover:to-purple-400 dark:hover:text-gray-900 transition-colors">
              Sign In
            </Button>
          </div>
        </div>
        <CarouselLinks data={pileData} isLoading={isLoading} />
      </nav>
      {/* Spacer for fixed nav */}
      <div className="h-[60px] w-full" />
    </header>
  );
};

export default Header;

function ListItem({ title, children, href, icon, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href} className="block px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors">
          <div className="text-base font-semibold flex items-center gap-3 text-gray-900 dark:text-white">
            {icon && icon}
            {title}
          </div>
          {children && (
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug mt-1">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

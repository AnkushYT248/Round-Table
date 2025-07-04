"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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

  if (isLoading) {
    return <Header_Skeleton />;
  }

  return (
    <div className="relative">
      <div className="fixed z-60 top-0 left-0 w-screen h-15 bg-white dark:bg-[#0f0f10] text-black dark:text-white">
        <div className="flex items-center justify-between px-4">
          <div className="lg:flex items-center gap-4 flex-1 hidden">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-bold flex items-center gap-3">
                    <GraduationCap /> Courses
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {coursesData.map((item, idx) => {
                        return (
                          <ListItem
                            key={idx}
                            title={item.title}
                            href={item.courseLink}
                          />
                        );
                      })}
                      <ListItem title="All Courses" href={"/courses"} />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-bold flex items-center gap-3">
                    <BookOpenText /> Tutorials
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {tutorialsData.map((item, idx) => {
                        return (
                          <ListItem
                            key={idx}
                            title={item.title}
                            href={item.tutorialLink}
                          />
                        );
                      })}
                      <ListItem title="All Practice" href={"/practice/"} />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-bold flex items-center gap-3">
                    <Brain /> Practice
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {practice.map((item, idx) => {
                        return (
                          <ListItem
                            key={idx}
                            title={item.title}
                            href={item.path}
                          />
                        );
                      })}
                      <ListItem title="All Tutorials" href={"/tutorials/"} />
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <SheetLayout />
          <div className="flex-1 flex items-center justify-center lg:hidden">
            <Link
              href={"/"}
              className="text-xl audiowide rounded-md p-1 text-black dark:text-white flex items-center justify-center"
            >
              <span className="mr-1">R</span>
              <span>T</span>
            </Link>
          </div>
          <div className="flex items-center gap-4 flex-1 justify-end p-2">
            <ThemeChanger />
            <Bell />
            <Button>Sign In</Button>
          </div>
        </div>
        <CarouselLinks data={pileData} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Header;

function ListItem({ title, children, href, icon, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium flex items-center gap-4">
            {icon && icon}
            {title}
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

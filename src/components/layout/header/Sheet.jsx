"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { Button } from "@/components/ui/button";
import ItemDropdown from "@/components/ui/ItemDropdown";
import Link from "next/link";
import { BookOpenText, GraduationCap, LogIn, UserPlus } from "lucide-react";
import Image from "next/image";

const sheetVariants = {
  opened: {
    x: "0vw",
  },
  closed: {
    x: "-100vw",
  },
};

const practice = [
  {
    title: "Problem Solving",
    path: "/practice/problem-solving",
  },
  {
    title: "Data Structures & Algorithms",
    path: "/practice/data-structures-algorithms",
  },
  {
    title: "Competitive Programming",
    path: "/practice/competitive-programming",
  },
  {
    title: "Interview Preparation",
    path: "/practice/interview-preparation",
  },
  {
    title: "System Design",
    path: "/practice/system-design",
  },
];

const companyLinks = [
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
  { name: "Privacy Policy", path: "/policy" },
  { name: "Terms & Conditions", path: "/terms" },
  { name: "Careers", path: "/careers" },
  { name: "Blog", path: "/blog" },
  { name: "Help Center", path: "/help" },
  { name: "FAQ", path: "/faq" },
  { name: "Support", path: "/support" },
  { name: "Community", path: "/community" },
  { name: "Feedback", path: "/feedback" },
];

const SheetLayout = ({ courseData = [], TutorialData = [] }) => {
  const [sheetOpen, setSheetOpen] = useState(false);

  // Prevent background scroll when sheet is open
  useEffect(() => {
    if (sheetOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheetOpen]);

  return (
    <div className="lg:hidden relative flex-1">
      <button
        className="relative z-50 flex flex-col gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        aria-label={sheetOpen ? "Close menu" : "Open menu"}
      >
        <Hamburger
          toggled={sheetOpen}
          toggle={setSheetOpen}
          color={sheetOpen ? "#fff" : "#222"}
          size={24}
          rounded
          label="Show menu"
        />
      </button>
      <motion.div
        className="fixed top-0 left-0 z-40 bg-[#181b20] w-full max-w-xs h-screen overflow-y-auto shadow-2xl border-r border-gray-800"
        variants={sheetVariants}
        animate={sheetOpen ? "opened" : "closed"}
        initial="closed"
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="space-y-4 pt-8 pb-6 px-4 mt-10">
          <div className="flex items-center justify-between mb-2">
            <Button
              className="flex items-center gap-2 text-base px-4 py-2"
              variant="outline"
            >
              <LogIn size={18} /> Sign In
            </Button>
            <Button
              className="flex items-center gap-2 text-base px-4 py-2"
              variant="default"
            >
              <UserPlus size={18} /> Sign Up
            </Button>
          </div>
          <hr className="border-gray-700" />
          <ItemDropdown title="Courses" icon={<GraduationCap size={18} />}>
            <div className="flex flex-col gap-2">
              {courseData.length > 0 ? (
                courseData.map((item) => (
                  <Link
                    href={item.courseLink}
                    key={item._id}
                    className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded-lg transition-all duration-200 w-full text-gray-200"
                  >
                    {item.title}
                  </Link>
                ))
              ) : (
                <span className="text-gray-400 text-sm">No courses found.</span>
              )}
              <Link
                href="/courses"
                className="flex items-center gap-4 p-2 hover:bg-blue-700 bg-blue-600 rounded-lg transition-all duration-200 w-full text-white font-semibold mt-2"
              >
                All Courses
              </Link>
            </div>
          </ItemDropdown>

          <ItemDropdown title="Tutorials" icon={<BookOpenText size={18} />}>
            <div className="flex flex-col gap-2">
              {TutorialData.length > 0 ? (
                TutorialData.map((item) => (
                  <Link
                    href={item.tutorialLink}
                    key={item._id}
                    className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded-lg transition-all duration-200 w-full text-gray-200"
                  >
                    {item.name}
                  </Link>
                ))
              ) : (
                <span className="text-gray-400 text-sm">
                  No tutorials found.
                </span>
              )}
              <Link
                href="/tutorials"
                className="flex items-center gap-4 p-2 hover:bg-blue-700 bg-blue-600 rounded-lg transition-all duration-200 w-full text-white font-semibold mt-2"
              >
                All Tutorials
              </Link>
            </div>
          </ItemDropdown>

          <ItemDropdown title="Practice" icon={<BookOpenText size={18} />}>
            <div className="flex flex-col gap-2">
              {practice.map((item, idx) => (
                <Link
                  href={item.path}
                  key={idx}
                  className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded-lg transition-all duration-200 w-full text-gray-200"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </ItemDropdown>

          <hr className="border-gray-700" />
          <div className="mt-4">
            <h3 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
              Company
            </h3>
            <div className="flex flex-col gap-2 mb-4">
              {companyLinks.map((link) => (
                <Link
                  href={link.path}
                  key={link.path}
                  className="hover:underline text-gray-300 text-sm px-1 py-1 rounded hover:bg-gray-800 transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SheetLayout;

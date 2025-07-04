"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { Button } from "@/components/ui/button";
import ItemDropdown from "@/components/ui/ItemDropdown";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  LogIn,
  Twitter,
  UserPlus,
} from "lucide-react";
import { iconMap } from "@/utils/iconsMap";

const sheetVariants = {
  opened: {
    x: "0vw",
  },
  closed: {
    x: "-100vw",
  },
};

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

const socialLinks = [
  { name: <Twitter />, url: "#" },
  { name: <Facebook />, url: "#" },
  { name: <Instagram />, url: "#" },
  { name: <Linkedin />, url: "#" },
];

const SheetLayout = () => {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch("/api/nav_data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requestType: "getNavData",
        }),
      })
        .then((res) => {
          if (!res.ok) {
            return;
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }

    fetchData();
  }, []);

  return (
    <div className="lg:hidden relative flex-1">
      <button className="relative z-50 flex flex-col gap-2">
        <Hamburger
          toggled={sheetOpen}
          toggle={setSheetOpen}
          color={sheetOpen ? "white" : "rgb(49, 50, 51)"}
        />
      </button>
      <motion.div
        className="fixed top-0 left-0 z-40 bg-black w-full max-w-sm h-screen overflow-y-auto"
        variants={sheetVariants}
        animate={sheetOpen ? "opened" : "closed"}
        initial="closed"
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-3 mt-15 p-4">
          <hr />
          <div className="flex items-center justify-between">
            <Button className="flex items-center gap-4 cursor-pointer">
              <LogIn />
              Sign In
            </Button>
            <Button className="flex items-center gap-4 cursor-pointer">
              <UserPlus /> Sign Up
            </Button>
          </div>
          <hr />
            <ItemDropdown
              title={"Hello"}
              icon={iconMap[1]}
            >
              <div className="flex items-start flex-col gap-4">
                  <Link
                    href={"/profile"}
                    className="flex items-center gap-6 p-2 hover:bg-gray-700 rounded-lg transition-all duration-300 w-full"
                  >
                    {"subItem.title"}
                  </Link>
              </div>
            </ItemDropdown>
          <hr />
          <div className="mt-4">
            <h3 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
              Company
            </h3>
            <div className="flex flex-col gap-2 mb-4">
              {companyLinks.map((link, idx) => (
                <Link
                  href={link.path}
                  key={idx}
                  className="hover:underline text-gray-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <h3 className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex mx-auto 600 gap-4 mb-2">
              {socialLinks.map((social, idx) => (
                <a
                  href={social.url}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 text-gray-300 text-xl"
                >
                  {/* Replace with icon components if available */}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SheetLayout;

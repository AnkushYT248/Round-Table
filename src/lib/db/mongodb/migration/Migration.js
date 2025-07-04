import mongoose from "mongoose";
import NavCategory from "../models/nav_links/NavModel.js";
import PillBar from "../models/nav_links/PillBarModel.js";
import { ConnectToMongoClientDb } from "../../connection/mognodb.js";
import dotenv from "dotenv";
dotenv.config();

// Example navigation data to migrate
const navCategories = [
  {
    title: "Courses",
    icon: "GraduationCap",
    items: [
      { title: "Dsa Courses", path: "/courses/dsa" },
      { title: "Backend", path: "/courses/backend" },
      { title: "Dev Ops", path: "/courses/dev_ops" },
      { title: "System", path: "/courses/system" },
      { title: "All Courses", path: "/courses/all" },
    ],
  },
  {
    title: "Tutorials",
    icon: "BookOpenText",
    items: [
      { title: "Python", path: "/tutorials/python" },
      { title: "Java", path: "/tutorials/java" },
      { title: "HTML", path: "/tutorials/html" },
      { title: "CSS", path: "/tutorials/css" },
      { title: "C++", path: "/tutorials/cplusplus" },
      { title: "C#", path: "/tutorials/csharp" },
      { title: "Java Script", path: "/tutorials/javascript" },
      { title: "Full Stack", path: "/tutorials/full_stack" },
      { title: "More Tutorials", path: "/tutorials/all" },
    ],
  },
  {
    title: "Practice",
    icon: "Brain",
    items: [
      { title: "Problem Solving", path: "/practice/problem_solving" },
      { title: "Data Structures", path: "/practice/data_structures" },
      { title: "Algorithms", path: "/practice/algorithms" },
      { title: "System Design", path: "/practice/system_design" },
      { title: "Interview Questions", path: "/practice/interview_questions" },
    ],
  },
];

const PillBarData  = [
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
    path: "/tutorial/python",
  },
  {
    title: "Java",
    path: "/tutorial/java",
  },
  {
    title: "Java Script",
    path: "/tutorial/javascript",
  },
  {
    title: "React",
    path: "/courses/react",
  },
  {
    title: "Django",
    path: "/tutorial/django",
  },
  {
    title: "Rust",
    path: "/tutorial/rust",
  },
  {
    title: "Ruby",
    path: "/tutorial/ruby",
  },
  {
    title: "C++",
    path: "/tutorial/cpp",
  },
  {
    title: "C#",
    path: "/tutorial/csharp",
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
    title: "More Courses",
    path: "/courses/all",
  },
  {
    title: "More Tutorials",
    path: "/tutorial/all",
  },
];

async function migrateNavCategories() {
  try {
    await ConnectToMongoClientDb();
    console.log("Connected to MongoDB");

    // Optional: Clear existing data
    await NavCategory.deleteMany({});
    console.log("Cleared existing NavCategory data");

    // Optional: Clear existing PillBar data
    await PillBar.deleteMany({});
    console.log("Cleared existing PillBar data");

    // Insert new data
    await NavCategory.insertMany(navCategories);
    console.log("NavCategory migration completed successfully");

    // Insert new PillBar data
    await PillBar.insertMany(PillBarData);
    console.log("PillBar migration completed successfully");
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

migrateNavCategories();

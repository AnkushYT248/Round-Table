import mongoose from "mongoose";
import { ConnectToMongoClientDb } from "../../connection/mognodb.js";
import dotenv from "dotenv";
import CourseModel from "../models/course/CourseModel.js";
import Tutorials from "../models/tutorials/Tutorials.js";
dotenv.config();

// Example navigation data to migrate
const courses = [
  {
    title: "AI & ML",
    level: "Beginner to Advanced",
    description:
      "Dive into the world of Artificial Intelligence and Machine Learning with a structured roadmap covering core concepts, hands-on projects, and real-world applications.",
    rating: 4.4,
    category: "Artificial Intelligence",
    duration: "12 weeks",
    instructor: "Dr. Ayesha Verma",
    price: 0.0,
    uploadedDate: "2025-04-04",
    joined: 14000,
    tags: ["AI", "Machine Learning", "Python", "Neural Networks"],
    refrenceLink: "https://example.com/ai-ml-roadmap",
    courseLink: "/courses/ai-ml-roadmap",
  },
  {
    title: "Frontend Web Development",
    level: "Beginner to Intermediate",
    description:
      "Learn HTML, CSS, JavaScript, and modern frameworks to build responsive and accessible web interfaces from scratch.",
    rating: 4.4,
    category: "Web Development",
    duration: "10 weeks",
    instructor: "Dr. Ayesha Verma",
    price: 15.0,
    uploadedDate: "2025-06-01",
    joined: 86000,
    tags: ["HTML", "CSS", "JavaScript", "Web Development", "React"],
    refrenceLink: "https://example.com/frontend-web-development",
    courseLink: "/courses/frontend-web-development",
  },
  {
    title: "Data Structures & Algorithms",
    level: "Beginner to Intermediate",
    description:
      "Master the fundamentals of Data Structures and Algorithms to enhance your problem-solving skills and coding efficiency.",
    rating: 3.4,
    category: "Computer Science",
    duration: "8 weeks",
    instructor: "Neha Sharma",
    price: 29,
    uploadedDate: "2025-02-13",
    joined: 176000,
    tags: ["DSA", "Java", "C++", "Competitive Programming"],
    refrenceLink: "https://example.com/data-structures-algorithms",
    courseLink: "/courses/data-structures-algorithms",
  },
  {
    title: "Cloud Computing with AWS",
    level: "Beginner to Intermediate",
    description:
      "Learn the fundamentals of Cloud Computing and gain hands-on experience with AWS services to build scalable and resilient applications.",
    rating: 4.5,
    category: "Cloud Computing",
    duration: "12 weeks",
    instructor: "Amit Joshi",
    price: 49,
    uploadedDate: "2025-01-09",
    joined: 202000,
    tags: ["AWS", "Cloud Computing", "DevOps"],
    refrenceLink: "https://example.com/cloud-computing-aws",
    courseLink: "/courses/cloud-computing-aws",
  }
];

const tutorialsData = [
  {
    title: "Python Tutorial",
    tutorialLink: "/tutorials/python",
  },
  {
    title: "JavaScript Tutorial",
    tutorialLink: "/tutorials/javascript",
  },
  {
    title: "React Tutorial",
    tutorialLink: "/tutorials/react",
  },
  {
    title: "Node.js Tutorial",
    tutorialLink: "/tutorials/nodejs",
  },
  {
    title: "Machine Learning Tutorial",
    tutorialLink: "/tutorials/machine-learning",
  },
  {
    title: "Data Science Tutorial",
    tutorialLink: "/tutorials/data-science",
  },
  {
    title: "Web Development Tutorial",
    tutorialLink: "/tutorials/web-development",
  },
  {
    title: "Cloud Computing Tutorial",
    tutorialLink: "/tutorials/cloud-computing",
  },
]

async function migrateNavCategories() {
  try {
    await ConnectToMongoClientDb();
    console.log("Connected to MongoDB");

    // Optional: Clear existing data
    await CourseModel.deleteMany({});
    console.log("Cleared existing Course data");

    // Optional: Clear existing Tutorials data
    await Tutorials.deleteMany({});
    console.log("Cleared existing Tutorials data");

    // Insert new data
    await CourseModel.insertMany(courses);
    console.log("Course migration completed successfully");

    // Insert new Tutorials data
    await Tutorials.insertMany(tutorialsData);
    console.log("Tutorials migration completed successfully");
  } catch (error) {
    console.error("Migration failed:", error);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

migrateNavCategories();

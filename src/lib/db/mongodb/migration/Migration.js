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
    name: "Python",
    tutorialLink: "/tutorials/python",
    createdAt: "1991-02-20",
    designBy: "Guido van Rossum",
    developer: "Python Software Foundation",
    description: "Python is a powerful, easy-to-learn programming language known for its clear syntax and versatility. It's widely used in web development, data science, automation, artificial intelligence, and more.",
    usedFor: ["Web Development", "Data Science", "AI", "Automation"],
    refrenceLink: "https://www.python.org/",
    tags: ["python", "beginner", "programming"],
    sidebar: [
      {
        section: "Python Tutorial",
        items: [
          { key: "introduction", title: "Introduction to Python" },
          { key: "basics", title: "Python Basics" },
        ]
      },
      {
        section: "Advanced",
        items: [
          { key: "oop", title: "Object-Oriented Programming" },
          { key: "modules", title: "Modules & Packages" },
        ]
      }
    ],
    chapters: {
      introduction: {
        title: "Introduction to Python",
        chapter_description: "Learn the basics of Python, including syntax, data types, and control structures.",
        content: "<p>Python is a versatile language used for web, data science, and more.</p>",
        blocks: [
          {
            heading: "Getting started with Python",
            text: "Learn how to install Python and set up your development environment.",
            codeExamples: [
              {
                language: "python",
                code: "print('Hello, World!')",
                explanation: "This prints Hello, World! to the console."
              }
            ]
          },
          {
            heading: "Variables and Data Types",
            text: "Understand variables and data types in Python.",
            codeExamples: [
              {
                language: "python",
                code: "name = 'Alice'\nage = 25\nis_student = True",
                explanation: "String, integer, and boolean types."
              }
            ]
          }
        ],
        images: ["/images/python_intro.png"],
        tips: ["Indentation is important in Python!"],
        faqs: [
          { question: "Is Python easy to learn?", answer: "Yes, Python is known for its simple syntax." }
        ]
      },
      basics: {
        title: "Python Basics",
        chapter_description: "Covers basic syntax, operators, and control flow.",
        content: "<p>Learn about Python's basic syntax, operators, and control flow.</p>",
        blocks: [
          {
            heading: "If Statements",
            text: "Learn how to use if, elif, and else.",
            codeExamples: [
              {
                language: "python",
                code: "x = 10\nif x > 5:\n    print('x is greater than 5')\nelse:\n    print('x is 5 or less')",
                explanation: "Basic if-else statement."
              }
            ]
          }
        ],
        images: [],
        tips: ["Use elif for multiple conditions."],
        faqs: [
          { question: "What is an if statement?", answer: "It allows conditional execution of code blocks." }
        ]
      },
      oop: {
        title: "Python OOP",
        chapter_description: "Covers Object-Oriented Programming concepts in Python.",
        content: "<p>Learn about classes, objects, and inheritance in Python.</p>",
        blocks: [
          {
            heading: "Classes and Objects",
            text: "Understand the basics of classes and objects in Python.",
            codeExamples: [
              {
                language: "python",
                code: "class Dog:\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        print('Woof!')\nmy_dog = Dog('Buddy')\nmy_dog.bark()",
                explanation: "This defines a Dog class with a bark method."
              }
            ]
          }
        ],
        images: [],
        tips: ["Use inheritance to create a hierarchy of classes."],
        faqs: [
          { question: "What is a class?", answer: "A class is a blueprint for creating objects." }
        ]
      },
    }
  },
  {
    name: "JavaScript",
    tutorialLink: "/tutorials/javascript/",
    createdAt: "1995-12-04",
    designBy: "Brendan Eich",
    developer: "Mozilla Foundation",
    description: "JavaScript is a versatile programming language primarily used for web development. It enables interactive web pages and is an essential part of web applications.",
    usedFor: ["Web Development", "Game Development", "Mobile Apps"],
    refrenceLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    tutorialLink: "/tutorials/react/",
    createdAt: "2013-05-29",
    designBy: "Jordan Walke",
    developer: "Meta",
    description: "React is a JavaScript library for building user interfaces, allowing developers to create large web applications that can change data without reloading the page.",
    usedFor: ["Web Development", "Mobile Apps"],
    refrenceLink: "https://reactjs.org/",
  },
  {
    name: "Node.js",
    tutorialLink: "/tutorials/nodejs/",
    createdAt: "2009-05-27",
    designBy: "Ryan Dahl",
    developer: "Node.js Foundation",
    description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to build scalable network applications using JavaScript on the server side.",
    usedFor: ["Web Development", "API Development", "Microservices"],
    refrenceLink: "https://nodejs.org/",
  },
  {
    name: "Machine Learning",
    tutorialLink: "/tutorials/machine-learning/",
    createdAt: "2012-03-15",
    designBy: "Andrew Ng",
    developer: "Stanford University",
    description: "Machine Learning is a subset of artificial intelligence that focuses on building systems that learn from data and improve their performance over time without being explicitly programmed.",
    usedFor: ["AI", "Data Science", "Automation"],
    refrenceLink: "https://www.coursera.org/learn/machine-learning",
  },
  {
    name: "Data Science",
    tutorialLink: "/tutorials/data-science/",
    createdAt: "-",
    designBy: "-",
    developer: "-",
    description: "Data Science is a multidisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.",
    usedFor: ["AI", "Big Data", "Analytics"],
    refrenceLink: "https://www.datascience.org/",
  },
  {
    name: "Web Development",
    tutorialLink: "/tutorials/web-development/",
    createdAt: "-",
    designBy: "-",
    developer: "-",
    description: "Web Development is the work involved in developing a website for the Internet or an intranet. It can range from developing a simple single static page to complex web applications.",
    usedFor: ["Web Development", "Frontend", "Backend"],
    refrenceLink: "https://www.w3schools.com/",
  },
  {
    name: "Cloud Computing",
    tutorialLink: "/tutorials/cloud-computing/",
    createdAt: "-",
    designBy: "-",
    developer: "-",
    description: "Cloud Computing is the delivery of computing services over the Internet, allowing for flexible resources and economies of scale.",
    usedFor: ["Cloud Computing", "Infrastructure", "DevOps"],
    refrenceLink: "https://aws.amazon.com/what-is-cloud-computing/",
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

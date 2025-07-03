import { Button } from "@/components/ui/button";
import React from "react";

const exampleCards = [
  {
    language_name: "Java",
    design_by: "James Gosling",
    developer: "Oracle Corporation",
    appearance: "May 23, 1995",
    description:
      "Java is a high-level, object-oriented programming language designed to be simple, secure, and platform-independent. Its biggest strength? Write once, run anywhere. That means code written in Java can run on any device that has a Java Virtual Machine (JVM), no matter the operating system.",
    used_for: [
      "Web and mobile apps",
      "Backend services",
      "Big enterprise systems",
      "Android development",
    ],
  },
  {
    language_name: "Python",
    design_by: "Guido van Rossum",
    developer: "Python Software Foundation",
    appearance: "February 20, 1991",
    description:
      "Python is a powerful, easy-to-learn programming language known for its clear syntax and versatility. It's widely used in web development, data science, automation, artificial intelligence, and more.",
    used_for: [
      "Web development",
      "Data science",
      "Automation",
      "AI & Machine Learning",
    ],
  },
  {
    language_name: "HTML",
    design_by: "Tim Berners-Lee",
    developer: "WHATWG/W3C",
    appearance: "1993",
    description:
      "HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications. It structures web content and forms the backbone of the web.",
    used_for: [
      "Web page structure",
      "Content formatting",
      "Embedding media",
      "Web applications",
    ],
  },
  {
    language_name: "CSS",
    design_by: "Håkon Wium Lie",
    developer: "W3C",
    appearance: "December 17, 1996",
    description:
      "CSS (Cascading Style Sheets) is a style sheet language used for describing the look and formatting of a document written in HTML. It controls layout, colors, fonts, and more.",
    used_for: [
      "Web design",
      "Responsive layouts",
      "Animations",
      "Styling HTML",
    ],
  },
  {
    language_name: "C++",
    design_by: "Bjarne Stroustrup",
    developer: "ISO/IEC",
    appearance: "1985",
    description:
      "C++ is a high-performance, general-purpose programming language that supports procedural, object-oriented, and generic programming. It's widely used in system/software development and game programming.",
    used_for: [
      "System/software development",
      "Game development",
      "Embedded systems",
      "High-performance applications",
    ],
  },
  {
    language_name: "C#",
    design_by: "Anders Hejlsberg",
    developer: "Microsoft",
    appearance: "2000",
    description:
      "C# is a modern, object-oriented programming language developed by Microsoft. It's primarily used for developing Windows applications, web services, and enterprise software.",
    used_for: [
      "Windows applications",
      "Web services",
      "Game development (Unity)",
      "Enterprise software",
    ],
  },
  {
    language_name: "JavaScript",
    design_by: "Brendan Eich",
    developer: "Netscape, Ecma International",
    appearance: "December 4, 1995",
    description:
      "JavaScript is a versatile, high-level programming language primarily used for web development. It enables interactive web pages and is an essential part of web applications.",
    used_for: [
      "Web development",
      "Frontend frameworks",
      "Server-side (Node.js)",
      "Mobile apps",
    ],
  },
  {
    language_name: "Full Stack",
    design_by: "-",
    developer: "-",
    appearance: "-",
    description:
      "Full Stack development refers to the combination of frontend and backend development skills, enabling developers to build complete web applications from start to finish.",
    used_for: [
      "Web applications",
      "APIs",
      "End-to-end solutions",
      "Startup MVPs",
    ],
  },
];

const Explore = () => {
  return (
    <div className="w-full px-4 py-5 lg:px-8 lg:py-10">
      <h2 className="text-4xl font-bold tracking-wide mb-6 text-gray-900 dark:text-white">
        Explore More
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {exampleCards.map((card, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col gap-4 p-6 bg-white dark:bg-[#181b20] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-2xl font-bold tracking-tighter text-gray-800 dark:text-white">
                  {card.language_name}
                </p>
                <div className="flex flex-col gap-1 text-right">
                  {card.design_by && (
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Design By: {card.design_by}
                    </p>
                  )}
                  {card.developer && (
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Developer: {card.developer}
                    </p>
                  )}
                  {card.appearance && card.appearance !== '-' && (
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      First Appearance: {card.appearance}
                    </p>
                  )}
                </div>
              </div>
              <hr className="border-gray-200 dark:border-gray-700" />
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                {card.description}
              </p>
              <p className="ml-2 text-lg font-bold text-gray-900 dark:text-white mt-2">
                Used For:
              </p>
              <ul className="space-y-2 ml-4">
                {card.used_for.map((uses, i) => {
                  return (
                    <li
                      key={i}
                      className="bg-gray-100 dark:bg-[#23272f] p-2 rounded-lg text-gray-800 dark:text-gray-200 transition-colors"
                    >
                      {uses}
                    </li>
                  );
                })}
              </ul>
              <hr className="border-gray-200 dark:border-gray-700 my-2" />
              <div className="flex items-center flex-col md:flex-row gap-4 justify-between mt-2">
                <Button className="cursor-pointer font-semibold px-5 py-2 rounded-lg shadow-sm hover:bg-blue-700 hover:text-white dark:hover:bg-blue-500 dark:hover:text-gray-900 transition-colors">
                  Learn {card.language_name}
                </Button>
                <Button
                  variant="outline"
                  className="cursor-pointer font-semibold px-5 py-2 rounded-lg border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  View References
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Explore;

import {
  BookOpenText,
  Brain,
  GraduationCap,
} from "lucide-react";

const nav_data = [
  {
    title: "Courses",
    icon: <GraduationCap />,
    items: [
      {
        item: "Dsa Courses",
        path: "/",
      },
      {
        item: "Backend",
        path: "/",
      },
      {
        item: "Placement with Dsa",
        path: "/",
      },
      {
        item: "Dev Ops",
        path: "/",
      },
      {
        item: "System",
        path: "/",
      },
      {
        item: "All Courses",
        path: "/",
      },
    ],
  },
  {
    title: "Tutorials",
    icon: <BookOpenText />,
    items: [
      {
        item: "Python",
        path: "/",
      },
      {
        item: "Java",
        path: "/",
      },
      {
        item: "HTML",
        path: "/",
      },
      {
        item: "CSS",
        path: "/",
      },
      {
        item: "C++",
        path: "/",
      },
      {
        item: "C#",
        path: "/",
      },
      {
        item: "Java Script",
        path: "/",
      },
      {
        item: "Full Stack",
        path: "/",
      },
      {
        item: "More Tutorials",
        path: "/",
      },
    ],
  },
  {
    title: "Practice",
    icon: <Brain />,
    items: [
      {
        item: "Practice Coding Problems",
        path: "/",
      },
      {
        item: "Problem Of The Day",
        path: "/",
      },
      {
        item: "Schollership Contest",
        path: "/",
      },
    ],
  },
];

export default nav_data;

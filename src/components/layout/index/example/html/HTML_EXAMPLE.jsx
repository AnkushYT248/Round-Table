"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useContext } from "react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { ThemeModeContext } from "@/context/ThemeContext";
import { EditorView } from "@uiw/react-codemirror";

const HTML_EXAMPLE = () => {
  const { darkMode } = useContext(ThemeModeContext);
  const [code, setCode] = useState(`<!DOCTYPE html>
<html>
<head>
  <style>
    body { 
      background: #f0f0f0; font-family: sans-serif; 
    }
    h1 { 
      color: #e91e63; 
    }
  </style>
</head>
<body>
  <h1>Hello Roundtable!</h1>
  <p>This is a code preview.</p>
</body>
</html>`);
  const [output, setOutput] = useState("");
  return (
    <div className="mx-auto max-w-6xl px-2 py-3 md:px-8 md:py-10">
      <div
        className={`flex flex-col gap-8 md:gap-10 lg:flex-row lg:items-start rounded-2xl shadow-lg border transition-colors duration-300 ${
          darkMode ? "bg-[#111316] border-gray-800" : "bg-white border-gray-200"
        } p-6 md:p-10`}
      >
        <div className="space-y-4 flex-1">
          <div>
            <h2 className="text-5xl font-bold tracking-wide mb-1">HTML</h2>
            <span className="text-sm font-medium tracking-tight text-gray-500 dark:text-gray-400">
              HyperText Markup Language
            </span>
          </div>
          <p className="my-2 font-semibold text-base text-gray-700 dark:text-gray-300 text-start">
            HTML is the foundation of every web page. It provides the basic
            structure and layout, allowing you to organize content and elements
            on the web. Whether you're building a simple site or a complex
            application, HTML is where it all begins.
            <br />
            <br />
            <span className="text-5xl font-bold tracking-wide mt-2">CSS</span>
            <br />
            <span className="text-sm font-medium tracking-tight text-gray-500 dark:text-gray-400">
              Cascading Style Sheet
            </span>
            <span className="block mt-2">
              <strong>CSS</strong> is used to style the HTML skeleton—adding
              colors, layouts, fonts, and visual effects. While HTML creates the
              structure, CSS brings your web pages to life by making them
              attractive and user-friendly.
            </span>
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-2">
            <Button variant="outline">View Reference</Button>
            <Button variant="default">Start Tutorial (Theory & Video)</Button>
          </div>
          <hr></hr>
          <div className="result px-2">
            <p className="text-center font-semibold text-2xl">Code Output</p>
            <iframe
              srcDoc={output}
              title="output"
              frameBorder="0"
              sandbox="allow-scripts allow-same-origin"
              className="w-full h-max"
            />
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="w-full h-full max-h-[600px] rounded-xl bg-transparent">
            <div className="w-full h-18 flex items-center justify-between p-4 pb-2">
              <div className="h-18 flex items-center gap-3 p-4 pb-2">
                <span
                  className={`w-4 h-4 rounded-full ${
                    darkMode ? "bg-gray-700" : "bg-gray-300"
                  }`}
                ></span>
                <span
                  className={`w-4 h-4 rounded-full ${
                    darkMode ? "bg-gray-700" : "bg-gray-300"
                  }`}
                ></span>
                <span
                  className={`w-4 h-4 rounded-full ${
                    darkMode ? "bg-gray-700" : "bg-gray-300"
                  }`}
                ></span>
              </div>
              <Button
                className="font-semibold cursor-pointer"
                onClick={() => setOutput(code)}
              >
                Compile Code
              </Button>
            </div>
            <hr className={darkMode ? "border-gray-800" : "border-gray-200"} />
            <div className="p-4 pt-2">
              <ReactCodeMirror
                value={code}
                height="400px"
                theme={darkMode ? "dark" : "light"}
                extensions={[html(), EditorView.lineWrapping]}
                onChange={(value) => setCode(value)}
                style={{
                  background: darkMode ? "#181b20" : "#f8f9fa",
                  color: darkMode ? "#f3f3f3" : "#222",
                  borderRadius: "0.5rem",
                  border: darkMode ? "1px solid #222" : "1px solid #eee",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HTML_EXAMPLE;

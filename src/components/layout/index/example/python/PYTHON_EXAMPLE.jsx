"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useContext, useEffect } from "react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { EditorView } from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { ThemeModeContext } from "@/context/ThemeContext";
import { ClipLoader } from "react-spinners";

const PYTHON_EXAMPLE = () => {
  const { darkMode } = useContext(ThemeModeContext);
  const [code, setCode] = useState(`# Conditions
if 3 > 6:
  print('3 is greater than 6')
else:
  print('3 is smaller than 6')

# In this example, we use if-else to check a condition.
# If 3 is greater than 6, it prints the first message; otherwise, it prints the second message.
`);
  const [output, setOutput] = useState("");
  const [loading, setloading] = useState(false);

  const compileCode = async () => {
    setloading(true);
    try {
      const url = await fetch("/api/compiler", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: "python",
          code: code,
        }),
      });

      const data = await url.json();
      // Wrap output in styled HTML for iframe
      const outputHtml = `
        <html>
          <body style="margin:0;padding:10px;font-family:monospace;background:${
            darkMode ? "#181b20" : "#fff"
          };color:${darkMode ? "#f3f3f3" : "#222"};">
            <span style="white-space:pre-wrap;word-break:break-word;">${
              data.run.output
            }</span>
          </body>
        </html>
      `;
      setOutput(outputHtml);
      setloading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
  return (
    <div className="mx-auto max-w-6xl px-2 py-3 md:px-8 md:py-10">
      <div
        className={`flex flex-col gap-8 md:gap-10 lg:flex-row lg:items-start rounded-2xl shadow-lg border transition-colors duration-300 ${
          darkMode ? "bg-[#111316] border-gray-800" : "bg-white border-gray-200"
        } p-6 md:p-10`}
      >
        <div className="space-y-4 flex-1">
          <div>
            <h2 className="text-5xl font-bold tracking-wide mb-1">PYTHON</h2>
            <span className="text-sm font-medium tracking-tight text-gray-500 dark:text-gray-400">
              Python (programming language)
            </span>
          </div>
          <p className="my-2 font-semibold text-base text-gray-700 dark:text-gray-300 text-start">
            Python is a powerful, easy-to-learn programming language known for
            its clear syntax and versatility. It's widely used in web
            development, data science, automation, artificial intelligence, and
            more. Whether you're a beginner or an experienced developer,
            Python's simplicity and vast ecosystem make it a great choice for
            building everything from simple scripts to complex applications.
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
                onClick={() => compileCode()}
              >
                {loading ? (
                  <ClipLoader size={30} color={darkMode ? "#000" : "#fff"} />
                ) : (
                  "Compile Code"
                )}
              </Button>
            </div>
            <hr className={darkMode ? "border-gray-800" : "border-gray-200"} />
            <div className="p-4 pt-2">
              <ReactCodeMirror
                value={code}
                height="400px"
                theme={darkMode ? "dark" : "light"}
                extensions={[python(), EditorView.lineWrapping]}
                onChange={(value) => setCode(value)}
                className="h-full"
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

export default PYTHON_EXAMPLE;

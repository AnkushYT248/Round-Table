import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import HTML_EXAMPLE from "./html/HTML_EXAMPLE";
import PYTHON_EXAMPLE from "./python/PYTHON_EXAMPLE.jsx";
import JS_EXAMPLE from "./js/JS_EXAMPLE";

const Example = () => {
  return (
    <div className="mx-auto px-6 py-10 dark:bg-gray-900 bg-white rounded-lg shadow-lg mb-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-wide">Code Examples</h2>
        <p className="text-sm mt-1 font-medium tracking-wide">
          Here are some online code compiler examples that support multiple
          programming languages.
        </p>
        <div className="flex items-center gap-4 justify-center flex-wrap my-4">
          <span className="p-2 shadow-2xl text-white bg-gray-800 rounded-lg font-bold flex items-center gap-4">
            <Image
              src={"/images/svg/html.svg"}
              alt="html"
              width={24}
              height={24}
            />
            HTML
          </span>
          <span className="p-2 shadow-2xl text-white bg-gray-800 rounded-lg font-bold flex items-center gap-4">
            <Image
              src={"/images/svg/css.svg"}
              alt="css"
              width={24}
              height={24}
            />
            CSS
          </span>
          <span className="p-2 shadow-2xl text-white bg-gray-800 rounded-lg font-bold flex items-center gap-4">
            <Image
              src={"/images/svg/java-script.svg"}
              alt="java script"
              width={24}
              height={24}
            />
            JAVA SCRIPT
          </span>
          <span className="p-2 shadow-2xl text-white bg-gray-800 rounded-lg font-bold flex items-center gap-4">
            <Image
              src={"/images/svg/python.svg"}
              alt="python"
              width={24}
              height={24}
            />
            PYTHON
          </span>
        </div>
        <Button className="cursor-pointer font-bold">
          View All Avalible Compilres
        </Button>
      </div>
      <hr className="my-4" />
      <HTML_EXAMPLE />
      <PYTHON_EXAMPLE />
      <JS_EXAMPLE />
    </div>
  );
};

export default Example;

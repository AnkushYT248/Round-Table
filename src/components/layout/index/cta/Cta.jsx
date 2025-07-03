import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const CTA = () => {
  return (
    <div className="w-full h-full max-h-[600px] px-5 py-12 flex flex-col gap-6 items-center justify-center bg-white dark:bg-[#181b20] rounded-2xl shadow-md">
      <div className="space-y-2 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">
          Join Our Learning Community
        </h2>
        <p className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
          Sign in or create an account to save your progress, track your achievements, and unlock a personalized learning experience. Your journey starts here!
        </p>
      </div>
      <div className="w-full max-w-xl h-64 relative mt-2 rounded-xl overflow-hidden shadow-sm">
        <Image
          src={"https://placehold.co/600x400.png"}
          alt="Learning community illustration"
          fill
          priority
          className="object-cover rounded-xl border border-gray-200 dark:border-gray-700"
        />
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center mt-4">
        <Button
          variant={"outline"}
          className="text-lg md:text-xl font-bold px-8 py-3 rounded-lg border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          Log In
        </Button>
        <Button className="text-lg md:text-xl font-bold px-8 py-3 rounded-lg shadow-sm hover:bg-blue-700 hover:text-white dark:hover:bg-blue-500 dark:hover:text-gray-900 transition-colors">
          Register
        </Button>
      </div>
    </div>
  );
};

export default CTA;

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const CTA = () => {
  return (
    <section className="w-full h-full max-h-[650px] px-4 py-14 flex flex-col gap-8 items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-[#181b20] dark:via-[#181b20] dark:to-[#23272f] rounded-3xl shadow-xl relative overflow-hidden">
      {/* Decorative background */}
      <span className="absolute left-0 top-0 w-40 h-40 bg-gradient-to-br from-blue-100/40 to-purple-200/20 dark:from-blue-900/10 dark:to-purple-900/10 rounded-br-3xl pointer-events-none blur-2xl opacity-70" />
      <span className="absolute right-0 bottom-0 w-40 h-40 bg-gradient-to-tl from-purple-100/40 to-blue-200/20 dark:from-purple-900/10 dark:to-blue-900/10 rounded-tl-3xl pointer-events-none blur-2xl opacity-70" />
      <div className="space-y-3 text-center z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2 drop-shadow-sm">
          Join Our <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Learning Community</span>
        </h2>
        <p className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
          Sign in or create an account to save your progress, track your achievements, and unlock a personalized learning experience. Your journey starts here!
        </p>
      </div>
      <div className="w-full max-w-xl h-64 relative mt-2 rounded-2xl overflow-hidden shadow-lg border-4 border-blue-100 dark:border-blue-900 z-10">
        <Image
          src={"https://placehold.co/600x400.png"}
          alt="Learning community illustration"
          fill
          sizes="(max-width: 768px) 100vw, 600px"
          priority
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center mt-4 z-10">
        <Button
          variant={"outline"}
          className="text-lg md:text-xl font-bold px-8 py-3 rounded-lg border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-900/60 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors shadow"
        >
          Log In
        </Button>
        <Button className="text-lg md:text-xl font-bold px-8 py-3 rounded-lg shadow-lg bg-gradient-to-r from-blue-600 to-purple-500 text-white hover:from-blue-700 hover:to-purple-600 dark:hover:from-blue-500 dark:hover:to-purple-400 dark:hover:text-gray-900 transition-colors">
          Register
        </Button>
      </div>
    </section>
  );
};

export default CTA;

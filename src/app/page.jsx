import Header from "@/components/layout/header/Header";
import Hero from "@/components/layout/index/hero/Hero";
import Courses from "@/components/layout/index/features/Courses";
import Example from "@/components/layout/index/example/example";
import Explore from "@/components/layout/index/explore/Explore";
import CTA from "@/components/layout/index/cta/Cta";

export default function Home() {
  return (
    <>
      <Header />
      <div className="items-center justify-center mt-2 hidden lg:flex flex-col">
        <span className="text-3xl md:text-4xl lg:text-5xl audiowide rounded-md p-2 bg-gradient-to-r from-red-500 to-violet-700 dark:to-white text-transparent bg-clip-text flex items-center justify-center">
          <span className="mr-1">Round</span>|<span>Table</span>
        </span>
        <div className=""></div>
      </div>
      <Hero />
      <Courses />
      <Example />
      <hr></hr>
      <Explore />
      <CTA />
    </>
  );
}

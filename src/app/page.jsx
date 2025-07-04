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
     
      <Hero />
      <Courses />
      <Example />
      <hr></hr>
      <Explore />
      <CTA />
    </>
  );
}

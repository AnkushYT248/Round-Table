
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
      <main>
        <Hero />
        <section aria-labelledby="courses-heading">
          <Courses />
        </section>
        <section aria-labelledby="examples-heading">
          <Example />
        </section>
        <hr />
        <section aria-labelledby="explore-heading">
          <Explore />
        </section>
        <section aria-labelledby="cta-heading">
          <CTA />
        </section>
      </main>
    </>
  );
}

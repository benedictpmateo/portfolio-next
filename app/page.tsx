import Image from "next/image";
import Script from "next/script";
import skills from "./_constants/skills";
import Narrative from "./_components/Narrative";
import Profile from "./_components/Profile";
import Skills from "./_components/Skills";
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";

export default function Home() {
  const yearsOfExperience = new Date().getFullYear() - 2018;

  return (
    <main className="min-h-screen text-foreground font-[Inter]">
      {/* <Script src="/global.js"></Script> */}
      <section
        id="whole-section"
        className="max-w-[1040px] mx-auto w-full"
      >
        <div className="grid grid-cols-[400px_1fr] gap-4 px-5">
          <div className="py-20 sticky top-0 max-h-screen h-screen">
            <Profile />
          </div>
          <div className="space-y-20 py-20 ">
            <Narrative />
            <Skills />
            <Experience />
            <Projects />
          </div>
        </div>
      </section>
    </main>
  );
}

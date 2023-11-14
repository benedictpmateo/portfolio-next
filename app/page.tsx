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
    <main className="text-foreground font-[Inter] relative">
      <Script src="/global.js"></Script>
      <div id="shadow" className="pointer-events-none fixed inset-0 z-30"></div>
      <section id="whole-section" className="max-w-[1040px] mx-auto w-full">
        <div className="grid grid-cols-[400px_1fr] gap-4 px-5">
          <div className="py-20 sticky top-0 max-h-screen h-screen">
            <Profile />
          </div>
          <div className="space-y-20 py-20 ">
            <Narrative />
            <Experience />
            <Skills />
            <Projects />
            <div className="">
              <p className="text-light/50 text-[10px]">
                built with <span className="text-light">next.js</span> and{" "}
                <span className="text-light">tailwindcss</span>, deployed
                using <span className="text-light">vercel</span>.<br/>inspired by{" "}
                <a
                  href="https://github.com/bchiang7"
                  target="_blank"
                  className="text-light"
                >
                  brittany chiang
                </a>{" "}
                and {" "}
                <a
                  href="https://dribbble.com/shots/16018956-Portfolio-Landing-Page"
                  target="_blank"
                  className="text-light"
                >
                  carl agliam
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

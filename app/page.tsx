import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Project, projects } from "@/data/projects";
import { BackgroundGradientAnimation } from "@/components/gradient";
import LetterPullup from "@/components/wordReveal";

export default function App() {
  return (
    <main>
      {/* Hero Section */}
      <div className="relative w-screen h-screen">
        <BackgroundGradientAnimation />

        <div className="absolute z-50 inset-0 flex flex-col items-center justify-center pointer-events-none text-white px-4 text-center">
          <p className="text-white w-[50vw] leading-[120px] text-8xl font-semibold">
            I&apos;m Brandon - Software Engineer and Student
          </p>
          <span className="flex items-center px-8 py-5 gap-3 mt-10 rounded-full bg-white font-normal text-black text-3xl pointer-events-auto cursor-pointer hover:bg-[#FFA500] duration-150">
            Let&apos;s Talk
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
          <div className="flex gap-12 text-2xl mt-10 font-semibold pointer-events-auto">
            <p className="text-white underline cursor-pointer hover:text-[#FFA500] duration-150">
              <a
                href="http://www.linkedin.com/in/brandon-quon"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p className="text-white underline cursor-pointer hover:text-[#FFA500] duration-150">
              <a
                href="http://github.com/bnquon"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative w-screen bg-black flex justify-center">
        <div className="w-[50vw] h-fit mt-[8vh] flex flex-col border-y-2 border-[#727272] py-[60px]">
          <LetterPullup words="About Me" delay={0.1} />
          
          <div className="w-1/2 self-end mt-[10vh]">
            <p className="text-3xl leading-[45px] text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="relative w-screen bg-black flex justify-center">
        <div className="w-[50vw] border-b-2 border-[#727272] py-[60px]">
          l<LetterPullup words="Projects" delay={0.1} />
        </div>
      </div>
    </main>
  );
}

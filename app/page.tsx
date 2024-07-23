import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { BackgroundGradientAnimation } from "@/components/gradient";
import LetterPullup from "@/components/wordReveal";
import { FlipWords } from "@/components/flipWords";
import { ContactForm } from "@/components/contactForm";
import Navbar from "@/components/navbar";
import { Projects } from "@/components/Projects";

export default function App() {
  const words = ["student.", "software engineer.", "tutor.", "developer."];

  return (
    <main>
      <SpeedInsights />
      <Navbar />

      {/* Hero Section */}
      <div id="Home" className="relative w-screen h-screen">
        <BackgroundGradientAnimation />

        <div className="absolute z-1 inset-0 flex flex-col items-center justify-center sm:pointer-events-none text-white px-4 text-center">
          <div className="text-white w-[95vw] sm:w-[60vw] text-4xl lg:text-5xl xl:text-8xl font-semibold">
            <span className="flex justify-center items-center">
              Hey, I&apos;m Brandon &nbsp;{" "}
              <Image
                className="rounded-full overflow-hidden"
                src="/realIcon.png"
                alt="icon"
                width={50}
                height={50}
              ></Image>
            </span>
            I am a <FlipWords words={words} />
          </div>
          <span className="flex items-center px-4 py-2 xl:px-8 xl:py-5 gap-3 mt-5 xl:mt-10 rounded-full bg-white font-normal text-black text-lg xl:text-3xl pointer-events-auto cursor-pointer hover:bg-[#E0B0FF] duration-150">
            Let&apos;s Talk
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
          <div className="flex gap-12 xl:text-2xl text-base mt-5 xl:mt-10 font-semibold pointer-events-auto">
            <p className="text-white underline cursor-pointer hover:text-[#E0B0FF] duration-150">
              <a
                href="http://www.linkedin.com/in/brandon-quon"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p className="text-white underline cursor-pointer hover:text-[#E0B0FF] duration-150">
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
      <div
        id="About"
        className="relative w-screen bg-black flex justify-center"
      >
        <div className="xl:w-[60vw] w-[95vw] h-fit mt-[8vh] flex flex-col py-[60px]">
          <LetterPullup words="About Me" delay={0.05} />

          <div className="xl:w-1/2 w-full self-end mt-[10vh]">
            <p className="xl:text-3xl text-xl xl:leading-[45px] text-white">
              I am currently a student at Simon Fraser University majoring in
              Computing Science. I am passionate about software engineering, and
              will be working on exciting projects at Formations Corp. on a
              Software Developer Co-op until May 2025. Outside of software, I
              love to workout and play basketball.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <div
        id="Contact"
        className="relative w-screen bg-black flex justify-center"
      >
        <div className="xl:w-[60vw] w-[95vw] flex flex-col py-[60px]">
          <LetterPullup words="Contact Me" delay={0.05} />
          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <div className="relative w-screen bg-black flex justify-center">
        <div className="xl:w-[60vw] w-[95vw] flex xl:flex-row flex-col justify-between py-[60px] xl:text-xl text-lg text-white border-t-2 border-[#727272]">
          <p className="xl:text-xl text-base">
            © 2024 Brandon Quon. All Rights Reserved.
          </p>
          <div className="inline-flex gap-8 xl:order-none order-first xl:mb-0 mb-8">
            <p className="text-white underline cursor-pointer hover:text-[#E0B0FF] duration-150">
              <a
                href="http://www.linkedin.com/in/brandon-quon"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p className="text-white underline cursor-pointer hover:text-[#E0B0FF] duration-150">
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
    </main>
  );
}

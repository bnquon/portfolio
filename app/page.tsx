import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { BackgroundGradientAnimation } from "@/components/gradient";

export default function App() {
  return (
    <main>
      <div className="relative">
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 flex flex-col items-center justify-center text-white font-bold px-4 text-3xl text-center md:text-4xl lg:text-7xl">
            <p className="text-white w-[50vw] leading-[100px]">
              I&apos;m Brandon - Software Engineer and Student
            </p>
            <span className="flex items-center px-8 py-5 gap-3 mt-10 rounded-full bg-white font-normal text-black text-3xl">
              Let&apos;s Talk
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </span>
            <div className="flex gap-12 text-2xl mt-10 font-semibold">
              <p className="text-white underline cursor-pointer">LinkedIn</p>
              <p className="text-white underline cursor-pointer">GitHub</p>
            </div>
          </div>
        </BackgroundGradientAnimation>
        
      </div>
    </main>
  );
}

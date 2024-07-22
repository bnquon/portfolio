import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Project, projects } from "@/data/projects";
import { BackgroundGradientAnimation } from "@/components/gradient";
import LetterPullup from "@/components/wordReveal";
import { FlipWords } from "@/components/flipWords";
import { ContactForm } from "@/components/contactForm";
import Navbar from "@/components/navbar";

export default function App() {

  const words = ["student", "software engineer", "tutor", "developer"];

  return (
    <main>
      <SpeedInsights />
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-screen h-screen">
        <BackgroundGradientAnimation />

        <div className="absolute z-1 inset-0 flex flex-col items-center justify-center pointer-events-none text-white px-4 text-center">
          <div className="text-white w-[50vw] leading-[120px] text-8xl font-semibold">
            Hey, I&apos;m Brandon.<br />
            I am a <FlipWords words={words} />.
          </div>
          <span className="flex items-center px-8 py-5 gap-3 mt-10 rounded-full bg-white font-normal text-black text-3xl pointer-events-auto cursor-pointer hover:bg-[#eb5951] duration-150">
            Let&apos;s Talk
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
          <div className="flex gap-12 text-2xl mt-10 font-semibold pointer-events-auto">
            <p className="text-white underline cursor-pointer hover:text-[#eb5951] duration-150">
              <a
                href="http://www.linkedin.com/in/brandon-quon"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </p>
            <p className="text-white underline cursor-pointer hover:text-[#eb5951] duration-150">
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
            {projects.map((project: Project, index) => (
              <div key={index} className="flex mt-[12vh]">
                <div className="w-1/2 flex flex-col text-white pr-4">
                  <p className="text-4xl font-medium">0{index + 1}. {project.name}</p>
                  <p className="text-3xl mt-[6vh]">{project.description}</p>
                  <p className="text-2xl mt-auto">Technologies Used: {project.technologies}</p>
                </div>
                <div className="w-1/2 flex flex-col">
                  <Image className="" src={project.image} alt="placeholder" sizes="100vw" width={0} height={0} style={{ width: '100%', height: '100%'}}></Image>
                  <div className="flex gap-4 mt-[4vh]">
                    {project.liveSiteURL ? (
                      <a href={project.liveSiteURL} target="_blank" rel="noopener noreferrer">
                        <span className="text-black text-xl rounded-full bg-white w-fit px-4 py-2 hover:bg-[#FFA500] duration-150 cursor-pointer">Live Site</span>      
                      </a>
                    ) : null}
                    {project.githubURL ? (
                      <a href={project.githubURL} target="_blank" rel="noopener noreferrer">
                        <span className="text-black text-xl rounded-full bg-white w-fit px-4 py-2 hover:bg-[#FFA500] duration-150 cursor-pointer">GitHub</span>      
                      </a>
                    ): null}
                  </div>
                </div>
              </div>
              
            ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative w-screen bg-black flex justify-center">
        <div className="w-[50vw] flex flex-col py-[60px]">
          <LetterPullup words="Contact Me" delay={0.1} />
          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <div className="relative w-screen bg-black flex justify-center">
        <div className="w-[50vw] flex justify-between py-[60px] text-xl text-white border-t-2 border-[#727272]">
          <p>© 2024 Brandon Quon. All Rights Reserved.</p>
          <div className="inline-flex gap-8">
            <p className="underline">LinkedIn</p>
            <p className="underline">GitHub</p>
          </div>
        </div>
      </div>
    </main>
  );
}

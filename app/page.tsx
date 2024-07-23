"use client";
import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
import { motion } from "framer-motion";

export default function App() {
  const words = ["student.", "software engineer.", "tutor.", "developer."];

  const projectImageReveal = {
    initial: { x: 0 },
    animate: {
      x: 800,
      transition: {
        duration: 1.5,
        ease: [1, 0, 0, 1],
        delay: 0.15,
      },
    },
  };

const projectTextReveal = {
    initial: { y: 100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.15,
      },
    },
  };

  return (
    <main>
      <SpeedInsights />
      <Navbar />

      {/* Hero Section */}
      <div id="Home" className="relative w-screen h-screen">
        <BackgroundGradientAnimation />

        <div className="absolute z-1 inset-0 flex flex-col items-center justify-center pointer-events-none text-white px-4 text-center">
          <div className="text-white w-[60vw] text-8xl font-semibold">
            <span className="flex justify-center items-center">Hey, I&apos;m Brandon &nbsp; <Image className="rounded-full overflow-hidden" src="/RealIcon.png" alt="icon" width={160} height={160}></Image></span>
            I am a <FlipWords words={words} />
          </div>
          <span className="flex items-center px-8 py-5 gap-3 mt-10 rounded-full bg-white font-normal text-black text-3xl pointer-events-auto cursor-pointer hover:bg-[#E0B0FF] duration-150">
            Let&apos;s Talk
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </span>
          <div className="flex gap-12 text-2xl mt-10 font-semibold pointer-events-auto">
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
        <div className="w-[60vw] h-fit mt-[8vh] flex flex-col py-[60px]">
          <LetterPullup words="About Me" delay={0.05} />

          <div className="w-1/2 self-end mt-[10vh]">
            <p className="text-3xl leading-[45px] text-white">
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
      <div
        id="Projects"
        className="relative w-screen bg-black flex justify-center"
      >
        <div className="w-[60vw] py-[80px]">
          l<LetterPullup words="Projects" delay={0.05} />
          {projects.map((project: Project, index) => (
            <div key={index} className="flex mt-[12vh]">
              <motion.div 
              variants={projectTextReveal}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="box-border w-1/2 flex flex-col text-white pr-10">
                <p className="text-4xl font-medium">
                  0{index + 1}. {project.name}
                </p>
                <p className="text-3xl mt-[6vh]">{project.description}</p>
                <p className="text-2xl mt-[4vh]">
                  Technologies: {project.technologies}
                </p>
              </motion.div>
              <div className="w-1/2 flex flex-col relative overflow-hidden">
                <Image
                  src={project.image}
                  alt="placeholder"
                  sizes="100vw"
                  width={0}
                  height={0}
                  style={{ width: "100%", height: "100%" }}
                ></Image>

                <motion.div 
                variants={projectImageReveal}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="w-full h-full bg-black absolute"></motion.div>
                
                <div
                  className="w-full flex gap-8"
                  style={{
                    marginTop:
                      project.githubURL || project.liveSiteURL ? "2vh" : "0",
                  }}
                >
                  {project.githubURL ? (
                    <a
                      href={project.githubURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-white font-medium text-2xl hover:text-[#E0B0FF] underline duration-150 cursor-pointer">
                        GitHub
                      </span>
                    </a>
                  ) : null}
                  {project.liveSiteURL ? (
                    <a
                      href={project.liveSiteURL}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-white font-medium text-2xl hover:text-[#E0B0FF] underline duration-150 cursor-pointer">
                        Live Website
                      </span>
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="Contact"
        className="relative w-screen bg-black flex justify-center"
      >
        <div className="w-[60vw] flex flex-col py-[60px]">
          <LetterPullup words="Contact Me" delay={0.05} />
          <ContactForm />
        </div>
      </div>

      {/* Footer */}
      <div className="relative w-screen bg-black flex justify-center">
        <div className="w-[60vw] flex justify-between py-[60px] text-xl text-white border-t-2 border-[#727272]">
          <p>© 2024 Brandon Quon. All Rights Reserved.</p>
          <div className="inline-flex gap-8">
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

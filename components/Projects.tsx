"use client";
import React from "react";
import Image from "next/image";
import { Project, projects } from "@/data/projects";
import LetterPullup from "@/components/wordReveal";
import { motion } from "framer-motion";

export const Projects = () => {
  const projectImageReveal = {
    initial: { left: 0, width: "100%" },
    animate: {
      left: "100%",
      width: "0%",
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
    <div
      id="Projects"
      className="relative w-screen bg-black flex justify-center"
    >
      <div className="xl:w-[60vw] w-[95vw] py-[80px]">
        l<LetterPullup words="Projects" delay={0.05} />
        {projects.map((project: Project, index) => (
          <div
            key={index}
            className="flex xl:flex-row flex-col xl:mt-[12vh] mt-[8vh]"
          >
            <motion.div
              variants={projectTextReveal}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="box-border xl:w-1/2 w-full flex flex-col text-white xl:pr-10 gap-6 xl:gap-0 xl:mb-0 mb-4"
            >
              <p className="text-2xl xl:text-4xl font-medium">
                0{index + 1}. {project.name}
              </p>
              <p className="text-xl xl:text-3xl xl:mt-[6vh]">
                {project.description}
              </p>
              <p className="text-lg xl:text-2xl xl:mt-[4vh]">
                Technologies: {project.technologies}
              </p>
            </motion.div>
            <div className="xl:w-1/2 w-full flex flex-col relative">
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
                className="w-full h-full bg-black absolute"
              ></motion.div>

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
                    <span className="text-white font-medium text-lg xl:text-2xl hover:text-[#E0B0FF] underline duration-150 cursor-pointer">
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
                    <span className="text-white font-medium text-lg xl:text-2xl hover:text-[#E0B0FF] underline duration-150 cursor-pointer">
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
  );
};

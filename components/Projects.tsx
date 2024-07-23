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
      <div className="xl:w-[60vw] sm:w-[70vw] w-[95vw] py-[80px]">
        l<LetterPullup words="Projects" delay={0.05} />
        {projects.map((project: Project, index) => (
          <div
            key={index}
            className="flex sm:flex-row flex-col sm:mt-[12vh] mt-[8vh] box-border"
          >
            <motion.div
              variants={projectTextReveal}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="box-border xl:w-1/2 w-full flex flex-col text-white sm:pr-6 gap-6 sm:gap-0 justify-between sm:mb-0 mb-[4vh]"
            >
              <p className="text-2xl xl:text-4xl font-medium">
                0{index + 1}. {project.name}
              </p>
              <p className="text-xl xl:text-3xl">{project.description}</p>
              <p className="text-lg xl:text-2xl">
                Technologies: {project.technologies}
              </p>

              {!project.liveSiteURL && !project.githubURL ? (
                <p className="text-lg xl:text-2xl">
                  No site or code available currently.
                </p>
              ) : null}

              <div className="w-full flex gap-8">
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
            </motion.div>
            <div className="xl:w-1/2 w-full flex flex-col relative sm:min-h-[275px]">
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

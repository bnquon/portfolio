"use client";
import React from "react";
import Image from "next/image";
import { Project, projects } from "@/data/projects";
import LetterPullup from "@/components/wordReveal";
import { motion } from "framer-motion";

export const Projects = () => {

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
              className="box-border w-1/2 flex flex-col text-white pr-10"
            >
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
  );
};

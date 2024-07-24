"use client";
import React from "react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const sections = ["Home", "About", "Projects", "Contact"];

  const navbarAppear = {
    initial: { y: -100 },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        delay: 0.25,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={navbarAppear}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-full hidden sm:flex justify-center fixed top-[1vh] p-4 z-50"
      >
        <div className="flex gap-8 justify-between px-4 py-2 h-full w-fit backdrop-filter backdrop-blur-md bg-[#232b2b]/60 rounded-full shadow-lg border border-gray-700/40">
          {sections.map((section, index) => (
            <a href={`#${section}`} key={index}>
              <p
                key={index}
                className={
                  "text-white text-lg xl:text-xl font-semibold xl:px-4 xl:py-2 px-2 py-1 hover:bg-[#505050] duration-150 rounded-full cursor-pointer"
                }
              >
                {section}
              </p>
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;

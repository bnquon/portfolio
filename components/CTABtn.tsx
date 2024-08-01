"use client";
import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";

export const CTABtn = () => {
  const scrollToContact = () => {
    document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <span
      onClick={scrollToContact}
      className="flex items-center px-4 py-2 sm:px-6 sm:py-4 xl:px-8 xl:py-6 gap-3 mt-6 sm:mt-9 xl:mt-12 rounded-full bg-white font-normal text-black text-lg sm:text-xl xl:text-3xl pointer-events-auto cursor-pointer hover:bg-[#E0B0FF] duration-150"
    >
      Let&apos;s Talk
    </span>
  );
};

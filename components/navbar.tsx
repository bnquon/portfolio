"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamic import for StickyHeadroom with SSR disabled
const StickyHeadroom = dynamic(
  () => import("@integreat-app/react-sticky-headroom"),
  { ssr: false },
);

export const Navbar = () => {
  const sections = ["Home", "About", "Projects", "Contact"];

  return (
    <StickyHeadroom scrollHeight={100} pinStart={0}>
        <div className="w-full flex justify-center fixed top-[1vh] p-4 z-50">
        <div className="flex gap-8 justify-between px-4 py-2 h-full w-fit backdrop-filter backdrop-blur-md bg-[#232b2b]/60 rounded-full shadow-lg border border-gray-700/40">
            {sections.map((section, index) => (
            <p
                key={index}
                className="text-white text-xl font-medium px-4 py-2"
            >
                {section}
            </p>
            ))}
        </div>
        </div>
    </StickyHeadroom>
  );
};

export default Navbar;

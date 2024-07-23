import React from "react";

export const Navbar = () => {
  const sections = ["Home", "About", "Projects", "Contact"];

  return (
    <>
      <div className="w-full hidden sm:flex justify-center fixed top-[1vh] p-4 z-50">
        <div className="flex gap-8 justify-between px-4 py-2 h-full w-fit backdrop-filter backdrop-blur-md bg-[#232b2b]/60 rounded-full shadow-lg border border-gray-700/40">
          {sections.map((section, index) => (
            <a href={`#${section}`} key={index}>
              <p
                key={index}
                className={
                  "text-white text-xl font-semibold px-4 py-2 hover:bg-[#505050] duration-150 rounded-full cursor-pointer"
                }
              >
                {section}
              </p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;

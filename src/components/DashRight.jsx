import React from "react";
import { Css3, Figma, Github } from "iconoir-react";
import { motion, useAnimation } from "framer-motion";
import TestimonialTooltip from "./TestimonialTooltip";

const DashRight = () => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: 0.9,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="w-full"
    >
      <div className="w-full md:w-60 md:rounded-xl h-fit sticky top-5 mb-3 md:mb-0">
        <div>
          <div className="bg-[#141414] md:bg-[#1d1d1d] min-w-min rounded-2xl p-4 md:border border-neutral-800 h-fit">
            <h2 className="font-bold text-neutral-200">90+ Framer Shadows</h2>
            <p className="text-xs my-3 text-neutral-400 font-normal">
              Stop worrying about perfecting the shadows, just Copy & Paste from
              the 80+ Shadows collection
            </p>
            <button className="h-7 p-1 bg-[#696969] rounded-md text-xs w-full font-medium text-neutral-50 ">
              Download
            </button>

            <div className="border border-neutral-700 my-5" />

            <div className="text-neutral-400">
              <h1 className="font-medium text-neutral-200">Featured in</h1>
              <div className="flex items-center gap-x-3 mt-4 hover:bg-neutral-800 p-2 rounded-md">
                <div className="flex items-center justify-center shrink-0 bg-neutral-700/50 size-10 rounded-full">
                  <Github color="white" width={20} height={20} />
                </div>
                <h2 className="text-xs">9 Essential Javascript Functions</h2>
              </div>
              <div className="flex items-center gap-x-3 mt-4 hover:bg-neutral-800 p-2 rounded-md">
                <div className="flex items-center justify-center shrink-0 bg-neutral-700/50 size-10 rounded-full">
                  <Figma color="white" width={20} height={20} />
                </div>
                <h2 className="text-xs">
                  How to easily create React animations: Figma
                </h2>
              </div>
              <div className="flex items-center gap-x-3 mt-4 hover:bg-neutral-800 p-2 rounded-md">
                <div className="flex items-center justify-center shrink-0 bg-neutral-700/50 size-10 rounded-full">
                  <Css3 color="white" width={20} height={20} />
                </div>
                <h2 className="text-xs">TailwindCSS tips</h2>
              </div>

              {/* <div className="border border-neutral-700 my-5" />

              <div className="flex items-center justify-center gap-x-2">
                <TestimonialTooltip />
              </div> */}
            </div>
          </div>
        </div>

        <div className="bg-[#141414] md:bg-[#1d1d1d] min-w-min rounded-2xl p-4 border border-neutral-800 mt-3 text-neutral-50">
          <img
            width={1000}
            height={1000}
            className="h-56 md:h-32 w-full md:w-56 object-cover rounded-lg"
            src="/logo.png"
            alt=""
          />
          <p className="my-3 font-medium text-sm">3D Games in Reactjs</p>
          <button className="bg-[#696969] h-7 p-1 rounded-md text-xs w-full font-medium">
            Get Now @20% OFF
          </button>
        </div>
        <footer className="mt-3 md:bg-[#1C1C1C] rounded-lg text-neutral-400">
          <div className="p-4">
            <p className="text-xs">©2024 Ervan Kurniawan.</p>
          </div>
        </footer>
      </div>
    </motion.div>
  );
};

export default DashRight;

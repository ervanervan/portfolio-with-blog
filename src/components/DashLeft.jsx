import React, { useState } from "react";

import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import {
  Building,
  Calendar,
  HomeSimple,
  MagicWand,
  OpenBook,
} from "iconoir-react";
import TestimonialTooltip from "./TestimonialTooltip";

const DashLeft = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");

  const controls = useAnimation();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValidEmail(email)) {
      setEmail("");
    } else {
      controls.start({
        x: 0,
        transition: {
          type: "spring",
          velocity: "600",
          stiffness: "5000",
          damping: 15,
        },
      });
    }
  };

  return (
    <div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: { duration: 0.3, type: "spring", stiffness: 200 },
        }}
        className="w-full md:w-80 h-fit sticky top-5"
      >
        <div className="w-full md:w-80 p-3 md:border border-neutral-800 rounded-xl h-full bg-[#141414] md:bg-[#1d1d1d]">
          <div className="flex">
            <div className="w-full relative">
              <img
                width={1000}
                height={1000}
                className="w-28 h-28 object-cover rounded-full"
                src="/ervan.jpg"
                alt=""
              />
              <div
                onClick={() => setOpen(!open)}
                className="bg-green-400 w-3 h-3 cursor-pointer rounded-full absolute top-20 left-24 animate-pulse"
              />

              {open && (
                <div className="border border-green-400 h-5 flex items-center justify-center rounded-2xl w-fit px-2 absolute top-[4.7rem] left-28">
                  <p className="text-[10px] font-medium text-green-400">
                    Open to freelancing
                  </p>
                </div>
              )}
              <h1 className="font-bold text-xl  text-neutral-300 mt-3">
                Ervan Kurniawan
              </h1>
              <p className="text-xs font-medium text-neutral-300 mt-2">
                ervanervan040@gmail.com
              </p>
              <Link to={"https://ervankurniawan.vercel.app"}>
                <p className="text-xs font-medium text-neutral-300 mt-1">
                  ervankurniawan.vercel.app
                </p>
              </Link>

              <div className="flex w-full">
                <div className="flex flex-wrap gap-1 text-xs my-4">
                  <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-medium">
                    HTML
                  </p>
                  <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-medium">
                    CSS
                  </p>
                  <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-medium">
                    JavaScript
                  </p>
                  <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-medium shrink-0 ">
                    Git
                  </p>
                  <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-medium shrink-0 ">
                    ReactJS
                  </p>
                  <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-medium shrink-0 ">
                    Bootstrap
                  </p>
                  <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-medium shrink-0 ">
                    TailwindCSS
                  </p>
                  <p className="bg-[#282828] text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] font-medium shrink-0 ">
                    Framer Motion
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute top-3 right-3">
              <div className="flex gap-x-1 w-full h-fit">
                <Link to={"/"}>
                  <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center">
                    <HomeSimple color="white" height={16} width={16} />
                  </div>
                </Link>

                <div className="bg-neutral-700/50 h-7 w-7 rounded-full flex items-center justify-center">
                  <OpenBook color="white" height={16} width={16} />
                </div>
              </div>
            </div>
          </div>

          {/* <form
            onSubmit={handleSubmit}
            className="bg-[#282828] p-1  rounded-md md:flex items-center  justify-between h-9 w-full hidden "
          >
            <input
              value={email}
              onChange={handleChange}
              className="w-36 focus:outline-none bg-transparent text-neutral-400 text-xs placeholder:text-neutral-600 h-full pl-2 placeholder:text-xs placeholder:font-medium"
              placeholder="example@email.com"
              type="text"
            />
            <motion.button
              animate={controls}
              className="bg-[#696969] h-full p-1 rounded-md text-xs w-20 font-medium text-neutral-50"
            >
              Subscribe
            </motion.button>
          </form> */}

          <div className="w-full mt-5 text-neutral-300">
            <h2 className="font-semibold my-4">Bio</h2>
            <p className="text-[12px]  font-normal my-3">
              I have experience in team projects in designing and building
              websites and I understand the principles of responsive design and
              how to apply them.
            </p>

            <div className="mt-6 flex justify-between text-sm">
              <div className="flex items-center gap-x-1.5">
                <Calendar color="white" height={16} width={14} />
                <span className="text-xs font-normal">
                  3 Years as a Developer
                </span>
              </div>
              <div className="flex items-center gap-x-1.5">
                <MagicWand color="white" height={16} width={14} />
                <span className="text-xs font-normal">17 Projects</span>
              </div>
            </div>

            <div className="border border-[#282828] text-neutral-300 my-6" />

            <div className="my-4">
              <h1 className="font-semibold">Work History</h1>
              <div className="mt-7 flex justify-between">
                <div className="flex gap-x-3">
                  <Building color="white" height={24} width={24} />
                  <div className="-mt-1">
                    <h3 className="text-sm font-medium">Web Dev Intern</h3>
                    <p className="text-[10px]">Maritim Muda Nusantara</p>
                  </div>
                </div>
                <small className="text-[10px] text-neutral-300">
                  Feb 2023 - Jun 2023
                </small>
              </div>
              {/* <div className="my-3 flex justify-between">
                <div className="flex gap-x-3">
                  <Building color="white" height={24} width={24} />
                  <div className="-mt-1">
                    <h3 className="text-sm font-medium">Front-End Dev</h3>
                    <p className="text-[10px]">Apple</p>
                  </div>
                </div>
                <small className="text-[10px] text-neutral-300">
                  Sep 2020 - Jan 2022
                </small>
              </div> */}
            </div>

            <div className="border border-[#282828] text-neutral-300 my-6" />

            <div className="my-4">
              <h1 className="font-semibold">Connect with Us</h1>
              <div className="mt-7">
                <TestimonialTooltip />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashLeft;

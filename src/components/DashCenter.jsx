import React from "react";
import { Code } from "iconoir-react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const DashCenter = () => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: 0.6,
          type: "spring",
          stiffness: 200,
        },
      }}
      className="w-full"
    >
      <div className="bg-[#141414] md:bg-[#1d1d1d] lg:bg-transparent rounded-xl">
        <div>
          <div className="flex gap-x-6 p-4 items-center">
            <Code color="white" width={100} height={100} />

            <div>
              <h1 className="text-2xl font-medium text-neutral-300">
                Semicolon,
                <span className="text-sm text-neutral-400"> A Dev Blog</span>
              </h1>
              <p className="max-w-sm text-neutral-400 text-sm">
                I design and code beautifully simple things, and occasionally i
                write about them
              </p>
            </div>
          </div>

          <div className="border border-neutral-700 my-5" />

          <div className="  bg-[#1C1C1C] rounded-lg text-neutral-400">
            <Link>
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="  flex items-center gap-x-3">
                  <img
                    width={1000}
                    height={1000}
                    className="w-40 md:w-40 md:w-24 h-24 object-cover rounded-md"
                    src="/ervan.jpg"
                    alt=""
                  />
                  <div>
                    <span className="text-sm">July 22, 2023</span>
                    <h2 className="text-sm font-medium">
                      Smooth Animation with React and Framer Motion
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
            <Link>
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="  flex items-center gap-x-3">
                  <img
                    height={1000}
                    width={1000}
                    className="w-40 md:w-24 h-24 object-cover rounded-md"
                    src="/logo.png"
                    alt=""
                  />
                  <div>
                    <span className="text-sm">July 22, 2023</span>
                    <h2 className="text-sm font-medium">
                      Smooth Animation with React and Framer Motion
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
            <Link>
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="  flex items-center gap-x-3">
                  <img
                    height={1000}
                    width={1000}
                    className="w-40 md:w-24 h-24 object-cover rounded-md"
                    src="/ervan.jpg"
                    alt=""
                  />
                  <div>
                    <span className="text-sm">July 22, 2023</span>
                    <h2 className="text-sm font-medium">
                      Smooth Animation with React and Framer Motion
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* without image */}

          <div className="mt-6  bg-[#1C1C1C] rounded-lg text-neutral-400">
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">July 22, 2023</span>
                  <h2 className="text-sm font-medium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">July 22, 2023</span>
                  <h2 className="text-sm font-medium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <span className="text-sm">July 22, 2023</span>
                  <h2 className="text-sm font-medium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* With image */}

          <div className=" mt-6  bg-[#1C1C1C] rounded-lg text-neutral-400">
            <Link>
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="flex items-center gap-x-3">
                  <img
                    height={1000}
                    width={1000}
                    className="w-40 md:w-24 h-24 object-cover rounded-md"
                    src="/logo.png"
                    alt=""
                  />
                  <div>
                    <span className="text-sm">July 22, 2023</span>
                    <h2 className="text-sm font-medium">
                      Smooth Animation with React and Framer Motion
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
            <Link>
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="flex items-center gap-x-3">
                  <img
                    height={1000}
                    width={1000}
                    className="w-40 md:w-24 h-24 object-cover rounded-md"
                    src="/ervan.jpg"
                    alt=""
                  />
                  <div>
                    <span className="text-sm">July 22, 2023</span>
                    <h2 className="text-sm font-medium">
                      Smooth Animation with React and Framer Motion
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
            <Link>
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="flex items-center gap-x-3">
                  <img
                    height={1000}
                    width={1000}
                    className="w-40 md:w-24 h-24 object-cover rounded-md"
                    src="/logo.png"
                    alt=""
                  />
                  <div>
                    <span className="text-sm">July 22, 2023</span>
                    <h2 className="text-sm font-medium">
                      Smooth Animation with React and Framer Motion
                    </h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* without image */}

          <div className="mt-6  bg-[#1C1C1C] rounded-lg text-neutral-400">
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="  flex items-center gap-x-3">
                <div>
                  <h2 className="text-sm font-medium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                  <div className="flex items-center gap-x-2 font-RubikBold">
                    <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                      TypeScript
                    </p>
                    <div className="w-1 h-1 rounded-full bg-neutral-400" />
                    <span className="text-xs">Sunday, July 22, 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashCenter;

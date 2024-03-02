import React from "react";
import { Link } from "react-router-dom";
import { MediaImageList } from "iconoir-react";
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
            <MediaImageList color="white" width={75} height={75} />

            <div>
              <h1 className="text-2xl font-medium text-neutral-300">
                My Portfolio and Blog
                {/* <span className="text-sm text-neutral-400">
                  Unveiling Creative Journeys
                </span> */}
              </h1>
              <p className="max-w-sm text-neutral-400 text-sm">
                Find inspiring visual narratives in my portfolio and brief
                insights on my blog. One place, two sources of inspiration.
              </p>
            </div>
          </div>

          <div className="border border-neutral-700 my-5" />

          <div className="bg-[#1C1C1C] rounded-lg text-neutral-400">
            <Link to={"https://disneyplus-ruby.vercel.app/"} target="_blank">
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="flex items-center gap-x-3">
                  <img
                    height={1000}
                    width={1000}
                    className="size-20 object-cover rounded-md"
                    src="/cover-disney-plus-min1.png"
                    alt=""
                  />
                  <div className="flex flex-col gap-2">
                    {/* <span className="text-sm">July 22, 2023</span> */}
                    <h2 className="text-base font-medium">Disney Plus</h2>
                    {/* <p className="text-sm font-medium">Payna Finance</p> */}
                    <div className="flex items-center flex-wrap gap-2 font-semibold">
                      <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                        ReactJS
                      </p>
                      <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                        TailwindCSS
                      </p>
                    </div>
                    <span className="text-xs">Sunday, December 31, 2023</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* without image */}

          {/* <div className="mt-6 bg-[#1C1C1C] rounded-lg text-neutral-400">
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="flex items-center gap-x-3">
                <div>
                  <span className="text-sm">November 27, 2023</span>
                  <h2 className="text-sm font-medium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="flex items-center gap-x-3">
                <div>
                  <span className="text-sm">November 27, 2023</span>
                  <h2 className="text-sm font-medium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="flex items-center gap-x-3">
                <div>
                  <span className="text-sm">November 27, 2023</span>
                  <h2 className="text-sm font-medium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
          </div> */}

          <div className="mt-6 bg-[#1C1C1C] rounded-lg text-neutral-400">
            <Link to={"https://weserve-app.vercel.app/"} target="_blank">
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="flex items-center gap-x-3">
                  <img
                    width={1000}
                    height={1000}
                    className="size-20 object-cover rounded-md"
                    src="/cover-weserve-min1.png"
                    alt=""
                  />
                  <div className="flex flex-col gap-2">
                    {/* <span className="text-sm">July 22, 2023</span> */}
                    <h2 className="text-base font-medium">Weserve</h2>
                    {/* <p className="text-sm font-medium">Payna Finance</p> */}
                    <div className="flex items-center flex-wrap gap-2 font-semibold">
                      <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                        TypeScript
                      </p>
                      <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                        TailwindCSS
                      </p>
                    </div>
                    <span className="text-xs">Monday, December 25, 2023</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"https://anime-movies-mu.vercel.app/"} target="_blank">
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="flex items-center gap-x-3">
                  <img
                    height={1000}
                    width={1000}
                    className="size-20 object-cover rounded-md"
                    src="/cover-anime-movies-min1.png"
                    alt=""
                  />
                  <div className="flex flex-col gap-2">
                    {/* <span className="text-sm">July 22, 2023</span> */}
                    <h2 className="text-base font-medium">Anime Movies</h2>
                    {/* <p className="text-sm font-medium">Payna Finance</p> */}
                    <div className="flex items-center flex-wrap gap-2 font-semibold">
                      <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                        TypeScript
                      </p>
                      <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                        TailwindCSS
                      </p>
                      <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                        Framer Motion
                      </p>
                    </div>
                    <span className="text-xs">Sunday, December 17, 2023</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"https://travlog-omega.vercel.app/"} target="_blank">
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="flex items-center gap-x-3">
                  <img
                    height={1000}
                    width={1000}
                    className="size-20 object-cover rounded-md"
                    src="/cover-travlog-min1.png"
                    alt=""
                  />
                  <div className="flex flex-col gap-2">
                    {/* <span className="text-sm">July 22, 2023</span> */}
                    <h2 className="text-base font-medium">Travlog</h2>
                    {/* <p className="text-sm font-medium">Payna Finance</p> */}
                    <div className="flex items-center flex-wrap gap-2 font-semibold">
                      <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                        ReactJS
                      </p>
                      <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                        TailwindCSS
                      </p>
                    </div>
                    <span className="text-xs">Thursday, November 16, 2023</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* without image */}

          {/* <div className="mt-6 bg-[#1C1C1C] rounded-lg text-neutral-400">
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="flex items-center gap-x-3">
                <div>
                  <span className="text-sm">October 23, 2023</span>
                  <h2 className="text-sm font-medium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="flex items-center gap-x-3">
                <div>
                  <span className="text-sm">October 23, 2023</span>
                  <h2 className="text-sm font-medium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="flex items-center gap-x-3">
                <div>
                  <span className="text-sm">October 23, 2023</span>
                  <h2 className="text-sm font-medium">
                    Smooth Animation with React and Framer Motion
                  </h2>
                </div>
              </div>
            </div>
          </div> */}

          {/* With image */}

          <div className=" mt-6 bg-[#1C1C1C] rounded-lg text-neutral-400">
            <Link to={"https://product-card-api.vercel.app/"} target="_blank">
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="flex items-center gap-x-3">
                  <img
                    height={1000}
                    width={1000}
                    className="size-20 object-cover rounded-md"
                    src="/cover-card-api-min1.png"
                    alt=""
                  />
                  <div className="flex flex-col gap-2">
                    {/* <span className="text-sm">July 22, 2023</span> */}
                    <h2 className="text-base font-medium">Product Card API</h2>
                    {/* <p className="text-sm font-medium">Payna Finance</p> */}
                    <div className="flex items-center flex-wrap gap-2 font-semibold">
                      <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                        TypeScript
                      </p>
                      <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                        TailwindCSS
                      </p>
                    </div>
                    <span className="text-xs">Sunday, October 22, 2023</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"https://goout-travel-alpha.vercel.app/"} target="_blank">
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="flex items-center gap-x-3">
                  <img
                    height={1000}
                    width={1000}
                    className="size-20 object-cover rounded-md"
                    src="/cover-goout-min1.png"
                    alt=""
                  />
                  <div className="flex flex-col gap-2">
                    {/* <span className="text-sm">July 22, 2023</span> */}
                    <h2 className="text-base font-medium">Goout Travel</h2>
                    {/* <p className="text-sm font-medium">Payna Finance</p> */}
                    <div className="flex items-center flex-wrap gap-2 font-semibold">
                      <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                        ReactJS
                      </p>
                      <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                        TailwindCSS
                      </p>
                    </div>
                    <span className="text-xs">Wednesday, October 18, 2023</span>
                  </div>
                </div>
              </div>
            </Link>
            <Link to={"https://payna-finance-five.vercel.app/"} target="_blank">
              <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
                <div className="flex items-center gap-x-3">
                  <img
                    height={1000}
                    width={1000}
                    className="size-20 object-cover rounded-md"
                    src="/cover-payna-min1.png"
                    alt=""
                  />
                  <div className="flex flex-col gap-2">
                    {/* <span className="text-sm">July 22, 2023</span> */}
                    <h2 className="text-base font-medium">Payna Finance</h2>
                    {/* <p className="text-sm font-medium">Payna Finance</p> */}
                    <div className="flex items-center flex-wrap gap-2 font-semibold">
                      <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                        ReactJS
                      </p>
                      <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                        TailwindCSS
                      </p>
                    </div>
                    <span className="text-xs">Wednesday, October 11, 2023</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* without image */}

          <div className="mt-6 bg-[#1C1C1C] rounded-lg text-neutral-400">
            <div className="hover:bg-neutral-800 duration-200 transition-all ease-in p-4">
              <div className="flex items-center gap-x-3">
                <div className="flex flex-col gap-y-3">
                  <h2 className="text-sm font-medium">Portfolio with blog</h2>
                  <div className="flex items-center flex-wrap gap-2 font-semibold">
                    <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                      ReactJS
                    </p>
                    <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                      TailwindCSS
                    </p>
                    <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                      Git
                    </p>
                    <p className="bg-[#282828] w-fit text-neutral-300 rounded-md px-2 h-5 flex items-center justify-center text-[11px] ">
                      Framer Motion
                    </p>
                  </div>
                  <div className="flex gap-x-3 items-center">
                    <div className="w-1 h-1 rounded-full bg-neutral-400" />
                    <span className="text-xs">Monday, February 19, 2024</span>
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

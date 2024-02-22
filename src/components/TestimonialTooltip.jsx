import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  Instagram,
  Link,
  Linkedin,
  RssFeed,
  Tiktok,
  Youtube,
} from "iconoir-react";

const TestimonialTooltip = () => {
  const [hoveredIndex, setHoveredIndex] = useState();

  const springConfig = { stiffness: 100, damping: 5 };

  const x = useMotionValue(0);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-1, 100], [-50, 50]),
    springConfig
  );

  const people = [
    {
      id: 1,
      name: "Our Feeds",
      position: "www.feed.com",
      link: "https://www.feed.com",
      image: <RssFeed color="white" width={18} height={18} />,
    },
    {
      id: 2,
      name: "Instagram",
      position: "www.instagram.com/ervan_kr",
      link: "https://www.instagram.com/ervan_kr",
      image: <Instagram color="white" width={18} height={18} />,
    },
    {
      id: 3,
      name: "Tiktok",
      position: "www.tiktok.com/@ervan.11",
      link: "https://www.tiktok.com/@ervan.11",
      image: <Tiktok color="white" width={18} height={18} />,
    },
    {
      id: 4,
      name: "Youtube",
      position: "www.youtube.com",
      link: "https://www.youtube.com",
      image: <Youtube color="white" width={18} height={18} />,
    },
    {
      id: 5,
      name: "LinkedIn",
      position: "www.Linkedin.com/ervan-kurniawan",
      link: "https://www.linkedin.com/in/ervan-kurniawan-5b67a4263/",
      image: <Linkedin color="white" width={18} height={18} />,
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center gap-x-7 cursor-pointer">
      {people.map((testimonial, idx) => (
        <div
          className="relative group"
          key={testimonial.name}
          onMouseEnter={() => setHoveredIndex(testimonial.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === testimonial.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-white relative z-30 text-base">
                  {testimonial.name}
                </div>
                <div className="text-white text-xs">{testimonial.position}</div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* <p
            onClick={() => {
              // Mengarahkan ke link setiap media sosial
              window.open(testimonial.position, "_blank");
            }}
          >
            {testimonial.image}
          </p> */}
          <a href={testimonial.link} target="_blank">
            {testimonial.image}
          </a>
        </div>
      ))}
    </div>
  );
};

export default TestimonialTooltip;

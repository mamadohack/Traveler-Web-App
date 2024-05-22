"use client";
import { NextPage } from "next";
import testimonialImage from "/public/imgs/testimonialImage.jpg";
import testimonialsLogoss1 from "/public/imgs/testimonialsLogoss (1).png";
import testimonialsLogoss2 from "/public/imgs/testimonialsLogoss (2).png";
import testimonialsLogoss3 from "/public/imgs/testimonialsLogoss (3).png";
import testimonialsLogoss4 from "/public/imgs/testimonialsLogoss (4).png";
import testimonialsLogoss5 from "/public/imgs/testimonialsLogoss (5).png";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {}

const Testimonials: NextPage<Props> = ({}) => {
  const itemLeft = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  const itemRight = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 },
  };
  const itemUp = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };
  return (
    <motion.main
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.9,
            duration: 0.5,
          },
        },
      }}
      viewport={{ once: true }}
      className="px-40 mt-14"
    >
      <div className="flex flex-wrap">
        <motion.div variants={itemLeft} className="w-[40%] pe-10">
          <h2 className="poppins font-semibold text-[#6246E5]">Testimonials</h2>
          <h2 className="volkhov text-[40px] font-bold leading-[3rem] text-[#14183E] mt-2">
            What people say about Us.
          </h2>
          <p className="mt-16 space-x-5">
            <span className="inline-block h-[13px] w-[13px] rounded-full bg-[#39425D] drop-shadow"></span>
            <span className="inline-block h-[13px] w-[13px] rounded-full bg-[#E5E5E5] drop-shadow border border-gray-400"></span>
            <span className="inline-block h-[13px] w-[13px] rounded-full bg-[#E5E5E5] drop-shadow border border-gray-400"></span>
          </p>
        </motion.div>
        <motion.div variants={itemRight} className="w-[60%] px-14">
          <div className="bg-white border drop-shadow p-8 rounded-xl dark">
            <Image
              alt="image testimonial"
              src={testimonialImage}
              className="absolute top-0 -left-0 -translate-x-1/2 -translate-y-1/2"
            ></Image>
            <p className=" text-[#4E4E73] poppins text-sm">
              “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <h2 className="text-[#4E4E73] poppins font-semibold mt-3">
              Mike taylor
            </h2>
            <h2 className="text-[#4E4E73] poppins text-sm mt-1">
              Lahore, Pakistan
            </h2>
            <div className="absolute -bottom-14 left-10">
              <h2 className="text-[#4E4E73] poppins font-semibold">
                Chris Thomas
              </h2>
              <h2 className="text-[#4E4E73] poppins text-sm mt-1">
                CEO of Red Button
              </h2>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={itemLeft}
        className="flex justify-center items-center gap-12 mt-5"
      >
        <Image alt="testimonial logo 1" src={testimonialsLogoss1}></Image>
        <Image alt="testimonial logo 2" src={testimonialsLogoss2}></Image>
        <Image alt="testimonial logo 3" src={testimonialsLogoss3}></Image>
        <Image alt="testimonial logo 4" src={testimonialsLogoss4}></Image>
        <Image alt="testimonial logo 5" src={testimonialsLogoss5}></Image>
      </motion.div>
      <motion.div variants={itemRight} className="py-10 px-20 relative">
        <svg
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 right-0"
        >
          <circle cx="35" cy="35" r="35" fill="url(#paint0_linear_1_489)" />
          <path
            d="M52.6105 23.9904C53.3018 25.1878 53.2092 26.6136 52.3677 27.711L33.8939 51.8182C33.1321 52.8123 31.8776 53.3191 30.5948 53.0729C29.3387 52.8313 28.3427 51.9156 27.997 50.6841L25.2635 40.9555L24.9789 39.9435L24.2449 39.191L17.1864 31.9595C16.2927 31.0444 15.9977 29.724 16.4166 28.5154C16.8311 27.3206 17.8708 26.4536 19.1527 26.2856L49.267 22.3404C50.6381 22.1604 51.9192 22.793 52.6105 23.9904Z"
            fill="white"
          />
          <path
            d="M25.2636 40.9555L27.997 50.6841C28.3427 51.9157 29.3386 52.8313 30.5948 53.0729C31.8776 53.3192 33.1321 52.8124 33.8939 51.8182L52.3677 27.7111C53.2092 26.6137 53.3018 25.1879 52.6105 23.9905L24.9789 39.9436L25.2636 40.9555Z"
            fill="white"
          />
          <path
            d="M36.2231 33.4515C36.5043 33.9385 36.3379 34.5616 35.8503 34.8431L25.2636 40.9553L24.9789 39.9434L24.2449 39.1909L34.8316 33.0787C35.3192 32.7973 35.942 32.9646 36.2231 33.4515Z"
            fill="url(#paint1_linear_1_489)"
          />
          <path
            d="M25.2637 40.9554L35.8504 34.8432C36.338 34.5617 36.5045 33.9387 36.2233 33.4517L24.979 39.9435L25.2637 40.9554Z"
            fill="url(#paint2_linear_1_489)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_489"
              x1="49.6467"
              y1="1.96393"
              x2="19.564"
              y2="77.7643"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#747DEF" />
              <stop offset="1" stopColor="#5E3BE1" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_1_489"
              x1="32.4077"
              y1="34.5441"
              x2="33.5452"
              y2="36.8251"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#747DEF" />
              <stop offset="1" stopColor="#5E3BE1" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_1_489"
              x1="32.9029"
              y1="35.4017"
              x2="33.507"
              y2="36.5259"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#747DEF" />
              <stop offset="1" stopColor="#5E3BE1" />
            </linearGradient>
          </defs>
        </svg>
        <h2 className="text-center poppins font-semibold text-[#14183E] text-2xl">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h2>
        <div className="text-center space-x-3 mt-5">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="poppins bg-white px-5 py-3 rounded text-gray-800 outline-none focus:border text-sm max-w-[420px] w-3/4"
          />
          <button className="inline-block font-semibold btn-gradient px-5 py-2 rounded text-white align-middle">
            Subscribe
          </button>
        </div>
      </motion.div>
    </motion.main>
  );
};

export default Testimonials;

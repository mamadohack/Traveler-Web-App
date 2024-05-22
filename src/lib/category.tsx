"use client"
import { NextPage } from "next";
import planeImage from "/public/imgs/plane.png";
import microphoneImage from "/public/imgs/microphone.png";
import power_supply from "/public/imgs/power-supply 1.png";
import Image from "next/image";
import { motion } from "framer-motion";
interface Props {}

const Category: NextPage<Props> = ({}) => {
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
    <motion.div
      className="mt-10 space-y-5 px-40"
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.5,
            duration: 0.5,
          },
        },
      }}
      viewport={{ once: true }}
    >
      <motion.h2
        variants={itemLeft}
        // transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center poppins text-[#6246E5] font-semibold text-lg"
      >
        CATEGORY
      </motion.h2>
      <motion.h2
        variants={itemRight}
        // transition={{ delay: 1, duration: 0.5 }}
        className="text-center volkhov text-[#14183E] text-[45px] font-bold"
      >
        We Offer Best Services
      </motion.h2>
      <div className="grid grid-cols-4 gap-16">
        <motion.div
          variants={itemUp}
          // transition={{ delay: 1.5, duration: 0.5 }}
          className="px-10 py-5 rounded-xl border"
        >
          <svg
            width="67"
            height="70"
            viewBox="0 0 67 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <path
              d="M23.527 50.6574L21.6389 49.7535L10.4222 66.3382H22.9402L24.1464 65.5516V51.225L23.527 50.6574Z"
              fill="#407093"
            />
            <path
              d="M21.8095 49.8353L17.5644 47.803H16.7644L4.76062 65.5516L5.47525 66.3382H10.6483L21.8095 49.8353Z"
              fill="#365E7D"
            />
            <path
              d="M26.4 65.5515H9.84754C9.09559 65.5515 8.48596 66.161 8.48596 66.9131V68.6385C8.48596 69.3903 9.09545 69.9998 9.84727 69.9999H26.4C27.152 69.9999 27.7616 69.3904 27.7616 68.6385V66.9131C27.7616 66.161 27.152 65.5515 26.4 65.5515Z"
              fill="#4A80AA"
            />
            <path
              d="M8.76775 68.6385V66.9131C8.76775 66.1611 9.37738 65.5515 10.1293 65.5515H1.36158C0.609627 65.5515 0 66.161 0 66.9131V68.6385C0 69.3904 0.609627 69.9999 1.36158 69.9999H10.1292C9.37724 69.9999 8.76775 69.3904 8.76775 68.6385Z"
              fill="#407093"
            />
            <path
              d="M21.2397 39.9827C20.7302 41.0338 20.4423 42.2123 20.4423 43.459C20.4423 46.8659 22.5756 49.7721 25.5782 50.9218C26.8673 50.5179 28.0128 49.7893 28.9176 48.8301V47.0893L21.2397 39.9827Z"
              fill="#4A80AA"
            />
            <path
              d="M20.5767 43.4863C20.5767 42.2684 20.8583 41.1173 21.357 40.0909L18.9027 37.8192H17.9069C16.4009 39.2399 15.4595 41.2525 15.4595 43.4862C15.4595 47.7893 18.9477 51.2775 23.2508 51.2775C24.1471 51.2775 25.0067 51.1237 25.8078 50.8449C22.7628 49.7856 20.5767 46.8921 20.5767 43.4863Z"
              fill="#407093"
            />
            <path
              d="M65.812 0.924695C64.5791 -0.308232 62.5801 -0.308232 61.3473 0.924695L58.3345 3.93756V4.31941L62.0949 8.23954L62.7991 8.40223L65.8119 5.38937C67.0449 4.15658 67.0449 2.15762 65.812 0.924695Z"
              fill="#FFD086"
            />
            <path
              d="M66.6449 2.41492C66.5134 1.86915 66.238 1.35085 65.812 0.924695C64.5791 -0.308232 62.5801 -0.308232 61.3473 0.924695L58.3345 3.93756V4.31941L60.3282 6.3978C61.5169 5.16091 62.697 3.94029 63.3039 3.3334C64.3156 2.32182 65.7933 2.31403 66.6449 2.41492Z"
              fill="#FFC365"
            />
            <path
              d="M55.4975 8.95026C55.4629 8.95026 55.4279 8.94848 55.3927 8.94507L20.5763 5.51808C19.9957 5.46094 19.5714 4.944 19.6286 4.36336C19.6857 3.78272 20.2029 3.35875 20.7833 3.41549L55.5997 6.84234C56.1802 6.89949 56.6046 7.41642 56.5475 7.99706C56.4937 8.5427 56.0342 8.95026 55.4975 8.95026Z"
              fill="#365E7D"
            />
            <path
              d="M30.6459 15.4681C30.1774 15.4681 29.7493 15.1539 29.6249 14.6795C29.4769 14.1151 29.8144 13.5377 30.3787 13.3896L55.2287 6.87154C55.793 6.72374 56.3706 7.06103 56.5185 7.6254C56.6666 8.18964 56.3292 8.76714 55.7648 8.9152L30.9147 15.4333C30.8248 15.4568 30.7345 15.4681 30.6459 15.4681Z"
              fill="#407093"
            />
            <path
              d="M62.2465 47.136C61.7093 47.136 61.2498 46.7281 61.1964 46.1823L57.7907 11.3445C57.734 10.764 58.1586 10.2472 58.7393 10.1903C59.3199 10.1362 59.8366 10.5584 59.8933 11.139L63.299 45.9768C63.3557 46.5573 62.9311 47.0741 62.3504 47.131C62.3156 47.1342 62.2808 47.136 62.2465 47.136Z"
              fill="#365E7D"
            />
            <path
              d="M52.2252 37.2475C52.1357 37.2475 52.0446 37.2359 51.9538 37.212C51.3899 37.0624 51.054 36.4841 51.2035 35.9201L57.8176 10.9741C57.967 10.41 58.5452 10.0746 59.1093 10.2236C59.6732 10.3732 60.0092 10.9515 59.8596 11.5155L53.2456 36.4615C53.1202 36.9348 52.6927 37.2475 52.2252 37.2475Z"
              fill="#407093"
            />
            <path
              d="M55.3069 6.96429L58.3274 3.94376L62.7914 8.40782L59.7709 11.4284L55.3069 6.96429Z"
              fill="#FFC365"
            />
            <path
              d="M57.6009 9.24573C58.3269 8.48557 59.4605 7.29995 60.557 6.15999L58.3347 3.9375L55.3136 6.95843L57.6009 9.24573Z"
              fill="#FFA90F"
            />
            <path
              d="M60.4509 13.1519C60.1806 13.1519 59.9102 13.0487 59.704 12.8425L53.8944 7.03305C53.4818 6.62044 53.4818 5.95175 53.8944 5.53899C54.3069 5.12665 54.9757 5.12665 55.3883 5.53899L61.1979 11.3484C61.6105 11.761 61.6105 12.4297 61.1979 12.8425C60.9916 13.0488 60.7213 13.1519 60.4509 13.1519Z"
              fill="#4A80AA"
            />
            <path
              d="M61.1327 49.0376L25.7619 13.36C21.0724 23.9466 20.2581 35.3114 23.7688 45.1115C33.4643 53.8573 47.9476 55.2003 61.2809 49.7026L61.1327 49.0376Z"
              fill="#B5DCFF"
            />
            <path
              d="M25.9502 13.55L17.8463 5.37573L17.0341 5.45585C11.3245 19.3031 12.9917 34.3917 22.6683 44.0684C23.2544 44.6545 23.8609 45.2107 24.4853 45.7383C20.4062 35.9498 21.0691 24.3077 25.9502 13.55Z"
              fill="#8BCAFF"
            />
            <path
              d="M64.365 46.5017L28.4914 10.6282C28.1384 10.6826 27.7985 10.8431 27.5267 11.1149L25.9664 12.6754C25.6313 13.0105 25.4646 13.4481 25.4598 13.8874L61.2196 49.647C61.7513 50.1787 62.6133 50.1787 63.145 49.647L64.3651 48.4271C64.8967 47.8955 64.8967 47.0334 64.365 46.5017Z"
              fill="#DBEDFF"
            />
            <path
              d="M26.0203 12.7021L27.5481 11.1743C27.8295 10.8929 28.1848 10.7318 28.5515 10.6882L20.2352 2.37192C19.7035 1.84022 18.8415 1.84022 18.3096 2.37192L17.0896 3.59199C16.5579 4.12369 16.5579 4.9857 17.0896 5.5174L25.5228 13.9506C25.5117 13.5 25.6764 13.0459 26.0203 12.7021Z"
              fill="#B5DCFF"
            />
          </svg>
          <h2 className="text-xl font-semibold text-[#1E1D4C] text-center mt-5">
            Calculated Weather{" "}
          </h2>
          <p className="poppins text-[#959BAA] text-center mt-3">
            Built Wicket longer admire do barton vanity itself do in it.
          </p>
        </motion.div>
        <motion.div
          variants={itemUp}
          // transition={{ delay: 2, duration: 0.5 }}
          className=" px-10 py-5 rounded-xl border relative bg-white x"
        >
          <div className="h-[70px] relative ">
            <Image
              alt="plane"
              src={planeImage}
              className="block mx-auto w-[140px] h-auto absolute -top-8 left-1/2 -translate-x-1/2"
            ></Image>
          </div>
          <h2 className="text-xl font-semibold text-[#1E1D4C] text-center mt-5 ">
            Best Flights
          </h2>
          <p className="poppins text-[#959BAA] text-center mt-3">
            Engrossed listening. Park gate sell they west hard for the.
          </p>
          <div className="absolute -bottom-0 left-0 w-[80px] h-[80px] bg-[#DF6951] -translate-x-1/2 translate-y-1/2 -z-10 rounded-tl-[25%] rounded-br-[10%]"></div>
        </motion.div>
        <motion.div
          variants={itemUp}
          // transition={{ delay: 2.5, duration: 0.5 }}
          className=" px-10 py-5 rounded-xl border"
        >
          <div className="h-[70px] relative">
            <Image
              alt="microphone"
              src={microphoneImage}
              className="block mx-auto  absolute -top-0 left-1/2 -translate-x-1/2"
            ></Image>
          </div>
          <h2 className="text-xl font-semibold text-[#1E1D4C] text-center mt-5 ">
            Local Events
          </h2>
          <p className="poppins text-[#959BAA] text-center mt-3 text-balance">
            Barton vanity itself do in it. Preferd to men it engrossed
            listening.
          </p>
        </motion.div>
        <motion.div
          variants={itemUp}
          // transition={{ delay: 3, duration: 0.5 }}
          className=" px-10 py-5 rounded-xl border "
        >
          <div className="h-[70px] relative">
            <Image
              alt="powersupply"
              src={power_supply}
              className="block mx-auto absolute bottom-0 left-1/2 -translate-x-1/2"
            ></Image>
          </div>
          <h2 className="text-xl font-semibold text-[#1E1D4C] text-center mt-5 ">
            Best Flights
          </h2>
          <p className="poppins text-[#959BAA] text-center mt-3">
            Engrossed listening. Park gate sell they west hard for the.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Category;

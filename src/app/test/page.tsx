"use client";
import { NextPage } from "next";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {}

const Page: NextPage<Props> = ({}) => {
  const [counter, setcounter] = useState(0);
  return (
    <main>
      <motion.div
        // initial={{x:0}}
        className="bg-red-300 w-96 h-96 opacity-0"
        transition={{ delay: 0,duration:1.5 }}
        animate={{x:"50vw",opacity:1}}
        // whileInView={{ opacity: 1, scale: 1 }}
      >
        <h2 className="p-5 bg-green-500">hhhhhhhhhhhhh</h2>
      </motion.div>
      <motion.div
        // initial={{x:0}}
        className="bg-red-300 w-96 h-96 opacity-0"
        transition={{ delay: -0.5,duration:3 }}
        animate={{x:"50vw",opacity:1}}
        // whileInView={{ opacity: 1, scale: 1 }}
      >
        <h2 className="p-5 bg-green-500">hhhhhhhhhhhhh</h2>
      </motion.div>
    </main>
  );
};

export default Page;

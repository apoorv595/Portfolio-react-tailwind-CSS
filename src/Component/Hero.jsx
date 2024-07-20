import React from "react";
import profilePic from"../assets/a1.png"
import {motion} from "framer-motion"

const container =(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,transition:{duration:0.5, delay:delay},
    },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-100 pb-10 lg:mb-64">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0.3)}
            initial="hidden"
            animate="visible"

            className=" pb-16 text-6xl font-thin lg:mt-16 lg:text-8xl">Apoorv Gupta</motion.h1>
            <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className=" bg-gradient-to-r from-pink-400 via-slate-500 to-purple-400 bg-clip-text text-4xl tracking-tight text-transparent">
                Frontend Developer 
                Java Developer

            </motion.span>
            <motion.p 
            variants={container(1)}
            initial="hidden"
            animate="visible">
           I am a Computer Science student at CU. I have completed my Core Java training on Coursera and created many frontend projects. Technology excites me. I have worked with various skills, including data structures and algorithms (Java), web development (HTML, CSS, JavaScript, React.js, Tailwind CSS), machine learning (Python), and MySQL. I have also authored a research paper.

            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
        <div className="flex justify-center">
            <motion.img 
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.5}}

            src={profilePic} alt="Apoorv Gupta" className="rounded-3xl w-64 h" />
        </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;

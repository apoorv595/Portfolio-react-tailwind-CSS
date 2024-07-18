import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaNodeJs } from 'react-icons/fa'
import { FaHtml5 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import {motion} from "framer-motion"

const iconVariants =(duration)=>({
    initial:{y:-10},
    animate:{ 
        y:[10,-10],
        transition:{
            duration:duration,
          
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
         
})


const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'> 
    <motion.h1 
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:-100}}
    transition={{duration:1.5}}
    className='my-20 text-center text-5xl'> Technologies</motion.h1>
    <motion.div
    whileInView={{opacity:1,x:0}}
    initial={{opacity:0,x:-100}}
    transition={{duration:1.5}}

     className='flex flex-wrap item-center justify-center gap-4'>
        <motion.div 
        variants={iconVariants(2.5)}
        
        initial="initial"
        animate="animate"


        
        className='rounded-2xl border-4 border-blue-400 p-4'>

            <RiReactjsLine className='text-8xl text-cyan-500'/>

        </motion.div>
        <motion.div 
        variants={iconVariants(1.5)}
        
        initial="initial"
        animate="animate"


        className='rounded-2xl border-4 border-green-600 p-4'>

            <FaNodeJs className='text-8xl text-green-800'/>

        </motion.div>
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"

        className='rounded-2xl border-4 border-red-700 p-4'>

        <FaHtml5 className='text-8xl text-red-900'/>
        </motion.div>
        <motion.div 
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate"

        
        className='rounded-2xl border-4 border-yellow-800 p-4'>

        <FaJava className='text-8xl text-cyan-500' />

        </motion.div>






    </motion.div>
 
    </div>
  )
}

export default Technologies
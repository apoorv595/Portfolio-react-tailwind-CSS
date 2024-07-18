import React from 'react'
import { PROJECTS } from '../constants'
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h1
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:0.5}}
        
        className='my-20 text-center text-5xl'>Projects </motion.h1>
        <div >{PROJECTS.map((project,index)=>(
            <div key={index} >
                <motion.div
                whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:-100}}
                transition={{duration:1.5}}

                
                >
                <img
                 src={project.image} 
                 alt={project.title} 
                 width={150}
                 height={150}
                 className='mb-6 rounded-md'
                  
                  />
                </motion.div>
                
                 

            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}

            
            className='w-full max-w-xl lg:w-3/4'>
                <h6>{project.title}</h6>
                <p>{project.description}</p>
            </motion.div>
            </div>

       
))}
        
        </div>
    </div>
  );
};

export default Projects
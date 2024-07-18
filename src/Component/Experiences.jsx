import React from 'react'
import { EXPERIENCES } from '../constants'

const Experiences = () => {
  return (

    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-5xl'>  Experiences</h1>
        <div>

            {EXPERIENCES.map((experience,index)=>(
                <div key={index} className='flex flex-wrap items-center lg:justify-center mb-8 '>
                    <div className='w-full lg:w-1/4'>

                        <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                    </div>
                    <div className='w-full lg:w-3/4 max-w-wl'>
                    <h6  className='mb-2 font-semibold'>
                        {experience.role}-{""}
                    </h6>
                    </div>
                    </div>

            )
            )}
        </div>
      
         </div>
  )
}

export default Experiences
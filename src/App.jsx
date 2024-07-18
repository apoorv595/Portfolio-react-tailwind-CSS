import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero';
import About from './Component/About';
import Technologies from './Component/Technologies';
import Experiences from './Component/Experiences';
import Projects from './Component/project';
import Contact from './Component/Contact';

const App = () => {
  return (
  
    <div className='overflow-x-hidden text-neutral-500 antialiased selection:bg-cyan-400 selection:text-cyan-900'>

      <div className='flixed top-0 z-10 h-full w-full'></div>
      <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className='container mx-auto px-8'>
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Experiences/>
      <Projects/>
      <Contact/>


      </div>
      </div>
    
    

  );
};

export default App
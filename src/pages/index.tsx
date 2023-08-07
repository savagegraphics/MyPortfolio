import React from 'react' 
import 'tailwindcss/tailwind.css';
import '@/app/globals.css'
import Hero from './Hero/Hero';
import About from './AboutUs/About';
import Contact from './GetInTouch/Contact';
import Project from './Projects/Project';



const index = () => {
  return (
    <div className='bg-gray-800'>
      <Hero/>
      <About/>
      <Contact/>
      <Project/>
    </div>
  )
}

export default index

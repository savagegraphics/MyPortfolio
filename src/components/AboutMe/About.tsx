import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import NewImage from '@/app/assets/bwoiyo.jpg'
import Skill from './Skill'
import OtherSkills from '../Resume/OtherSkills'
import AboutSkills from './AboutSkills';
import SpecialSkill from './SpecialSkill'
import SpecialSkillz from './SpecialSkillz'
import Accordion from './AboutSkills';

const About = () => {
  return (
    <div>
      <section className='bg-gray-800 lg:mt-4 sm:mt-1 lg:mx-16 m-4 rounded-3xl max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8'>

        <article className="md:gap-8 md:grid md:grid-cols-3 my-4 lg:mx-12 mx-6">
          {/* Left Side */}
          <div>
            <div className="flex items-center my-6 space-x-4">
              <Image
                className="w-[340px] h-[320px] rounded-lg"
                src={NewImage}
                alt=""
                width={400}
                height={400}
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="col-span-2 mt-3 md:mt-0 lg:p-8 p-2">
            <div className="flex items-start mb-5">
              <div className="pr-4">
                <footer>
                  <p className="mb-2 text-3xl text-gray-200 dark:text-gray-400">
                  About Olawale
                  </p>
                </footer>
              </div>
            </div>
            <p className="mb-2 text-md text-gray-300 dark:text-gray-400">
            I&apos;m a dynamic full-stack web developer, deeply passionate about frontend innovation. My mastery of HTML, CSS, and JavaScript allows me to create captivating user interfaces that leave a lasting impression. What truly excites me is the combination of React and Next.js.

          React is my canvas, where I bring ideas to life with its modular and efficient components. Its virtual DOM empowers me to build seamless user experiences. And with Next.js, I take web development to the next level. Server-side rendering, routing, and optimized performance are my playgrounds, giving users lightning-fast interactions.

           I&apos;m not just a coder; I&apos;m an artist. My work reflects my dedication to blending technology with creativity. I thrive on challenging projects that push my skills further. Whether it&apos;s crafting intricate frontend designs or architecting MERN stack applications, my commitment to excellence shines through. I&apos;m the bridge between code and design, and I embrace the latest trends with fervor. Together, React and Next.js are my dynamic duo, and 
           I&apos;m ready to take on the ever-evolving landscape of frontend development.
            </p>
            <aside className="flex items-center mt-1 space-x-5">
            <div className="grid items-center lg:mr-16 lg:grid-cols-2 gap-6 lg:gap-16">
      <div className="flex flex-col p-4 sm:p-6 lg:p-8 text-gray-200">

         <div className='flex whitespace-nowrap'><h1 className='text-xl pr-4'>Website:</h1> <p className='text-lg'> www.olawaeraji.ng</p></div>    
         <div className="flex whitespace-nowrap"> <h1 className="text-xl pr-4">Phone: </h1> <p className='text-lg'>+2349048102856</p></div>
         <div className="flex whitespace-nowrap"> <h1 className="text-xl pr-4">Location:</h1> <p className='text-lg'> Lagos, Nigeria</p></div>
       </div>
     <div className="flex flex-col p-4 sm:p-6 lg:p-8 text-gray-300">

        <div className="flex whitespace-nowrap"> <h1 className="text-xl pr-4"> Age: </h1><p className='text-lg'>  25</p></div>  
        <div className="flex whitespace-nowrap"> <h1 className="text-xl pr-4">Education: </h1> <p className='text-lg'>ND Holder</p></div>   
        <div className="flex whitespace-nowrap"> <h1 className="text-xl pr-4">Work Status:</h1>  <p className='text-lg'> Open to work</p></div> 
      </div>
      </div>
            </aside>
          </div>
        </article>
      </section>
    </div>
  )
}

export default About

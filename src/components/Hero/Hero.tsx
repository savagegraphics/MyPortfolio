import React from 'react'
import Image from 'next/image'
import Imaged from  '@/app/assets/olaale.jpg'
import Link from 'next/link';



const MainHero = () => {
  return (
    <div>
    <section className='bg-gray-800 lg:mt-4 lg:mx-16 m-4 rounded-3xl lg-h-[650px] md-h-[580px] sm-h-[700px] max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8'>
    
<div className="container flex flex-col lg:pl-12 px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg lg:ml-16 md:ml-6">
                    <h1 className="text-3xl font-bold tracking-wide text-indigo-100 dark:text-white lg:text-5xl">
                      Hey,   I&apos;m Toheeb Olawale RAJI
                    </h1>
                    
                    <div className="mt-8 space-y-5">
                        <p className="flex items-center -mx-2 text-gray-300 dark:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <span className="mx-2">Software Engineer</span>
                        </p>

                        <p className="flex items-center -mx-2 text-gray-300 dark:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <span className="mx-2">Front-End Developer</span>
                        </p>

                        <p className="flex items-center -mx-2 text-gray-300 dark:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <span className="mx-2">Mobile and Web Application Developer</span>
                        </p>
                    </div>
                </div>

                 <button
                  type="button"
                  className="h-10 px-8 py-2 lg:mt-8 mt-6 ml-6 mb-6 lg:ml-16 md:ml-6 text-white transition-colors duration-300 transform bg-blue-500 rounded-2xl hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                   >
                 Download CV
                </button>
            </div>
    
            <div className="flex items-center justify-center lg:mr-16 w-full h-96 lg:w-1/2">
                <img className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkZlCzqqn8zh_VzcHeb0YFzrd7U32VHlAXCefjurcxlpRgG8nHN6OCUhTWaO-UfPekGk&usqp=CAU" alt="glasses photo" />
            </div>
        </div>
    </section>
    </div>
  )
}

export default MainHero
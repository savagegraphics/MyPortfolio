import React, { useState } from 'react'
import Link from 'next/link';
import Analytics from '@/pages/Skills/analytics';
import MultiCard from '@/pages/Skills/MultiCard';

const Portfolio = () => {
    const [isOpen, setIsOpen] = useState(false);
   
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };


  return (

    <header className="bg-gray-900">
      <nav x-data="{ isOpen: false }" className="border-b border-gray-700">
        <div className="container px-6 py-6 mx-auto lg:flex lg:justify-between lg:items-center">
          <div className="flex items-center justify-between">
            <Link href="#">
              <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
            </Link>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                x-cloak
                onClick={toggleMenu}
                type="button"
                className="text-gray-200 hover:text-gray-400 focus:outline-none focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            x-cloak
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out shadow-md lg:bg-transparent lg:shadow-none bg-gray-900 lg:ml-24 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 ${
              isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
            }`}
          >
            <div className="flex flex-col space-y-8 lg:flex-row lg:items-center lg:ml-24 lg:space-y-0 lg:-px-8">
              <Link
                className="block font-medium text-gray-200 lg:ml-24 lg:mt-0 mt-12 lg:mx-8  hover:text-gray-400 hover:underline"
                href="/"
              >
               Dashboard
              </Link>
              <Link
                className="block font-medium text-gray-200 lg:mx-8 hover:text-gray-400 hover:underline"
                href="/AboutUs"
              >
                About Us
              </Link>
              <Link
                className="block font-medium text-gray-200 lg:mx-8 hover:text-gray-400 hover:underline"
                href="/HireUs"
              >
                Hire us?
              </Link>
              <Link
                className="block font-medium text-gray-200 lg:mx-8 hover:text-gray-400 hover:underline"
                href="/Skills"
              >
                Skills
              </Link>
              <Link
                className="block font-medium text-gray-200 lg:mx-8 hover:text-gray-400 hover:underline"
                href="/Projects"
              >
                Portfolio
              </Link>
              <Link href="GetInTouch">
              <button className="flex items-center justify-center px-5 py-2 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Get in touch
              </button>    </Link>
            </div>
          </div>
        </div>
      </nav>
      <MultiCard/>
    </header>
  )
}

export default Portfolio




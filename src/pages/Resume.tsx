import React from 'react'
import '@/pages/Resume.css'
import Navbar from './Navbar';
import Sidebars from './Sidebars';
import SearchBar from './Searchbar';
import DfHero from './DfHero';
import Sidebar from './Sidebar';
import Analytics from '@/pages/Skills/analytics';
import Portfolio from './AboutUs/Portfolio';
import 'tailwindcss/tailwind.css';
import Stats from '@/pages/AboutUs/Stats';
import FrameWorks from '@/pages/AboutUs/FrameWorks';



type Props = {}

const Resume = (props: Props) => {
  return (
    <div className="flex flex-col h-screen bg-gray-900">
    <div className="flex-1 flex flex-wrap">
      <Sidebars />
      <Sidebar/>
      <div className="flex-1 p-4 w-full md:w-1/2">
      <div className="column-shape bg-gray-800">
      <div className="column-content bg-gray-800">
      <DfHero/>
      <Stats/>
      <FrameWorks/>
      {/* <Features/> */}
          {/* <Portfolio/> */}
       {/* 
       <Analytics/> */}
       {/* <DfHero/> */}
       {/* */}
  </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Resume

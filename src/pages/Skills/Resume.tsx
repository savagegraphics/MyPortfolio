import React from 'react'
import MultiCard from '@/pages/Skills/MultiCard'
import Navbar from '../Navbar';
import Sidebars from '../Sidebars';
import SearchBar from '../Searchbar';
import DfHero from '../DfHero';
import Sidebar from '../Sidebar'
import Analytics from '@/pages/Skills/analytics';
import Portfolio from '../AboutUs/Portfolio';
import '@/pages/Dashboard.css'
import Stack from './Stack';
import FrameWorks from '../AboutUs/FrameWorks';

type Props = {}

const Resume = (props: Props) => {
  return (
    <div>
        <div className="flex flex-col h-screen bg-gray-900">
      <div className="flex-1 flex flex-wrap">
        <Sidebars />
        <Sidebar/>
        <div className="flex-1 p-4 w-full md:w-1/2">
        <div className="column-shape  bg-gray-800">
        <div className="column-content bg-gray-800">
        <MultiCard/>
        <Stack/>
        <FrameWorks/>
        <Analytics/>
         {/* <Hero/>
         <Analytics/> */}
         {/* <DfHero/> */}
         {/* <Features/> */}
    </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Resume
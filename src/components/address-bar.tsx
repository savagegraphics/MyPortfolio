'use client';

import React from 'react';
import Link from 'next/link';

export function AddressBar() {
  return (
    <div className="flex items-center gap-x-2 lg:p-3.5 p-2 lg:px-5 lg:py-3">
      <div className="flex gap-x-1 text-sm font-medium">
        <div className="flex">
          <Link
            className="flex rounded lg:px-2 px-1 py-2.5 text-gray-500 transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
            href="/"
          >
            <span className="font-medium">Dashboard</span>
          </Link>
          <Link
            className="flex rounded lg:px-2 px-1 py-2.5 text-gray-500 transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
            href="/About"
          >
            <span className="font-medium">About</span>
          </Link>
          <Link
            className="flex rounded lg:px-2 px-1 py-2.5 text-gray-500 transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
            href="/Resume"
          >
            <span className="font-medium">Resume</span>
          </Link>
          <Link
            className="flex rounded lg:px-2 px-1 py-2.5 text-gray-500 transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
            href="/portfolio"
          >
            <span className="font-medium">Portfolio</span>
          </Link>
          <Link
            className="flex rounded lg:px-2 px-1 py-2.5 text-gray-500 transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white"
            href="/contact"
          >
            <span className="font-medium">Contact</span>
          </Link>
          <Link
            className="flex text-[10px] whitespace-nowrap rounded h-10 transform bg-blue-500 px-2 py-2 text-white transition-colors duration-300 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
            href="/GetInTouch/Contact"
          >
            Download CV
          </Link>
        </div>
      </div>
    </div>
  );
}

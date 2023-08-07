import React from 'react';
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="bg-white text-white shadow w-full p-2 flex items-center justify-between">
    <div className="flex items-center">
      <div className="flex items-center">
        <Image src="https://www.emprenderconactitud.com/Image/POC%20WCS%20(1).png" alt="Logo" className="w-28 h-18 mr-2" />
        <h2 className="font-bold text-xl">Nombre de la Aplicación</h2>
      </div>
      <div className="md:hidden flex items-center">
        <button id="menuBtn">
          <i className="fas fa-bars-alt text-gray-500 text-lg"></i> {/* Updated icon class */}
        </button>
      </div>
    </div>
  
    {/* Notification and Profile Icons */}
    <div className="space-x-5">
      <button>
        <i className="fas fa-bell text-gray-500 text-lg"></i>
      </button>
      <button>
      <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 18L18 6M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
      </button>
    </div>
  </div>
  
  );
};

export default Navbar;

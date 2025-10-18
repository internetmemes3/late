"use client";

import React from 'react';
import Image from 'next/image'

const Navbar = () => {

  return (
    <>
      <div className="w-full bg-black">
        <nav className=" text-black font-bold flex justify-between items-center shadow-md">
          <div className="flex items-center">
            <Image 
              src="/LOGO.png"
              alt="logo"
              width={150}
              height={150}
            />
            <p className="text-4xl font-bold text-white leading-tight nabla-hero-title">
              Late Coin
            </p>
          </div>
          <a 
            className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 mr-4 rounded-lg"
            href="https://four.meme/token/0x1a5879fe551d15e1e5eaf3b9900f935f0b474444"
            target="_blank"
          >
            Buy Now
          </a>
          
        </nav>
      </div>
    </>
  );
};

export default Navbar;
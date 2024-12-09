"use client";

import React, { useState } from 'react';
import { Link } from 'react-scroll';
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
            <p className="text-white font-fuel-decay font-normal ml-2 text-2xl">
              Late Coin
            </p>
          </div>
          <a 
            className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 mr-4 rounded-lg"
            href="https://pump.fun/"
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
'use client'

import React from 'react';
import Image from 'next/image';
import { useEffect, useRef } from 'react'

const About = () => {

  const scrollerRef = useRef(null)

  useEffect(() => {
    const scrollerElement = scrollerRef.current
    if (scrollerElement) {
      const scrollerContent = scrollerElement.querySelector('.scroller-content')
      const scrollerWidth = scrollerElement.offsetWidth
      const contentWidth = scrollerContent.offsetWidth
      const repeatCount = Math.ceil(scrollerWidth / contentWidth) + 1
      scrollerContent.style.setProperty('--repeat-count', repeatCount)
      const totalContentWidth = contentWidth * repeatCount
      const duration = totalContentWidth / 500 
      scrollerElement.style.setProperty('--animation-duration', `${duration}s`)
    }
  }, [])

  return (
    <div className="bg-black text-white p-8 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4 text-center matemasie-regular">Embrace the Late Mindset</h1>
      <p className="text-lg mb-8 text-center  w-2/1">
        Late Coin are built for degens, dreamers, and anyone who believes that it’s never late to win. <br></br>This meme coin is a movement with a sense of humor that welcomes everyone, anytime. <br></br>
        An icon of the belief that it’s always the right time. <br></br>This is your sign: the right time is now, so just go for it !
      </p>
      
      <div className="border border-gray-500 p-10  rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center">
        <Image 
          src="/LOGO.png" 
          alt="Late Coin" 
          width={300}
          height={300}
          className="mb-4 md:mb-0"
        />
        <div className="text-center md:text-left md:ml-6 md:w-2/3 flex flex-col justify-between items-center">
          <h2 className="text-2xl text-yellow-500 font-semibold mb-2 bungee-inline-regular ">Late Coin: The Memecoin That flex being late</h2>
          <p className="text-base mb-4 waiting-for-the-sunrise-regular w-4/5 text-left">
          The right moment is always when you’re ready. This isn’t just about catching up; it’s also about making your move at the perfect time. 
          LateCoin is here to remind you that there’s always a chance to get in, anywhere, anytime. 
          
          Join us, Be part of the community, Be part of the movement, and let's make ‘late’ the ultimate flex, because the opportunity is always here...
          </p>
          <div className="mt-6 flex space-x-4">
          <a className="bg-yellow-400 text-black text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/80"  href="https://four.meme/" target="_blank" >Buy Late Coin</a>
          <a className="text-gray-200 border border-gray-500 text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/80" href="https://x.com/i/communities/1979237655453012019" target="_blank" >Join The Movement</a>
        </div>
        </div>
      </div>
      <div className="relative w-full overflow-hidden bg-black py-4">
        <Image
          src="/yellow.png"
          alt="Divider"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-top"
          quality={100}
        />
        <div 
          ref={scrollerRef}
          className="scroller absolute inset-0 flex items-center overflow-hidden"
        >
          <div className="scroller-content flex animate-scroll whitespace-nowrap">
            {[...Array(100)].map((_, index) => (
             <span 
             key={index}
             className="sm:text-sm text-3xl lg:text-3xl max-md:text-sm font-bold text-black px-1 mb-2 md:mb-4 lg:mb-6 mt-2 md:mt-6"
             style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.7)' }}
           >
                🕒🕓🕔🕕🕖🕗🕘🕙🕚🕛🕐🕑
              </span>
            ))}
          </div>
        </div>
        </div>
    </div>
  );
};

export default About;


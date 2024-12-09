'use client'
import React from "react"
import { ArrowDownOutlined } from '@ant-design/icons'
import { useEffect, useRef } from 'react'
import Image from "next/image"


const Point = () => {

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

        <div className="bg-black">
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
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl text-white lg:text-5xl font-bold lg:tracking-tight">
        69% of Degens Experience FOMO <br/> You're Not Alone
        </h2>

        <div className="md:flex justify-center items-center md:space-x-8">
              <div className="py-20">
                <div className="flex flex-col items-center">
                  <span className="text-5xl mb-4">😰</span>
                  <span className="font-semibold text-lg w-1/2 md:w-full text-white dark:text-slate-200">
                  Feeling the Fear of Missing Out on opportunities at the wrong time ?
                  </span>
                </div>
              </div>
                <center>
                  <img
                    src="./RightArrow.svg"
                    width="50"
                    alt="arrow"
                    className="dark:invert rotate-90 md:rotate-0 mt-5 mb-5 md:mt-0 md:mb-0"
                  />
                </center>
                <div>
                <div className="flex flex-col items-center">
                  <span className="text-5xl mb-4">😤</span>
                  <span className="font-semibold text-lg w-1/2 md:w-full text-white dark:text-slate-200">
                   Feeling overwhelmed by missed opportunities ?
                  </span>
                </div>
              </div>
                <center>
                  <img
                    src="./RightArrow.svg"
                    width="50"
                    alt="arrow"
                    className="dark:invert rotate-90 md:rotate-0 mt-5 mb-5 md:mt-0 md:mb-0"
                  />
                </center>
                <div>
                <div className="flex flex-col items-center">
                  <span className="text-5xl mb-4">😩</span>
                  <span className="font-semibold text-lg w-1/2 md:w-full text-white dark:text-slate-200">
                  Watching others succeed while waiting on the sidelines ?
                  </span>
                </div>
              </div>
            
        </div>
        <div className="text-center mt-8 ">
          <div className="flex flex-col items-center">
          <span className="text-5xl mb-4">😏</span>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              <ArrowDownOutlined /> there is an easier way
            </p>
          </div>
        </div>
      </div>
      </div>

    );
};

export default Point;
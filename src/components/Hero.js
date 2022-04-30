import React from 'react'
import heroVid from '../assets/Earth - 1236.mp4'
const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[96px]'>
        <video src={heroVid} autoPlay loop muted className='object-cover h-full w-full absolute -z-10'/>
        <div className='w-[90%] mx-auto h-[90%] flex justify-center flex-col items-start text-white'>
            <h1 className='text-4xl mb-4  md:text-6xl font-bold md:mb-7 sm:w-[90%] md:w-[70%] leading-tight'>The world’s most popular way to buy, sell, and trade crypto</h1>
            <p className='md:text-3xl font-medium w-[70%]'>Trusted by millions since 2011 with over $1 Trillion in crypto transactions.</p>
        </div>
    </div>
  )
}

export default Hero
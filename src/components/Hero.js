import React from 'react'
import beachvideo from '../assets/beachvideo.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover' src={beachvideo} autoPlay loop muted />
       <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
       <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
           <h1>First Class Travel</h1>
           <h2>Top 1% locations Worldwide</h2>
       </div>
    </div>
  )
}

export default Hero

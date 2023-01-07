import React from 'react'
import beachvideo from '../assets/beachvideo.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-full object-cover' src={beachvideo} autoPlay loop muted />

    </div>
  )
}

export default Hero

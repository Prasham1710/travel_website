import React from 'react'
import beachvideo from '../assets/beachvideo.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
        <video src={beachvideo} />

    </div>
  )
}

export default Hero

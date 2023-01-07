import React from 'react'
import b1 from '../assets/b1.jpg'
import b2 from '../assets/b2.jpg'
import b3 from '../assets/b3.jpg'
import b4 from '../assets/b4.jpg'
import b5 from '../assets/b5.jpg'

const Destinations = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
       <h1>All-Inclusive Resorts</h1>
       <p className='py-4'>On the Caribean's Beat Beaches</p>
       <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
           <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={b2} alt='/' />
           <img className='w-full h-full object-cover' src={b4} alt='/'/>
           <img className='w-full h-full object-cover' src={b3} alt='/' />
           <img className='w-full h-full object-cover' src={b1} alt='/' />
           <img className='w-full h-full object-cover' src={b5} alt='/' />

       </div>
    </div>
  )
}

export default Destinations
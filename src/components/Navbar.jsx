import React from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-20 px-5 '>
        <div>
        <h1>BEACHES.</h1>
        </div>
        <ul className='flex'>
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
        </ul>
        <div className='flex'>
            <BiSearch />
            <BsPerson/>
         </div>
    </div>
  )
}

export default Navbar
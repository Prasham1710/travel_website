import React,{useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube,
} from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };



  return (
    <div className='flex justify-between items-center h-20 px-5 '>
        <div>
        <h1>BEACHES.</h1>
        </div>
        <ul className=' hidden md:flex'>
            <button><li>Home</li></button>
            <button><li>Destination</li></button>
            <button><li>Travel</li></button>
            <button><li>View</li></button>
            <button><li>Book</li></button>
            
        </ul>
        <div className='hidden md:flex'>
            <BiSearch className='mr-2' size={20}/>
            <BsPerson size={20}/>
         </div>

         {/*Hamburger*/}
         <div onClick={handleNav} className='md:hidden z-10'>
              {nav ? <AiOutlineClose className='text-black' size={20}/> :<HiOutlineMenuAlt4 size={20}/>}
           
           
          </div>

          {/*Mobile menu drop down*/}
          <div onClick={handleNav} className={nav?'absolute left-0 top-0 w-full bg-gray-200 px-5 py-10 flex flex-col' : 'absolute left-[-100%]'}>
            <ul>
            <button><h1 className='border-b'>BEACHES.</h1></button>
            <button><li className='border-b'>Home</li></button>
            <button><li className='border-b'>Destination</li></button>
            <button><li className='border-b'>Travel</li></button>
            <button><li className='border-b'>View</li></button>
            <button><li className='border-b'>Book</li></button>
            <div className='flex flex-col'>
              <button className='my-6'>Search</button>
              <button>Account</button>
            </div>
            <div className='flex justify-between my-6'>
              <FaFacebook className='icon'/>
              <FaTwitter className='icon'/>
              <FaInstagram className='icon'/>
              <FaYoutube className='icon'/>
              <FaPinterest className='icon'/>
            </div>
            </ul>
          </div>
    </div>
  )
}

export default Navbar
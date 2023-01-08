import React,{useState} from 'react'
import {BsPerson} from 'react-icons/bs'
import { AiOutlineClose} from 'react-icons/ai';
import { HiOutlineMenuAlt4} from 'react-icons/hi';
import { AiOutlineSearch} from 'react-icons/ai';
import {FaFacebook,FaTwitter,FaInstagram,FaPinterest,FaYoutube} from 'react-icons/fa';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className='flex w-full justify-between items-center h-20 px-5 absolute  z-10 text-white '>
        <div>
        <h1>BAYWATCH</h1>
        </div>
        <ul className=' hidden md:flex'>
            <button><a href = '/home'><li>Home</li></a></button>
            <button><a href ='/destination'><li>Destination</li></a></button>
            <button><a href ='/travel'><li>Travel</li></a></button>
            <button><a href ='/view'><li>View</li></a></button>
            <button><a href ='/book'><li>Book</li></a></button>
            <button><a href ='/Contact'><li>Contact</li></a></button>
        </ul>
        <div className='hidden md:flex'>
            <AiOutlineSearch size = {25} />
  <input className='bg-transparent p-2 w-full focus:outline-none '
  type = 'text'
  placeholder='Search places'  />
            <button><a href='https://www.makemytrip.com/support/contact-us.php'><BsPerson size={20}/></a></button>
         </div>
         {/*Hamburger*/}
         <div onClick={handleNav} className='md:hidden z-10'>
              {nav ? <AiOutlineClose className='text-black' size={20}/> :<HiOutlineMenuAlt4 size={20}/>}
          </div>
      {/* Mobile menu dropdown */}
      <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/50 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
        <ul>
          <h1>BAYWATCH</h1>
          <li className='border-b'><button><a href = '/home'>Home</a></button></li>
          <li className='border-b'><button><a href ='/destination'>Destination</a></button></li>
          <li className='border-b'><button><a href ='/travel'>Travel</a></button></li>
          <li className='border-b'><button><a href ='/view'>View</a></button></li>
          <li className='border-b'><button><a href ='/book'>Book</a></button></li>
          <div className='flex flex-col'>
            <button className='my-6 p-3 border bg-gradient-to-r from-blue-900 to-sky-500 text-white rounded-2xl'>Search</button>
            <button className='p-3 border bg-gradient-to-r from-blue-900 to-sky-500 text-white rounded-2xl '>Account</button>
          </div>
          <div className='flex justify-between my-6'>
            <a href='https://twitter.com/makemytrip?lang=en'>< FaTwitter className='icon' /></a>
            <a href='https://www.facebook.com/makemytrip/'><FaFacebook className='icon' /></a>
             
            <a href='https://www.youtube.com/channel/UCkCnjfFgbcFwiY5StOdsSMA'><FaYoutube className='icon' /></a>
            <a href='https://in.pinterest.com/makemytrip/'><FaPinterest className='icon' /></a>
            <a href='https://www.instagram.com/makemytrip/?hl=en'><FaInstagram className='icon' /></a>
          </div>
        </ul>
      </div>
    </div>
  );
};
export default Navbar
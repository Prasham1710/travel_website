import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-12'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>BAYWATCH</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
            <a href='https://twitter.com/makemytrip?lang=en'>< FaTwitter className='icon' /></a>
            <a href='https://www.facebook.com/makemytrip/'><FaFacebook className='icon' /></a>
             
            <a href='https://www.youtube.com/channel/UCkCnjfFgbcFwiY5StOdsSMA'><FaYoutube className='icon' /></a>
            <a href='https://in.pinterest.com/makemytrip/'><FaPinterest className='icon' /></a>
            <a href='https://www.instagram.com/makemytrip/?hl=en'><FaInstagram className='icon' /></a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
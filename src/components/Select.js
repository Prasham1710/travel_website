import React from 'react'

import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';
import b4 from '../assets/b4.jpg';
import b5 from '../assets/b5.jpg';
import b6 from '../assets/b6.jpg';
import SelectsCard from './SelectsCard';

const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

    <button> <a href='https://www.tripadvisor.in/Tourism-g311415-Bora_Bora_Society_Islands-Vacations.html' ><SelectsCard bg={b1} text='Bora Bora' /></a></button>
    <button><a href='https://www.tripadvisor.in/Tourism-g293953-Maldives-Vacations.html'><SelectsCard bg={b2} text='Maldives' /></a></button>
    <button><a href ='https://www.tripadvisor.in/Tourism-g147242-Antigua_Antigua_and_Barbuda-Vacations.html'><SelectsCard bg={b3} text='Antigua' /></a></button>
    <button><a href ='https://www.tripadvisor.in/Tourism-g150809-Cozumel_Yucatan_Peninsula-Vacations.html'><SelectsCard bg={b4} text='Cozumel' /></a></button>
    <button><a href ='https://www.tripadvisor.com/Tourism-g147309-Jamaica-Vacations.html'><SelectsCard bg={b5} text='Jamaica' /></a></button>
    <button><a href='https://www.tripadvisor.in/Tourism-g34345-Key_West_Florida_Keys_Florida-Vacations.html'><SelectsCard bg={b6} text='Key West' /></a></button>
    
        
    </div>
  )
}

export default Selects

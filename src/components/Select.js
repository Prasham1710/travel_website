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

    <button><SelectsCard bg={b1} text='Bora Bora' /></button>
    <SelectsCard bg={b2} text='Maldives' />
    <SelectsCard bg={b3} text='Antigua' />
    <SelectsCard bg={b4} text='Cozumel' />
    <SelectsCard bg={b5} text='Jamaica' />
    <SelectsCard bg={b6} text='Key West' />
    
        
    </div>
  )
}

export default Selects

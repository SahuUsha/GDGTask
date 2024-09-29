import React from 'react'
import { ThemeContext } from '../../context';
import { useContext } from 'react';

const Eventcom = () => {
  const {theme} = useContext(ThemeContext);
  return (
  
    <div className={theme==='dark'?'bg-gray-800 text-neutral-200 flex w-auto h-[90vh] justify-center items-center':' text-neutral-600 flex w-auto h-[90vh] justify-center items-center' }>  

    <div className='   font-bold text-3xl '>
      Event Details will Update Soon !!
    </div>
    </div>
  )
}

export default Eventcom

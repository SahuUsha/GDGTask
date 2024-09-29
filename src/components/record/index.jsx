import React, { useContext } from 'react'
import { ThemeContext } from '../../context'

const Record= () => {
 
  const {theme} = useContext(ThemeContext)

  return (
    <div className={theme==='dark' ? 'lg:p-[9rem] pb-7 bg-gray-800 text-neutral-300 ' : ' lg:p-[9rem] pb-7text-neutral-600'}>
    <div className='flex flex-row flex-wrap gap-[8rem] justify-center p-[2rem]'>
     
      <div className='flex flex-col items-center'>
    <div className='border-t-[0.8rem] border-t-red-500 border-r-[0.8rem] border-r-blue-500 border-b-[0.8rem] border-b-yellow-500 border-l-[0.8rem] border-l-green-500 w-[10.3rem] h-[10.3rem] rounded-full transform rotate-[-47deg] shadow-[0_2px_7px_0_rgba(0.1,0,0,0)] shadow-gray-400'>
        <div className=' h-[8.8em]   w-[9rem] rounded-full flex justify-center items-center - transform rotate-[47deg]'>
          <h1 className='text-6xl  font-bold'>03+</h1>
        </div>
       </div>
       <div>
        <h2 className={theme==='dark'?'text-[2.5rem] pt-1 text-white font-semibold' : 'text-[2.5rem] pt-1 text-neutral-800 font-semibold'} >Years</h2>
       </div>
      </div>

      <div className='flex flex-col items-center'>
      <div className='border-t-[0.8rem] border-t-red-500 border-r-[0.8rem] border-r-blue-500 border-b-[0.8rem] border-b-yellow-500 border-l-[0.8rem] border-l-green-500 w-[10.3rem] h-[10.3rem] rounded-full transform rotate-[-47deg] shadow-[0_2px_7px_0_rgba(0.1,0,0,0)] shadow-gray-400'>
        <div className=' h-[8.8em]   w-[9rem] rounded-full flex justify-center items-center - transform rotate-[47deg]'>
          <h1 className='text-6xl   font-bold'>10+</h1>
        </div>
       </div>
        <div>
        <h2 className={theme==='dark'?'text-[2.5rem] pt-1 text-white font-semibold' :'text-[2.5rem] pt-1 text-neutral-800 font-semibold' } >Events</h2>
       </div>
       </div>
       
       <div className='flex flex-col items-center'>
       <div className='border-t-[0.8rem] border-t-red-500 border-r-[0.8rem] border-r-blue-500 border-b-[0.8rem] border-b-yellow-500 border-l-[0.8rem] border-l-green-500 w-[10.3rem] h-[10.3rem] rounded-full transform rotate-[-47deg] shadow-[0_2px_7px_0_rgba(0.1,0,0,0)] shadow-gray-400 '>
        <div className=' h-[8.8em]   w-[9rem] rounded-full flex justify-center items-center - transform rotate-[47deg]'>
          <h1 className='text-6xl  font-bold'>1k+</h1>
        </div>
       </div>
       <div className=' flex text-center '>
        <h2 className={theme==='dark'?'text-[2.5rem] pt-1 text-white font-semibold ':'text-[2.5rem] pt-1 text-neutral-800 font-semibold'} >Community <br/>Members</h2>
       </div>
       </div>

       <div className='flex flex-col items-center'>
       <div className='border-t-[0.8rem] border-t-red-500 border-r-[0.8rem] border-r-blue-500 border-b-[0.8rem] border-b-yellow-500 border-l-[0.8rem] border-l-green-500 w-[10.3rem] h-[10.3rem] rounded-full transform rotate-[-47deg] shadow-[0_2px_7px_0_rgba(0.1,0,0,0)] shadow-gray-400'>
        <div className=' h-[8.8em]   w-[9rem] rounded-full flex justify-center items-center - transform rotate-[47deg]'>
          <h1 className='text-5xl  font-bold'>200+</h1>
        </div>
       </div>
       <div >
        <h2 className={theme==='dark'?'text-[2.5rem] pt-1 text-white font-semibold' : 'text-[2.5rem] pt-1 text-neutral-800 font-semibold'} >Attendees</h2>
       </div>
       </div>
      
    </div>
    </div>
  )
}

export default Record
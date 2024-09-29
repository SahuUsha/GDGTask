import React, { useContext } from 'react'
import { ThemeContext } from '../../context'

const Techanologies = () => {

   const {theme} = useContext(ThemeContext)
  return (
    <div className={theme==='dark'? 'bg-gray-800 text-neutral-300' : 'text-neutral-600'}>
     <div className='flex  flex-row items-center justify-center '>
        <div className='  border-t-[0.4rem] border-red-500 w-32 lg:w-[24rem]'></div>
        <span className='mx-4 lg:text-7xl text-3xl font-bold  lg:pr-12 lg:pl-12 '>Technologies</span>
        <div className='  border-t-[0.4rem] border-red-500 w-32 lg:w-[24rem] ' ></div>
     </div>
     <div className=' flex justify-center p-4 lg:p-6 '>
        <h1 className='lg:text-3xl text-xl text-center font-semibold ' >Domains That Excite Us to Collaborate and Teach!</h1>
     </div>
     <div className='flex flex-wrap justify-center items-center gap-[4rem] mt-6 lg:mt-[11rem] lg:pb-[10rem]'>
     <div className='flex flex-col justify-center items-center'>
            <div className='border-[0.3rem] border-red-500 w-[12rem] lg:w-[13rem] rounded-full absolute lg:mb-[19.5rem] mb-[17.5rem] '></div>
            <div className={theme==='dark'?'flex flex-col justify-cente items-center border-[0.9rem] border-neutral-200 rounded-[3rem] lg:h-[17rem] h-[15rem] lg:w-[26.5rem] w-[22rem] mb-10 shadow-xl  shadow-gray-600' : 'flex flex-col justify-cente items-center border-[0.9rem] border-neutral-200 rounded-[3rem] lg:h-[17rem] h-[15rem] lg:w-[26.5rem] w-[22rem] mb-10 shadow-2xl  shadow-neutral-400'}>
             <img src="./images2/Android.png" className='lg:h-[11rem] h-[8rem] absolute mt-0' alt="" />
             <h2 className=' absolute  lg:mt-[9rem] mt-[7rem] lg:text-5xl text-3xl'>Android</h2>
             <img src="./images2/arrow3.png" className='lg:mt-[13.5rem] mt-[11rem] h-4' alt="" />
        
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <div className='border-[0.3rem] border-blue-500 w-[12rem] lg:w-[13rem] rounded-full absolute lg:mb-[19.5rem] mb-[17.5rem] '></div>
            <div className={theme==='dark'?'flex flex-col justify-cente items-center border-[0.9rem] border-neutral-200 rounded-[3rem] lg:h-[17rem] h-[15rem] lg:w-[26.5rem] w-[22rem] mb-10 shadow-xl  shadow-gray-600' : 'flex flex-col justify-cente items-center border-[0.9rem] border-neutral-200 rounded-[3rem] lg:h-[17rem] h-[15rem] lg:w-[26.5rem] w-[22rem] mb-10 shadow-2xl  shadow-neutral-400'}>
             <img src="./images2/flutter.png" className='lg:h-[7rem] h-[6rem] absolute mt-4' alt="" />
             <h2 className='absolute  lg:mt-[9rem] mt-[8rem] lg:text-5xl text-3xl'>Flutter</h2>
             <img src="./images2/arrow3.png" className='lg:mt-[13.5rem] mt-[11rem] h-4' alt="" />
         
            </div>
        </div>
        <div className='flex flex-col justify-center items-center'>
        <div className='border-[0.3rem] border-green-600 w-[12rem] lg:w-[13rem] rounded-full absolute lg:mb-[19.5rem] mb-[17.5rem]'></div>
        <div className={theme==='dark'?'flex flex-col justify-cente items-center border-[0.9rem] border-neutral-200 rounded-[3rem] lg:h-[17rem] h-[15rem] lg:w-[26.5rem] w-[22rem] mb-10 shadow-xl  shadow-gray-600' : 'flex flex-col justify-cente items-center border-[0.9rem] border-neutral-200 rounded-[3rem] lg:h-[17rem] h-[15rem] lg:w-[26.5rem] w-[22rem] mb-10 shadow-2xl  shadow-neutral-400'}>
             <img src="./images2/cloud.png" className='lg:h-[9rem]  h-[7rem] absolute mt-0' alt="" />
             <h2 className=' absolute  lg:mt-[9rem]  mt-[7rem] lg:text-5xl text-3xl'>Cloud</h2>
             <img src="./images2/arrow3.png" className='lg:mt-[13.5rem] mt-[11rem] h-4' alt="" />
         
            </div>
        </div>
        
     </div>

    </div>
  )
}

export default Techanologies

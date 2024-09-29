import React, { useContext } from 'react'
import { ThemeContext } from '../../context'

const FAQS = () => {
const {theme} = useContext(ThemeContext)

  return (
    <div className={theme==='dark'?'lg:pt-[14rem] pt-10 bg-gray-800 text-neutral-400 flex flex-col  justify-center items-center ' : 'lg:pt-[14rem] pt-10 text-neutral-600 flex flex-col  justify-center items-center '}>
      <div className='lg:mb-[7rem] mb-[2rem]' >
        <h1 className='lg:text-5xl  text-3xl  font-bold'>FAQs</h1></div>
      <div className='flex flex-col items-center justify-center lg:mb-[7rem] mb-[3rem]'>
      <div className="flex items-center justify-between px-4 py-3 border-[0.7rem] border-neutral-300  rounded-full w-full md:w-[50rem]">
  <div className="flex items-center">
    <img src="./images2/redarrow.png" className='lg:h-4 h-4 ml-4 mr-4'  alt="" />
    <span className=" lg:text-3xl text-xl font-bold">
      What is GDG?
    </span>
  </div>
</div>
    <div className='border-l-[0.8rem] border-red-500 rounded-2xl w-full md:w-[42rem]  mt-5 '>
  <div className="flex items-center justify-center lg:px-5 px-3 py-3 border-[0.8rem] border-neutral-300  rounded-tr-3xl  rounded-br-3xl w-full md:w-[42rem] w-[25rem] ">
  <p className={theme==='dark'?'text-2xl text-neutral-100 font-semibold leading-8' :'text-2xl text-neutral-500 font-semibold leading-8' }>
     Google Developer Groups (GDG) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDG, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.
     </p>
     </div>
  </div>
    </div>
      <div className='flex flex-col items-center justify-center lg:mb-[7rem] mb-[3rem]'>
      <div className="flex items-center justify-between px-4 py-3 border-[0.7rem] border-neutral-300  rounded-full w-full md:w-[50rem]">
  <div className="flex items-center">
    <img src="./images2/greenarrow.png" className='lg:h-4 h-4 ml-4 mr-4'  alt="" />
    <span className=" lg:text-3xl text-xl font-bold">
    How can you become a part of GDG ?
    </span>
  </div>
</div>
    <div className='border-l-[0.8rem] border-green-600 rounded-2xl w-full md:w-[42rem]  mt-5 '>
  <div className="flex items-center justify-center lg:px-5 px-3 py-3 border-[0.8rem] border-neutral-300  rounded-tr-3xl  rounded-br-3xl w-full md:w-[42rem] w-[25rem] ">
  <p className={theme==='dark'?'text-2xl text-neutral-100 font-semibold leading-8' :'text-2xl text-neutral-500 font-semibold leading-8' }>
     We conduct an annual team recruitment process. The details of recruitment are posted online a few weeks prior. It’s a two step process involving form filling and personal interview. Students acing both rounds are selected to be the part of the core team.
     </p>
     </div>
  </div>
    </div>
      <div className='flex flex-col items-center justify-center lg:mb-[7rem] mb-[3rem]'>
      <div className="flex items-center justify-between px-4 py-3 border-[0.7rem] border-neutral-300  rounded-full w-full md:w-[50rem]">
  <div className="flex items-center">
    <img src="./images2/bluearrow.png" className='lg:h-4 h-4 ml-4 mr-4'  alt="" />
    <span className=" lg:text-3xl text-xl font-bold">
    What does a GDG Lead do?
    </span>
  </div>
</div>
    <div className='border-l-[0.8rem] border-blue-500 rounded-2xl w-full md:w-[42rem]  mt-5 '>
  <div className="flex items-center justify-center lg:px-5 px-3 py-3 border-[0.8rem] border-neutral-300  rounded-tr-3xl  rounded-br-3xl w-full md:w-[42rem] w-[25rem] ">
  <p className={theme==='dark'?'text-2xl text-neutral-100 font-semibold leading-8' :'text-2xl text-neutral-500 font-semibold leading-8' }>
     A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners
     </p>
     </div>
  </div>
    </div>
      <div className='flex flex-col items-center justify-center lg:mb-[7rem] mb-[3rem]'>
      <div className="flex items-center justify-between px-4 py-3 border-[0.7rem] border-neutral-300  rounded-full w-full md:w-[50rem]">
  <div className="flex items-center">
    <img src="./images2/yellowarrow.png" className='lg:h-4 h-4 ml-4 mr-4'  alt="" />
    <span className=" lg:text-3xl text-xl font-bold">
    How is DSC related to Google?
    </span>
  </div>
</div>
    <div className='border-l-[0.8rem] border-yellow-500 rounded-2xl w-full md:w-[42rem]  mt-5 '>
  <div className="flex items-center justify-center lg:px-5 px-3 py-3 border-[0.8rem] border-neutral-300  rounded-tr-3xl  rounded-br-3xl w-full md:w-[42rem] w-[25rem] ">
     <p className={theme==='dark'?'text-2xl text-neutral-100 font-semibold leading-8' :'text-2xl text-neutral-500 font-semibold leading-8' }>
     A GDG Lead fills a lot of shoes. He works with the university to build the club, recruit the core team, host workshops, build projects, collaborate with local partners.
     </p>
     </div>
  </div>
    </div>
    
      <div className='flex flex-col items-center justify-center lg:mb-[6rem] mb-[3rem]'>
      <div className="flex items-center justify-between px-4 py-3 border-[0.7rem] border-neutral-300  rounded-full w-full md:w-[50rem]">
  <div className="flex items-center">
    <img src="./images2/redarrow.png" className='lg:h-4 h-4 ml-4 mr-4'  alt="" />
    <span className=" lg:text-3xl text-xl font-bold">
    How to reach us?
    </span>
  </div>
</div>
    <div className='border-l-[0.8rem] border-red-500 rounded-2xl w-full md:w-[42rem]  mt-5 '>
  <div className="flex items-center justify-center lg:px-5 px-3 py-3 border-[0.8rem] border-neutral-300  rounded-tr-3xl  rounded-br-3xl w-full md:w-[42rem] w-[25rem] ">
  <p className={theme==='dark'?'text-2xl text-neutral-100 font-semibold leading-8' :'text-2xl text-neutral-500 font-semibold leading-8' }>
     Mail us at <span className='underline'> " dsc.rknec@gmail.com "</span>  
     </p>
     </div>
  </div>
    </div>
    
    </div>
  )
}

export default FAQS

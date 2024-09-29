import React, { useContext } from 'react'
import { ThemeContext } from '../../context'

const About = () => {

  const {theme} = useContext(ThemeContext)

  return (


    <>
    <div className={theme==='dark' ?'pb-[2rem] bg-gray-800 text-neutral-300' : 'mb-[2rem] text-neutral-600'}>
      <div 
      className={theme==='dark'?'flex flex-col items-center justify-center text-neutral-300 font-semibold ' : 'flex flex-col items-center justify-center text-neutral-600 font-semibold'}>
        <h1 className='lg:text-5xl text-4xl tracking-tight  '>Our Mission</h1>
        <div class="border-b-[0.4rem] border-blue-600 w-[8rem] lg:w-[12.3rem] lg:mt-[2.1rem] mt-[1.4rem]"></div>
      
      </div>
      <div className='flex lg:flex-row flex-col justify-between  p-[3.1rem] pt-[1rem]'>
        <div className=' ml-0 mt-0'>
            <img src="./images2/left1.png" className=' lg:h-[35rem] lg:w-[42rem] ml-[' alt="" />
            
        </div>
        <div className=' border-red-500 '>
            <p className='border-r-[0.9rem] border-blue-600 lg:mt-[4rem] lg:w-[50rem] flex text-right tracking-tighter  font-semibold lg:text-4xl text-xl rounded-xl lg:leading-relaxed p-4 lg:mt-[9.1rem]  md:mt-[3rem] '>Our mission involves community engagement, leadership development, building strong tech foundation, while enabling all tech enthusiasts to contribute to the global society.</p>
        </div>
        </div>
      </div>

    
       <div className={theme ==='dark'?'lg:pb-[14rem] pb-[6rem] bg-gray-800 text-neutral-300':'lg:pb-[14rem] pb-[6rem] text-neutral-600' }>
       <div className='flex flex-col items-center justify-center  font-semibold  '>
        <h1 className='lg:text-5xl text-3xl tracking-tight  '>Our Perspective</h1>
        <div class="border-b-[0.4rem] border-green-600 lg:w-[12.3rem] w-[9.5rem] lg:mt-[2.1rem]
        mt-[1.5rem]"></div>
      </div>
      <div className='flex lg:flex-row flex-col  justify-between  p-[3.1rem] pt-[1.2rem]'>
        <div >
            < p className='border-l-[0.9rem] border-green-600 lg:mt-[3rem] lg:w-[47rem] flex text-left tracking-tighter  font-semibold lg:text-3xl rounded-xl lg:leading-10 p-5 md:mt-[2.4rem] text-xl lg:mt-[5.5rem] '>We’re a community-driven initiative aiming to bridge the gap between research and practice , develop evolutionary thinking and network throughout the process. We believe in connecting fellow developers , spreading stimulative ideas and working for a solution driven team.
           </p>
        </div>
        <div className=' mr-1 mt-0'>
            <img src="./images2/about2.png" className=' lg:h-[23rem] lg:w-[50rem] ' alt="" />
            
        </div>
        </div>
       </div>


    <div className={theme==='dark'?'pb-[8rem] bg-gray-800 text-neutral-300':'pb-[8rem] text-neutral-600'}>
      <div className='flex flex-col items-center justify-center  font-semibold  '>
        <h1 className='lg:text-5xl text-3xl tracking-tight  '>What Keeps Us Going?</h1>
        <div class="border-b-[0.4rem] border-yellow-400 lg:w-[12.3rem] w-[12.3rem]  lg:mt-[2.1rem] mt-[1.8rem]"></div>
      
      </div>
      <div className='flex lg:flex-row flex-col justify-between  p-[3.1rem] pt-[1.2rem]'>
        <div className=' ml-1 mt-0'>
            <img src="./images2/about3.png" className=' lg:h-[27rem] lg:w-[52rem] ' alt="" />
            
        </div>
        <div className=' border-red-500 '>
            < p className='border-r-[0.9rem] border-yellow-500 lg:mt-[4rem] mt-[3rem]lg:w-[48rem] flex text-right tracking-tighter  font-semibold lg:text-3xl rounded-xl lg:leading-10 p-5 md:mt-[3rem] lg:mt-[5.5rem] text-xl '>Our club helps students to connect, learn, empower and grow. Teamwork, innovative thinking, communication, and leading with solutions is what helps us achieve new heights.
            <br />
                The entire team works in coordination, to inspire and motivate the upcoming coding community to evolve their skills and broaden their horizons of knowledge.
           </p>
        </div>
        </div>
      </div>
    </>
  )
}

export default About

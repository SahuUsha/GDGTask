import React,{useContext, useEffect, useState} from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom'
import About from '../../components/About'
import Footer from '../../components/Footer'
import Record from '../../components/record'
import Techanologies from '../../components/techanology'
import FAQS from '../../components/FAQs'
import { ThemeContext } from '../../context'

const Home = () => {

  const {theme} = useContext(ThemeContext)
  return (
    <div>
      {/* <Navbar/> */}
      <div className={theme==='dark' ? 'bg-gray-800 text-white' : 'null'}>
        <div className={theme!=='dark'?'felx flex  justify-center lg:text-8xl md:text-6xl text-[2rem]  font-bold mt-20 ' : 'felx flex  justify-center lg:text-8xl md:text-6xl text-[2rem]  font-bold  pt-20' }>
        <h1 className=''><span className='text-blue-500'>G</span><span className='text-red-600'>o</span><span className='text-yellow-400'>o</span><span className='text-blue-500'>g</span><span className='text-green-600'>l</span><span className='text-red-600'>e</span> Developer Groups</h1>
        </div>
        <div className='flex justify-center p-5'>
          <h1 className={theme==='dark' ? 'text-neutral-400 font-bold lg:text-6xl text-3xl mb-10' : 'text-neutral-600 font-bold lg:text-6xl text-3xl mb-10' }>RBU Chapter</h1>
        </div>
        <div className='flex justify-center'>
          <img src="./images2/imagehome.png"className='lg:h-[26rem] h-[16rem] md : h-[20rem]' alt="home Image" />
        </div>
        <div className=' flex  items-center justify-center mt-4 '>
      <p className={theme==='dark'?'lg:text-4xl text-3xl text-neutral-200 lg:w-[64rem] text-center font-semibold': 'lg:text-4xl text-3xl text-neutral-500 lg:w-[64rem] text-center font-semibold'}>Google Developer Groups are community groups for college and university students interested in Google developer technologies.</p>
    </div>
    <div>
      <div className=' flex justify-center lg:mt-[6rem] mt-[3rem]'>
      <button className=' bg-blue-500 text-white text-center font-bold p-4 lg:pl-16 pl-14 lg:pr-16 pr-14 lg:text-4xl text-3xl rounded-lg'>
        <Link>JOIN US</Link>
      </button>
      </div>
      <div className='flex flex-col justify-center items-center mt-[4rem] mb-[3rem]'>
        <img src="./images2/arrow1.png"
         className='lg:h-[2.7rem] h-[2rem]' alt="arrow 1" />
        <img src="./images2/arrow2.png"
         className='lg:h-[2.7rem] h-[2rem]' alt="arrow-2 " />
        <img src="./images2/arrow3.png" 
        className='lg:h-[2.7rem] h-[2rem]' alt="arrow-3 " />
      </div>
      <div className='flex justify-center pb-[6rem]'>
        <h1 className={theme==='dark' ? 'text-neutral-100 font-bold lg:text-6xl text-5xl ': 'text-neutral-600 font-bold lg:text-6xl text-5xl '}>Get To Know Us!</h1>
      </div>
    </div>
      </div>
      <About/>
      <Record/>
      <Techanologies/>
      <FAQS/>
      <Footer/>
    </div>
  )
}

export default Home


// src/pages/Home.js
// import React, { useContext } from 'react';
// // import Navbar from '../components/Navbar';
// // import About from '../components/About';
// // import Footer from '../components/Footer';
// // import Record from '../components/record';
// // import Technologies from '../components/techanology';
// // import FAQS from '../components/FAQs';
// import { ThemeContext } from '../../context';
// import FAQS from '../../components/FAQs';
// import Navbar from '../../components/Navbar';
// import Footer from '../../components/Footer';
// import Techanologies from '../../components/Footer';
// import About from '../../components/About';
// import Record from '../../components/record';
// // import { ThemeContext } from '../context/ThemeContext';

// const Home = () => {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <div className={theme === 'dark' ? 'bg-gray-800 text-white' : 'null'}>
//       <Navbar/>
//       <div className='text-center mt-20'>
//         <h1 className='lg:text-8xl md:text-6xl text-[2rem] font-bold'>
//           <span className='text-blue-500'>G</span><span className='text-red-600'>o</span><span className='text-yellow-400'>o</span><span className='text-blue-500'>g</span><span className='text-green-600'>l</span><span className='text-red-600'>e</span> Developer Groups
//         </h1>
//         <h2 className='text-neutral-600 font-bold lg:text-6xl text-3xl mb-10'>RBU Chapter</h2>
//         <img src="./images2/imagehome.png" className='lg:h-[26rem] h-[16rem]' alt="home Image" />
//         <p className='lg:text-4xl text-3xl text-neutral-500 lg:w-[64rem] text-center font-semibold mt-4'>
//           Google Developer Groups are community groups for college and university students interested in Google developer technologies.
//         </p>
//         <button className='bg-blue-500 text-white font-bold p-4 lg:text-4xl text-3xl rounded-lg mt-6'>
//           JOIN US
//         </button>
//       </div>
//       <About/>
//       <Record/>
//     <Techanologies/>
//       <FAQS/>
//      <Footer/>
//     </div>
//   );
// };

// export default Home;

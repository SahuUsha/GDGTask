// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//   <footer className=' bg-neutral-200  w-full '>
//       <div className='flex lg:flex-row flex-col  lg:mr-[6rem] items-center lg:items-start sd:ml-[2rem]' >
//          <div>
//             <img src="./images2/footerGDG.png" 
//             className='lg:h-[22rem] h-[12rem] lg:mt-5 lg:w-[44rem] p-4 lg:p-[3rem] lg:ml-8' alt="GDG logo" />
//             </div>  
//             <div className='hidden lg:block lg:border-l-2 lg:border-neutral-600 lg:h-[10.7rem] lg:p-[5rem] lg:ml-[8rem] lg:mt-[7rem]  lg:md:ml-[4rem]'></div>
//          <div className='w-full sd:ml-[2rem] md:ml-[2rem]'>
//             <div className='flex flex-row  font-semibold lg:mt-[10rem] mr-[5rem] w-full'>
//               <img src="./images2/location.png" className='h-[2.5rem] mr-4' alt="location" />
//               <h1 className='flex text-base flex-wrap text-xl'>
//                 <Link to={'https://www.rknec.edu/'}>
//                 Shri Ramdeobaba College of Engineering and Management, Ramdeo Tekdi, Gittikhadan,Katol Road,Nagpur- 440013
//                 </Link>
//                 </h1>
//             </div>
//             <div className='flex flex-wrap  justify-between  pr-5'>
//               <div className='flex mt-9'>
//               <img src="./images2/mail.png" className='h-7 mr-4 ' alt="" />
//               <h1 className='font-semibold text-xl underline  '><Link to={''}>dsc.rknec@gmail.com
//               </Link></h1>
//               </div>
//               <div className='mt-9'>
//                 <h1 className='text-xl font-semibold'>Follow Us:</h1>
//                 <div className='flex flex-wrap gap-14 mt-8'>
//                   <img src="./images2/instagram.png"  className='h-[1.6rem]'   alt="" />
//                   <img src="./images2/linkedin.png"  className='h-[1.6rem]' alt="" />
//                   <img src="./images2/twitter.png" 
//                   className='h-[1.6rem]'alt="" />
//                 </div>
//               </div>

//             </div>
//          </div>
//       </div>
//       <div className='flex justify-center w-full'>
//         <img src="./images2/footer.png" className='w-full  ' alt="footer" />
//       </div>
//   </footer>

    
   
//   )
// }

// export default Footer

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context';
// import { ThemeContext } from './context';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-neutral-200 text-black'} w-full`}>
      <div className='flex lg:flex-row flex-col lg:mr-[6rem] items-center lg:items-start sd:ml-[2rem]'>
        <div>
          <img
            src="./images2/footerGDG.png"
            className='lg:h-[22rem] h-[12rem] lg:mt-5 lg:w-[44rem] p-4 lg:p-[3rem] lg:ml-8'
            alt="GDG logo"
          />
        </div>
        <div className='hidden lg:block lg:border-l-2 lg:border-neutral-600 lg:h-[10.7rem] lg:p-[5rem] lg:ml-[8rem] lg:mt-[7rem]'></div>
        <div className='w-full sd:ml-[2rem] md:ml-[2rem]'>
          <div className='flex flex-row font-semibold lg:mt-[10rem] mr-[5rem] w-full'>
            <img src="./images2/location.png" className='h-[2.5rem] mr-4' alt="location" />
            <h1 className='flex text-base flex-wrap text-xl'>
              <Link to={'https://www.rknec.edu/'}>
                Shri Ramdeobaba College of Engineering and Management, Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur-440013
              </Link>
            </h1>
          </div>
          <div className='flex flex-wrap justify-between pr-5'>
            <div className='flex mt-9'>
              <img src="./images2/mail.png" className='h-7 mr-4' alt="mail" />
              <h1 className='font-semibold text-xl underline'>
                <Link to={''}>dsc.rknec@gmail.com</Link>
              </h1>
            </div>
            <div className='mt-9'>
              <h1 className='text-xl font-semibold'>Follow Us:</h1>
              <div className='flex flex-wrap gap-14 mt-8'>
                <img src="./images2/instagram.png" className='h-[1.6rem]' alt="Instagram" />
                <img src="./images2/linkedin.png" className='h-[1.6rem]' alt="LinkedIn" />
                <img src="./images2/twitter.png" className='h-[1.6rem]' alt="Twitter" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center w-full'>
        <img src="./images2/footer.png" className='w-full' alt="footer" />
      </div>
    </footer>
  );
};

export default Footer;

import React, { useContext } from 'react'
// import headerlogo from '../components/images/headerlogo.jpg'
import {Link} from 'react-router-dom';
import { ThemeContext } from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

  const {theme , toggleTheme} = useContext(ThemeContext)

  return (
   <nav className={theme==='dark'? 'bg-gray-800 text-white border-b-2 w-full  items-center flex lg:flex-row  flex-wrap flex-col justify-between  shadow-gray-300 shadow-md p-6 ' : 'bg-white   w-full border-2 items-center flex lg:flex-row flex-col justify-between text-neutral-500 shadow-gray-200 shadow-md p-6 '}>
  {/* // <nav className="bg-white dark:bg-gray-900 text-black dark:text-white p-4"> */}
    <div className='items-center lg:ml-7  flex'>
  
      <img src="./images2/image.png" className='lg:h-12 h-12 p-2 ' alt="header logo" />
      <Link to={'/'} className=' text-3xl '  >GDG RCOEM</Link>
    </div>
    <div>
      <ul className={theme==='dark' ?'flex  flex-wrap  justify-center gap-9 lg:text-3xl md:text-2xl lg:justify-center text-white lg:mr-10 m-2 cursor-pointer': 'flex gap-9 lg:text-3xl md:text-2xl lg:justify-center text-neutral-500 lg:mr-10 m-2 cursor-pointer'}>
        <Link to={'/'}><div className='hover:text-gray-600'> Home </div></Link>
        <Link to={'/Event'}><div className='hover:text-gray-600'> Event </div></Link>
        <Link to={'/Team'}><div className='hover:text-gray-600'> Team </div></Link>
        <Link to={'/Alumni'}><div className='hover:text-gray-600'> Alumni </div></Link>
        <Link to={'/Contact'}><div className='hover:text-gray-600'> Contact </div></Link>
       
        <button
      onClick={toggleTheme}
      className='p-2 bg-blue-500 text-white rounded-full text2xl flex items-center justify-center w-[2.7rem] h-[2.7rem] hover:bg-blue-600 transition duration-300 ease-in-out'
    >
      {theme === 'light' ? (
        <FontAwesomeIcon icon={faMoon} className='text-red-500' />
      ) : (
        <FontAwesomeIcon icon={faSun} className='text-yellow-300' />
      )}
    </button>
      </ul>
    </div>
    
   </nav>
  )
}

export default Navbar


 



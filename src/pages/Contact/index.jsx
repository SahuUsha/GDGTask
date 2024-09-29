import React, { useContext } from 'react'
import { ThemeContext } from '../../context'

const Contact = () => {

  const {theme} = useContext(ThemeContext)
  return (
    <div className={theme==='dark'?'bg-gray-800 text-neutral-200 flex w-auto h-[90vh] justify-center items-center':' text-neutral-600 flex w-auto h-[90vh] justify-center items-center' }>  

    <div className='   font-bold text-3xl '>
      Contact will Update Soon !!
    </div>
    </div>
  )
}

export default Contact

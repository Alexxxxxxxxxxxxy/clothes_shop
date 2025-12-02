import React from 'react'
import notFoundImage from '../assets/404.png'

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full mt-2'>
        <p className='sm:text-4xl text-2xl noto-serif-sc mb-5'>未找到页面</p>
        <img className='sm:w-[500px] w-[200px]' src={notFoundImage} alt="404" />
    </div>
  )
}

export default NotFound

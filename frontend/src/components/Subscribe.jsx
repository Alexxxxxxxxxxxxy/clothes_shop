import React from 'react'

const Subscribe = () => {

    const handleSubmit = (e)=>{
        e.preventDefault()
    }

  return (
    <div className='mt-10 text-center'>
    <p className='text-2xl font-medium text-gray-800'>订阅我们</p>
    <p className='text-gray-400 mt-3 mb-3'>您将获得百分之二十的优惠</p>
    <form onSubmit={handleSubmit} className='flex gap-2 w-full sm:w-1/2 items-center justify-around my-6 mx-auto pl-3'>
        <input type="email" placeholder='输入您的邮箱' className='w-full sm:flex-1 outline-none' />
        <button type="submit" className='bg-black text-white text-x5 px-10 py-3'>订阅</button>
    </form>
    </div>
  )
}

export default Subscribe

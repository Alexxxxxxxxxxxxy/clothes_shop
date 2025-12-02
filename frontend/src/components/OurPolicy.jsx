 import React from 'react'
 import policy from '../assets/policy.png'
 import success from '../assets/success.png'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center text-xs sm:text-sm md:text-base text-gray-700'>
      <div>
        <img src={policy} className='w-12 m-auto mb-5' alt="policy" />
        <p className='font-semibold'>无忧退换</p>
        <p className='text-gray-400 mb-5'>七天无理由退换</p>
      </div>
    <div>
        <img src={success} className='w-12 m-auto mb-5' alt="policy" />
        <p className='font-semibold'>个性化定制</p>
        <p className='text-gray-400 mb-5'>专属私人定制</p>
    </div>
    </div>
  )
}

export default OurPolicy

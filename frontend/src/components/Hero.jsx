import React from 'react'
import hero from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border-gray-400 border'>

        <div className='flex sm:w-1/2 w-full items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2'>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                    <p className='font-medium text-sm md:text-base'>我们最热销的产品</p>
                </div>
                <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relexed noto-serif-sc'>新款上线</h1>

                <div className='flex items-center gap-2'>
                    <p className='font-semibold text-sm md:text-base'>现在购买</p>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>
            </div>
        </div>

        <img className="w-full sm:w-1/2 " src={hero} alt="hero" />
    </div>
  )
}

export default Hero

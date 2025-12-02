import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mb-10 mt-40 text-sm'>
        <div>
            <img src={logo} className='mb-5 w-[15rem]' alt="logo" />
            <p className='w-full md:w-2/3 text-gray-600 noto-serif-sc'>
                若小店之衣，不合君心，或有纤毫之憾，还望君子海涵。人非圣贤，难免疏漏，若蒙垂怜指点，吾必虚心聆教，日夜精进，以期来日更臻圆满。君之一言，重于千金，吾必铭心，谨以诚意为报，愿不负君之厚望
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 mt-14 tracking-[0.3rem]'>公司</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>主页</li>
                <li>关于我们</li>
                <li>交付</li>
                <li>隐私保护</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5 mt-14 tarcking-[0.3rem]'>联系我们</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+86 134-3547-6337</li>
                <li>alexy@163.com</li>
            </ul>
        </div>
      </div>
      
      <div>
        <hr />
        <p className='py-5 text-center text-sms'>Copyright 2025@ alexy.com-All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import Title from '../components/Title'
import contact from '../assets/contact.jpg'
import Subscribe from '../components/Subscribe'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={"联系"} text2={"我们"}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={contact} alt="contact" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>门店</p>
          <p className='text-gray-500'>中国广东省广州市天河区<br/>中山大道西128号嘉汇商业中心A座1508室</p>
          <p className='text-gray-500'>联系电话: <span className='text-red-400'>+86</span> 139 4827 3165<br/>联系邮箱: liang.cheng92@example.com</p>
          <p className='font-semibold text-xl text-gray-600'>永久企业</p>
          <p className='text-gray-500'>了解更多关于我们的团队和职位空缺的信息</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 hover:cursor-pointer rounded-sm'>工作职位</button>
        </div>
      </div>

      <Subscribe/>

    </div>
  )
}

export default Contact

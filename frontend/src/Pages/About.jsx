import React from 'react'
import Title from '../components/Title'
import about_cover from '../assets/about_cover.jpg'
import Subscribe from '../components/Subscribe'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={"关于"} text2={"我们"}/>
      </div>
        
      <div className='my-10 flex flex-col gap-16 md:flex-row'>
        <img className='w-full md:max-w-[300px] lg:max-w-[450px]' src={about_cover} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p className='text-sm'>我们是一家专注于时尚与品质的服装品牌，致力于为每一位顾客带来舒适与自信的穿着体验。我们深知，衣服不仅仅是日常所需，更是一种态度与生活方式的表达。无论是日常休闲、职场通勤，还是特别场合，我们都希望通过精选的设计与面料，让您在不同的场合中都能展现独特的风采</p>
          <p className='text-sm'>在这里，您不仅能找到符合潮流的款式，也能感受到我们对细节的用心与对品质的坚持。我们相信，一件好的衣服，能让生活更轻松、让心情更愉悦。未来，我们也将持续倾听顾客的声音，不断优化产品与服务，只为与您一起探索更美好的穿衣之道。</p>
          <b className='text-gray-800'>我们的使命</b>
          <p className='text-sm'>我们的使命是通过用心的设计与严选的品质，为顾客打造既舒适又时尚的穿着体验。我们不仅希望提供一件衣服，更希望传递一种自信、自在、积极的生活态度。坚持细节，追求品质，用衣物连接人与美好生活，这是我们始终不变的初心</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={"为什么"} text2={"选择我们"}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>质量保证:</b>
          <p className='text-gray-600'>我们始终坚持以品质为核心，从面料的挑选到工艺的把控，每一个环节都严格遵循标准。所有商品在上架前都会经过多重检测，确保舒适度、耐用性与细节的完美呈现。我们相信，只有经得起考验的品质，才能赢得顾客的信赖与长期支持</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>便捷:</b>
          <p className='text-gray-600'>我们注重为顾客打造高效、顺畅的购物体验。无论是浏览商品、下单购买，还是支付与配送，我们都力求简洁明了，让您能够轻松找到心仪的服饰。通过便捷的操作流程与快速的物流服务，我们希望让每一次购物都成为一种愉快而无负担的享受</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>专业个性化服务:</b>
          <p className='text-gray-600'>我们不仅提供高品质的服饰，更注重为每一位顾客带来贴心、专业的服务体验。我们的团队时刻关注时尚趋势，结合顾客的不同需求与风格，为您提供个性化的穿搭建议。无论是选购指导、搭配灵感，还是售后支持，我们都力求用专业与真诚，为您打造独一无二的购物体验。</p>
        </div>
      </div>

      <Subscribe />

    </div>
  )
}

export default About

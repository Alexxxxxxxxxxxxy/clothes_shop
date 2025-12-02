import React, { useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import wechatpay from '../assets/wechatpay.png'
import alipay from '../assets/alipay.png'
import { useNavigate } from 'react-router-dom'

const PlaceOrder = () => {

  const [pay,setPay] = useState('')
  const navigate = useNavigate()

  return (
    <div className='flex flex-col sm:flex-row justify-around gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='flex flex-col gap-4 sm:text-2xl my-3'>
          <Title text1={"运输"} text2={"信息"}/>
        </div>
        <div className='flex gap-3'>
          <input type="text" placeholder='收货人姓名' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        </div>
        <input type="email" placeholder='您的邮箱' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        <div className='flex gap-3'>
          <input type="text" placeholder='省份' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          <input type="text" placeholder='城市' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        </div>
        <input type="text" placeholder='收货人地址' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        <input type="text" placeholder='联系电话' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
      </div>

      <div className='mt-8'>

        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
          <Title text1={'付款'} text2={'方式'}/>
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setPay('wechatpay')} className='flex items-center gap-3 border p-2 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${pay=="wechatpay"?"bg-green-400":""}`}/>
              <img className='h-5 mx-4' src={wechatpay} alt="wechatpay" />
            </div>
            <div onClick={()=>setPay('alipay')} className='flex items-center gap-3 border p-2 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${pay=="alipay"?"bg-green-400":""}`}/>
              <img className='h-5 mx-4' src={alipay} alt="alipay" />
            </div>
            <div onClick={()=>setPay('cash')} className='flex items-center gap-3 border p-2 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${pay=="cash"?"bg-green-400":""}`}/>
              <p className='text-gray-500 text-sm font-medium mx-4'>货到付款</p>
            </div>
          </div>
        </div>

        <div className='w-full text-end mt-8'>
          <button onClick={()=>navigate('/orders')} className='bg-black text-white rounded-s px-16 py-3 text-sm'>下订单</button>
        </div>
      </div>
      
    </div>
  )
}

export default PlaceOrder

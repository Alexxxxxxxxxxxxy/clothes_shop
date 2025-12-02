import React, { use, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import deletes from '../assets/delete.png'
import CartTotal from '../components/CartTotal'
import { useNavigate } from 'react-router-dom'

const Carts = () => {

  const {products, cartItem, currency, updateCartItem} = useContext(ShopContext)
  const [cartData, setCartData] = useState([])
  const navigate  = useNavigate()

  useEffect(()=>{
    const tempData = []
    for(let key in cartItem){
      for(let key2 in cartItem[key]){
        try{
          if(cartItem[key][key2] > 0){
            tempData.push({
              id:key,
              size:key2,
              quantity:cartItem[key][key2]
            })
          }
        }
        catch(e){}
      }
    }
    setCartData(tempData)
  },[cartItem])

  return (
    <div className='border-t pt-14'>

      <div className='text-2xl mb-3'>
        <Title text1={"你的"} text2={"购物车"}/>

      </div>
      

      <div>
        {
          cartData.map((item,index)=>{
            const productData = products.find((product)=>{
              return product._id ===item.id
            })
            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt="img" />
                  <div>
                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt-2'>
                      <p>{currency}{productData.price}</p>
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                    </div>
                  </div>
                </div>

                <div className='text-center'>
                  <input onChange={(e)=>updateCartItem(item.id,item.size,e.target.value)} type="number" className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' min={1} defaultValue={item.quantity}/>
                </div>
                <div>
                  <img onClick={()=>updateCartItem(item.id,item.size,0)} className='w-5 sm:w-6 cursor-pointer' src={deletes} alt="delete" />
                </div>
              </div>
            )
          })
        }
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          {/* 跳转支付 */}
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/placeorder')} className='bg-black text-white py-3 px-8 my-8 rounded-s active:bg-gray-500'>点击确认订单</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carts

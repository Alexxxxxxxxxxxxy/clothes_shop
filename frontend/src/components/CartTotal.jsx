import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal = () => {

    const {currency, delivery_fee, getCartTotal} = useContext(ShopContext)

  return (
    <div className='w-full'>

        <div className='text-2xl'>
            <Title text1={"购物车"} text2={"总计"}/>
        </div>
        
        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>物品总金额</p>
                <p>{currency} {getCartTotal()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>运费</p>
                <p>{currency} {delivery_fee}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>总计</p>
                <p className='font-bold'>{currency} {parseInt(getCartTotal())==0? 0 : delivery_fee + parseInt(getCartTotal())}.00</p>
            </div>
        </div>

    </div>
  )
}

export default CartTotal

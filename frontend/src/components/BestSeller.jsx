import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = ({id, image, name, price}) => {

    const {products, currency} = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])

    useEffect(()=>{
        const bestProduct = products.filter(product => product.bestseller === true)
        setBestSeller(bestProduct.slice(0,5))
    },[])

  return (
    <div className='my-10 '>
        <div className='text-center text-3xl py-8'>
            <Title text1="畅销" text2="精品"></Title>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 '>
            玲珑雅致，世间珍品，宛若明珠映月，光华流转。
            </p>
        </div>

        {/* 渲染产品 */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
            bestSeller.map((item, index)=>{
                return (
                <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
                )
            })
            }
        </div>
    </div>
  )
}

export default BestSeller

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollection = () => {

    const { products } = useContext(ShopContext)
    const [LatestProducts, setLatestProducts] = useState([])

    useEffect(()=>{
        setLatestProducts(products.slice(0,10))
    },[])

  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={"最新"} text2={"系列"}/>
        <p className='w-3/4 m-auto text-xs text-gray-600 sm:text-sm md:text-base'>
          浮生若梦，静水流深，清风明月，皆成诗意。繁华落尽，心自安然。
        </p>
      </div>

      {/* 渲染产品 */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
          LatestProducts.map((item, index)=>{
            return (
              <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
            )
          })
        }
      </div>

      
    </div>
  )
}

export default LatestCollection

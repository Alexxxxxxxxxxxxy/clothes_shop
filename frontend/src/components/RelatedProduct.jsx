import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const RelatedProduct = ({category,subcategory,id}) => {

    const  {products} = useContext(ShopContext)
    const [related,setRelated] = useState([])

    useEffect(()=>{
        if(products.length > 0){
            let productCopy = products.slice()
            productCopy = productCopy.filter((item)=>{return category===item.category && item._id!==id})

            productCopy = productCopy.filter((item)=>{return subcategory===item.subCategory && item._id!==id})

            
            setRelated(productCopy.slice(0,5))
        }
    },[products])

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={"相关"} text2={"商品"}/>
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            related.map((item,index)=>{
                return <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            })
        }
      </div>
    </div>
  )
}

export default RelatedProduct

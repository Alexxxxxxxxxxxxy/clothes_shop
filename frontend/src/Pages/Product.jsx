import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import star_fill from '../assets/star_fill.png'
import star_gray from '../assets/star_gray.png'
import RelatedProduct from '../components/RelatedProduct'

const Product = () => {

  const {productid} = useParams()
  const {products, currency, addToCart} = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async ()=>{
    products.map((item)=>{
      if(item._id===productid){
        setProductData(item)
        setImage(item.image[0])
      }
    })
  }

  useEffect(()=>{
    fetchProductData()
  },[productid, products])  
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity duration-500 ease-in opacity-100'>
      
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* 时装四个图 */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-auto justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index)=>{
                return <img onClick={()=>setImage(item)} src={item} key={index} alt={`image-${index}`} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
              })
            }
          </div>
          
          <div className='w-full sm:w-[80%]'>
            <img src={image} alt="cover" className='w-full h-full object-cover'/>
          </div>

        </div>

        {/* 时装详情 */}
        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={star_fill} alt="" className='w-3 5'/>
              <img src={star_fill} alt="" className='w-3 5'/>
              <img src={star_fill} alt="" className='w-3 5'/>
              <img src={star_fill} alt="" className='w-3 5'/>
              <img src={star_gray} alt="" className='w-3 5'/>
              <p className='pl-2 text-sm'>(1000+)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5 '>{productData.description}</p>
            <div className='flex flex-col gap-4 my-8'>
              <p>选择尺寸</p>
              <div className='flex gap-2 '>
                {
                  productData.size.map((item,index)=>{
                    return <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${size===item ? 'border-orange-500':""}`} key={index}>{item}</button>
                  })
                }
              </div>
            </div>
            <button onClick={()=>{addToCart(productData._id, size)}} className='bg-black text-white active:bg-gray-700 px-8 py-3 text-sm'>加入购物车</button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                <p>100%原创</p>
                <p>支持货到付款</p>
                <p>七天无理由退货</p>
            </div>
        </div>
      </div>

      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>商品描述</b>
          <p className='border px-5 py-3 text-sm'>商品评价 (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>一个电子商务网站是一个在线平台，它促进了商品或服务在互联网上的买卖。它充当一个虚拟市场，让企业和个人可以展示他们的产品、与客户互动，并在没有实体存在的情况下完成交易。由于其便利性、可访问性以及所提供的全球覆盖范围，电子商务网站获得了极大的普及</p>
          <p>电子商务网站通常会展示产品或服务，并附带详细的描述、图片、价格以及可选的不同规格（例如尺寸、颜色）。每个产品通常都有一个专门的页面来展示相关信息。</p>
        </div>
      </div>

      <RelatedProduct category={productData.category} subcategory={productData.subCategory} id={productData._id}/>
    </div>
  ): <div className='opacity-0'></div>
}

export default Product

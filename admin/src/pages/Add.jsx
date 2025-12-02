import React, { use, useState } from 'react'
import upload from '../assets/upload.png'

const Add = () => {

  const [image1,setImage1] = useState(false)
  const [image2,setImage2] = useState(false)
  const [image3,setImage3] = useState(false)
  const [image4,setImage4] = useState(false)

  const [name,setName] = useState("")
  const [description,setDescription] = useState("")
  const [price,setPrice] = useState("")
  const [category,setCategory] = useState("")
  const [subCategory,setSubCategory] = useState("")
  const [bestseller,setBestseller] = useState(false)
  const [sizes,setSizes] = useState([])

  return (
    <form className='flex flex-col w-full items-start gap-3 mx-10 mt-5'>
      <div>
        <p className='mb-2'>上传图片</p>

        <div className='flex gap-5'>
          <label htmlFor="image1">
            <img className='w-20' src={!image1 ? upload: URL.createObjectURL(image1)} alt="image1" />
            <input onChange={(e)=>{setImage1(e.target.files[0])}} type="file" id="image1" hidden/>
          </label>
          <label htmlFor="image2">
            <img className='w-20' src={!image2 ? upload: URL.createObjectURL(image2)} alt="image2" />
            <input onChange={(e)=>{setImage2(e.target.files[0])}} type="file" id="image2" hidden/>
          </label>
          <label htmlFor="image3">
            <img className='w-20' src={!image3 ? upload: URL.createObjectURL(image3)} alt="image3" />
            <input onChange={(e)=>{setImage3(e.target.files[0])}} type="file" id="image3" hidden/>
          </label>
          <label htmlFor="image4">
            <img className='w-20' src={!image4 ? upload: URL.createObjectURL(image4)} alt="image4" />
            <input onChange={(e)=>{setImage4(e.target.files[0])}} type="file" id="image4" hidden/>
          </label>
        </div>

        <div className='w-full'>
          <p className='mb-2'>商品名字</p>
          <input className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='请输入' required />
        </div>

        <div className='w-full'>
          <p className='mb-2'>商品描述</p>
          <textarea className='w-full max-w-[500px] px-3 py-2' type="text" placeholder='请输入' required />
        </div>

        <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
          <div>
            <p className='mb-2'>商品分类</p>
            <select className='w-full px-3 py-2'>
              <option value="men">男装</option>
              <option value="women">女装</option>
              <option value="child">童装</option>
            </select>
          </div>

          <div>
            <p className='mb-2'>商品子分类</p>
            <select className='w-full px-3 py-2'>
              <option value="coat">外套</option>
              <option value="T-shirt">T恤</option>
              <option value="ceremonial">礼服</option>
              <option value="suit">套装</option>
              <option value="shirt">衬衫</option>
            </select>
          </div>

          <div>
            <p className='mb-2'>商品价格</p>
            <input className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='25' required />
          </div>
        </div>

        <div className='mb-2'>
          <p>商品尺寸</p>
          <div className='flex gap-3'>
            <div>
              <p className='bg-slate-200 px-3 py-1 cursor-pointer'>S</p>
            </div>
            <div>
              <p className='bg-slate-200 px-3 py-1 cursor-pointer'>M</p>
            </div>
            <div>
              <p className='bg-slate-200 px-3 py-1 cursor-pointer'>L</p>
            </div>
            <div>
              <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XL</p>
            </div>
            <div>
              <p className='bg-slate-200 px-3 py-1 cursor-pointer'>XXL</p>
            </div>
          </div>
        </div>

        <div className='flex gap-2 mt-2'>
          <input type="checkbox" id="bestseller" />
          <label className='cursor-pointer' htmlFor="bestseller">添加为畅销商品</label>
        </div>

        <button type='submit' className='w-28 py-3 mt-4 bg-black text-white active:bg-gray-600'>添加商品</button>
      </div>
    </form>
  )
}

export default Add

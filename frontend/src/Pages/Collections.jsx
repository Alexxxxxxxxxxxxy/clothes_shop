import React, { use, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import menu from '../assets/menu.png'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collections = () => {

  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [fillterProducts, setFillterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subcategory, setSubcategory] = useState([])
  const [sortType, setSortType] = useState('relevent')

  const toggleFilter = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else setCategory([...category, e.target.value])
  }

  const toggleSubFilter = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubcategory(prev => prev.filter(item => item !== e.target.value))
    }
    else setSubcategory([...subcategory, e.target.value])
  }

  const applyFilter = () => {
    let productsCopy = products.slice()
    if (category.length) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    if (subcategory.length) {
      productsCopy = productsCopy.filter(item => subcategory.includes(item.subCategory))
    }
    if (sortType === 'low-high') {
      productsCopy = productsCopy.sort((a, b) => a.price - b.price)
    }
    else if (sortType === 'high-low') {
      productsCopy = productsCopy.sort((a, b) => b.price - a.price)
    }
    if(search  && showSearch){
      productsCopy = productsCopy.filter(item => item.name.includes(search))
    }
    setFillterProducts(productsCopy)
  }

  useEffect(() => {
    applyFilter()
    
  }, [category, subcategory, sortType, search, showSearch])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* 过滤器 */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>筛选
          <img onClick={() => setShowFilter(!showFilter)} className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`} src={menu} alt="filter" />
        </p>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>分类：</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'男装'} onChange={toggleFilter} />男装
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'女装'} onChange={toggleFilter} />女装
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'童装'} onChange={toggleFilter} />童装
            </p>
          </div>
        </div>

        <div className={`border border-gray-300 pl-5 py-3 my-5 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>服装分类：</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'coat'} onChange={toggleSubFilter} />外套
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'shirt'} onChange={toggleSubFilter} />衬衫
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'T-shirt'} onChange={toggleSubFilter} />T恤
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'ceremonial'} onChange={toggleSubFilter} />礼服
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'suit'} onChange={toggleSubFilter} />套装
            </p>
          </div>
        </div>
      </div>

      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'全部'} text2={"商品"} />
          {/* 商品列表 */}
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevent">相关度</option>
            <option value="low-high">价格由低到高</option>
            <option value="high-low">价格由高到低</option>
          </select>
        </div>

        {/* 渲染商品 */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            fillterProducts.map((item, index) => {
              return (<ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />)
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Collections

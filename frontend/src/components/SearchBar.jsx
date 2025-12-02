import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import searchimg from '../assets/search.png'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext)
    const [visibleSearch, setVisibleSearch] = useState(false)
    const location = useLocation()

    const handleClick = () =>{
      setShowSearch(false)
      setSearch('')
    }

    useEffect(()=>{
        if(location.pathname.includes('collection')){
            setVisibleSearch(true)
        }
        else setVisibleSearch(false)
    },[location])

  return showSearch && visibleSearch ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex sm:w-1/2 items-center justify-between border border-gray-400 px-2 py-2 my-5 mx-3 rounded-full w-3/4'>
        <input value={search} onChange={(e)=> setSearch(e.target.value)} className='flex outline-none bg-inherit text-sm w-3/4' type="text" placeholder='搜索内容'/>
        <img className='w-4' src={searchimg} alt="search" />
      </div>
      <div onClick={handleClick} className='items-center justify-content text-sm inline-flex font-medium cursor-pointer'>X</div>
    </div>
  ): <></>
}

export default SearchBar

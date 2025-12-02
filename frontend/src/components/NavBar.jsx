import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import search from '../assets/search.png'
import user from '../assets/user.png'
import cart from '../assets/cart.png'
import menu from '../assets/menu.png'
import back from '../assets/back.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const NavBar = () => {
    const [Visible, setVisible] = useState(false)
    const {showSearch, setShowSearch, setSearch, GetCartCount} = useContext(ShopContext)
    const navigate = useNavigate()

    const handleClick = () =>{
        if(showSearch){
            setSearch('')
        }
        setShowSearch(!showSearch)
    }

  return (
    <div className='flex items-center justify-between py-4 font-medium'>
        <Link to="/"><img src={logo} className="w-[12rem]" alt="logo" /></Link>

        {/* 导航栏 */}
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to="/" className="flex flex-col items-center gap-1">
                <p>主页</p> 
                <hr className='w-2/4 border-none h-[1.5px] bg-black hidden'/>
            </NavLink>
            <NavLink to="/collection" className="flex flex-col items-center gap-1">
                <p>时装</p> 
                <hr className='w-2/4 border-none h-[1.5px] bg-black hidden'/>
            </NavLink>
            <NavLink to="/about" className="flex flex-col items-center gap-1">
                <p>关于我们</p> 
                <hr className='w-2/4 border-none h-[1.5px] bg-black hidden'/>
            </NavLink>
            <NavLink to="/contact" className="flex flex-col items-center gap-1">
                <p>联系我们</p> 
                <hr className='w-2/4 border-none h-[1.5px] bg-black hidden'/>
            </NavLink>
        </ul>

        {/* 搜索框 */}
        <div className='flex gap-5'>
            <img onClick={handleClick} className="w-6 cursor-pointer" src={search} alt="search" />
            <div className='group relative'>
                <img onClick={()=>navigate('/login')} className='w-6 cursor-pointer' src={user} alt="user" />
                {/* 用户下拉菜单 */}
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p className='cursor-pointer hover:text-black'>个人信息</p>
                        <Link to="/orders"><p className='cursor-pointer hover:text-black'>订单</p></Link>
                        <p className='cursor-pointer hover:text-black'>退出登录</p>
                    </div>
                </div>
            </div>
            {/* 购物车 */}
            <Link to="/cart" className='relative'>
                <img className='w-6 cursor-pointer' src={cart} alt="cart" />
                <p className='sm:block hidden absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-[8px] aspect-square'>{GetCartCount()}</p>
            </Link>

            {/* 响应移动端设备导航栏不见 */}
            <img onClick={()=>setVisible(true)} className='w-6 cursor-pointer sm:hidden' src={menu} alt="menu" />
        </div>

        {/* 响应移动端设备导航栏 */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${Visible ? 'w-full':'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)} className='flex p-3 items-center gap-4 cursor-pointer'>
                    <img className="w-6 cursor-pointer" src={back} alt="back" />
                    <p>BACK</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/">主页</NavLink>
                <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/collection">时装</NavLink>
                <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/about">关于我们</NavLink>
                <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/contact">联系我们</NavLink>
            </div>
        </div>
    </div>
  )
}

export default NavBar

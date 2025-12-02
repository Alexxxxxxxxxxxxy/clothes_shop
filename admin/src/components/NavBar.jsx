import React, { useState } from 'react'
import logo from "../assets/logo.png"
import { Link, NavLink } from 'react-router-dom'
import menu from "../assets/menu.png"
import back from "../assets/back.png"
import toast, { Toaster } from 'react-hot-toast';

const NavBar = () => {

  const [Visible,setVisible] = useState(false)

  const handdleClick = () =>{
    let newState = !Visible
    setVisible(newState)
    console.log(open)
  }

  const handleLogout = ()=>{
    localStorage.removeItem('token')
    window.location.reload()
    toast.success("已注销登录!")
  }

  return (
    <div className='flex flex-row justify-between items-center mx-10 mt-0 border-b border-gray-300'>
      <Link to='add'><img src={logo} alt="logo" className='w-[max(10%,155px)]'/></Link>

      <div className='md:flex hidden flex-row gap-5 w-[max(80%,100px)] justify-center'>
        <NavLink to='/add'>
          <p className='long-cang sm:text-xl text-sm'>添加商品</p>
        </NavLink>
        <NavLink to='/list'>
          <p className='long-cang sm:text-xl text-sm'>商品列表</p>
        </NavLink>
        <NavLink to='/orders'>
          <p className='long-cang sm:text-xl text-sm'>订单列表</p>
        </NavLink>
      </div>

      <div className='flex flex-row items-center w-[max(10%,240px)] justify-end'>
        <button onClick={handleLogout} className='hidden md:block long-cang border-black border py-2 px-4 sm:px-7 sm:py-2 text-xs sm:text-sm rounded-md text-white bg-black hover:bg-white hover:text-black transition-all duration-150 active:bg-gray-600'>注销</button>
        <img onClick={handdleClick} src={menu} alt="menu" className='md:hidden w-[25px]'/>
      </div>

      {/* 响应移动端设备导航栏 */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-100 ease-in-out ${Visible ? 'w-full':'w-0'}`}>
          <div className='flex flex-col text-gray-600'>
              <div onClick={()=>setVisible(false)} className='flex p-3 items-center gap-4 cursor-pointer'>
                  <img className="w-6 cursor-pointer" src={back} alt="back" />
                  <p>BACK</p>
              </div>
              <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/add">添加商品</NavLink>
              <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/list">商品列表</NavLink>
              <NavLink onClick={()=>setVisible(false)} className="py-2 pl-6 border" to="/orders">订单列表</NavLink>
          </div>
      </div>
    </div>
  )
}

export default NavBar

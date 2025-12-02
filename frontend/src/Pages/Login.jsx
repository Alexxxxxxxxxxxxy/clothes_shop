import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('登录')

  const onSubmit = async (e)=>{
    e.preventDefault()
  }

  return (
    <form onClick={onSubmit} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='text-3xl noto-serif-sc'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>

      {currentState === '登录'? "":<input type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='用户名' required/>}
      <input type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='邮箱' required/>
      <input type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='密码' required/>

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer'>忘记密码?</p>
        {
          currentState === "登录"
          ?<p onClick={()=>setCurrentState("注册")} className='cursor-pointer'>创建账户</p>
          :<p onClick={()=>setCurrentState("登录")} className='cursor-pointer'>登录</p>
        }
      </div>

      <button type="submit" className='text-white bg-black active:text-gray-800 mt-4 font-light px-8 py-2 rounded-md'>{currentState==="登录"?"登录":"注册"}</button>
    </form>
  )
}

export default Login

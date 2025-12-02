import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { BACKEND_URL } from '../App'
import toast, { Toaster } from 'react-hot-toast';

const Login = ({setToken}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) =>{
        try{
            e.preventDefault()
            const res = await axios.post(BACKEND_URL + 'api/user/admin',{email,password})
            if(res.status === 200){
              setToken(res.data.token)
              toast.success("登录成功")
            }else {
              toast.error("登录失败")
            }
        }catch(err){
            console.log(err)
            toast.error("登录失败：请检查密码或网络连接") 
        }
    }    

  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
      <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
        <h1 className='text-2xl font-bold mb-4'>管理员面板</h1>
        <form onSubmit={onSubmitHandler}>
            <div className='mb-3 min-w-72'>
                <p className='text-sm font-medium text-gray-700 mb-2'>邮箱</p>
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='邮箱地址' required />
            </div>
            <div className='mb-3 min-w-72'>
                <p className='text-sm font-medium text-gray-700 mb-2'>密码</p>
                <input onChange={(e)=>setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='密码' required />
            </div>
            <button type='submit' className='border border-gray-500 px-4 py-1 rounded-md mt-2 text-white bg-black w-full active:bg-gray-600'>登录</button>
        </form>
      </div>
    </div>
  )
}

export default Login
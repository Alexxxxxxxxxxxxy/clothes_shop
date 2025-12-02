import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import toast, { Toaster } from 'react-hot-toast';


const RouterLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Toaster />
    </div>
  )
}

export default RouterLayout

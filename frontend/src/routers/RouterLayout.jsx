import React from 'react'
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import SearchBar from '../components/SearchBar'
import { ToastContainer } from 'react-toastify'

const RouterLayout = () => {
  return (
    <div>
      <ToastContainer/>
      <NavBar/>
      <SearchBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RouterLayout

import React from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import RouterLayout from './routers/RouterLayout'
import Home from './pages/Home'
import Product from './Pages/Product'
import About from './Pages/About'
import Carts from './Pages/Carts'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Collections from './pages/Collections'
import NotFound from './pages/NotFound'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouterLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="product/:productid" element={<Product/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="cart" element={<Carts/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="orders" element={<Orders/>}/>
        <Route path="placeorder" element={<PlaceOrder/>}/>
        <Route path="collection" element={<Collections/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App

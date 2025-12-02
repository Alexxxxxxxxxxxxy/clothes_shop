import React, { useEffect, useState } from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Orders from "./pages/Orders.jsx"
import List from './pages/List.jsx'
import Add from "D:/code/clothesShop/admin/src/pages/Add.jsx"
import RouterLayout from './router/RouterLayout.jsx'
import Login from './components/Login.jsx'
import Welcome from './pages/Welcome.jsx'
import toast, { Toaster } from 'react-hot-toast';

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "")
  useEffect(()=>{
    localStorage.setItem("token", token)
  },[token])

  const router = createBrowserRouter(
      createRoutesFromElements(
          <Route path="/" element={<RouterLayout/>}>
              <Route index element={<Welcome/>}/>,
              <Route path="list" element={<List/>}/>,
              <Route path="orders" element={<Orders/>}/>,
              <Route path="add" element={<Add/>}/>
          </Route>
      )
  )

  return (
    <>
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <RouterProvider router={router} />
      )}
      <Toaster />
    </>
  )
}

export default App
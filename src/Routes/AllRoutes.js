import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Payment from '../Pages/Payment'
import PlaceOrder from '../Pages/PlaceOrder'
import { PrivateRoute } from './PrivateRoute'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/cart' element={<PrivateRoute><Cart /></PrivateRoute>} />
      <Route path='/checkout' element={<PrivateRoute><Checkout /></PrivateRoute>} />
      <Route path='/payment' element={<PrivateRoute><Payment /></PrivateRoute>} />
      <Route path='/orderPlaced' element={<PrivateRoute><PlaceOrder /></PrivateRoute>} />
    </Routes>
  )
}

export default AllRoutes
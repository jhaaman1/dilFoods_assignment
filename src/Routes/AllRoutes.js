import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
// import MenSection from '../Pages/MenSection'
// import WomenSection from '../Pages/WomenSection'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
// import Product from '../Pages/Product'
// import SingleProducts from '../Components/Products/SingleProducts'
import Payment from '../Pages/Payment'
import PlaceOrder from '../Pages/PlaceOrder'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        {/* <Route path='/products' element={<Product/>} /> */}
        {/* <Route path='/product/:id' element={<SingleProducts/>} /> */}
        {/* <Route path='/menSection' element={<MenSection/>} /> */}
        {/* <Route path='/womensection' element={<WomenSection/>} /> */}
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/orderPlaced' element={<PlaceOrder/>} />
    </Routes>
  )
}

export default AllRoutes
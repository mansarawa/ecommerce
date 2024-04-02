import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './layout/Navbar'
import Login from './layout/Login'
import Achivement from './layout/Achivement'
import Homeslider from './layout/Homeslider'
import Register from './layout/Register'
import Cart from './layout/Cart'
import Profile from './layout/Profile'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Billing from './layout/Billing'
import Product from './layout/Product'
import { CartProvider } from './layout/CartContext'; 
export default function App() {
  let val=0;
  return (
    <div>
<CartProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Homeslider/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/billing' element={<Billing val={val}/>} />
        <Route path='/product' element={<Product/>}/>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
      </CartProvider>
    </div>
  )
}

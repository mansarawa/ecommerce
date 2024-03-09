import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './layout/Navbar'
import Login from './layout/Login'
import Achivement from './layout/Achivement'
import Homeslider from './layout/Homeslider'
import Register from './layout/Register'

export default function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<Homeslider/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

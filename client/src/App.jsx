import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './layout/Navbar'
import Login from './layout/Login'
export default function App() {
  return (
    <div>

      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

import React, { useState } from 'react'
import bIlling from '../layout css/billing.module.css'
import {Link, useNavigate} from 'react-router-dom'
import { useCart } from '../layout/CartContext';
export default function Billing() {
  const[name,setName]=useState();
  const[phone,setPhone]=useState();
  const[email,setEmail]=useState();
  const[house,setHouse]=useState();
  const[colony,setColony]=useState();
  const[city,setCity]=useState();
  const[postel,setPostel]=useState();
  const { updateCartValue } = useCart();
  const navigate=useNavigate()
  const handlefinsh=()=>{
    let newval = 1;
    updateCartValue(newval);
    navigate('/profile')
   
  }
  return (
    <div>
       <div  className={bIlling.modal} >
    <form className={bIlling.modalform} >
      <h3>Billing Details</h3>
      Name:
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name="" id="" required/>
      Phone number:
      <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)}  name="" id=""  required/>
      Email:
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  name="" id="" required/>
      Postel Code:
      <input type="number" value={postel} onChange={(e)=>setPostel(e.target.value)}  name="" id="" required/>
      House number:
      <input type="number" value={house} onChange={(e)=>setHouse(e.target.value)}  name="" id="" required/>
      Colony:
      <input type="text" value={colony}  onChange={(e)=>setColony(e.target.value)} name="" id="" required/>
      City:
      <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}  name="" id="" required/>
       <button type='button' className={bIlling.finish} onClick={handlefinsh}>Finish</button>
    </form>
  </div>
   </div>
  )
}

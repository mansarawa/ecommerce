import React, { useState } from 'react'
import bIlling from '../layout css/billing.module.css'
import {Link, useNavigate} from 'react-router-dom'
import { useCart } from '../layout/CartContext';
import { toast } from 'react-toastify';
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
  const handlefinsh= async()=>{
    if (!name || !phone || !email || !house || !colony || !city || !postel) {
      
      toast.error('Please fill in all required fields.');
      return;
    }

    let newval = 1;
    updateCartValue(newval);
    const res=await fetch('http://localhost:3000/billing',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name:name,
        email:email,
        phone:phone,
        postel:postel,
        house:house,
        city:city,
        colony:colony
      })

    })
    const result=await res.json();
    if(result.success)
    {
      navigate('/profile')
    }
    
   
  }
  let a=0;
  return (
    <div>
       <div  className={bIlling.modal} >
    <form className={bIlling.modalform} >
      <h3>Billing Details</h3>
      Name:
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  required/>
      Phone number:
      <input type="number" value={phone} onChange={(e)=>setPhone(e.target.value)}    required/>
      Email:
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  required/>
      Postel Code:
      <input type="number" value={postel} onChange={(e)=>setPostel(e.target.value)}   required/>
      House number:
      <input type="number" value={house} onChange={(e)=>setHouse(e.target.value)}   required/>
      Colony:
      <input type="text" value={colony}  onChange={(e)=>setColony(e.target.value)}  required/>
      City:
      <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}   required/>
       <button type='button' className={bIlling.finish} onClick={handlefinsh}>Finish</button>
    </form>
  </div>
   </div>
  )
}

import React from 'react'
import bIlling from '../layout css/billing.module.css'
import { Link } from 'react-router-dom'
export default function Billing() {
    const handlefinsh=()=>{
        toast.success('Your order has been placed')
        console.log("hello")
       }
  return (
   <div  className={bIlling.modal} >
    <form className={bIlling.modalform} >
      <h3>Billing Details</h3>
      Name:
      <input type="text" name="" id="" required/>
      Phone number:
      <input type="number" name="" id="" maxLength={10} required/>
      Email:
      <input type="email" name="" id="" />
      Postel Code:
      <input type="number" name="" id="" required/>
      House number:
      <input type="number" name="" id="" required/>
      Colony:
      <input type="text" name="" id="" required/>
      City:
      <input type="text" name="" id="" required/>
      <Link to='/profile' className={bIlling.finish} onClick={handlefinsh}>Finish</Link>
    </form>
  </div>
  )
}


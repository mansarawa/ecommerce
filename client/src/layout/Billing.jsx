import React, { useState } from 'react'
import bIlling from '../layout css/billing.module.css'
import {Link, useNavigate} from 'react-router-dom'

import rename from '../assets/rename.gif'
import { toast } from 'react-toastify';
export default function Billing() {
  const[name,setName]=useState();
  const[phone,setPhone]=useState();
  const[email,setEmail]=useState();
  const[house,setHouse]=useState();
  const[colony,setColony]=useState();
  const[city,setCity]=useState();
  const[postel,setPostel]=useState();

 
  const cartData=JSON.parse(localStorage.getItem('cartitem'))
 console.log(cartData)
 const productid=[];
 cartData.forEach(item => {
    productid.push(item._id);
   console.log(productid); 
 });

  
  const navigate=useNavigate()
  const [gif,setGif]=useState(false)
  const user=JSON.parse(localStorage.getItem('user'))
  const userid=user._id
  const handlefinsh= async()=>{
    if (!name || !phone || !email || !house || !colony || !city || !postel) {
      
      toast.error('Please fill in all required fields.');
      return;
    } 
    const res=await fetch('https://ecommerce-neon-six.vercel.app/billing',{
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
        colony:colony,
        userid:userid,
        productid:productid
      })

    })
    const result=await res.json();
    if(result.success)
    {
      setGif(rename)
      setTimeout(() => {
        navigate('/profile')
      }, 4000);
      localStorage.setItem('bill',JSON.stringify(result.bill))
      console.log(result.bill)
      const getcart=await fetch('https://ecommerce-neon-six.vercel.app/getcart',{
        method:"put",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          userid:userid
        })
      })
      const getresult=await getcart.json();
      if(getresult.success)
      {
        const gets=getresult.cartData
        
        const opname=[];
        gets.forEach(item => {
           opname.push(item.name);
           console.log("name",opname)
        });
        const oquantity=[];
        gets.forEach(item => {
           oquantity.push(item.quantity);
           console.log("quantity",oquantity)      
        });
        const ouserid=[];
        gets.forEach(item => {
           ouserid.push(item._id);
          console.log("userid",ouserid)
        });
        const ophoto=[];
        gets.forEach(item => {
           ophoto.push(item.photo);
         console.log("photo",ophoto)
        });
        const oprice=[];
        gets.forEach(item => {
           oprice.push(item.itemprice);
            console.log("price",oprice)
        });
       mixfunction();
      }
      
    }
   
  
  }
  let a=0;
  const mixfunction=async()=>{
    const order=await fetch('http://localhost:3000/order',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name:opname,
        itemprice:oprice,
        quantity:oquantity,
        userid:userid,
        productid:productid,
        photo:ophoto
      })
     })
     const del=await fetch('http://localhost:3000/deletecart',{
      method:'put',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        userid:userid
      })
    })
  }
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
    <img src={gif} alt="" style={{width:'30%',color:'#201a44',marginLeft:'35%',marginTop:'-100%',zIndex:'9999'}} srcset="" />
  </div>
   </div>
  )
}

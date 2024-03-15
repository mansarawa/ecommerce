import React, { useEffect, useState } from 'react'
import myCart from '../layout css/myCart.module.css'
import { IoMdAddCircle } from "react-icons/io";
import { FaCircleMinus } from "react-icons/fa6";
export default  function Cart() {
  const [add, setAdd] = useState()
  const [data, setData] = useState([])
  const user=JSON.parse(localStorage.getItem('user'))
  const userid=user._id;
  const fetchdata=async()=>{
  const res=await fetch('http://localhost:3000/mycart',{
    method:'post',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      userid:userid
    })
  })
  const result=await res.json();
  console.log(result)
  if(result.success)
  {
    setData(result.cartitem)
  }
}
  useEffect(() => {
    fetchdata();
  }, [])
  const handleadd=(item)=>{
    const newQuantity=item.quantity+1;
    console.log('click')
    setAdd(newQuantity)
    console.log(setAdd)
    
  }
  return (
    <div className={myCart.container}>
      
      {
        data.map((item)=>(
          <div className={myCart.box}>
            <div className={myCart.img}>
              <img src={item.photo} alt="" style={{width:'350px',height:"300px"}}/>
            </div>
            <div className={myCart.content}>
              <h1>{item.name}</h1>
              <div className={myCart.qtbtn}>
                <FaCircleMinus size={30} className={myCart.reacticon}/>
                <h2 style={{margin:'1% 2% 1% 2%'}}>{item.quantity}</h2>
                <IoMdAddCircle size={30} className={myCart.reacticon} onClick={()=>handleadd(item)}/>
              </div>
              <h2>{item.price}</h2>
            </div>
          </div>
        ))
      }
    </div>
  )
}


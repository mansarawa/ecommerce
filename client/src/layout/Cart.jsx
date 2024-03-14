import React, { useEffect, useState } from 'react'
import myCart from '../layout css/myCart.module.css'

export default  function Cart() {
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
  
  return (
    <div className={myCart.container}>
      
      {
        data.map((item)=>(
          <div className={myCart.box}>
            <div className="img">
              <img src={item.photo} alt="" style={{width:'350px',height:"300px"}}/>
            </div>
            <div className="content">
              <h3>{item.name}</h3>
              <h3>{item.quantity}</h3>
              <h5>{item.price}</h5>
            </div>
          </div>
        ))
      }
    </div>
  )
}


import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import buy from '../layout css/buy.module.css'
import { toast } from 'react-toastify';

export default  function Buy() {
  const param=useParams();
  const router=useNavigate();
  const user=JSON.parse(localStorage.getItem('user'));
  console.log(param.name)
  const photo=JSON.parse(localStorage.getItem('photo'));
 const quantity=1;
    const handlecart = async () => {
      if (user) {
        const userid = user._id
        const res = await fetch('http://localhost:3000/cart', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
  
          },
          body: JSON.stringify({
            name: param.name,
            photo: photo,
           quantity:quantity,
            price: param.price,
            userid: userid,
            itemprice:param.price
            
          })
        })
        const result = await res.json();
        if (result.success) {
          toast.success('Added To Cart')
          
          
          router('/billing')
        }
      }
  
    
  }
  return (
    <div className={buy.container}>
      <h1 style={{textAlign:'center'}}>Your Order:</h1>
      <div className={buy.content}>
        <div className={buy.img}>
          <img src={photo} alt="" style={{width:'300px'}} />
        </div>
        <div className={buy.item}>
          <div>
          <h1>{param.name}</h1>
          <h2>₹{param.price}</h2>
          </div>
          <div>
          <button onClick={handlecart} className={buy.btn} >Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}


import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Pro from '../layout css/product.module.css'
import { FaShoppingCart } from "react-icons/fa";
function Product() {
    const [product, setProduct] = useState([])
    const fetchData=async()=>{
        try {
             const res=await fetch('https://dummyjson.com/products')
            const data=await res.json();
            setProduct(data.products);
        } catch (error) {
        console.log(error)        
             }
        }
    useEffect(() => {
      fetchData();
    }, [])
    
    const handlecart=async(req,res)=>{
      const res=await fetch('http://localhost:3000/cart',{
        method:'post',
        headers:{
          'Content-Type':'application/josn'
        },
        body:JSON.stringify({
          name:name,
          photo:photo,
          price:price,
          userid:userid
        })
      })
    }
  return (
    <div className={Pro.container}>
        {
            product.map((item)=>(
                <div key={item.id} className={Pro.box}>
                <img src={item.thumbnail} alt="" style={{width:'100%',height:'300px'}} />
                <div className={Pro.details}>
                <h1>{item.title}</h1>
                <div className={Pro.footerbtn}>
                  <Link to='' onClick={()=>handlecart(item.thumbnail)} className={Pro.cart}><FaShoppingCart style={{color:'white',padding:'0%',marginRight:'3%',marginBottom:'0%'}} />Add To Cart</Link>
                  <Link to='/buy' className={Pro.buy}>Buy Now</Link>
                </div>
                </div>
                </div>
            ))
        }
    </div>
  )
}

export default Product
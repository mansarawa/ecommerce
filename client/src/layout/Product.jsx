import React, { useEffect, useState } from 'react'
import Pro from '../layout css/product.module.css'
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
    
  return (
    <div className={Pro.container}>
        {
            product.map((item)=>(
                <div key={item.id} className={Pro.box}>
                <img src={item.thumbnail} alt="" style={{width:'400px',height:'300px'}} />
                <div className={Pro.details}>
                <h1>{item.title}</h1>
                </div>
                </div>
            ))
        }
    </div>
  )
}

export default Product
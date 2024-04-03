import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Pro from '../layout css/product.module.css'
import { toast } from 'react-toastify';
import watch from '../assets/watch.png';

import { FaShoppingCart } from "react-icons/fa";
function Product() {
  const navigate = useNavigate();
  const quantity = 1;
  const user = JSON.parse(localStorage.getItem('user'))

  let a = 0;

  const [product, setProduct] = useState([])
  const fetchData = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json();
      setProduct(data.products);
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData();
  }, [])

  const handlecart = async (photo, price, name) => {
    if (user) {
      const userid = user._id
      const res = await fetch('http://localhost:3000/cart', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'

        },
        body: JSON.stringify({
          name: name,
          photo: photo,
          itemprice: price,
          price: price,
          userid: userid,
          quantity: quantity
        })
      })
      const result = await res.json();
      if (result.success) {
        toast.success('Added To Cart')
        console.log(done)
        
      }
    }
    else {
      navigate('/profile')

    }
  }
  const handlebuy = (_id, userid, name, price,photo) => {
    navigate(`/buy/${_id}/${userid}/${name}/${price}`);
    localStorage.setItem('photo',JSON.stringify(photo))
    console.log(photo)
  }
  return (
    <div className={Pro.container}>

      {
        product.map((item, index) => (
          <>
          {index<12?
            <div key={item.id} className={Pro.box}>
              <img src={item.thumbnail} alt="" style={{ maxWidth: '100%', maxHeight: '300px', minWidth: '100%', minHeight: '300px' }} />
              <div className={Pro.details}>
                <div onClick={Pro.detail}>
                  <h2>{item.title}</h2>
                </div>
                <div onClick={Pro.detail}>
                  <h3>₹{item.price}</h3>
                </div>
              </div>
              <div className={Pro.footerbtn}>
                <Link to={user ? '' : '/login'} onClick={() => handlecart(item.thumbnail, item.price, item.title)} className={Pro.cart}><FaShoppingCart style={{ color: 'white', padding: '0%', marginRight: '3%', marginBottom: '0%' }} />Add To Cart</Link>
                <button className={Pro.buy} onClick={() => handlebuy(item.id, user._id, item.title, item.price,item.thumbnail)}>Buy Now</button>
              </div>
            </div>:''}

            {(index + 1) === 6 && (
              <div className={Pro.middle}>
                <div className={Pro.watch}>
                  <img src={watch} alt="" style={{ width: '300px' }} />
                </div>
                <div className={Pro.watchdetail}>
                  <h1>Audemars Piguet</h1>
                  <h4 style={{ marginTop: '2%' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, beatae corporis cum rerum, deserunt eius ea omnis libero nobis, facilis cupiditate? Consequuntur exercitationem quam nemo ipsa modi impedit recusandae et omnis repudiandae dolor ea sed, at dolores vero inventore praesentium quidem dolorum nobis nam blanditiis vitae corporis perferendis. Veniam, numquam?</h4>
                </div>
              </div>
            )}
           
          </>
        ))
      }


    </div>
  )
}

export default Product
import React, { useEffect, useState } from 'react';
import { FaCircleMinus } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { toast } from 'react-toastify'; // Import toast notification library
import myCart from '../layout css/myCart.module.css';

export default function Cart() {

  const [data, setData] = useState([]);
  const [price, setPrice] = useState(); // Initialize quantity with a default value
  const user = JSON.parse(localStorage.getItem('user'));
  const userid = user._id;

  const fetchdata = async () => {
    const res = await fetch('http://localhost:3000/mycart', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userid: userid
      })
    });
    const result = await res.json();
    console.log(result);
    if (result.success) {
      localStorage.setItem('cartitem', JSON.stringify(result.cartitem));
      setData(result.cartitem);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  const handleadd = async (item) => {
    const newq = item.quantity + 1;
    // setPrice(item.price)
    const cartid = item._id;
    const newprice = item.price * newq // Calculate the new price based on the updated quantity1
    console.log(newprice);
    await incdata(cartid, newq, newprice);
  }
  
  const handlesub = async (item) => {
    const newq = item.quantity - 1;
    const cartid = item._id;
    const setprice=item.price - item.price
    const itemprice=item.itemprice - item.price

    await incdata(cartid, newq,itemprice); // Pass cartid and newq to incdata function
  }
  const incdata = async (cartid, newq,itemprice) => { // Define incdata function before using it
    const res = await fetch('http://localhost:3000/increment', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        quantity: newq, // Use newq directly here
        _id: cartid,
        itemprice:itemprice,
    
      })
    });
    fetchdata();
  }

  const handleremove = async (myid) => {
    const res = await fetch('http://localhost:3000/removeitem', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        _id: myid
      })
    });
    const result = await res.json();
    if (result.success) {
      fetchdata();
    }
  }


  return (
    <div className={myCart.container}>
      {data.map((item) => (
        <div key={item._id} className={myCart.box}>
          <div className={myCart.img}>
            <img src={item.photo} alt="" style={{ width: '350px', height: "300px" }} />
          </div>
          <div className={myCart.content}>
            <h1>{item.name}</h1>
            <div className={myCart.qtbtn}>
              <FaCircleMinus size={30} className={myCart.reacticon} style={{ cursor: item.quantity === 1 ? "not-allowed" : "pointer" }} onClick={() => item.quantity >1 && handlesub(item)}/>
              <h2 className={myCart.quantity}>{item.quantity}</h2>
              <IoMdAddCircle size={30} className={myCart.reacticon} onClick={() => handleadd(item)} />
            </div>
            <h2>{item.itemprice}</h2>
           
            <button key={item._id} className={myCart.rem} onClick={() => handleremove(item._id)} >Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

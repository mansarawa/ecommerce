import React, { useEffect, useState } from 'react';
import { FaCircleMinus } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { toast } from 'react-toastify'; 
import myCart from '../layout css/myCart.module.css';

export default function Cart() {

  const [data, setData] = useState([]);
  const [grandtotal, setGrandTotal] = useState(); 
  const[totalitem,setTotalitem]=useState();
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
    console.log(result.cartitem);
    if (result.success) {
      localStorage.setItem('cartitem', JSON.stringify(result.cartitem));
      setData(result.cartitem);
      calculateTotal(result.cartitem);
    }
  }

  useEffect(() => {
    fetchdata();
  }, []);

  const handleadd = async (item) => {
    const newq = item.quantity + 1;
    // setPrice(item.price)
    const cartid = item._id;
    const newprice = item.price * newq 
   
    await incdata(cartid, newq, newprice);
  }
  
  const handlesub = async (item) => {
    const newq = item.quantity - 1;
    const cartid = item._id;
    const setprice=item.price - item.price
    const itemprice=item.itemprice - item.price

    await incdata(cartid, newq,itemprice);
  }
  const incdata = async (cartid, newq,itemprice) => { 
    const res = await fetch('http://localhost:3000/increment', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        quantity: newq,
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

  const calculateTotal=async(cartitem)=>{
    let total=0;
    cartitem.forEach(item => {
      total=total+item.itemprice
    });
    setGrandTotal(total)
    let totalitem=0
    cartitem.forEach(item => {
      totalitem=totalitem+1
    });
    setTotalitem(totalitem)
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
            <h2>₹{item.itemprice}</h2>
           
            <button key={item._id} className={myCart.rem} onClick={() => handleremove(item._id)} >Remove</button>
          </div>
        </div>
      ))}
      <div className={myCart.grandtotal}>
        <div className={myCart.total}>
          <h3>Price ({totalitem} item)</h3>
          <h3>₹{grandtotal}</h3>
        </div>
       
        <div className={myCart.total}>
        <h3>Delivery Charges</h3>
        <h3>Free</h3>
        </div>
        <div className={myCart.total}>
        <h2>Total Amount</h2>
        <h2>₹{grandtotal}</h2>
        </div>
        <div className={myCart.nextcl}>
        <button className={myCart.next}>Next <FaLongArrowAltRight color='white'/></button>
        </div>
      </div>
    </div>
  );
}

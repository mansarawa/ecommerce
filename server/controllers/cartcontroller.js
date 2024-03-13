import express from 'express'
import Cart from '../models/Cart.js';

async function cartcontroller(req,res){
    const {userid,name,quantity,price,photo}=req.body;
    const newCart=await Cart.create({
        name:name,
        userid:userid,
        photo:photo,
        price:price,
        quantity:quantity
    })

    await newCart.save;

    return res.json({message:"add success",success:true})
}

export default cartcontroller
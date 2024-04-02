import Order from "../models/Order.js";

export default async function(req,res){
    const {userid,name,itemprice,state,quantity,photo}=req.body;
    const newOrder=await Order.create({
        name:name,
        photo:photo,
        itemprice:itemprice,
        quantity:quantity,
        state:state,
        userid:userid
    })

    await newOrder.save;

    return res.json({message:'order successfull',success:true})
}
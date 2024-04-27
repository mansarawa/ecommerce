import Order from "../models/Order.js";

export default async function(req,res){
    const {ouserid,oname,oprice,productid,oquantity,ophoto}=req.body;
    const newOrder=await Order.create({
        name:oname,
        photo:ophoto,
        itemprice:oprice,
        quantity:oquantity,
        productid:productid,

        userid:ouserid
    })

    await newOrder.save;

    return res.json({message:'order successfull',success:true,cartitem:newOrder})
}
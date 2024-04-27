import Cart from "../models/Cart.js";

export default async function getcartcontroller(req,res){
    const {userid}=req.body;
    const findCart=await Cart.find({userid})
    if(findCart)
    {
        return res.json({message:'find successfull',cartData:findCart,success:true})
    }
    else
    {
        return res.json({message:'not found',success:false})
    }
}
import Cart from "../models/Cart.js";


async function inccontroller(req,res){
    const {quantity,itemprice,_id}=req.body;
    const finditem=await Cart.findByIdAndUpdate(_id, { quantity: quantity,itemprice:itemprice }, { new: true })
    if(finditem)
    {
        return res.json({message:'find successfull'})
    }
    else
    {
        return res.json({message:'not found'})
    }
}
export default inccontroller
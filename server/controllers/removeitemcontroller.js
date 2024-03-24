import Cart from "../models/Cart.js";

async function removeitemcontroller(req,res){
    const {_id}=req.body;
    const remove=await Cart.findByIdAndDelete(_id)
    if(remove)
    {
       
        return res.json({message:'delete',success:true})
    }
    else
    {
        return res.json({message:'not found',success:false})
    }
    remove.save;

}
export default removeitemcontroller;
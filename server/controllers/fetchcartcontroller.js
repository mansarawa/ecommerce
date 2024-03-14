import Cart from '../models/Cart.js'
async function fetchcartcontroller(req,res){
    const {userid}=req.body;
    const findCart=await Cart.find({userid:userid})
    if(findCart)
    {
        return res.json({message:'finded',success:true,cartitem:findCart})
    }
    else{
        return res.json({message:'not found',succes:false})
    }
}

export default fetchcartcontroller
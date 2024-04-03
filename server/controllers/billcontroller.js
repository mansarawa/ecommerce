import Billing from "../models/Billing.js";

export default async function billcontroller(req,res){
    const {name,email,phone,postel,colony,city,productid,house}=req.body;
    const newAddress=await Billing.create({
        name:name,
        email:email,
        phone:phone,
        postel:postel,
        house:house,
        city:city,
        colony:colony,
        productid:productid
})

    await newAddress.save;

    return res.json({message:"add success",success:true,bill:newAddress})
}
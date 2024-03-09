import User from "../models/User.js";

export default async function logincontroller(req,res){
    const {email,password}=req.body;
    const existUser=await User.findOne({email:email})

    if(existUser)
    {
        if(password===existUser.password)
        {
        return res.json({message:"login success",user:existUser,success:true})
        }
        else
        {
            return res.json({message:"invalid password"})
        }
    }
    else
    {
        return res.json({message:"not found",success:false})
    }
}
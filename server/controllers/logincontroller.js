import User from "../models/User.js";
import jwt from 'jsonwebtoken'
export default async function logincontroller(req,res){
    const {email,password}=req.body;
    const existUser=await User.findOne({email:email})
    const secretKey='secret'
    if(existUser)
    {
        if(password===existUser.password)
        {
            jwt.sign({existUser},secretKey,{expiresIn:'300s'},(err,token)=>{
                
                return res.json({token,message:"login success",user:existUser,success:true})
            })
       
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
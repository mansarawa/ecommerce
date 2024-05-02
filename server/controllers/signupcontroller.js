import User from "../models/User.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
export default async function signupcontroller(req,res){
    const {name,email,password}=req.body;
    const SECRET_KEY="mansa"
     const finduser=await User.findOne({email:email})
    if(finduser)
    {
        return res.json({message:'user not created',success:false})
    }
    else
    {
        const hashpassword=await bcrypt.hash(password,10)
        const newUser=await User.create({
            name:name,
            email:email,
            password:hashpassword
        })
         await newUser.save;
       //const token=jwt.sign({newUser},SECRET_KEY)
        
         return res.json({message:'user create successfully',success:true})
    }
}
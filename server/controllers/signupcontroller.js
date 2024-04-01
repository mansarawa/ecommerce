import User from "../models/User.js";
export default async function signupcontroller(req,res){
    const {name,email,password}=req.body;
   
     const finduser=await User.findOne({email:email})
    if(finduser)
    {
        return res.json({message:'user not created',success:false})
    }
    else
    {
        const newUser=await User.create({
            name:name,
            email:email,
            password:password
        })
         await newUser.save;
    
         return res.json({message:'user create successfully',success:true})
    }
}
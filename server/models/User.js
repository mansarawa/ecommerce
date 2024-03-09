import mongoose, { Schema, mongo } from 'mongoose'

const userSchema=new Schema({
    name:String,
    email:String,
    password:String,
})

const User=mongoose.model('user',userSchema)

export default User
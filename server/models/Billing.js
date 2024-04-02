import mongoose, { Schema } from 'mongoose'

const billSchema=new Schema({
    name:String,
    postel:Number,
    phone:Number,
    house:Number,
    colony:String,
    city:String,
    email:String,
     createdAt: {
        type: Date,
        default: Date.now
    }
})

const Billing=mongoose.model('billing',billSchema)

export default Billing
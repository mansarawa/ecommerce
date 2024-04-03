import mongoose, { Schema } from 'mongoose'

const cartSchema=new Schema({
    name:String,
    quantity:Number,
    price:Number,
    itemprice:Number,
    userid:String,
    photo:String,
  
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Cart=mongoose.model('cart',cartSchema)

export default Cart
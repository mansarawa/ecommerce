import mongoose, { Schema } from 'mongoose'

const cartSchema=new Schema({
    name:String,
    quantity:Number,
    price:String,
    userid:String,
    photo:String
})

const Cart=mongoose.model('cart',cartSchema)

export default Cart
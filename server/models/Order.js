import mongoose, { Schema } from 'mongoose'

const orderSchema=new Schema({
   
        name:[String],
        quantity:[ Number],
        itemprice: [Number],
        productid:[String],
        photo: [String],
        userid:[String],
   
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Order=mongoose.model('order',orderSchema)

export default Order
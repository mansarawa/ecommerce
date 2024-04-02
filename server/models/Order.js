import mongoose, { Schema } from 'mongoose'

const orderSchema=new Schema({
    orderDetails: [{
        name: String,
        quantity: Number,
        itemprice: Number,
        photo: String
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Order=mongoose.model('order',orderSchema)

export default Order
import express from 'express';
import Cart from '../models/Cart.js';

async function cartcontroller(req, res) {
    const { userid,itemprice, name, quantity, price, photo } = req.body;

    try {
        let cartItem = await Cart.findOne({ name: name });

        if (!cartItem) {
            // If the item doesn't exist in the cart, create a new cart item
            cartItem = new Cart({
                name: name,
                userid: userid,
                photo: photo,
                itemprice:itemprice,
                price: price,
                quantity: quantity
            });

            await cartItem.save();

            return res.json({ message: "Item added to cart", cartItem, success: true });
        } else {
        
            cartItem.quantity += 1;
            cartItem.price += parseInt(price);
            cartItem.markModified('quantity');
            cartItem.markModified('price');

            await cartItem.save();

            return res.json({ message: "Quantity updated", cartItem, success: true });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal server error", success: false });
    }
}

export default cartcontroller;

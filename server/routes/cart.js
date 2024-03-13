import express from 'express'
import cartcontroller from '../controllers/cartcontroller.js';

const cartroute=express.Router();

cartroute.post('/cart',cartcontroller)

export default cartroute
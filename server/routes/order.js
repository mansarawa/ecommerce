
import express from 'express'
import ordercontroller from '../controllers/ordercontroller.js';

const order=express.Router();

order.post('/order',ordercontroller);

export default order
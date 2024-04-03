import express from 'express'
import deletecartcontroller from '../controllers/deletecartcontroller.js';

const deletecart=express.Router();

deletecart.put('/deletecart',deletecartcontroller)

export default deletecart;
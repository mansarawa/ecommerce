import express from 'express'

import getcartcontroller from '../controllers/getcartcontroller.js';

const getcart=express.Router();

getcart.put('/getcart',getcartcontroller)

export default getcart
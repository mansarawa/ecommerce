import express from 'express'
import billcontroller from '../controllers/billcontroller.js';

const bill=express.Router();

bill.post('/billing',billcontroller)

export default bill
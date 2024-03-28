import express from 'express'
import inccontroller from '../controllers/inccontroller.js';

const inc=express.Router();

inc.put('/increment',inccontroller)

export default inc
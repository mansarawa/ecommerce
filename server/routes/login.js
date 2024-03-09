import express from 'express'
import logincontroller from '../controllers/logincontroller.js'
const login=express.Router();

login.post('/login',logincontroller)

export default login
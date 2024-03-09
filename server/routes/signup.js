import signupcontroller from '../controllers/signupcontroller.js'
import express from 'express'

const signup=express.Router();

signup.post('/signup',signupcontroller)

export default signup
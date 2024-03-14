import express from 'express'
import fetchcartcontroller from '../controllers/fetchcartcontroller.js'

const fetchcart=express.Router()

fetchcart.post('/mycart',fetchcartcontroller)

export default fetchcart
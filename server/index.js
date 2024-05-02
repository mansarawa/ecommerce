import express from 'express'
import cors from 'cors'
import ConnectToDb from './config/dbConfig.js'
import login from './routes/login.js';
import jwt from 'jsonwebtoken'
import signup from './routes/signup.js';
import cartroute from './routes/cart.js';
import fetchcart from './routes/fetchcart.js';
import removeitem from './routes/removeitem.js';
import inc from './routes/incquantity.js';
import order from './routes/order.js';
import bill from './routes/billing.js';
import deletecart from './routes/deletecar.js';

import getcart from './routes/getcart.js';
const app=express();
app.use(express.json())
app.use(cors({
    origin:"*",
    methods:['POST','GET'],
    credentials:true
}));

app.use('/',signup)
app.use('/',fetchcart)
app.use('/',login);
app.use('/',bill)
app.use('/',cartroute)
app.use('/',inc)
app.use('/',deletecart)
app.use('/',order)
app.use('/',getcart)
app.use('/',removeitem)
await ConnectToDb();

app.listen(3000,()=>{
    console.log("start")
})
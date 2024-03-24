import express from 'express'
import cors from 'cors'
import ConnectToDb from './config/dbConfig.js'
import login from './routes/login.js';

import signup from './routes/signup.js';
import cartroute from './routes/cart.js';
import fetchcart from './routes/fetchcart.js';
import removeitem from './routes/removeitem.js';
const app=express();
app.use(express.json())
app.use(cors({
    origin:"*"
}));

app.use('/',signup)
app.use('/',fetchcart)
app.use('/',login);
app.use('/',cartroute)
app.use('/',removeitem)
await ConnectToDb();
app.listen(3000,()=>{
    console.log("start")
})
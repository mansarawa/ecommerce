import express from 'express'
import cors from 'cors'
import ConnectToDb from './config/dbConfig.js'
import login from './routes/login.js';

import signup from './routes/signup.js';
import cartroute from './routes/cart.js';
const app=express();
app.use(express.json())
app.use(cors());
app.use('/',signup)
app.use('/',login);
app.use('/',cartroute)
await ConnectToDb();
app.listen(3000,()=>{
    console.log("start")
})
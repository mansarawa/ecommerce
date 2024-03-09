import express from 'express'
import cors from 'cors'
import ConnectToDb from './config/dbConfig.js'
import login from './routes/login.js';

import signup from './routes/signup.js';
const app=express();
app.use(express.json())
app.use(cors());
app.use('/',signup)
app.use('/',login);
await ConnectToDb();
app.listen(3000,()=>{
    console.log("start")
})
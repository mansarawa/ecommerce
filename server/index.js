import express from 'express'
import cors from 'cors'
import ConnectToDb from './config/dbConfig.js'
const app=express();
app.use(express.json())
app.use(cors());
await ConnectToDb();
app.listen(3000,()=>{
    console.log("start")
})
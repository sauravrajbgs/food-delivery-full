import express from 'express';
import cors from 'cors';
import { connectDb } from './config/database.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRoute from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
const app=express();
const port= process.env.PORT ||4000;

// middleware
app.use(express.json())
app.use(cors())
 connectDb();
app.get('/',(req ,res)=>{
    res.send("Api working on the port no 4000")

})
app.use("/api/food",foodRouter)

app.use("/images", express.static('uploads'));
app.use ("/api/user",userRouter)
app.use("/api/cart",cartRoute)
app.use("/api/order",orderRouter)

app.listen(port,()=>{
    console.log("server is running on the port 4000")
});

//mongodb+srv://acceadmy123:12233dfddr@cluster0.nqrzq7f.mongod

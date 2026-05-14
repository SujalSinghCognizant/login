const express=require('express');
const dotenv=require('dotenv');
const cookieParser=require('cookie-parser');
const connectDB=require('./config/db');
const userRoutes=require('./routes/user.routes');
const app=express();
app.use(cookieParser());
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/user',userRoutes);
app.listen(process.env.PORT,async ()=>{
    await connectDB();
    console.log("Server Running in Post 3000"); 
})
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:4200', 
    credentials: true               
}));
const mongoose=require('mongoose');
const dotenv=require("dotenv");
dotenv.config();
const configDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Datatbasd Connected");
    }
    catch(err){
        console.log(err);
    }
}
module.exports=configDB;
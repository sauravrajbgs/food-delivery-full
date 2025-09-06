import mongoose from 'mongoose'

 export const connectDb=async()=>{
    await mongoose.connect('mongodb+srv://acceadmy123:12233dfddr@cluster0.nqrzq7f.mongodb.net/acceadmy').then(()=>console.log("Db connected sucessfully"));

}
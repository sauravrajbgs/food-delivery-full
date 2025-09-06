import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import validator from 'validator'
import 'dotenv/config'


/// login User
const loginUser=async(req ,res)=>{
    const{email ,password}=req.body;
    try {
        const user=await userModel.findOne({email})
        if(!user){
            res.json({
                sucess:false,
                message:"user is not registered please register to login"
            })
        }
        const isMatch= await bcrypt.compare(password ,user.password);
        if(! isMatch){
            return res.json({
                sucess:false,
                message:"Password is incorrect please enter valid password"
            })
        }
        const token=createToken(user._id);
        res.json({
            sucess:true,
            token,
        })
    } catch (error) {
        console.log(error)
        res.json({
            sucess:false,
            message:"Something went wrong",
        })
    }
}



// register user

const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
}

const registerUser=async(req ,res)=>{
const{name ,password,email}=req.body;
try {
    const exists=await userModel.findOne({email});
    if(exists){
       return res.json({
            sucess:false,
            message:"user Already register",
        })
    }
    if(!validator.isEmail(email)){
        return res.json({
            sucess:false,
            message:"please enter a valid email"
        })
    }

    if(password.length<8){
        return res.json({
            sucess:false,
            message:"Please enter a strong password",
        })
    }
const salt=await bcrypt.genSalt(10);
const hashedPassword=await bcrypt.hash(password,salt);
const newUser=new userModel({
    name:name,
    email:email,
    password:hashedPassword
})
 const user=await newUser.save();
 const token=createToken(user._id);
 res.json({
    sucess:true,
    token
 })
} catch (error) {
    console.log(error);
    res.json({
        sucess:false,
        message:"Error",

    })
}
}

export { registerUser ,loginUser}
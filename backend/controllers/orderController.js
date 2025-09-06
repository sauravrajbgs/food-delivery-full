import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe'
import 'dotenv/config.js'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const placeOrder = async (req, res) => {
    const frontend_url = "http://localhost:5174"
    try {
        const newOrder = new orderModel({
            userId: req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address,
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });


        const line_items = req.body.items.map((item) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100 
            },
            quantity: item.quantity


        }))

        line_items.push({
            price_data: {
                currency: "inr",
                product_data: {
                    name: "Delivery Charges"
                },
                unit_amount: 40 * 100 
            },
            quantity: 1
        })

        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: "payment",
            success_url: `${frontend_url}/verify?sucess=true&orderId=${newOrder._id}`,
            cancel_url: `${frontend_url}/verify?sucess=false&orderId=${newOrder._id}`,
        })
        res.json({
            sucess: true,
            session_url:session.url,
        })
    } catch (error) {
        console.log(error)
        res.json({
            sucess: false,
            message: "Error"
        })
    }
}
const verifyOrder=async(req ,res)=>{
const{orderId, sucess}=req.body;
try {
    if(sucess=="true"){
        await orderModel.findByIdAndUpdate(orderId,{payment:true});
        res.json({
            sucess:true,
            message:"paid sucessfully"
        })
    }
    else{
        await orderModel.findByIdAndDelete(orderId);
        res.json({
            sucess:false,
            message:"Not paid please try again"
        })
    }
} catch (error) {
    console.log(error);
    res.json({
        sucess:false,
        message:"Error"
    })
}
}

const userOrders=async (req ,res)=>{
try {
    const orders=await orderModel.find({userId:req.body.userId});
    res.json({
        sucess:true,
       
        data:orders,
    }) 
} catch (error) {
    console.log(error)
    res.json({
        sucess:false,
        message:"Error"
    })
}
}

const listOrder =async(ret ,res)=>{
try {
    const orders=await orderModel.find({});
   return res.json({
        sucess:true,
        data:orders
    })
} catch (error) {
   console.log(error);
   return res.json({
    sucess:false,
    message:"Error"
   }) 
}
}
const updatestatus=async(req ,res)=>{
try {
    await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
    return res.json({
        sucess:true,
        message:"Status updated",
    })
} catch (error) {
   console.log(error);
   return res.json({
    sucess:false,
    message:"Error"
   }) 
}
}
export { placeOrder ,verifyOrder,userOrders, listOrder,updatestatus};
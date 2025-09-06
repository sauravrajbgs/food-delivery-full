import userModel from "../models/userModel.js";

const addToCart=async(req ,res)=>{
try {
    let userData=await userModel.findById(req.body.userId)
    let cartData=await userData.cartData;
    if(! cartData[req.body.itemId]){
        cartData[req.body.itemId]=1
    }
    else{
        cartData[req.body.itemId] +=1;
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData})
    res.json({
        sucess:true,
        message:"Cart item added sucussfully"
    })
} catch (error) {
    console.log(error);
    res.json({
        sucess:false,
        message:"Error",
    })
}
}


// remove item from user cart
const removeFromCart=async(req ,res)=>{
try {
    let userData=await userModel.findById(req.body.userId);
    let cartData=await userData.cartData;
    if(cartData[req.body.itemId]>0){
cartData[req.body.itemId]-= 1
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData})
    res.json({
        sucess:true,
        message:'Removed from cart'
    })
} catch (error) {
    console.log(error);
    res.json({
        sucess:false,
        message:" Error"
    })
    
}
}

// fetch user cart data
const getCart=async(req ,res)=>{
try {
    let userData=await userModel.findById(req.body.userId);
    let cartData=await userData.cartData;
    res.json({
        sucess:true,
        cartData
    })
} catch (error) {
    console.log(error);
    res.json({
        sucess:false,
        message:"Error"
    })
}
}

export {addToCart ,removeFromCart ,getCart}
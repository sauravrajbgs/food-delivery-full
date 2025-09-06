import foodModel from "../models/foodModel.js";
import fs from 'fs';


const addFood=async(req ,res)=>{
    let image_filename=`${req .file.filename}`;

    const food=new foodModel({
        name:req.body.name,
        description:req.body.description,
            price:req.body.price,
            category:req.body.category,
            image:image_filename,

    })
    try {
        await food.save();
        res.json({
            sucess:true,
            message:"food added sucessfully",
        })
    } catch (error) {
        console.log(error);
        res.json({
            sucess:false,
            message:"something went wrong please try again",
        })
    }

}

const listFood=async(req ,res)=>{
try {
    const foods=await foodModel.find({});
    res.json({
        sucess:true,
       
        data:foods,
    })

} catch (error) {
    console.log(error);
    res.json({
        sucess:false,
        message:"some thing went wrong"
    })
    
}
}

const removeFood=async(req, res)=>{
  try {
    const food=await foodModel.findById(req.body.id);

    fs.unlink(`uploads/${food.image}`,()=>{})
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({
        sucess:true,
        message:"food image data deleted sucessfully",
    })
  } catch (error) {
    console.log(error);
    res.json({
        sucess:false,
        message:"Error"
    })
  }
}

export{addFood, listFood ,removeFood}
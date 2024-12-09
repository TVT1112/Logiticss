import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const placeOrder= async (req,res)=>{
    try {
        const newOrder = new orderModel({
            UserId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address,
            payment:req.body.payment
        })

        await newOrder.save()
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})
        res.json({success:true,message:"Đã đặt hàng thành công"})

    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Lỗi"})
    }
}

const userOrders= async(req,res) =>{
    try {
        const orders= await orderModel.find({UserId:req.body.userId})
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Lỗi"})
    }
}

const listOrders = async (req,res)=>{
    try {
        const orders= await orderModel.find({})
        res.json({success:true,data:orders})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Lỗi"})
    }
}

const updateStatus = async (req,res)=>{
    try {
        await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status})
        res.json({success:true,message:"Đã cập nhật status"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Lỗi"})   
    }
}
export {placeOrder,userOrders,listOrders,updateStatus}
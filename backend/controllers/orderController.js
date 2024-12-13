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

const getstatic = async (req,res)=>{
    const {startDate,endDate}=req.query
    try {
        const start = startDate ? new Date(startDate) : new Date("1970-01-01");
        const end = endDate ? new Date(endDate) : new Date();
        const data = await orderModel.aggregate([
            {
              $match: {
                date: { $gte: start, $lte: end }, // Lọc theo ngày
              },
            },
            {
              $group: {
                _id: "$status", // Nhóm theo trạng thái
                count: { $sum: 1 }, // Đếm số lượng đơn hàng
              },
            },
          ]);
        res.json({success:true,data:data})
        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Lỗi"}) 
    }
}

const getstaticamount =async (req,res)=>{
    const {startDate,endDate}=req.query
    try {
        const start = startDate ? new Date(startDate) : new Date("1970-01-01");
        const end = endDate ? new Date(endDate) : new Date();
        const statistics = await orderModel.aggregate([
            {
                $match: {
                  date: { $gte: start, $lte: end }, // Lọc theo khoảng thời gian
                },
            },
            { $unwind: "$items" }, // Tách mảng `items` thành các document riêng biệt
            {
              $group: {
                _id: "$items.name", // Nhóm theo `name` của từng item
                totalQuantity: { $sum: "$items.quantity" }, // Tổng quantity
                totalValue: { $sum: { $multiply: ["$items.quantity", "$items.price"] } } // Tổng value
              }
            },
            {
              $project: {
                _id: 0, // Không hiển thị `_id` mặc định
                name: "$_id", // Đổi `_id` thành `name`
                totalQuantity: 1,
                totalValue: 1
              }
            }
          ]);
          res.json({ success: true, data: statistics });  
              
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Lỗi"}) 
    }
}
export {placeOrder,userOrders,listOrders,updateStatus,getstatic,getstaticamount}
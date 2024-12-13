import express from "express"
import mongoose from "mongoose"
import cors from 'cors'
import foodRouter from "./routes/foodRouter.js"
import userRouter from "./routes/userRouter.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRouter.js"
import orderRouter from "./routes/orderRouter.js"
import noteRouter from "./routes/noteRouter.js"
import targetRouter from "./routes/targetRouter.js"
import adminuserRouter from "./routes/adminuserRouter.js"
const PORT=4000

const app = express()
app.use(express.json())
app.use(cors())

mongoose
    .connect("mongodb://127.0.0.1:27017/food_delivery")
    .then(()=> console.log('Mongo connected'))
    .catch((err) => console.log(err));

// api endpoint
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)
app.use("/api/note",noteRouter)
app.use("/api/target",targetRouter)
app.use("/api/adminuser",adminuserRouter)

app.get("/",(req,res)=>{
    res.send("api hoạt động")
})


app.listen(PORT, ()=> console.log(`connected to http://localhost:${PORT}`))
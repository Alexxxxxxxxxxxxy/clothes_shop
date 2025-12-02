// 构建基础服务器
import express from 'express'
// 跨域支持
import cors  from 'cors'
// 配置信息
import "dotenv/config"
// 数据库
import { ConnetDb, GetDb } from './config/mongodb.js'
import ConnectCloudinary from './config/cloudinary.js'
import router from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'

const app = express()
// 端口号配置
const port = process.env.PORT || 4000
// 连接到数据库
ConnetDb((err)=>{
    if(!err){
        console.log(`Connected to database`)
    }
})
const db = GetDb()

// 连接cloudinary
ConnectCloudinary()

// 中间件
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// 登录界面路由
app.use('/api/user', router)

// 管理商品路由
app.use('/api/product', productRouter)

// 创建端口
app.get('/',(req,res)=>{
    res.send("API is running")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
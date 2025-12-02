import express from 'express'
import {addProduct, listProduct, removeProduct, singleProduct} from "../controllers/productController.js"
import upload from '../middleware/multer.js'
import adminAuth from "../middleware/admin.js"

const productRouter = express.Router()

// 增加商品
productRouter.post('/add',adminAuth,upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:1},{name:"image3",maxCount:1},{name:"image4",maxCount:1}]),addProduct)

// 获取商品列表
productRouter.get('/list',listProduct)

// 移除商品
productRouter.delete('/delete',adminAuth,removeProduct)

// 获取单个商品
productRouter.post('/single',singleProduct)

export default productRouter
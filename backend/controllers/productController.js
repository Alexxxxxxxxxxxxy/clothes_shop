import cloudinary from 'cloudinary';
import Joi from "joi"
import {  GetDb } from "../config/mongodb.js"
import { ObjectId } from 'mongodb'

// 增加商品
const addProduct = async (req, res)=>{
    try{
        // console.log(req.body)
        const {name, price, description, category, subCategory, sizes, bestSeller} = req.body

        // 检查数据是否合法
        const schema = Joi.object({
            name: Joi.string().required(),
            price: Joi.string().pattern(new RegExp('^[0-9]{1,}$')).required(),
            description: Joi.string().required(),
            category: Joi.string().required(),
            subCategory: Joi.string().required(),
            bestSeller: Joi.string().required()
        })

        try{
            const value = await schema.validateAsync({name, price, description, category, subCategory, bestSeller})
        }catch(err){
            return res.status(400).json({message: "数据格式错误",error:err.message})
        }
        
        // 获得商品图片
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image1 && req.files.image2[0]
        const image3 = req.files.image1 && req.files.image3[0]
        const image4 = req.files.image1 && req.files.image4[0]

        const images = [image1, image2, image3, image4].filter(item => item !== undefined)

        // 图片上传到cloudinary
        let imageUrl = await Promise.all(
            images.map(async (item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:"image"})

                return result.secure_url
            })
        )

        const ProductData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            bestSeller: bestSeller === "true"?true:false,
            sizes: JSON.parse(sizes),
            images: imageUrl,
            date: Date.now()
        }

        // 添加数据到数据库
        let db = GetDb()
        db.collection("clothes").insertOne(ProductData).then(doc=>{
            res.status(200).json({message: "添加商品成功"})
        }).catch(err=>{
            console.error("添加商品失败:", err);
            res.status(500).json({message: "添加商品失败，请稍后重试"})
        })
    }catch(err){
        res.status(500).json({message: "添加商品失败",error:err.message})
    }
}

// 获取商品列表
const listProduct = async (req, res)=>{
    try{
        // 获取商品列表
        let db = GetDb()

        const Info = await db.collection("clothes").find()
        if(Info){
            const Products = await Info.toArray()
            res.status(200).json({message: "获取商品列表成功", Products})
        }
        else{
            res.status(400).json({message: "获取商品列表失败"})
        }
    }catch(err){
        res.status(500).json({message: "获取商品列表失败",error:err.message})
    }
}

// 移除商品
const removeProduct = async (req, res)=>{
    try{
        // 获取id
        const id = req.query

        // 删除商品
        let db = GetDb()
        db.collection("clothes").deleteOne({_id: new ObjectId(id)}).then(doc=>{
            res.status(200).json({message: "删除商品成功",doc})
        }).catch(err=>{
            res.status(500).json({message: "删除商品失败",error:err.message})
        })
    }catch(err){
        res.status(500).json({message: "删除商品失败",error:err.message})
    }
}

// 获取单个商品
const singleProduct = async (req, res)=>{
    try{
        const productInfo = req.body
        
        let db = GetDb()
        db.collection("clothes").findOne(productInfo).then(doc=>{
            res.status(200).json({message: "获取单个商品成功",doc})
        }).catch(err=>{
            res.status(500).json({message: "获取单个商品失败",error:err.message})
        })
        
    }catch(err){
        res.status(500).json({message: "获取单个商品失败",error:err.message})
    }
}

export {addProduct, listProduct, removeProduct, singleProduct}
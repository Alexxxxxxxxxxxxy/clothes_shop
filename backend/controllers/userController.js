import Joi from "joi"
import { GetDb } from '../config/mongodb.js'
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// 生成jwt token
const generateToken = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn:"24h"})
}

// 登录路由设置
const LoginUser = async (req, res)=>{
    try{
        const {email, password} = req.body

        // 检查用户是否存在
        const db = GetDb()
        const user = await db.collection("user_info").findOne({email})
        if(!user){
            return res.status(400).json({message: "用户不存在"})
        }

        // 检查密码是否相同
        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(400).json({message: "密码错误"})
        }

        // 发送token
        const token = generateToken(user._id)
        res.status(200).json({message: "登录成功", token})

    }catch(err){
        res.status(500).json({message: "登录失败",error:err.message})
    }
} 

// 注册路由设置
const RegisterUser = async (req, res)=>{
    try{
        const {name, email, password} = req.body

        // 判断email是否存在
        const db = GetDb()
        const user = await db.collection("user_info").findOne({email})
        if(user){
            return res.status(400).json({message: "Email already exists"})
        }
        
        // 判断输入是否合法
        const schema = Joi.object({
            name: Joi.string().min(3).max(30).required(),
            email: Joi.string().email().required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,}$')).required(),
        })
        try{
            const value = await schema.validateAsync({name, email, password})
        }catch(err){
            if(err.details[0].path[0] === "name"){
                return res.status(400).json({message: "名字必须在3-30个字符之间"})
            }else if(err.details[0].path[0] === "email"){
                return res.status(400).json({message: "邮箱不合法"})
            }else if(err.details[0].path[0] === "password"){
                return res.status(400).json({message: "密码必须在8个字符以上"})
            }
        }

        // 把密码hash加密
        const salt = await bcrypt.genSalt(10)
        const hasedPassword = await bcrypt.hash(password, salt)

        // 插入新用户
        db.collection("user_info").insertOne({name, email, password: hasedPassword}).then(doc=>{
            // 生成token 
            const token = generateToken(doc.insertedId)
            res.status(200).json({message: "注册成功", token})
        }).catch(err=>{
            res.status(500).json({message: "注册失败",error:err.message})
        })
    } catch(err){
        res.status(500).json({message: "注册失败",error:err.message})
    }
}

// 管理员登录
const AdminLogin = async (req, res)=>{
    try{
        const {email, password} = req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign({email,password}, process.env.JWT_SECRET,{expiresIn:"2h"})
            res.status(200).json({message: "登录成功",token})
        }else{
            res.status(400).json({message: "邮箱或密码错误"})
        }
    }catch(err){
        res.status(500).json({message: "登录失败",error:err.message})
    }
}

export {LoginUser, RegisterUser, AdminLogin}
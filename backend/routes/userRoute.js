import express from 'express'

import {LoginUser, RegisterUser, AdminLogin} from "../controllers/userController.js"

// 创建路由实例
const router = express.Router()

// 注册逻辑
router.post('/register', RegisterUser)

// 登录路由
router.post('/login', LoginUser)

// 管理员登录
router.post('/admin', AdminLogin)

export default router
import jwt from 'jsonwebtoken'

// 验证是否是管理员登录
const adminAuth = async (req,res, next)=>{
    try{
        const {token}  = req.headers

        if(!token){
            return res.json({admin: false, message: "没有授权登录"})
        }

        // 解码
        const token_decode  = jwt.verify(token, process.env.JWT_SECRET)

        if(token_decode.email !== process.env.ADMIN_EMAIL || token_decode.password !== process.env.ADMIN_PASSWORD){
            return res.json({admin: false, message: "没有授权登录"})
        }
        next()
    }catch(err){
        res.status(401).json({message: "用户未登录",error:err.message})
    }
}

export default adminAuth
import multer from 'multer'

// 用来支持formdata类型的数据请求
const storage = multer.diskStorage({
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({storage:storage})

export default upload
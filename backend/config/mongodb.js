import { MongoClient } from 'mongodb';

let dbconnection 
// 连接到mongodb数据库
const ConnetDb = (cb)=>{
    MongoClient.connect(
        `${process.env.MONGODB_URI}`
    ).then((client)=>{
        dbconnection = client.db();
        return cb()
    }).catch((err)=>{
        return cb(err)
    })
}

const GetDb = ()=> dbconnection

export {ConnetDb,GetDb}
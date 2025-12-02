import ceremonial from './ceremonial.jpg';
import ceremonial2 from './ceremonial2.jpg';
import Tshirt from './T-shirt.jpg';
import vercoat from './vercoat.jpg';
import badguyshirt from './badguy-T-shirt.jpg';
import vercoat2 from './vercoat2.jpg';
import gsuit1 from './gsuit1.jpeg';
import gsuit2 from './gsuit2.jpeg';
import gsuit3 from './gsuit3.jpeg';
import gsuit4 from './gsuit4.jpeg';
import bsuit1 from './b_childsuit1.jpg';
import bsuit2 from './b_childsuit2.jpg';
import bsuit3 from './b_childsuit3.jpg';
import bsuit4 from './b_childsuit4.jpg';
import shirt1 from './shirt1.jpeg';
import shirt2 from './shirt2.jpeg';
import bluevercoat from './bluevercoat.jpg';
import coat1 from './coat1.jpg';
import coat2 from './coat2.jpg';
import coat3 from './coat3.jpg';
import coat4 from './coat4.jpg';
import gridshirt1 from './gridshirt1.jpeg';
import gridshirt2 from './gridshirt2.jpeg';
import gridshirt3 from './gridshirt3.jpeg';
import gridshirt4 from './gridshirt4.jpeg';
import blackcoat1 from './blackcoat1.jpeg';
import blackcoat2 from './blackcoat2.jpeg';
import blackcoat3 from './blackcoat3.jpeg';
import blackcoat4 from './blackcoat4.jpeg';
import straightvercoat1 from './straightvercoat1.jpeg';
import straightvercoat2 from './straightvercoat2.jpeg';
import straightvercoat3 from './straightvercoat3.jpeg';
import straightvercoat4 from './straightvercoat4.jpeg';
import girlgridshirt1 from './girlgridshirt1.jpeg';
import girlgridshirt2 from './girlgridshirt2.jpeg';
import yellowcoat1 from './yellowcoat1.png';
import yellowcoat2 from './yellowcoat2.png';
import greenshirt1 from './greenshirt1.png';
import greenshirt2 from './greenshirt2.png';
import grayshirt1 from './grayshirt1.png';
import grayshirt2 from './grayshirt2.png';

export const products = [
    {
        _id: "1",
        name: "男士塔士多礼服西装",
        description: "外套采用天鹅绒​材质，内搭白色礼服衬衫、黑色领结，双排扣设计，更显庄重复古，强化仪式感，适配晚宴、庆典、婚礼等高端社交或仪式性场合",
        price: 1299,
        image: [ceremonial,ceremonial2],
        category: "男装",
        subCategory: "ceremonial",
        size: ["S", "M", "L", "XL", "XXL"],
        date: new Date().getTime(),
        bestseller: true
    },
    {
        _id:"2",
        name: "男士简约T恤",
        description: "简约的T恤，舒适透气，适合日常穿着",
        price: 199,
        image: [Tshirt],
        category: "男装",
        subCategory: "T-shirt",
        size: ["S", "M", "L", "XL", "XXL"],
        date: new Date().getTime(),
        bestseller: false
    },
    {
        _id:"3",
        name: "酷炫男士T恤",
        description: "酷炫的T恤，适合日常穿着",
        price: 299,
        image: [badguyshirt],
        category: "男装",
        subCategory: "T-shirt",
        size: ["S", "M", "L", "XL", "XXL"],
        date: new Date().getTime(),
        bestseller: true
    },
    {
        _id:"4",
        name: "女士收腰大衣",
        description: "收腰设计，时尚百搭",
        price: 1299,
        image: [vercoat],
        category: "女装",
        subCategory: "coat",
        size: ["S", "M", "L"],
        date: new Date().getTime(),
        bestseller: false
    },
    {
        _id:"5",
        name: "女士西装领大衣",
        description: "经典的西装领，利落大气，秋冬经典单品，融合正式与时尚感，适配职场、日常等多种场景。",
        price: 1299,
        image: [vercoat2],
        category: "女装",
        subCategory: "coat",
        size: ["S", "M", "L"],
        date: new Date().getTime(),
        bestseller: true
    },
    {
        _id:"6",
        name: "儿童套装(女)",
        description: "纯白色短袖T恤，蓝色高腰阔腿牛仔裤，随性潮流，展现孩童自信与活力",
        price: 999,
        image: [gsuit1, gsuit2, gsuit3, gsuit4],
        category: "童装",
        subCategory: "suit",
        size: ["S", "M", "L"],
        date: new Date().getTime(),
        bestseller: true
    },
    {
        _id:"7",
        name: "儿童套装(男)",
        description:"整套搭配色彩大胆吸睛，剪裁精致考究，将童装的活泼个性与西装的优雅质感巧妙融合。无论是舞台表演、庆典活动，还是日常出街，都能让孩子自信展现时尚态度，同时兼顾舒适与实用性。",
        price: 1099,
        image: [bsuit1, bsuit2, bsuit3, bsuit4],
        category: "童装",
        subCategory: "suit",
        size: ["S", "M", "L"],
        date: new Date().getTime(),
        bestseller: true
    },
    {
        _id:"8",
        name: "男士休闲衬衫",
        description: "舒适透气，适合日常穿着",
        price: 199,
        image: [shirt1,shirt2],
        category: "男装",
        subCategory: "shirt",
        size: ["S", "M", "L", "XL", "XXL"],
        date: new Date().getTime(),
        bestseller: false
    },
    {
        _id:"9",
        name: "清新毛呢大衣",
        description: "毛呢大衣，清新优雅，适合秋冬季节",
        price: 1299,
        image: [bluevercoat],
        category: "女装",
        subCategory: "coat",
        size: ["S", "M", "L"],
        date: new Date().getTime(),
        bestseller: true
    },
    {
        _id:"10",
        name: "女士浅卡色外套",
        description: "浅卡色外套，复古英伦风，更显随性大气",
        price: 999,
        image: [coat1, coat2, coat3, coat4],
        category: "女装",
        subCategory: "coat",
        size: ["S", "M", "L"],
        date: new Date().getTime(),
        bestseller: false
    },
    {
        _id:"11",
        name: "男士格子衬衫",
        description: "格子衬衫，时尚百搭，适合日常穿着",
        price: 199,
        image: [gridshirt1, gridshirt2, gridshirt3, gridshirt4],
        category: "男装",
        subCategory: "shirt",
        size: ["S", "M", "L", "XL", "XXL"],
        date: new Date().getTime(),
        bestseller: true
    },
    {
        _id:"12",
        name: "男士黑色外套",
        description: "黑色外套，高冷沉稳，适合日常穿着",
        price: 599,
        image: [blackcoat1, blackcoat2, blackcoat3, blackcoat4],
        category: "男装",
        subCategory: "coat",
        size: ["S", "M", "L", "XL", "XXL"],
        date: new Date().getTime(),
        bestseller: false
    },
    {
        _id:"13",
        name: "女士直筒外套",
        description: "直筒外套，时尚百搭，适合日常穿着",
        price: 1299,
        image: [straightvercoat1, straightvercoat2, straightvercoat3, straightvercoat4],
        category: "女装",
        subCategory: "coat",
        size: ["S", "M", "L"],
        date: new Date().getTime(),
        bestseller: true
    },
    {
        _id:"14",
        name: "女士格子衬衫",
        description: "格子衬衫，时尚百搭，适合日常穿着",
        price: 199,
        image: [girlgridshirt1, girlgridshirt2],
        category: "女装",
        subCategory: "shirt",
        size: ["S", "M"],
        date: new Date().getTime(),
        bestseller: false
    },
    {
        _id:"15",
        name: "男士黄色短外套",
        description: "黄色短外套，欧美风格，简洁干净百搭",
        price: 399,
        image: [yellowcoat1, yellowcoat2],
        category: "男装",
        subCategory: "coat",
        size: ["S", "M", "L", "XL", "XXL"],
        date: new Date().getTime(),
        bestseller: true
    },
    {
        _id:"16",
        name: "男士欧美衬衫",
        description: "欧美衬衫，简洁干净百搭",
        price: 299,
        image: [greenshirt1, greenshirt2],
        category: "男装",
        subCategory: "shirt",
        size: ["S", "M", "L"],
        date: new Date().getTime(),
        bestseller: true
    },
    {
        _id:"17",
        name: "男士冬季长袖",
        description: "冬季长袖，保暖舒适",
        price: 199,
        image: [grayshirt1, grayshirt2],
        category: "男装",
        subCategory: "shirt",
        size: ["S", "M", "L"],
        date: new Date().getTime(),
        bestseller: false
    }
]
import { createContext, use, useEffect, useState } from "react";
import { products } from "../assets/assetx"
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"

export const ShopContext = createContext(null)

const ShopContextProvider = (props)=>{
    const currency = "￥"
    const delivery_fee = 10
    const [search, setSearch] = useState('')
    const [showSearch, setShowSearch] = useState(true)
    const [cartItem, setCartItem] = useState({})

    const addToCart = async (itemId,size)=>{

        if(!size){
            toast.error("请选择尺寸")
            return ;
        }
        let cartData = structuredClone(cartItem)

        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1
            }
            else {
                cartData[itemId][size] = 1
            }
        }
        else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        setCartItem(cartData)
    }

    const GetCartCount =()=>{
        let num =0
        for(let key in cartItem){
            for(let key2 in cartItem[key]){
                try{
                    if(cartItem[key][key2] > 0){
                        num+= cartItem[key][key2]
                    }
                }
                catch(error){

                }
            }
        }
        num = num<10?num:""+num
        return num
    }

    const updateCartItem = async (id,size, quantity)=>{
        let cartData = structuredClone(cartItem)
        if(cartData[id]){
            if(cartData[id][size]){
                cartData[id][size] = parseInt(quantity)
            }
            else {
                cartData[id][size] = parseInt(quantity)
            }
        }
        else {
            cartData[id] = {}
            cartData[id][size] = parseInt(quantity)
        }
        setCartItem(cartData)
    }

    const getCartTotal = ()=>{
        let total = 0
        for(let key in cartItem){
            let productData = products.find((item)=>item._id === key)
            for(let key2 in cartItem[key]){
                try{
                    if(cartItem[key][key2] > 0){
                        total += parseInt(cartItem[key][key2]) * productData.price
                    }
                }
                catch(error){}
            }
        }
        return total;
    }

    const value ={
        products,currency,delivery_fee,
        search, setSearch,
        showSearch, setShowSearch,
        cartItem, addToCart,
        GetCartCount,updateCartItem,
        getCartTotal
    }

    return(
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
    )
}

export default ShopContextProvider

import axios from "axios"
import * as types from "./actioType"

const AddToCartRequest=()=>{
    return {
        type:types.ADD_CART_REQUEST,
    }
}

const AddToCartSuccess=(payload)=>{
    return {
        type:types.ADD_CART_SUCCESS,
        payload
    }
}

const AddToCartFailure=()=>{
    return {
        type:types.ADD_CART_FAILURE,
    }
}


export const AddToCart=(payload)=>(dispatch)=>{
dispatch(AddToCartRequest());
axios.get("https://e-shop-store.up.railway.app/api/cart")
.then((r)=>
// console.log("r",r)
dispatch(AddToCartSuccess(r.data))
)
.catch((e)=>dispatch(AddToCartFailure(e.data)))
}

// *******************************************add to cartpost ***************************************************



const AddProductInCartRequest=()=>{
    return {
        type:types.ADD_PRODUCT_IN_CART_REQUEST,
    }
}

const AddProductInCartSuccess=(payload)=>{
    return {
        type:types.ADD_PRODUCT_IN_CART_SUCCESS,
        payload
    }
}

const AddProductInCartFailure=()=>{
    return {
        type:types.ADD_PRODUCT_IN_CART_FAILURE,
    }
}


export const AddProductInCart=(payload)=>(dispatch)=>{
dispatch(AddProductInCartRequest());
axios.post("https://e-shop-store.up.railway.app/api/cart",payload)
.then((r)=>
// console.log("r",r)
dispatch(AddProductInCartSuccess(r.data))
)
.catch((e)=>dispatch(AddProductInCartFailure(e.data)))
}


// *********************************************** REMOVE PRODUCT **************************************************


const removeCartRequest=()=>{
    return {
        type:types.REMOVE_PRODUCT_IN_CART_REQUEST,
    }
}

const removeCartSuccess=(payload)=>{
    return {
        type:types.REMOVE_PRODUCT_IN_CART_SUCCESS,
        payload
    }
}

const removeCartFailure=()=>{
    return {
        type:types.REMOVE_PRODUCT_IN_CART_FAILURE,
    }
}


export const removeCart=(payload)=>(dispatch)=>{
dispatch(removeCartRequest());
axios.delete(`https://e-shop-store.up.railway.app/api/cart/${payload}`)
.then((r)=>
// console.log("r",r)
dispatch(removeCartSuccess(r.data))
)
.catch((e)=>dispatch(removeCartFailure(e.data)))
}

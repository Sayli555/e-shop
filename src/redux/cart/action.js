
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
axios.get("http://localhost:8081/cart")
.then((r)=>
// console.log("r",r)
dispatch(AddToCartSuccess(r.data))
)
.catch((e)=>dispatch(AddToCartFailure(e.data)))
}

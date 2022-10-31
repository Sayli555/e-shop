import axios from "axios";
import * as types from "./actionType";

const womensProductFetchRequest=()=>{
    return {
        type:types.WOMENS_PRODUCT_FETCH_REQUEST,
    }
}

const womensProductFetchSuccess=(payload)=>{
    return {
        type:types.WOMENS_PRODUCT_FETCH_SUCCESS,
        payload
    }
}

const womensProductFetchFailure=()=>{
    return {
        type:types.WOMENS_PRODUCT_FETCH_FAILURE,
    }
}


export const womensDataGet=(params)=>(dispatch)=>{
dispatch(womensProductFetchRequest());
axios.get("https://e-shop24.herokuapp.com/api/womens",params)
.then((r)=>
// console.log("r",r.data)
dispatch(womensProductFetchSuccess(r.data))
)
.catch((e)=>dispatch(womensProductFetchFailure(e.data)))
}



// **********************************SINGLE PRODUCT FETCH*******************************************************


const womensSingleProductRequest=()=>{
    return {
        type:types.WOMENS_SINGLE_PRODUCT_REQUEST,
    }
}

const womensSingleProductSuccess=(payload)=>{
    return {
        type:types.WOMENS_SINGLE_PRODUCT_SUCCESS,
        payload
    }
}

const womensSingleProductFailure=()=>{
    return {
        type:types.WOMENS_SINGLE_PRODUCT_FAILURE,
    }
}


export const womensSingleDataGet=(payload)=>(dispatch)=>{
dispatch(womensSingleProductRequest());
axios.get(`https://e-shop24.herokuapp.com/api/womens/${payload}`)
.then((r)=>
// console.log("r",r.data)
dispatch(womensSingleProductSuccess(r.data))
)
.catch((e)=>dispatch(womensSingleProductFailure(e.data)))
}









import axios from "axios";
import * as types from "./actionType";

const accessoriesProductFetchRequest=()=>{
    return {
        type:types.ACCESORIES_PRODUCT_FETCH_REQUEST,
    }
}

const accessoriesProductFetchSuccess=(payload)=>{
    return {
        type:types.ACCESORIES_PRODUCT_FETCH_SUCCESS,
        payload
    }
}

const accessoriesProductFetchFailure=()=>{
    return {
        type:types.ACCESORIES_PRODUCT_FETCH_FAILURE,
    }
}


export const accessoriesDataGet=(params)=>(dispatch)=>{
dispatch(accessoriesProductFetchRequest());
axios.get("https://e-shop24.herokuapp.com/api/accessories",params)
.then((r)=>
// console.log("r",r.data)
dispatch(accessoriesProductFetchSuccess(r.data))
)
.catch((e)=>dispatch(accessoriesProductFetchFailure(e.data)))
}



// **********************************SINGLE PRODUCT FETCH*******************************************************


const accessoriesSingleProductRequest=()=>{
    return {
        type:types.ACCESORIES_SINGLE_PRODUCT_REQUEST,
    }
}

const accessoriesSingleProductSuccess=(payload)=>{
    return {
        type:types.ACCESORIES_SINGLE_PRODUCT_SUCCESS,
        payload
    }
}

const accessoriesSingleProductFailure=()=>{
    return {
        type:types.ACCESORIES_SINGLE_PRODUCT_FAILURE,
    }
}


export const accessoriesSingleDataGet=(payload)=>(dispatch)=>{
dispatch(accessoriesSingleProductRequest());
axios.get(`https://e-shop24.herokuapp.com/api/accessories/${payload}`)
.then((r)=>
// console.log("r",r.data)
dispatch(accessoriesSingleProductSuccess(r.data))
)
.catch((e)=>dispatch(accessoriesSingleProductFailure(e.data)))
}


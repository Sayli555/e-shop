import axios from "axios";
import * as types from "./actionType";

const mensProductFetchRequest=()=>{
    return {
        type:types.MEN_PRODUCT_FETCH_REQUEST,
    }
}

const mensProductFetchSuccess=(payload)=>{
    return {
        type:types.MEN_PRODUCT_FETCH_SUCCESS,
        payload
    }
}

const mensProductFetchFailure=()=>{
    return {
        type:types.MEN_PRODUCT_FETCH_FAILURE,
    }
}


export const mensDataGet=(params)=>(dispatch)=>{
dispatch(mensProductFetchRequest());
axios.get("http://localhost:8081/mens",params)
.then((r)=>

// console.log("r",r)
dispatch(mensProductFetchSuccess(r.data))
)
.catch((e)=>dispatch(mensProductFetchFailure(e.data)))
}


// **************************************************mens single product ***********************************************


const mensSingleProductRequest=()=>{
    return {
        type:types.MENS_SINGLE_PRODUCT_REQUEST,
    }
}

const mensSingleProductSuccess=(payload)=>{
    return {
        type:types.MENS_SINGLE_PRODUCT_SUCCESS,
        payload
    }
}

const mensSingleProductFailure=()=>{
    return {
        type:types.MENS_SINGLE_PRODUCT_FAILURE,
    }
}


export const mensSingleDataGet=(payload)=>(dispatch)=>{
dispatch(mensSingleProductRequest());
axios.get(`http://localhost:8081/mens/${payload}`)
.then((r)=>
// console.log("r",r.data)
dispatch(mensSingleProductSuccess(r.data))
)
.catch((e)=>dispatch(mensSingleProductFailure(e.data)))
}


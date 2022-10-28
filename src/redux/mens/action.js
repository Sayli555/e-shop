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


export const mensDataGet=(payload)=>(dispatch)=>{
dispatch(mensProductFetchRequest());
axios.get("http://localhost:8080/mens")
.then((r)=>

dispatch(mensProductFetchSuccess(r.data))
)
.catch((e)=>dispatch(mensProductFetchFailure(e.data)))
}
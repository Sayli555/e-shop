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
axios.get("http://localhost:8081/womens",params)
.then((r)=>
// console.log("r",r.data)
dispatch(womensProductFetchSuccess(r.data))
)
.catch((e)=>dispatch(womensProductFetchFailure(e.data)))
}
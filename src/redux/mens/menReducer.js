

import * as types from "./actionType";

const init={
    mens:[],
    isLoading:false,
    error:false

}

export const mensReducer=(state=init,{type,payload})=>{

    switch(type){
        case types.MEN_PRODUCT_FETCH_REQUEST :{
            return {
                isLoading:true,
                error:false
            }
        }
        case types.MEN_PRODUCT_FETCH_SUCCESS :{
            return {
                mens:payload,
                isLoading:false,
                error:false
            }
        }
        case types.MEN_PRODUCT_FETCH_REQUEST :{
            return {
                isLoading:false,
                error:true
            }
        }
        default:{
            return state
        }
    }
}
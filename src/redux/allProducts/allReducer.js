

import * as types from "./actionType";

const init={
    allProducts:[],
    isLoading:false,
    error:false,
    singleProduct:{}

}

export const allReducer=(state=init,{type,payload})=>{

    switch(type){
        case types.ALL_PRODUCT_FETCH_REQUEST :{
            return {
                ...state,
                isLoading:true,
                error:false
            }
        }
        case types.ALL_PRODUCT_FETCH_SUCCESS :{
            return {
                ...state,
                allProducts:payload,
                isLoading:false,
                error:false
            }
        }
        case types.ALL_PRODUCT_FETCH_FAILURE :{
            return {
                ...state,
                isLoading:false,
                error:true
            }
        }



        // *********************************all single products************************************************


        case types.ALL_SINGLE_PRODUCT_REQUEST :{
            return {
                ...state,
                isLoading:true,
                error:false
            }
        }
        case types.ALL_SINGLE_PRODUCT_SUCCESS:{
            
            return {
                ...state,
                singleProduct:payload,
                isLoading:false,
                error:false
            }
        }
        case types.ALL_SINGLE_PRODUCT_FAILURE :{
            return {
                ...state,
                isLoading:false,
                error:true
            }
        }
        default:{
            return state
        }
    }
}
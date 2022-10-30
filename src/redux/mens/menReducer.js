

import * as types from "./actionType";

const init={
    mens:[],
    isLoading:false,
    error:false,
    singleProduct:{}

}

export const mensReducer=(state=init,{type,payload})=>{

    switch(type){
        case types.MEN_PRODUCT_FETCH_REQUEST :{
            return {
                ...state,
                isLoading:true,
                error:false
            }
        }
        case types.MEN_PRODUCT_FETCH_SUCCESS :{
            return {
                ...state,
                mens:payload,
                isLoading:false,
                error:false
            }
        }
        case types.MEN_PRODUCT_FETCH_REQUEST :{
            return {
                ...state,
                isLoading:false,
                error:true
            }
        }



        // *********************************mens single products************************************************


        case types.MENS_SINGLE_PRODUCT_REQUEST :{
            return {
                ...state,
                isLoading:true,
                error:false
            }
        }
        case types.MENS_SINGLE_PRODUCT_SUCCESS:{
            
            return {
                ...state,
                singleProduct:payload,
                isLoading:false,
                error:false
            }
        }
        case types.MENS_SINGLE_PRODUCT_FAILURE :{
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
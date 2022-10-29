

import * as types from "./actionType";

const init={
    womens:[],
    isLoading:false,
    error:false,
    singleProduct:{}

}

export const womensReducer=(state=init,{type,payload})=>{

    switch(type){
        case types.WOMENS_PRODUCT_FETCH_REQUEST :{
            return {
                ...state,
                isLoading:true,
                error:false
            }
        }
        case types.WOMENS_PRODUCT_FETCH_SUCCESS :{
            return {
                ...state,
                womens:payload,
                isLoading:false,
                error:false
            }
        }
        case types.WOMENS_PRODUCT_FETCH_REQUEST :{
            return {
                ...state,
                isLoading:false,
                error:true
            }
        }




        // ***********************************************singleProduct**********************************************
      
        case types.WOMENS_PRODUCT_FETCH_REQUEST :{
            return {
                ...state,
                isLoading:true,
                error:false
            }
        }
        case types.WOMENS_PRODUCT_FETCH_SUCCESS :{
            return {
                ...state,
                singleProduct:payload,
                isLoading:false,
                error:false
            }
        }
        case types.WOMENS_PRODUCT_FETCH_REQUEST :{
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
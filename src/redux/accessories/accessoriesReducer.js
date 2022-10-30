

import * as types from "./actionType";

const init={
    accessories:[],
    isLoading:false,
    error:false,
    singleProduct:{}

}

export const accessoriesReducer=(state=init,{type,payload})=>{

    switch(type){
        case types.ACCESORIES_PRODUCT_FETCH_REQUEST :{
            return {
                ...state,
                isLoading:true,
                error:false
            }
        }
        case types.ACCESORIES_PRODUCT_FETCH_SUCCESS:{
            return {
                ...state,
                accessories:payload,
                isLoading:false,
                error:false
            }
        }
        case types.ACCESORIES_PRODUCT_FETCH_FAILURE :{
            return {
                ...state,
                isLoading:false,
                error:true
            }
        }




        // ***********************************************singleProduct**********************************************
      
        case types.ACCESORIES_SINGLE_PRODUCT_REQUEST :{
            return {
                ...state,
                isLoading:true,
                error:false
            }
        }
        case types.ACCESORIES_SINGLE_PRODUCT_SUCCESS:{
            
            return {
                ...state,
                singleProduct:payload,
                isLoading:false,
                error:false
            }
        }
        case types.ACCESORIES_SINGLE_PRODUCT_FAILURE :{
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
import * as types from "./actioType";

const init={
    cart:[],
    isLoading:false,
    error:false

}

export const cartReducer=(state=init,{type,payload})=>{

    switch(type){
        case types.ADD_CART_REQUEST :{
            return {
                ...state,
                isLoading:true,
                error:false
            }
        }
        case types.ADD_CART_SUCCESS :{
            return {
                ...state,
                cart:[
                    ...state.cart,
                    payload
                ],
                    
            
                isLoading:false,
                error:false
            }
        }
        case types.ADD_CART_FAILURE :{
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
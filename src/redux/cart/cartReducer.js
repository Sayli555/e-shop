import * as types from "./actioType";

const init={
    cart:[],
    TotalPrice:0,
    TotalCartItem:0,
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
                cart:                
                    payload    ,             
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


        // ********************************post Request*****************************************

        case types.ADD_PRODUCT_IN_CART_REQUEST:{
            return {
                ...state,
                isLoading:true,
                error:false
            }
        }
        case types.ADD_PRODUCT_IN_CART_SUCCESS :{
           const {quantity,totalPrice}=payload;
           const Tprice=state.TotalPrice +totalPrice
           
           
        //    console.log("check",Tprice,state.TotalPrice)
            return {
                ...state,
                cart:[
                    ...state.cart,
                    payload
                ],  
                TotalPrice:Tprice,
                TotalCartItem:quantity,
                isLoading:false,
                error:false
            }
        }
        case types.ADD_PRODUCT_IN_CART_FAILURE :{
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
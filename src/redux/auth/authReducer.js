import * as types from "./actionType";
const init={
    users:[],
    loginUser:null,
}

export const authReducer=(state=init,{type,payload})=>{

    switch(type){
        case types.REGISTER :
            return {
                ...state,
                users:[...state.users,payload]
            }

        case types.LOGIN:
            return {
                ...state,
                loginUser:payload
            }   
            
            
         default:{
            return state
         }   
    }
}
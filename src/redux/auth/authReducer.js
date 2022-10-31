import * as types from "./actionType";
const init={
    users:[],
    loginUser:null,
    checkuser:false,
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
                loginUser:payload,
                checkuser:true
            }   
        case types.LOGOUT:
            return {
                ...state,
                loginUser:null,
                checkuser:false
            }     
            
         default:{
            return state
         }   
    }
}
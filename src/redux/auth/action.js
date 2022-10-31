import * as types from "./actionType";


export const register=(payload)=>{
    return {
        type: types.REGISTER,
        payload
    }
}

export const login=(payload)=>{
    return {
        type:types.LOGIN,
        payload
    }
}


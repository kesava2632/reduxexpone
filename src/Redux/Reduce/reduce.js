import { PASSWORD, USER_NAME } from "../Actions/ActionType"

const initialState={
    username:"",
    password:''
}

export const reduser = (state=initialState, action) =>{
    switch(action.type){
        case USER_NAME :
            return{
                ...state,
                username:action.payload
            }
        case PASSWORD:
            return{
                ...state,
                password:action.payload
            }

        default: return state
    }
}
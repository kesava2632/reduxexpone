import { USER_NAME,PASSWORD } from "./ActionType";

export const userName = (username) =>{
    return{
        type:USER_NAME,
        payload:username
    }
}

export const userPassword= (password) =>{
    return{
        type:PASSWORD,
        payload:password
    }
}
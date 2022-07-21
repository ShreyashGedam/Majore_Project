import { authActions } from "./action"

const initState = {
    loading : false,
    token : '',
    error : false,
    isAuth : false
}
 
export const authRuducer = (state = initState , action) => {

    switch(action.type) {
        case authActions.GET_AUTH_REQUEST : {
            return {
                ...state,
                loading : true,
                error : false,
                isAuth : false,
            }
        } 

        case authActions.GET_AUTH_SUCCESS : {   
            return {
                ...state,
                loading : false,
                token : action.payload,
                error : false,
                isAuth : true
            }
        }

        case authActions.GET_AUTH_FAILURE : {
            return {
                ...state,
                loading : false,
                error : true,
                isAuth : false,
            }
        }

        default : return state
    }

}
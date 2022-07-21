import { authActions } from "./action"

const initState = {
    loading : false,
    token : '',
    error : false,
    isAuth : false,
    data : {}
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

        case authActions.REGISTER_REQUEST : {
            return {
                ...state,
                loading : true,
                error : false
            }
        }

        case authActions.REGISTER_SUCCESS : {
            return {
                ...state,
                loading : false,
                error : false,
                data : action.payload
            }
        }

        case authActions.REGISTER_FAILURE : {
            return {
                ...state , 
                loading : false,
                error : true
            }
        }

        default : return state
    }

}
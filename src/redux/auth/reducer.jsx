import { authActions } from "./action"

const initState = {
    loading: false,
    id: '',
    error: false,
    isAuth: false,
}

export const authRuducer = (state = initState, action) => {

    switch (action.type) {
        case authActions.GET_AUTH_REQUEST: {
            return {
                ...state,
                loading: true,
                error: false,
                isAuth: false,
            }
        }

        case authActions.GET_AUTH_SUCCESS: {
            return {
                ...state,
                loading: false,
                id: action.payload,
                error: false,
                isAuth: true
            }
        }

        case authActions.GET_AUTH_FAILURE: {
            return {
                ...state,
                loading: false,
                error: true,
                isAuth: false,
            }
        }


        // ...........................................................................................................


        case authActions.REGISTER_REQUEST: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case authActions.REGISTER_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                id: action.payload
            }
        }

        case authActions.REGISTER_FAILURE: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }

        default: return state
    }

}
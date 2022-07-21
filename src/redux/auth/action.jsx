import axios from "axios"

export const authActions = {
    GET_AUTH_REQUEST : "GET_AUTH_REQUEST",
    GET_AUTH_SUCCESS : "GET_AUTH_SUCCESS",
    GET_AUTH_FAILURE : "GET_AUTH_FAILURE",
    REGISTER_REQUEST : "REGISTER_REQUEST",
    REGISTER_SUCCESS : "REGISTER_SUCCESS",
    REGISTER_FAILURE : "REGISTER_FAILURE"
} 

export const getAuthRequest = () => ({
    type : authActions.GET_AUTH_REQUEST
})

export const getAuthSucess = (data) => ({
    type : authActions.GET_AUTH_SUCCESS,
    payload : data
})

export const getAuthFailuer = () => ({
    type : authActions.GET_AUTH_FAILURE
}) 

export const getAuth = (payload) => (dispatch) => {
    
    dispatch(getAuthRequest())

    // console.log(payload)
    axios({
            url : " http://localhost:8080/auth/login",
            method : "POST",
            data : payload
        })
        .then( (res) => {
            console.log(res)
            // dispatch(getAuthSucess(res.data.token))
        })
        .catch ( e => dispatch(getAuthFailuer()))
}

// .....................................................................................................


export const registerRequest = () => ({
    type : authActions.REGISTER_REQUEST
})

export const registerSuccess = (data) => ({
    type : authActions.GET_AUTH_SUCCESS,
    payload : data
})

export const registerFailure = () => ({
    type : authActions.GET_AUTH_FAILURE
}) 

export const register = (payload) => (dispatch) => {
    
    dispatch(getAuthRequest())

    // console.log(payload)
    axios({
            url : " http://localhost:8080/auth/signup",
            method : "POST",
            data : payload
        })
        .then( (res) => {
            console.log(res)
            dispatch(getAuthSucess(res.data.token))
        })
        .catch ( e => dispatch(getAuthFailuer()))
}
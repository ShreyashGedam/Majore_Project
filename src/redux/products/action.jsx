import axios from "axios"

export const actionTypesProduct = {
    FETCH_PRODUCT_DATA_REQUEST: "FETCH_PRODUCT_DATA_REQUEST",
    FETCH_PRODUCT_DATA_SUCCESS: "FETCH_PRODUCT_DATA_SUCCESS",
    FETCH_PRODUCT_DATA_FAILURE: "FETCH_PRODUCT_DATA_FAILURE",
    GET_SINGLE_PRODUCT_REQUEST: "GET_SINGLE_PRODUCT_REQUEST",
    GET_SINGLE_PRODUCT_SUCCESS: "GET_SINGLE_PRODUCT_SUCCESS",
    GET_SINGLE_PRODUCT_FAILURE: "GET_SINGLE_PRODUCT_FAILURE",
    ADD_SINGLE_PRODUCT_REQUEST: "ADD_SINGLE_PRODUCT_REQUEST",
    ADD_SINGLE_PRODUCT_SUCCESS: "ADD_SINGLE_PRODUCT_SUCCESS",
    ADD_SINGLE_PRODUCT_FAILURE: "ADD_SINGLE_PRODUCT_FAILURE",
    GET_CART_DATA_REQUEST: "GET_CART_DATA-REQUEST",
    GET_CART_DATA_SUCCESS: "GET_CART_DATA-SUCCESS",
    GET_CART_DATA_FAILURE: "GET_CART_DATA-FAILURE",
    REMOVE_PRODUCT_REQUEST: "REMOVE_PRODUCT_REQUEST",
    REMOVE_PRODUCT_SUCCESS: "REMOVE_PRODUCT_SUCCESS",
    REMOVE_PRODUCT_FAILURE: "REMOVE_PRODUCT_FAILURE"
}

export const productDataRequest = () => {
    return {
        type: actionTypesProduct.FETCH_PRODUCT_DATA_REQUEST,
    }
}

export const productDataSucess = (payload) => {
    return {
        type: actionTypesProduct.FETCH_PRODUCT_DATA_SUCCESS,
        payload
    }
}
 
export const productDataFailure = (payload) => {
    return {
        type: actionTypesProduct.FETCH_PRODUCT_DATA_FAILURE,
        payload
    }
}

export const productData = (payload) => (dispatch) => {

    const dataRequest = productDataRequest()
    dispatch(dataRequest)
    // console.log(payload)
    axios({
        // url: "http://localhost:8080/products",
        url: "https://backend-production-1c28.up.railway.app/products",
        method: "GET",
        params: {
            name:payload
        }
    })
        .then((res) => {
            const dataSuccess = productDataSucess(res.data)
            dispatch(dataSuccess)
        })
        .catch((err) => {
            const dataFAilure = productDataFailure()
            dispatch(dataFAilure)
        })
}

// ............................................................

export const getSingleProductRequest = (payload) => {
    return {
        type: actionTypesProduct.GET_SINGLE_PRODUCT_REQUEST,
        payload
    }
}

export const getSingleProductSuccess = (payload) => {
    return {
        type: actionTypesProduct.GET_SINGLE_PRODUCT_SUCCESS,
        payload
    }
}

export const getSingleProductFailure = (payload) => {
    return {
        type: actionTypesProduct.GET_SINGLE_PRODUCT_FAILURE,
        payload
    }
}

export const getSIngleProduct = (userId,id) => (dispatch) => {
    dispatch(getSingleProductRequest())

    axios({
        // url: `http://localhost:8080/products/${userId}/${id}`,
        url: `https://backend-production-1c28.up.railway.app/${userId}/${id}`,
        method: "GET"
    })
        .then(r => dispatch(getSingleProductSuccess(r.data)))
        .catch(e => dispatch(getSingleProductFailure(e.data)))
}

// ...............................................................?

export const addSingleProductRequest = (payload) => {
    return {
        type: actionTypesProduct.ADD_SINGLE_PRODUCT_REQUEST,
        payload
    }
}

export const addSingleProductSuccess = (payload) => {
    return {
        type: actionTypesProduct.ADD_SINGLE_PRODUCT_SUCCESS,
        payload
    }
}

export const addSingleProductFailure = (payload) => {
    return {
        type: actionTypesProduct.ADD_SINGLE_PRODUCT_FAILURE,
        payload
    }
} 

export const addSingleProduct = (product,userId) => dispatch => {
    dispatch(addSingleProductRequest())

    axios({
        // url: `http://localhost:8080/cartAdd/${userId}`,
        url: `https://backend-production-1c28.up.railway.app/${userId}`,
        method: 'POST',
        data: product
    })
        .then(r =>
            // console.log(r)
            dispatch(addSingleProductSuccess(r.data))
        )
        .catch(e => dispatch(addSingleProductFailure(e.data)))
}


// ....................................................................................

export const cartDataRequest = () => {
    return {
        type: actionTypesProduct.GET_CART_DATA_REQUEST,

    }
}

export const cartDataSucess = (payload) => {
    return {
        type: actionTypesProduct.GET_CART_DATA_SUCCESS,
        payload
    }
}

export const cartDataFailure = (payload) => {
    return {
        type: actionTypesProduct.GET_CART_DATA_FAILURE,
        payload
    }
}

export const cartData = (userId) => (dispatch) => {

    const dataRequest = cartDataRequest()
    dispatch(dataRequest)

    axios({
        // url: `http://localhost:8080/cartAdd/${userId}`,
        url: `https://backend-production-1c28.up.railway.app/${userId}`,
        method: "GET",

    })
        .then((res) => {
            const dataSuccess = cartDataSucess(res.data)
            // console.log(res.data)
            dispatch(dataSuccess)
        })
        .catch((err) => {
            const dataFAilure = cartDataFailure()
            dispatch(dataFAilure)
        })
}

// .........................................................

const deleteProductCartRequest = (payload) => {
    return {
        type: actionTypesProduct.REMOVE_PRODUCT_REQUEST,
        payload
    }
}

const deleteProductCartSuccess = (payload) => {
    return {
        type: actionTypesProduct.REMOVE_PRODUCT_SUCCESS,
        payload
    }
}

const deleteProductCartFailure = (payload) => {
    return {
        type: actionTypesProduct.REMOVE_PRODUCT_FAILURE,
        payload
    }
}

export const deleteProductCart = (id,userId) => (dispatch) => {

    const dataRequest = deleteProductCartRequest()
    dispatch(dataRequest)

    axios({
        // url: `http://localhost:8080/cartAdd/${id}`,
        url: `https://backend-production-1c28.up.railway.app/${id}`,
        method: "DELETE"

    })
        .then(() => {
            dispatch(cartData(userId))
        })
        .then((res) => {
            const dataSuccess = deleteProductCartSuccess(res.data)
            // console.log(res.data)
            dispatch(dataSuccess)
        })
        .catch((err) => {
            const dataFAilure = cartDataFailure()
            dispatch(dataFAilure)
        })
}
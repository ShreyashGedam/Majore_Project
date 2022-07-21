import axios from "axios"


export const actionTypes = {
    FETCH_DATA_REQUEST : 'FETCH_DATA_REQUEST' ,
    FETCH_DATA_SUCCESS : 'FETCH_DATA_SUCCESS',
    FETCH_DATA_FAILURE : 'FETCH_DATA_FAILURE'
}

export const fetchDataRequest = () => {
    return {
        type : actionTypes.FETCH_DATA_REQUEST,
        
    }
}

export const fetchDataSucess = (payload) => {
    return {
        type : actionTypes.FETCH_DATA_SUCCESS,
        payload
    }
} 
 
export const fetchDataFailure = (payload) => {
    return {
        type : actionTypes.FETCH_DATA_FAILURE,
        payload
    }
}

export const fetchData = () => (dispatch,getState) => {
    
    const dataRequest = fetchDataRequest()
    dispatch(dataRequest)

    axios( {
        url : "http://localhost:8080/main-page-one",
        method : "GET"
    })
    .then ( (res) => {
        // console.log(res)
        const dataSuccess = fetchDataSucess(res.data)
        dispatch(dataSuccess)
    })
    .catch( (err) => {
        const dataFAilure  = fetchDataFailure()
        dispatch(dataFAilure)
    })
}


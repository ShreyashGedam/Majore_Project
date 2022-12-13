import axios from "axios"


export const actionTypesMain2 = {
    FETCH_DATA_REQUEST_MAIN2: 'FETCH_DATA_REQUEST_MAIN2',
    FETCH_DATA_SUCCESS_MAIN2: 'FETCH_DATA_SUCCESS_MAIN2',
    FETCH_DATA_FAILURE_MAIN2: 'FETCH_DATA_FAILURE_MAIN2'
}

export const fetchDataRequestMain2 = () => {
    return {
        type: actionTypesMain2.FETCH_DATA_REQUEST_MAIN2,

    }
}

export const fetchDataSucessMain2 = (payload) => {
    return {
        type: actionTypesMain2.FETCH_DATA_SUCCESS_MAIN2,
        payload
    }
}

export const fetchDataFailureMain2 = (payload) => {
    return {
        type: actionTypesMain2.FETCH_DATA_FAILURE_MAIN2,
        payload
    }
}

export const fetchDataMain2 = () => (dispatch, getState) => {

    const dataRequest = fetchDataRequestMain2()
    dispatch(dataRequest)

    axios({
        // url: "http://localhost:8080/main-page-two",
        url: "https://backend-production-1c28.up.railway.app/main-page-two",
        method: "GET"
    })
        .then((res) => {
            const dataSuccess = fetchDataSucessMain2(res.data)
            dispatch(dataSuccess)
        })
        .catch((err) => {
            const dataFAilure = fetchDataFailureMain2()
            dispatch(dataFAilure)
        })
}


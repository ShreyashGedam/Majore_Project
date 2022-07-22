import { actionTypes } from "./action"

const initState = {
    loading: false,
    data: [],
    error: false
}

export const reducer = (state = initState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_DATA_REQUEST:
            return {
                ...state,
                error: false,
                loading: true
            }

        case actionTypes.FETCH_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: false
            }

        case actionTypes.FETCH_DATA_FAILURE:
            return {
                ...state,
                error: true,
                loading: false
            }

        default:
            return state

    }


}
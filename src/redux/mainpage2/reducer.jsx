import { actionTypesMain2 } from "./action"

const initState = {
    loading: false,
    data: [],
    error: false
}

export const reducerMain2 = (state = initState, action) => {

    switch (action.type) {
        case actionTypesMain2.FETCH_DATA_REQUEST_MAIN2:
            return {
                ...state,
                error: false,
                loading: true
            }

        case actionTypesMain2.FETCH_DATA_SUCCESS_MAIN2:
            return {
                ...state,
                data: action.payload,
                error: false
            }

        case actionTypesMain2.FETCH_DATA_FAILURE_MAIN2:
            return {
                ...state,
                error: true,
                loading: false
            }

        default:
            return state

    }


}
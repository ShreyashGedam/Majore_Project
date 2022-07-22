import { combineReducers, createStore, applyMiddleware } from "redux";
import { reducer } from "./mainpage/reducer";
import thunk from "redux-thunk";
import { reducerMain2 } from "./mainpage2/reducer";
import { productsReducer } from "./products/reducer";
import { authRuducer } from "./auth/reducer";

const rootReducer = combineReducers({
    mainPageData: reducer,
    mainPageData2: reducerMain2,
    productData: productsReducer,
    authData: authRuducer
})

export const store = createStore(rootReducer,
    applyMiddleware(thunk))


// console.log("State :", store.getState())    
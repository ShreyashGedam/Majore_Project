import { actionTypesProduct } from "./action"


const initStateProducts = {
    loading : false,
    data : [],
    product : {},
    error : false,
    cart : []
} 
  
export const productsReducer = (state = initStateProducts , action) => {

    switch(action.type){
        case actionTypesProduct.FETCH_PRODUCT_DATA_REQUEST :
            return {
                ...state,
                error : false,
                loading : true
            }
         
        case actionTypesProduct.FETCH_PRODUCT_DATA_SUCCESS :
            return {
                ...state,
                data : action.payload,
                error : false
            }  
         
        case actionTypesProduct.FETCH_PRODUCT_DATA_FAILURE :
            return {
                ...state,
                error : true,
                loading : fasle                    
            }


            // ...................................................................?
         
            case actionTypesProduct.GET_SINGLE_PRODUCT_REQUEST : 
            return {
                ...state,
                error : false,
                loading : true
            }
    
            case actionTypesProduct.GET_SINGLE_PRODUCT_SUCCESS: 
            return {
                ...state,
                product : action.payload,
                error : false,
                loading : false
            }
    
            case actionTypesProduct.GET_SINGLE_PRODUCT_FAILURE : 
            return {
                ...state,
                error : true,
                loading : false
            }

            // ........................................................................?

            case actionTypesProduct.ADD_SINGLE_PRODUCT_REQUEST :
                return {
                    ...state,
                    error : false,
                    loading : true
                }
            
            case actionTypesProduct.ADD_SINGLE_PRODUCT_SUCCESS: 
                return {
                    ...state,
                    cart : [...state , action.payload],
                    error : "",
                    loading : false
                }
        
            case actionTypesProduct.ADD_SINGLE_PRODUCT_FAILURE : 
                return {
                    ...state,
                    error : false,
                    loading : false
                }
        
        // .......................................................................................        
           
        case actionTypesProduct.GET_CART_DATA_REQUEST :
            return {
                ...state,
                error : false,
                loading : true
            }
         
        case actionTypesProduct.GET_CART_DATA_SUCCESS :
            return {
                ...state,
                cart : action.payload,
                error : false
            }  
         
        case actionTypesProduct.GET_CART_DATA_FAILURE :
            return {
                ...state,
                error : true,
                loading : false                    
            }

        case actionTypesProduct.REMOVE_PRODUCT_REQUEST : 
            return {
                ...state,
                error : "",
                loading : true
            }
    
        case actionTypesProduct.REMOVE_PRODUCT_FAILURE: 
            return {
                ...state,
                error : false,
                loading : false
            }    
         
        default :
            return state
            
        }
    
}


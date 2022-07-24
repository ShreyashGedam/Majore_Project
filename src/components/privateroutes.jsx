import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const Private = ({ children }) => {

    const auth = useSelector(store => store.authData.isAuth)
 
    // console.log(auth)

    if (auth) {
        return children
    } 

    return <Navigate to={"/login"} ></Navigate>

}
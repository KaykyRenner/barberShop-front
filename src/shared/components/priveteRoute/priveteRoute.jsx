import { Navigate } from "react-router-dom"
import { useAuthContext } from "../../contexts/authContext"

const PrivateRoute = ({children })=>{
    const {isAuthenticated} = useAuthContext()
    if(isAuthenticated === false) {
        console.log(isAuthenticated)
        return (children)}
        

    return <Navigate to="/Login"/>
}

export default PrivateRoute
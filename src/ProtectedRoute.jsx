import { useState,useEffect } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";


const ProtectedRoute = ({children}) => {
    const [currentUser, setcurrentUser] = useState(undefined)

    useEffect(() => {
        const unsucscribe = onAuthStateChanged(auth, (user) => {
            setcurrentUser(user)
        })

        return () => unsucscribe()
    }, [])

    if (currentUser === undefined) {
        return (
            <div>
                <p className="justify-self-center">Loading....</p>
            </div>
        )
    } else if (currentUser === null) {
       return <Navigate to="/login" />
    }

    return children
}
 
export default ProtectedRoute;
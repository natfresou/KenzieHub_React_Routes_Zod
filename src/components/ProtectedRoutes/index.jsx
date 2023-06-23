import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext";
import { useContext } from "react";

export const ProtectRoutes = () => {
    const {user} = useContext(UserContext);
    console.log(user)
    return user ? <Outlet/> :  <Navigate to="/" />
}
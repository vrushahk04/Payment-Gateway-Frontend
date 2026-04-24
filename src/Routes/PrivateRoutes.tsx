import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../Store/Hooks";

const PrivateRoutes = () => {
    const { token } = useAppSelector((state) => state.auth);

    return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
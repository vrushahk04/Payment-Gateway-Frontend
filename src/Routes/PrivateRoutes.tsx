import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../Constants";
import { useAppSelector } from "../Store";

export const PrivateRoutes = () => {
  const { isAuthenticated } = useAppSelector((store) => store.auth);
  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.AUTH.LOGIN} replace />;
};

export default PrivateRoutes;

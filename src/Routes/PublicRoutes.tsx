import { Navigate, Outlet } from "react-router-dom";
import { ROUTES } from "../Constants";
import { useAppSelector } from "../Store";

const PublicRoutes = () => {
  const { isAuthenticated, role } = useAppSelector((store) => store.auth);

  if (!isAuthenticated) return <Outlet />;

  if (role === "admin") {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return <Navigate to={ROUTES.USER.HOME} replace />;
};

export default PublicRoutes;
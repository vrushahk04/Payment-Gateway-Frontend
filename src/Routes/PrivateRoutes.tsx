import { Navigate, Outlet } from "react-router-dom";

import { useAppSelector } from "../Store";

const PrivateRoutes = () => {
  const { isAuthenticated } = useAppSelector((s) => s.auth);

if (!isAuthenticated) return <Navigate to="/auth/login" replace />;

return <Outlet />;
};

export default PrivateRoutes;

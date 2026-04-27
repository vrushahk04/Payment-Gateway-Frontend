import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../Store";
import { ROUTES } from "../Constants";

const RoleGuard = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const { user } = useAppSelector((state) => state.auth);

  const role = user?.user?.role;

  if (!allowedRoles.includes(role)) {
    return <Navigate to={ROUTES.DASHBOARD} replace />;
  }

  return <Outlet />;
};

export default RoleGuard;
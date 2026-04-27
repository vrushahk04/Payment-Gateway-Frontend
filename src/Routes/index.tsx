/* eslint-disable react-refresh/only-export-components */
  // import { createBrowserRouter } from "react-router-dom";
  // import PrivateRoutes from "./PrivateRoutes";
  // import PublicRoutes from "./PublicRoutes";

  // import Login from "../Pages/Auth/Login";
  // import Dashboard from "../Pages/Dashboard";
  // import User from "../Pages/User";
  // import { ROUTES } from "../Constants";

  // export const Router = createBrowserRouter([
  //   {
  //     element: <PrivateRoutes />,
  //     children: [
  //       { path: ROUTES.DASHBOARD, element: <Dashboard /> },
  //       { path: ROUTES.USER.HOME, element: <User /> },
  //     ],
  //   },

  //   {
  //     element: <PublicRoutes />,
  //     children: [
  //       { path: ROUTES.AUTH.LOGIN, element: <Login /> },
  //     ],
  //   },
// ]);
import { createBrowserRouter, Navigate } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

import Login from "../Pages/Auth/Login";
import Dashboard from "../Pages/Dashboard";
import User from "../Pages/User";

import { ROUTES } from "../Constants";
import { useAppSelector } from "../Store";

const RootRedirect = () => {
  const { isAuthenticated, role } = useAppSelector((s) => s.auth);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.AUTH.LOGIN} replace />;
  }

  return (
    <Navigate
      to={role === "admin" ? ROUTES.DASHBOARD : ROUTES.USER.HOME}
      replace
    />
  );
};

export const Router = createBrowserRouter([

  {
    path: "/",
    element: <RootRedirect />,
  },
  {
    element: <PublicRoutes />,
    children: [
      { path: ROUTES.AUTH.LOGIN, element: <Login /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      { path: ROUTES.DASHBOARD, element: <Dashboard /> },
      { path: ROUTES.USER.HOME, element: <User /> },
    ],
  },
  {
    path: "*",
    element: <RootRedirect />,
  },
]);
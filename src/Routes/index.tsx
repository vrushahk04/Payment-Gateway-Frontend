  import { createBrowserRouter } from "react-router-dom";
  import PrivateRoutes from "./PrivateRoutes";
  import PublicRoutes from "./PublicRoutes";

  import Login from "../Pages/Auth/Login";
  import Dashboard from "../Pages/Dashboard";
  import User from "../Pages/User";
  import { ROUTES } from "../Constants";

  export const Router = createBrowserRouter([
    {
      element: <PrivateRoutes />,
      children: [
        { path: ROUTES.DASHBOARD, element: <Dashboard /> },
        { path: ROUTES.USER.HOME, element: <User /> },
      ],
    },

    {
      element: <PublicRoutes />,
      children: [
        { path: ROUTES.AUTH.LOGIN, element: <Login /> },
      ],
    },
  ]);

import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../Constants/Routes";

import { PageRoutes } from "./PageRoutes";
import PrivateRoutes from "./PrivateRoutes";
import Login from "../Pages/auth/Login";
import ForgetPassword from "../Pages/auth/ForgetPassword";
import Dashboard from "../Pages/Dashboard";

export const Router = createBrowserRouter([
    { path: ROUTES.AUTH.LOGIN, element: <Login /> },
    { path: ROUTES.AUTH.FORGOT_PASSWORD, element: <ForgetPassword /> },


    {
        element: <PrivateRoutes />,
        children: [
            {
                element: <Dashboard />,
                children: PageRoutes,
            },
        ],
    },
]);
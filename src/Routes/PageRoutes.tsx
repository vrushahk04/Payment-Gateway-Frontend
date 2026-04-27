import { ROUTES } from "../Constants/Routes";
import { PAGE_TITLE } from "../Constants/PageTitle";
import Dashboard from "../Pages/Dashboard";
import { Navigate } from "react-router-dom";
import Login from "../Pages/Auth/Login";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import OtpVerify from "../Pages/Auth/OtpVerify";
import UpdatePassword from "../Pages/Auth/UpdatePassword";



export const PageRoutes = [
  { path: ROUTES.HOME, element: <Navigate to={ROUTES.HOME} replace /> },

  { path: ROUTES.DASHBOARD, name: PAGE_TITLE.DASHBOARD, element: <Dashboard /> },

];

export const AuthRoutes = [
  { path: ROUTES.HOME, element: <Navigate to={ROUTES.AUTH.LOGIN} replace /> },
  { path: ROUTES.AUTH.LOGIN, element: <Login /> },
  { path: ROUTES.FORGOT_PASSWORD.BASE, element: <ForgotPassword /> },
  { path: ROUTES.AUTH.VERIFY_OTP, element: <OtpVerify /> },
  {
    path: ROUTES.AUTH.RESET_PASSWORD, element: <UpdatePassword
    />
  },
];



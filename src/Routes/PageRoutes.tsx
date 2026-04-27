import { ROUTES } from "../Constants/Routes";
import { PAGE_TITLE } from "../Constants/PageTitle";
import Dashboard from "../Pages/Dashboard";

export const AdminRoutes = [
  {
    path: ROUTES.DASHBOARD,
    name: PAGE_TITLE.DASHBOARD,
    element: <Dashboard />,
  },
];

export const UserRoutes = [
  {
    path: ROUTES.DASHBOARD,
    name: PAGE_TITLE.DASHBOARD,
    element: <Dashboard />,
  },
];
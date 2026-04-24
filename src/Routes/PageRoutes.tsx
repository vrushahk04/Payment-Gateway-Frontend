import { ROUTES } from "../Constants/Routes";
import { PAGE_TITLE } from "../Constants/PageTitle";
import Dashboard from "../Pages/Dashboard";



export const PageRoutes = [
    { path: ROUTES.DASHBOARD, name: PAGE_TITLE.DASHBOARD, element: <Dashboard /> },
];


import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Verify from "../pages/auth/Verify";
import Dashboard from "../pages/dashboard";
const publicRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/verify/:token",
    element: <Verify />,
  },
];

const privateRoutes = [
  {
    path: "/",
    element: <Dashboard />,
  },
];

export { publicRoutes, privateRoutes };

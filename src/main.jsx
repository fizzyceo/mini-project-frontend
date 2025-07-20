import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/index.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import Verify from "./pages/auth/Verify.jsx";
import { Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./layout/allRoutes.jsx";
import ProtectedRoute from "./layout/ProtectedRoute.jsx";

// const Routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <Dashboard />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/verify/:token",
//     element: <Verify />,
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route>
            {publicRoutes.map((route) => {
              return <Route path={route.path} element={route.element} />;
            })}
          </Route>
          <Route>
            {privateRoutes.map((route) => {
              return (
                <Route
                  path={route.path}
                  element={<ProtectedRoute>{route.element}</ProtectedRoute>}
                />
              );
            })}
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
    {/* <RouterProvider router={Routes}></RouterProvider> */}
  </StrictMode>
);

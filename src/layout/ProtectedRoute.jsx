import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
/**
 * <ProtecteRoute >
 * <Dashboard />
 * </ProtectedRoute> is a component that checks if the user is authenticated.
 */
const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    async function checkAuthentication() {
      const token = localStorage.getItem("token");
      console.log(token);

      if (!token) {
        window.location.href = "/login";
      } else {
        try {
          console.log("Token found, verifying...");

          // You can add further validation of the token here if needed
          const reponse = await axios.post(
            "http://localhost:5000/auth/verify",
            {
              token: token,
            }
          );

          console.log("Response from server:", reponse);

          if (reponse.status !== 200) {
            window.location.href = "/login";
          } else {
            setIsAuth(true);
            console.log("Token is valid.");
          }
        } catch (error) {
          console.error("Error verifying token:", error);
          window.location.href = "/login";
        }
      }
    }

    checkAuthentication();
    setLoading(false);
  }, []);
  if (loading) {
    return <div>Checking Auth...</div>;
  }
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }
  return <div>{children}</div>;
};

export default ProtectedRoute;

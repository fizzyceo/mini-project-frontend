import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

/**
 * <ProtectedRoute>
 *   <Dashboard />
 * </ProtectedRoute> is a component that checks if the user is authenticated.
 */
const ProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuthentication() {
      try {
        const token = localStorage.getItem("token");
        console.log("Token:", token);

        if (!token) {
          console.log("No token found");
          setIsAuth(false);
          setLoading(false);
          return;
        }

        console.log("Token found, verifying...");

        const response = await axios.post("http://localhost:5000/auth/verify", {
          token: token,
        });

        console.log("Response from server:", response);

        if (response.status === 200) {
          setIsAuth(true);
          console.log("Token is valid.");
        } else {
          setIsAuth(false);
          console.log("Token is invalid.");
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        setIsAuth(false);
      } finally {
        // Always set loading to false when done
        setLoading(false);
      }
    }

    checkAuthentication();
  }, []);

  // Show loading state while checking authentication
  if (loading) {
    return <div>Checking Auth...</div>;
  }

  // Redirect to login if not authenticated
  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  // Render children if authenticated
  return <>{children}</>;
};

export default ProtectedRoute;

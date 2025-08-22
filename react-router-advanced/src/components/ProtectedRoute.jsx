import React from "react";
import { Navigate } from "react-router-dom";

// Dummy hook to simulate authentication
function useAuth() {
  // Change this to true/false to simulate user logged in/out
  const isAuthenticated = false;
  return { isAuthenticated };
}

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />; // Redirect unauthenticated users
  }

  return children;
}

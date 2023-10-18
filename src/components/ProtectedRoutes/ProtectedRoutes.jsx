import React, { useEffect } from "react";
import { useAuth } from "../../contexts/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) navigate("/login");
  }, [isAuthenticated]);
  return isAuthenticated ? children : null;
};

export default ProtectedRoutes;

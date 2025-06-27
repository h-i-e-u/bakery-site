import { Navigate } from "react-router-dom";

//  auth check
const isAdmin = () => {
  // Check for JWT token in localStorage
  const token = localStorage.getItem("access");
  return !!token;
};

const ProtectedRoute = ({ children }) => {
  if (!isAdmin()) {
    return <Navigate to="/admin" replace />;
  }
  return children;
};

export default ProtectedRoute;

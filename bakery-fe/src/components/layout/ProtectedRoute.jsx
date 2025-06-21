import { Navigate } from "react-router-dom";

// Dummy auth check
const isAdmin = () => {
  // For demo: check localStorage or context for admin login
  return true;
  //   localStorage.getItem("isAdmin") === "true"
};

const ProtectedRoute = ({ children }) => {
  if (!isAdmin()) {
    return <Navigate to="/admin" replace />;
  }
  return children;
};

export default ProtectedRoute;

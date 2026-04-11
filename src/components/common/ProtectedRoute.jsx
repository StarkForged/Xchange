import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

// ProtectedRoute component that redirects to login if user is not authenticated
export function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
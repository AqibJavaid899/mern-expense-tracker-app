import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoutes = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  return auth.isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default ProtectedRoutes;

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const GuestRoutes = ({ children }) => {
  const auth = useSelector((state) => state.auth);

  return !auth.isAuthenticated ? children : <Navigate to="/" replace={true} />;
};

export default GuestRoutes;

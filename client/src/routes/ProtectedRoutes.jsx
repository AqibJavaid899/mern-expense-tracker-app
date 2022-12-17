import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoutes = ({ children }) => {
  const token = Cookies.get("token");

  return (
    <div>{token ? children : <Navigate to="/login" replace={true} />}</div>
  );
};

export default ProtectedRoutes;

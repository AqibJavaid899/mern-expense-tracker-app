import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const GuestRoutes = ({ children }) => {
  const token = Cookies.get("token");

  return <div>{!token ? children : <Navigate to="/" replace={true} />}</div>;
};

export default GuestRoutes;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./scenes/global/Layout";
import Home from "./scenes/home";
import Login from "./scenes/login";
import Register from "./scenes/register";
import { GuestRoutes, ProtectedRoutes } from "./routes";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/login"
            element={
              <GuestRoutes>
                <Login />
              </GuestRoutes>
            }
          />
          <Route
            path="/register"
            element={
              <GuestRoutes>
                <Register />
              </GuestRoutes>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AllRoutes;

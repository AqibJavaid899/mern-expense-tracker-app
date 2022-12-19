import { Box, AppBar, Button, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";

import { logout } from "../state/slices/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogout = () => {
    Cookies.remove("token");
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center">
            <Button
              color="inherit"
              sx={{ fontSize: "14px" }}
              startIcon={<AccountBalanceIcon sx={{ marginRight: "8px" }} />}
              onClick={() => navigate("/")}
            >
              Expense Manager
            </Button>
          </Box>
          <Box display="flex" gap="16px">
            {auth.isAuthenticated ? (
              <Box display="flex" alignItems="center" gap="20px">
                <Button onClick={() => handleLogout()} color="inherit">
                  Logout
                </Button>
                <Button color="inherit">{`${auth.user.firstName} ${auth.user.lastName}`}</Button>
              </Box>
            ) : (
              <Box>
                <Button onClick={() => navigate("/login")} color="inherit">
                  Login
                </Button>
                <Button onClick={() => navigate("/register")} color="inherit">
                  Register
                </Button>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

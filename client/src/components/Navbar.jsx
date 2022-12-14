import { Box, AppBar, Button, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

const Navbar = () => {
  const navigate = useNavigate();
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
          <Button onClick={() => navigate("/login")} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

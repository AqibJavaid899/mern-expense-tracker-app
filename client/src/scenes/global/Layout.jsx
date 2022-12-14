import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router";

import Navbar from "../../components/Navbar";

const Layout = () => {
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>

      <Outlet />
    </Box>
  );
};

export default Layout;

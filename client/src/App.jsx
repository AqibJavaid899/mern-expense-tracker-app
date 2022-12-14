import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Layout from "./scenes/global/Layout";
import Home from "./scenes/home";
import Login from "./scenes/login";

function App() {
  return (
    <Box className="app">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </Box>
  );
}

export default App;

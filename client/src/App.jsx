import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

import Router from "./Router";
import { getUser, logout } from "./state/slices/authSlice";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const token = Cookies.get("token");
  const dispatch = useDispatch();

  const fetchUser = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}user/get`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.ok) {
      const data = await response.json();
      dispatch(getUser(data));
    } else {
      dispatch(logout());
      Cookies.remove("token");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <Box className="app">
      <Router />
    </Box>
  );
}

export default App;

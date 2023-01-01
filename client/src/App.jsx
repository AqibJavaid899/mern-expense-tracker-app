import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { InfinitySpin } from "react-loader-spinner";

import Router from "./Router";
import { fetchSignedInUser } from "./utils/helperFunctions";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  const token = Cookies.get("token");
  const dispatch = useDispatch();

  const fetchUser = async () => {
    setIsLoading(true);
    const response = await fetchSignedInUser(token, dispatch);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return isLoading ? (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <InfinitySpin width="200" color="#000" />
    </Box>
  ) : (
    <Box>
      <Router />
    </Box>
  );
}

export default App;

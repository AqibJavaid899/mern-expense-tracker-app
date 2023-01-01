import axios from "axios";
import dayjs from "dayjs";
import Cookies from "js-cookie";

import { setUser } from "../state/slices/authSlice";

export const dateFormat = (date) => {
  return dayjs(date).format("MMM DD, YYYY");
};

export const fetchTransaction = async (setTransactions) => {
  const token = Cookies.get("token");
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}transaction/get`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  if (response.statusText === "OK") {
    setTransactions(response.data);
  }
};

export const fetchSignedInUser = async (token, dispatch) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}user/get`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  if (response.statusText === "OK") {
    dispatch(setUser(response.data));
  }
  return response;
};

export const convertCategoryIdToValue = (id, categories) => {
  return categories.find((category) => category._id === id) ?? "";
};

import axios from "axios";
import dayjs from "dayjs";
import Cookies from "js-cookie";

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

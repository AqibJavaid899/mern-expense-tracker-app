import axios from "axios";
import dayjs from "dayjs";

export const dateFormat = (date) => {
  return dayjs(date).format("MMM DD, YYYY");
};

export const fetchTransaction = async (setTransactions) => {
  const response = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}transaction/get`,
  );
  if (response.statusText === "OK") {
    setTransactions(response.data);
  }
};

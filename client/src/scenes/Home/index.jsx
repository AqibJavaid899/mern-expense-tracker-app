import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import Cookies from "js-cookie";

import AddTransaction from "./useCases/AddTransaction";
import TransactionsList from "./useCases/TransactionsList";
import { fetchTransaction } from "../../utils/helperFunctions";

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [updateTransactionForm, setUpdateTransactionForm] = useState({});

  const token = Cookies.get("token");

  useEffect(() => {
    handleFetchTransactions();
  }, []);

  const handleFetchTransactions = async () => {
    await fetchTransaction(setTransactions);
  };

  const createTransaction = async (data) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}transaction/create`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    window.alert(response.data.message);
    handleFetchTransactions();
  };

  const updateTransaction = async (data) => {
    const response = await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}transaction/update/${data._id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    window.alert(response.data.message);
    handleFetchTransactions();
    setUpdateTransactionForm({});
  };

  return (
    <Box>
      <AddTransaction
        createTransaction={createTransaction}
        updateTransaction={updateTransaction}
        updateTransactionForm={updateTransactionForm}
      />
      <TransactionsList
        transactions={transactions}
        handleFetchTransactions={handleFetchTransactions}
        setUpdateTransactionForm={setUpdateTransactionForm}
      />
    </Box>
  );
};

export default Home;

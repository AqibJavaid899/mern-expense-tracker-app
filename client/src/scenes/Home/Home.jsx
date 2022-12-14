import axios from "axios";
import { useState, useEffect } from "react";
import { fetchTransaction } from "../../utils/helperFunctions";

import AddTransaction from "./useCases/AddTransaction";
import TransactionsList from "./useCases/TransactionsList";

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [updateTransactionForm, setUpdateTransactionForm] = useState({});

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
    );
    window.alert(response.data.message);
    handleFetchTransactions();
  };

  const updateTransaction = async (data) => {
    const response = await axios.patch(
      `${process.env.REACT_APP_BACKEND_URL}transaction/update/${data._id}`,
      data,
    );
    window.alert(response.data.message);
    handleFetchTransactions();
    setUpdateTransactionForm({});
  };

  return (
    <div>
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
    </div>
  );
};

export default Home;
